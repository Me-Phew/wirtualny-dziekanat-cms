import { Field } from 'payload/types';

import { getSingleDayScheduleSchema } from '../generators/getSingleDayScheduleSchema';

export const fullTimeSchedule: Field[] = [
  getSingleDayScheduleSchema('monday'),
  getSingleDayScheduleSchema('tuesday'),
  getSingleDayScheduleSchema('wednesday'),
  getSingleDayScheduleSchema('thursday'),
  getSingleDayScheduleSchema('friday'),
];
