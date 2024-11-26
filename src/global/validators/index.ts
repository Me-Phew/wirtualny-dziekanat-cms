import { TextFieldSingleValidation } from 'payload';
import { text } from 'payload/shared';

export const validatePhoneNumber: TextFieldSingleValidation = (value, args) => {
  if (!value) {
    return text(value, args);
  }

  if (!/^\d{9}$/.test(value)) {
    return 'Numer telefonu musi składać się z 9 cyfr';
  }

  return true;
};
