import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';
import adminsAndUser from '@/access/adminsAndUser';
import { anyone } from '@/access/anyone';
import { checkRole } from '@/access/checkRole';
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: 'Użytkownicy',
    singular: 'Użytkownik',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  auth: {
    verify: true,
  },
  fields: [
    {
      name: 'name',
      label: 'Imię',
      type: 'text',
    },
    {
      name: 'roles',
      label: 'Role',
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'user',
          value: 'user',
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
  ],
  timestamps: true,
};
