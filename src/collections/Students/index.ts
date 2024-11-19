import { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { adminsAndUserField } from '../../access/adminsAndUserField';
import { parsePesel } from '../../utils/peselParser';

export const Students: CollectionConfig = {
  slug: 'students',
  labels: {
    plural: 'Studenci',
    singular: 'Student',
  },
  admin: {
    useAsTitle: 'indexNumber',
    defaultColumns: ['indexNumber', 'name', 'familyName', 'coursesOfStudy'],
  },
  access: {
    read: admins,
    create: admins,
    update: admins,
    delete: admins,
  },
  auth: true,
  fields: [
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
      name: 'pesel',
      label: 'PESEL',
      type: 'text',
      required: true,
      unique: true,
      validate: (value) => {
        const reg = /^[0-9]{11}$/;

        if (reg.test(value)) {
          return true;
        }

        return 'PESEL musi składać się z 11 cyfr';
      },
      hooks: {
        beforeValidate: [
          ({ data, value }) => {
            const parsedPesel = parsePesel(value);

            data.dateOfBirth = parsedPesel.dateOfBirth.toDateString();

            data.indexNumber = `000${data.pesel[5]}${data.pesel[7]}`;
          },
        ],
      },
    },
    {
      name: 'coursesOfStudy',
      label: 'Kierunki studiów',
      type: 'relationship',
      relationTo: 'coursesOfStudy',
      hasMany: true,
      required: true,
    },
    {
      name: 'dateOfBirth',
      label: 'Data urodzenia',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'profilePicture',
      label: 'Zdjęcie profilowe',
      type: 'upload',
      relationTo: 'studentProfilePictures',
      access: {
        read: adminsAndUserField,
      },
    },
    {
      name: 'indexNumber',
      label: 'Numer indeksu',
      type: 'text',
      unique: true,
      access: {
        read: adminsAndUserField,
      },
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
      access: {
        read: adminsAndUserField,
      },
    },
  ],
  timestamps: true,
};
