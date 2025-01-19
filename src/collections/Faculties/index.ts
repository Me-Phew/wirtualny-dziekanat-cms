import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';

export const Faculties: CollectionConfig = {
  slug: 'faculties',
  labels: {
    plural: {
      pl: 'Wydziały',
      en: 'Faculties',
    },
    singular: {
      pl: 'Wydział',
      en: 'Faculty',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'address'],
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
      name: 'university',
      label: {
        pl: 'Uczelnia',
        en: 'University',
      },
      type: 'relationship',
      relationTo: 'universities',
      hasMany: false,
    },
    {
      name: 'classrooms',
      label: {
        pl: 'Sale',
        en: 'Classrooms',
      },
      type: 'relationship',
      relationTo: 'classrooms',
      hasMany: true,
    },
    {
      name: 'coursesOfStudy',
      label: {
        pl: 'Kierunki studiów',
        en: 'Courses of study',
      },
      type: 'relationship',
      relationTo: 'coursesOfStudy',
      hasMany: true,
    },
    {
      name: 'address',
      label: {
        pl: 'Adres',
        en: 'Address',
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
