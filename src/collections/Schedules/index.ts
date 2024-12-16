import { CollectionConfig } from 'payload';

import { admins } from '../../access/admins';
import { fullTimeSchedule } from './fields/fullTimeSchedule';
import { partTimeSchedule } from './fields/partTimeSchedule';

export const Schedules: CollectionConfig = {
  slug: 'schedules',
  labels: {
    plural: {
      pl: 'Harmongramy',
      en: 'Schedules',
    },
    singular: {
      pl: 'Harmongram',
      en: 'Schedule',
    },
  },
  admin: {
    useAsTitle: 'courseOfStudy',
    defaultColumns: ['ID', 'courseOfStudy'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'courseOfStudy',
      label: {
        pl: 'Tok studiów',
        en: 'Course of study',
      },
      type: 'relationship',
      relationTo: 'coursesOfStudy',
      hasMany: false,
    },
    {
      type: 'tabs',
      required: true,
      tabs: [
        {
          label: {
            pl: 'Tydzień A',
            en: 'Week A',
          },
          fields: [
            {
              name: 'weekAfullTimeSchedule',
              type: 'group',
              label: {
                pl: 'Studia dzienne',
                en: 'Full-time studies',
              },
              fields: fullTimeSchedule,
            },
            {
              name: 'weekAPartTimeSchedule',
              type: 'group',
              label: {
                pl: 'Studia zaoczne',
                en: 'Part-time studies',
              },
              fields: partTimeSchedule,
            },
          ],
        },
        {
          label: {
            pl: 'Tydzień B',
            en: 'Week B',
          },
          fields: [
            {
              name: 'weekBfullTimeSchedule',
              type: 'group',
              label: {
                pl: 'Studia dzienne',
                en: 'Full-time studies',
              },
              fields: fullTimeSchedule,
            },
            {
              name: 'weekBPartTimeSchedule',
              type: 'group',
              label: {
                pl: 'Studia zaoczne',
                en: 'Part-time studies',
              },
              fields: partTimeSchedule,
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
};
