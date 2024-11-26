import { CollectionConfig } from 'payload';

import { admins } from '@/access/admins';
import { setEndDate } from './hooks/setEndDate';
import {
  validateCurrentSemester,
  validateNumberOfSemesters,
} from './validators';

export const CoursesOfStudy: CollectionConfig = {
  slug: 'coursesOfStudy',
  labels: {
    plural: {
      pl: 'Toki studiów',
      en: 'Courses of study',
    },
    singular: {
      pl: 'Tok studiów',
      en: 'Course of study',
    },
  },
  admin: {
    useAsTitle: 'fieldOfStudy',
    defaultColumns: ['fieldOfStudy', 'faculty', 'courseType'],
  },
  access: {
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'fieldOfStudy',
      label: {
        pl: 'Kierunek',
        en: 'Field of study',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'faculty',
      label: {
        pl: 'Wydział',
        en: 'Faculty',
      },
      type: 'relationship',
      relationTo: 'faculties',
      hasMany: false,
    },
    {
      name: 'schedule',
      label: {
        pl: 'Harmonogram',
        en: 'Schedule',
      },
      type: 'relationship',
      relationTo: 'schedules',
      required: true,
      hasMany: false,
    },
    {
      name: 'courseType',
      label: {
        pl: 'Rodzaj studiów',
        en: 'Course type',
      },
      type: 'select',
      options: [
        { label: 'Stacjonarne', value: 'fullTime' },
        { label: 'Niestacjonarne', value: 'partTime' },
      ],
      required: true,
    },
    {
      name: 'levelOfStudy',
      label: {
        pl: 'Stopień studiów',
        en: 'Level of study',
      },
      type: 'select',
      options: [
        { label: 'I stopnia', value: 'firstDegree' },
        { label: 'II stopnia', value: 'secondDegree' },
        { label: 'Jednolite magisterskie', value: 'uniformMaster' },
        { label: 'Podyplomowe', value: 'postgraduate' },
      ],
      required: true,
    },
    {
      name: 'obtainedTitle',
      label: {
        pl: 'Uzyskiwany tytuł zawodowy',
        en: 'Obtained title',
      },
      type: 'select',
      options: [
        { label: 'Inżynier', value: 'engineer' },
        { label: 'Magister', value: 'master' },
        { label: 'Doktor', value: 'doctor' },
      ],
      required: true,
    },
    {
      name: 'numberOfSemesters',
      label: {
        pl: 'Liczba semestrów',
        en: 'Number of semesters',
      },
      type: 'number',
      required: true,
      validate: validateNumberOfSemesters,
    },
    {
      name: 'currentSemester',
      label: {
        pl: 'Aktualny semestr',
        en: 'Current semester',
      },
      type: 'number',
      required: true,
      defaultValue: 1,
      validate: validateCurrentSemester,
    },
    {
      name: 'startDate',
      label: {
        pl: 'Data rozpoczęcia',
        en: 'Start date',
      },
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      label: {
        pl: 'Data zakończenia',
        en: 'End date',
      },
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [setEndDate],
      },
    },
  ],
  timestamps: true,
};
