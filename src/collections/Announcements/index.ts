import { slateEditor } from '@payloadcms/richtext-slate';
import { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { anyone } from '../../access/anyone';
import { sendAnnoucementPushNotification } from './hooks/sendAnnoucementPushNotification';

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  labels: {
    plural: 'Ogłoszenia',
    singular: 'Ogłoszenie',
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
    beforeValidate: [(args) => sendAnnoucementPushNotification(args)],
  },
  auth: {
    verify: true,
  },
  fields: [
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
      editor: slateEditor({
        admin: {
          elements: ['h4', 'link', 'ol', 'ul', 'blockquote'],
          leaves: ['bold', 'italic'],
        },
      }),
      required: true,
    },
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
