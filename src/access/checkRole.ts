import { User } from '@/payload-types';

export const checkRole = (
  allRoles: User['roles'] = [],
  user?: User | null,
): boolean => {
  if (user) {
    if (
      allRoles &&
      allRoles.some((role) => {
        return user?.roles?.some((individualRole) => {
          return individualRole === role;
        });
      })
    )
      return true;
  }

  return false;
};
