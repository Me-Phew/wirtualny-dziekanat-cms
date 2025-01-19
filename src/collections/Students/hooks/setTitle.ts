import { Student } from '@/payload-types';
import { APIError, FieldHook } from 'payload';

type StudentFieldHook = FieldHook<Student, string>;

export const setTitle: StudentFieldHook = async ({ data }) => {
  if (!data) {
    throw new APIError('Data cannot be undefined here');
  }

  return data.middleName
    ? `${data.firstName} ${data.middleName} ${data.familyName} (${data.indexNumber})`
    : `${data.firstName} ${data.familyName} (${data.indexNumber})`;
};
