import { TextFieldSingleValidation } from 'payload';
import { text } from 'payload/shared';

export const validatePesel: TextFieldSingleValidation = (value, args) => {
  if (!value) {
    return text(value, args);
  }

  const reg = /^[0-9]{11}$/;

  if (reg.test(value)) {
    return true;
  }

  return 'PESEL musi składać się z 11 cyfr';
};
