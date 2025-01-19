import { Announcement } from '@/payload-types';
import { getMessaging } from 'firebase-admin/messaging';
import { APIError, type CollectionAfterChangeHook } from 'payload';
import { stripHtml } from 'string-strip-html';

export const sendAnnoucementPushNotification: CollectionAfterChangeHook =
  async (args) => {
    const { collection, doc, operation, req } = args;

    if (operation !== 'create') {
      return;
    }

    const payload = req.payload;
    const { enableLogs } = payload.config.custom;

    const { slug: collectionSlug } = collection;

    if (enableLogs) {
      payload.logger.info(
        `A new '${collectionSlug}' document was created in Payload with ID: '${doc.id}', sending FCM notification...`,
      );
    }

    let students;

    if (doc.isBroadcast) {
      students = await payload.find({
        collection: 'students',
        select: {
          fcmTokens: true,
        },
      });
    } else {
      const recipients = doc.recipients as Announcement['recipients'];
      const recipientIds = recipients?.map((recipient) => recipient.recipient);

      if (!recipientIds?.length) {
        if (enableLogs) {
          payload.logger.info(
            `No recipients found in the '${collectionSlug}' document with ID: '${doc.id}'. Skipping FCM notification.`,
          );
        }

        return;
      }

      students = await payload.find({
        collection: 'students',
        where: {
          id: {
            in: recipientIds,
          },
        },
        select: {
          fcmTokens: true,
        },
      });
    }

    if (!students?.docs.length) {
      if (enableLogs) {
        payload.logger.info(
          `No students found in the 'students' collection. Skipping FCM notification for '${collectionSlug}' document with ID: '${doc.id}'.`,
        );
      }

      return;
    }

    const fcmTokens = students.docs
      .map((student) => student.fcmTokens?.map((token) => token.token))
      .flat()
      .filter((token) => token !== undefined);

    if (!fcmTokens || !fcmTokens.length) {
      if (enableLogs) {
        payload.logger.info(
          `No FCM tokens found in the 'students' collection. Skipping FCM notification for '${collectionSlug}' document with ID: '${doc.id}'.`,
        );
      }
      return;
    }

    console.log(doc.priority);

    try {
      getMessaging().sendEachForMulticast({
        tokens: fcmTokens,
        notification: {
          title: doc.subject,
          body: stripHtml(doc.content_html).result,
        },
        data: {
          type: 'announcement',
          id: doc.id.toString(),
        },
        android: {
          priority: doc.priority === 'high' ? 'high' : 'normal',
          notification: {
            clickAction: 'FLUTTER_NOTIFICATION_CLICK',
          },
        },
        apns: {
          headers: {
            'apns-priority': doc.priority === 'high' ? '10' : '5',
          },
        },
        fcmOptions: {
          analyticsLabel: 'announcement',
        },
      });

      if (enableLogs) {
        payload.logger.info(
          `Successfully sent FCM notification for '${collectionSlug}' document with ID: '${doc.id}''.`,
        );
      }
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : error;
      throw new APIError(
        `Failed to send FCM notification for '${collectionSlug}' document with ID: '${doc.id}': ${msg}'.`,
      );
    }
  };
