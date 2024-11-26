import { Field } from 'payload';

import { getSingleDayScheduleSchema } from '../generators/getSingleDayScheduleSchema';

export const partTimeSchedule: Field[] = [
  getSingleDayScheduleSchema('saturday'),
  getSingleDayScheduleSchema('sunday'),
];
