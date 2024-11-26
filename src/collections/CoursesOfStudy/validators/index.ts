import { CoursesOfStudy } from '@/payload-types';
import { APIError, NumberFieldSingleValidation } from 'payload';

export const validateNumberOfSemesters: NumberFieldSingleValidation = (
  value,
) => {
  if (!value || value < 1) {
    return 'Liczba semestrów nie może być mniejsza niż 1';
  }

  return true;
};

export const validateCurrentSemester: NumberFieldSingleValidation = (
  value,
  { data }: { data: Partial<CoursesOfStudy> },
) => {
  if (!data.numberOfSemesters) {
    throw new APIError('data.numberOfSemesters should not be undefined here');
  }

  if (value && (value < 1 || value > data.numberOfSemesters)) {
    return 'Aktualny semestr musi być większy od 0 ani mniejszy od liczby semestrów';
  }

  return true;
};
