import { randomInt } from 'crypto';
import { APIError, CollectionBeforeValidateHook } from 'payload';

export const setUsername: CollectionBeforeValidateHook = ({
  data,
  operation,
}) => {
  if (operation !== 'create') {
    return;
  }

  if (!data) {
    throw new APIError('Data cannot be undefined here');
  }

  if (!data.firstName || !data.familyName) {
    throw new APIError('First name and family name cannot be undefined here');
  }

  const firstInitial = data.firstName[0].toLowerCase();
  const secondInitial = data.familyName[0].toLowerCase();
  const randomLoginNumber = randomInt(1000, 9999);
  data.username = `${firstInitial}${secondInitial}${randomLoginNumber}`;
};
