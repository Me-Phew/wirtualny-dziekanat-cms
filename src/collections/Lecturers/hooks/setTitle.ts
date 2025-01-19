import { Lecturer } from '@/payload-types';
import { APIError, FieldHook } from 'payload';
import { getNameWithAcademicTitles } from '../getNameWithAcademicTitles';

type LecturerFieldHook = FieldHook<Lecturer, string>;

export const setTitle: LecturerFieldHook = async ({ data }) => {
  if (!data) {
    throw new APIError('Data cannot be undefined here');
  }

  return getNameWithAcademicTitles(
    { firstName: data.firstName!, lastName: data.familyName! },
    data.academicTitles ?? [],
    'pl',
  );
};
