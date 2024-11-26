import { APIError, type FieldHook } from 'payload';

import { Faculty, Schedule, Student } from '@/payload-types';
import { parsePesel } from '@/utils/peselParser';

export const setDateOfBirthAndIndexNumber: FieldHook<Student, string> = async ({
  data,
  value,
  req,
}) => {
  if (!value) {
    throw new APIError('PESEL cannot be undefined here');
  }

  if (!data) {
    throw new APIError('Data cannot be undefined here');
  }

  const parsedPesel = parsePesel(value);

  data.dateOfBirth = parsedPesel.dateOfBirth.toDateString();

  if (!data.coursesOfStudy) {
    throw new APIError('Courses of study cannot be undefined here');
  }

  const primaryCourseOfStudyId = data.coursesOfStudy[0] as number;

  const primaryCourseOfStudy = await req.payload.findByID({
    collection: 'coursesOfStudy',
    id: primaryCourseOfStudyId,
    req,
  });

  const faculty = primaryCourseOfStudy.faculty as Faculty;

  if (!faculty) {
    throw new APIError('Faculty cannot be undefined here');
  }

  const schedule = primaryCourseOfStudy.schedule as Schedule;

  if (!schedule) {
    throw new APIError('Schedule cannot be undefined here');
  }

  data.indexNumber = `${primaryCourseOfStudyId}${faculty.id}${schedule.id}${value[5]}${value[7]}`;

  return value;
};
