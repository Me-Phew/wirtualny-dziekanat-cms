import { getMessaging } from 'firebase-admin/messaging';
import type { CollectionAfterChangeHook } from 'payload';
import { APIError } from 'payload';
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

    try {
      getMessaging().sendEachForMulticast({
        tokens: [
          'du-PGrJqQX6EA1Kah0URB3:APA91bG-CuOeIoIChoom3RNJnFpmWEU7KeK1WiAKpAMUhHbWLovFpOQrEjG7gE2A1BlMFLb2qCWp7by1IPiNqcsjkcfSqKnrmnIokd9lseYh3bQyfy88vAY',
        ],
        notification: {
          title: doc.subject,
          body: stripHtml(doc.content_html).result,
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
