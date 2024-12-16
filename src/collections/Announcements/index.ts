import { lexicalHTML } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';
import { anyone } from '@/access/anyone';
import { sendAnnoucementPushNotification } from './hooks/sendAnnouncementPushNotification';

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  labels: {
    plural: {
      pl: 'Ogłoszenia',
      en: 'Announcements',
    },
    singular: {
      pl: 'Ogłoszenie',
      en: 'Announcement',
    },
  },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'content'],
  },
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  hooks: {
    afterChange: [sendAnnoucementPushNotification],
  },
  fields: [
    {
      name: 'sender',
      label: {
        pl: 'Nadawca',
        en: 'Sender',
      },
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'recipients',
      type: 'array',
      label: {
        pl: 'Odbiorcy',
        en: 'Recipients',
      },
      fields: [
        {
          name: 'recipient',
          type: 'relationship',
          relationTo: 'users',
        },
      ],
    },
    {
      name: 'selectRecipients',
      type: 'ui',
      admin: {
        components: {
          Field:
            '/components/select-announcement-recipients#SelectAnnouncementRecipientsRSC',
        },
      },
    },
    {
      name: 'subject',
      label: 'Temat',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Treść',
      type: 'richText',
      required: true,
    },
    lexicalHTML('content', { name: 'content_html' }),
    {
      name: 'priority',
      label: 'Priorytet',
      type: 'radio',
      options: [
        { label: 'Niski', value: 'low' },
        { label: 'Średni', value: 'medium' },
        { label: 'Wysoki', value: 'high' },
      ],
      defaultValue: 'low',
    },
  ],
  timestamps: true,
};
