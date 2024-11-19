/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    images: Image;
    videos: Video;
    universities: University;
    faculties: Faculty;
    classrooms: Classroom;
    coursesOfStudy: CoursesOfStudy;
    lecturers: Lecturer;
    studentProfilePictures: StudentProfilePicture;
    students: Student;
    schedules: Schedule;
    announcements: Announcement;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos".
 */
export interface Video {
  id: number;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "universities".
 */
export interface University {
  id: number;
  name: string;
  faculties: (number | Faculty)[];
  deanearyAddress: {
    country: string;
    zipCode: string;
    city: string;
    street: string;
    buildingNumber: string;
  };
  contact: {
    phoneNumbers: {
      phoneNumber: string;
      info?: string | null;
      id?: string | null;
    }[];
    email: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faculties".
 */
export interface Faculty {
  id: number;
  name: string;
  university?: (number | null) | University;
  classrooms: (number | Classroom)[];
  coursesOfStudy: (number | CoursesOfStudy)[];
  address: {
    country: string;
    zipCode: string;
    city: string;
    street: string;
    buildingNumber: string;
  };
  contact: {
    phoneNumbers: {
      phoneNumber: string;
      info?: string | null;
      id?: string | null;
    }[];
    email: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "classrooms".
 */
export interface Classroom {
  id: number;
  faculty?: (number | null) | Faculty;
  floorNumber: number;
  roomNumber: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coursesOfStudy".
 */
export interface CoursesOfStudy {
  id: number;
  fieldOfStudy: string;
  faculty?: (number | null) | Faculty;
  schedule: number | Schedule;
  courseType: 'fullTime' | 'partTime';
  levelOfStudy: 'firstDegree' | 'secondDegree' | 'uniformMaster' | 'postgraduate';
  obtainedTitle: 'engineer' | 'master' | 'doctor';
  numberOfSemesters: number;
  currentSemester: number;
  startDate: string;
  endDate?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedules".
 */
export interface Schedule {
  id: number;
  courseOfStudy?: (number | null) | CoursesOfStudy;
  weekAfullTimeSchedule?: {
    monday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    tuesday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    wednesday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    thursday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    friday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  weekAPartTimeSchedule?: {
    saturday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    sunday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  weekBfullTimeSchedule?: {
    monday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    tuesday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    wednesday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    thursday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    friday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  weekBPartTimeSchedule?: {
    saturday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
    sunday?:
      | {
          name: string;
          lecturer: number | Lecturer;
          form: 'lecture' | 'exercises' | 'lab';
          startTime: string;
          numberOfHours: number;
          classroom?: (number | null) | Classroom;
          isOnline: boolean;
          endTime?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lecturers".
 */
export interface Lecturer {
  id: number;
  academicTitles: ('BSc' | 'MSc' | 'PhD' | 'DSc' | 'prof')[];
  firstName: string;
  middleName?: string | null;
  familyName: string;
  title: string;
  profilePicture?: number | StudentProfilePicture | null;
  address: {
    street: string;
    city: string;
    zipCode: string;
    id?: string | null;
  }[];
  phoneNumber: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "studentProfilePictures".
 */
export interface StudentProfilePicture {
  id: number;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "students".
 */
export interface Student {
  id: number;
  firstName: string;
  middleName?: string | null;
  familyName: string;
  pesel: string;
  coursesOfStudy: (number | CoursesOfStudy)[];
  dateOfBirth?: string | null;
  profilePicture?: number | StudentProfilePicture | null;
  indexNumber?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "announcements".
 */
export interface Announcement {
  id: number;
  subject: string;
  content: {
    [k: string]: unknown;
  }[];
  priority?: ('low' | 'medium' | 'high') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'students';
        value: number | Student;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}