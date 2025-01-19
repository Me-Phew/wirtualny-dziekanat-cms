import type { FieldAccess } from 'payload';

import type { User } from '@/payload-types';
import { checkRole } from './checkRole';

export const admins: FieldAccess<User> = ({ req: { user } }) => {
  if (!user || !('roles' in user)) {
    return false;
  }

  return checkRole(['admin'], user);
};
