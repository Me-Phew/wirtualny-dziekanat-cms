import { CoursesOfStudy } from '@/payload-types';
import { NumberFieldSingleValidation } from 'payload';

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
    return 'Liczba semestrów jest wymagana';
  }

  if (value && (value < 1 || value > data.numberOfSemesters)) {
    return 'Aktualny semestr musi być większy od 0 ani mniejszy od liczby semestrów';
  }

  return true;
};
