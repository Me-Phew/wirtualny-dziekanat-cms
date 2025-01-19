import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';
import { generateFacultyCode } from '@/utils/facultyCodeGenerator';
import { validateFloorNumber } from './validators';

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
    },
    {
      name: 'floorNumber',
      label: {
        pl: 'Numer piętra',
        en: 'Floor number',
      },
      type: 'number',
      required: true,
      validate: validateFloorNumber,
    },
    {
      name: 'roomNumber',
      label: {
        pl: 'Numer sali',
        en: 'Room number',
      },
      type: 'number',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data }) => {
            if (!data) {
              return data;
            }

            const code = `${data.floorNumber}.${data.roomNumber}`;

            return `${generateFacultyCode(data.faculty?.name)} ${code}`;
          },
        ],
      },
    },
  ],
  timestamps: true,
};
