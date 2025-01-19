import { APIError, FieldHook } from 'payload';

import { CoursesOfStudy } from '@/payload-types';

export const setEndDate: FieldHook<CoursesOfStudy, string> = ({ data }) => {
  if (!data) {
    throw new APIError('Data cannot be undefined here', 500);
  }

  if (!data.startDate) {
    throw new APIError('Start date cannot be undefined here', 500);
  }

  if (!data.numberOfSemesters) {
    throw new APIError('Number of semesters cannot be undefined here', 500);
  }

  const startDate = new Date(data.startDate);
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + data.numberOfSemesters / 2);
  data.endDate = endDate.toISOString();

  return data.endDate;
};
