import { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  labels: {
    plural: {
      pl: 'Uczelnie',
      en: 'Universities',
    },
    singular: {
      pl: 'Uczelnia',
      en: 'University',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'content'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'name',
      label: 'Nazwa',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      label: 'Adres',
      type: 'array',
      fields: [
        {
          name: 'street',
          label: 'Ulica',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          label: 'Miasto',
          type: 'text',
          required: true,
        },
        {
          name: 'zipCode',
          label: 'Kod pocztowy',
          type: 'text',
          required: true,
        },
      ],
      required: true,
    },
  ],
  timestamps: true,
};
