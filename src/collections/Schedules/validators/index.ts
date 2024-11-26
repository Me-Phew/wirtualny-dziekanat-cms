import { NumberFieldSingleValidation } from 'payload';
import { number } from 'payload/shared';

export const validateNumberOfHours: NumberFieldSingleValidation = (
  value,
  args,
) => {
  if (!value) {
    return number(value, args);
  }

  if (value <= 0) {
    return 'Liczba godzin musi być większa od zera';
  }

  return true;
};
