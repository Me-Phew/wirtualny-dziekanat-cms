import { FieldAccess } from 'payload';

export const adminsAndUserField: FieldAccess = ({ req: { user }, doc }) => {
  if (!user) {
    return false;
  }

  if ('roles' in user && user.roles && user.roles.includes('admin')) {
    return true;
  }

  return user.id === doc.owner;
};
