import { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { generateFacultyCode } from '../../utils/facultyCodeGenerator';

export const Classrooms: CollectionConfig = {
  slug: 'classrooms',
  labels: {
    plural: {
      pl: 'Sale',
      en: 'Classrooms',
    },
    singular: {
      pl: 'Sala',
      en: 'Classroom',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['faculty', 'title'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'faculty',
      label: {
        pl: 'Wydział',
        en: 'Faculty',
      },
      type: 'relationship',
      relationTo: 'faculties',
      hasMany: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'floorNumber',
      label: {
        pl: 'Numer piętra',
        en: 'Floor number',
      },
      type: 'number',
      required: true,
      validate: (value) => {
        if (value < 0) {
          return 'Numer piętra nie może być ujemny';
        }

        return true;
      },
    },
    {
      name: 'roomNumber',
      label: {
        pl: 'Numer sali',
        en: 'Room number',
      },
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
            const code = `${data.floorNumber}.${data.roomNumber}`;

            return `${generateFacultyCode(data.faculty?.name)} ${code}`;
          },
        ],
      },
    },
  ],
  timestamps: true,
};
