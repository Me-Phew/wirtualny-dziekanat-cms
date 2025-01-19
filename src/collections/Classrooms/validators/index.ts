import { NumberFieldSingleValidation } from 'payload';

export const validateFloorNumber: NumberFieldSingleValidation = (value) => {
  if (!value || value < 0) {
    return 'Numer piętra nie może być ujemny';
  }

  return true;
};
