import { FieldAccess } from 'payload/types';

export const adminsAndUserField: FieldAccess = ({ req: { user }, doc }) => {
  if (user.roles.includes('admin')) {
    return true;
  }

  return user.id === doc.owner;
};
