import { Field } from 'payload/types';

import { getSingleDayScheduleSchema } from '../generators/getSingleDayScheduleSchema';

export const partTimeSchedule: Field[] = [
  getSingleDayScheduleSchema('saturday'),
  getSingleDayScheduleSchema('sunday'),
];
