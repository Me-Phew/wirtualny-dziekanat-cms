import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';
import { adminsAndUserField } from '@/access/adminsAndUserField';
import { setDateOfBirthAndIndexNumber } from './hooks/setDateOfBirthAndIndexNumber';
import { setUsername } from './hooks/setUsername';
import { validatePesel } from './validators';

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
  // access: {
  //   read: admins,
  //   create: admins,
  //   update: admins,
  //   delete: admins,
  // },
  auth: {
    maxLoginAttempts: 50,
    // loginWithUsername: {
    //   allowEmailLogin: false,
    //   requireUsername: true,
    // },
  },
  hooks: {
    beforeValidate: [setUsername],
  },
  fields: [
    {
      name: 'username',
      label: 'Nazwa użytkownika',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'usernameNotice',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '/components/notice-field#NoticeFieldRSC',
            serverProps: {
              type: 'info',
              text: 'Nazwa użytkownika jest generowana automatycznie i nie może być zmieniona',
            },
          },
        },
      },
    },
    {
      name: 'firstName',
      label: 'Imię',
      type: 'text',
      required: true,
      access: {
        update: adminsAndUserField,
      },
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
      validate: validatePesel,
      hooks: {
        beforeValidate: [setDateOfBirthAndIndexNumber],
      },
      access: {
        create: admins,
        read: admins,
        update: admins,
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
      name: 'dateOfBirthNotice',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '/components/notice-field#NoticeFieldRSC',
            serverProps: {
              type: 'info',
              text: 'Data urodzenia jest generowana automatycznie na podstawie numeru PESEL i nie może być zmieniona',
            },
          },
        },
      },
    },
    {
      name: 'profilePicture',
      label: 'Zdjęcie profilowe',
      type: 'upload',
      relationTo: 'studentProfilePictures',
      // access: {
      //   read: adminsAndUserField,
      // },
    },
    {
      name: 'indexNumber',
      label: 'Numer indeksu',
      type: 'text',
      unique: true,
      // access: {
      //   read: adminsAndUserField,
      // },
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'indexNumberNotice',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '/components/notice-field#NoticeFieldRSC',
            serverProps: {
              type: 'info',
              text: 'Numer indeksu jest generowany automatycznie na podstawie nr pesel i głównego toku studiów i nie może być zmieniony',
            },
          },
        },
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
