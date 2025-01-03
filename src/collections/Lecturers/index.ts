import { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { getNameWithAcademicTitles } from './getNameWithAcademicTitles';

export const Lecturers: CollectionConfig = {
  slug: 'lecturers',
  labels: {
    plural: {
      pl: 'Wykładowcy',
      en: 'Lecturers',
    },
    singular: {
      pl: 'Wykładowca',
      en: 'Lecturer',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'email'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'academicTitles',
      label: {
        pl: 'Tytuły naukowe',
        en: 'Academic titles',
      },
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Inżynier', value: 'BSc' },
        { label: 'Magister', value: 'MSc' },
        { label: 'Doktor', value: 'PhD' },
        { label: 'Doktor habilitowany', value: 'DSc' },
        { label: 'Profesor', value: 'prof' },
      ],
      required: true,
    },
    {
      name: 'firstName',
      label: 'Imię',
      type: 'text',
      required: true,
    },
    {
      name: 'middleName',
      label: 'Drugie imię',
      type: 'text',
    },
    {
      name: 'familyName',
      label: 'Nazwisko',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data }) => {
            return getNameWithAcademicTitles(
              { firstName: data.firstName, lastName: data.familyName },
              data.academicTitles,
              'pl',
            );
          },
        ],
      },
    },
    {
      name: 'profilePicture',
      label: 'Zdjęcie profilowe',
      type: 'upload',
      relationTo: 'studentProfilePictures',
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
    {
      name: 'phoneNumber',
      label: 'Numer telefonu',
      type: 'text',
      required: true,
      validate: (value: string) => {
        if (!/^\d{9}$/.test(value)) {
          return 'Numer telefonu musi składać się z 9 cyfr';
        }

        return true;
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
  timestamps: true,
};
