import { Field } from 'payload/types';

import { getWeekdayName } from '../../../utils/getWeekdayName';
import { APIError } from 'payload/errors';

export const getSingleDayScheduleSchema = (day: string): Field => {
  return {
    name: day,
    label: {
      pl: `Harmonogram na ${getWeekdayName(day, 'pl')}`,
      en: `Schedule for ${getWeekdayName(day, 'en')}`,
    },
    labels: {
      singular: {
        pl: 'Zajęcia',
        en: 'Subject',
      },
      plural: {
        pl: 'Zajęcia',
        en: 'Subjects',
      },
    },
    type: 'array',
    fields: [
      {
        name: 'name',
        label: {
          pl: 'Nazwa przedmiotu',
          en: 'Subject name',
        },
        type: 'text',
        required: true,
      },
      {
        name: 'lecturer',
        label: {
          pl: 'Prowadzący',
          en: 'Lecturer',
        },
        type: 'relationship',
        relationTo: 'lecturers',
        hasMany: false,
        required: true,
      },
      {
        name: 'form',
        label: {
          pl: 'Forma zajęć',
          en: 'Form of classes',
        },
        type: 'select',
        options: [
          { label: 'Wykład', value: 'lecture' },
          { label: 'Ćwiczenia', value: 'exercises' },
          { label: 'Laboratorium', value: 'lab' },
        ],
        required: true,
      },
      {
        name: 'startTime',
        label: {
          pl: 'Godzina rozpoczęcia',
          en: 'Start time',
        },
        type: 'date',
        required: true,
        // admin: {
        //   date: {
        //     pickerAppearance: 'timeOnly',
        //     displayFormat: 'HH:mm',
        //     timeFormat: 'HH:mm',
        //     timeIntervals: 5,
        //   },
        // },
      },
      {
        name: 'numberOfHours',
        label: {
          pl: 'Liczba godzin',
          en: 'Number of hours',
        },
        admin: {
          description: {
            pl: 'Liczba godzin 45 minutowych',
            en: 'Number of 45-minute hours',
          },
        },
        type: 'number',
        required: true,
        validate: (value) => {
          if (value <= 0) {
            return 'Liczba godzin musi być większa od zera';
          }

          return true;
        },
        hooks: {
          afterChange: [
            ({ data, value, siblingData, req }) => {
              const endTime = new Date(
                new Date(siblingData.startTime).getTime() +
                  value * 45 * 60 * 1000,
              ).toDateString();

              siblingData.endTime = endTime;

              console.log(data, siblingData);
            },
          ],
        },
      },
      {
        name: 'classroom',
        label: {
          pl: 'Sala',
          en: 'Classroom',
        },
        type: 'relationship',
        relationTo: 'classrooms',
        required: true,
        admin: {
          condition: (_data, siblingData) => !siblingData?.isOnline,
        },
      },
      {
        name: 'isOnline',
        label: {
          pl: 'Zajęcia online',
          en: 'Online classes',
        },
        type: 'checkbox',
        defaultValue: false,
        required: true,
      },
      {
        name: 'endTime',
        label: {
          pl: 'Godzina zakończenia',
          en: 'End time',
        },
        type: 'date',
        admin: {
          readOnly: true,
          date: {
            displayFormat: 'HH:mm',
            timeFormat: 'HH:mm',
            timeIntervals: 5,
          },
        },
      },
    ],
  };
};
