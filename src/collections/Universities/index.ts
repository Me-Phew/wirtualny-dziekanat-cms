import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';

export const Universities: CollectionConfig = {
  slug: 'universities',
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
    defaultColumns: ['name', 'deanearyAddress'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'name',
      label: {
        pl: 'Nazwa',
        en: 'Name',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'faculties',
      label: {
        pl: 'Wydziały',
        en: 'Faculties',
      },
      type: 'relationship',
      relationTo: 'faculties',
      hasMany: true,
    },
    {
      name: 'deanearyAddress',
      label: {
        pl: 'Adres dziekanatu',
        en: 'Deanery Address',
      },
      type: 'group',
      fields: [
        {
          name: 'country',
          label: {
            pl: 'Kraj',
            en: 'Country',
          },
          type: 'text',
          required: true,
          defaultValue: 'Polska',
        },
        {
          name: 'zipCode',
          label: {
            pl: 'Kod pocztowy',
            en: 'Zip code',
          },
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          label: {
            pl: 'Miasto',
            en: 'City',
          },
          type: 'text',
          required: true,
        },
        {
          name: 'street',
          label: {
            pl: 'Ulica',
            en: 'Street',
          },
          type: 'text',
          required: true,
        },
        {
          name: 'buildingNumber',
          label: {
            pl: 'Numer budynku',
            en: 'Building number',
          },
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'contact',
      label: {
        pl: 'Kontakt',
        en: 'Contact',
      },
      type: 'group',
      fields: [
        {
          name: 'phoneNumbers',
          label: {
            pl: 'Numery telefonów',
            en: 'Phone numbers',
          },
          labels: {
            plural: {
              pl: 'Numery telefonów',
              en: 'Phone numbers',
            },
            singular: {
              pl: 'Numer telefonu',
              en: 'Phone number',
            },
          },
          type: 'array',
          required: true,
          fields: [
            {
              name: 'phoneNumber',
              label: {
                pl: 'Numer telefonu',
                en: 'Phone number',
              },

              type: 'text',
              required: true,
            },
            {
              name: 'info',
              label: {
                pl: 'Informacja',
                en: 'Info',
              },
              type: 'text',
            },
          ],
        },
        {
          name: 'email',
          label: {
            pl: 'Adres email',
            en: 'Email address',
          },
          type: 'email',
          required: true,
        },
      ],
    },
  ],
  timestamps: true,
};
