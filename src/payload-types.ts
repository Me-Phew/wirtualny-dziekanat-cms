/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    students: StudentAuthOperations;
  };
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
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    images: ImagesSelect<false> | ImagesSelect<true>;
    videos: VideosSelect<false> | VideosSelect<true>;
    universities: UniversitiesSelect<false> | UniversitiesSelect<true>;
    faculties: FacultiesSelect<false> | FacultiesSelect<true>;
    classrooms: ClassroomsSelect<false> | ClassroomsSelect<true>;
    coursesOfStudy: CoursesOfStudySelect<false> | CoursesOfStudySelect<true>;
    lecturers: LecturersSelect<false> | LecturersSelect<true>;
    studentProfilePictures: StudentProfilePicturesSelect<false> | StudentProfilePicturesSelect<true>;
    students: StudentsSelect<false> | StudentsSelect<true>;
    schedules: SchedulesSelect<false> | SchedulesSelect<true>;
    announcements: AnnouncementsSelect<false> | AnnouncementsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: 'pl' | 'en';
  user:
    | (User & {
        collection: 'users';
      })
    | (Student & {
        collection: 'students';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface StudentAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
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
  password?: string | null;
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
  thumbnailURL?: string | null;
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
  thumbnailURL?: string | null;
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
  faculties?: (number | Faculty)[] | null;
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
  classrooms?: (number | Classroom)[] | null;
  coursesOfStudy?: (number | CoursesOfStudy)[] | null;
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
  roomNumber: number;
  title?: string | null;
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
          form:
            | 'lecture'
            | 'exercises'
            | 'lab'
            | 'project'
            | 'language'
            | 'practice'
            | 'seminar'
            | 'consultation'
            | 'exam'
            | 'other';
          startTime: string;
          /**
           * Number of 45-minute hours
           */
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
  title?: string | null;
  profilePicture?: (number | null) | StudentProfilePicture;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
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
  thumbnailURL?: string | null;
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
  username?: string | null;
  firstName: string;
  middleName?: string | null;
  familyName: string;
  pesel: string;
  coursesOfStudy: (number | CoursesOfStudy)[];
  dateOfBirth?: string | null;
  profilePicture?: (number | null) | StudentProfilePicture;
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
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "announcements".
 */
export interface Announcement {
  id: number;
  sender?: (number | null) | User;
  recipients?:
    | {
        recipient?: (number | null) | User;
        id?: string | null;
      }[]
    | null;
  subject: string;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  priority?: ('low' | 'medium' | 'high') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'images';
        value: number | Image;
      } | null)
    | ({
        relationTo: 'videos';
        value: number | Video;
      } | null)
    | ({
        relationTo: 'universities';
        value: number | University;
      } | null)
    | ({
        relationTo: 'faculties';
        value: number | Faculty;
      } | null)
    | ({
        relationTo: 'classrooms';
        value: number | Classroom;
      } | null)
    | ({
        relationTo: 'coursesOfStudy';
        value: number | CoursesOfStudy;
      } | null)
    | ({
        relationTo: 'lecturers';
        value: number | Lecturer;
      } | null)
    | ({
        relationTo: 'studentProfilePictures';
        value: number | StudentProfilePicture;
      } | null)
    | ({
        relationTo: 'students';
        value: number | Student;
      } | null)
    | ({
        relationTo: 'schedules';
        value: number | Schedule;
      } | null)
    | ({
        relationTo: 'announcements';
        value: number | Announcement;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'students';
        value: number | Student;
      };
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  roles?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  _verified?: T;
  _verificationToken?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images_select".
 */
export interface ImagesSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos_select".
 */
export interface VideosSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "universities_select".
 */
export interface UniversitiesSelect<T extends boolean = true> {
  name?: T;
  faculties?: T;
  deanearyAddress?:
    | T
    | {
        country?: T;
        zipCode?: T;
        city?: T;
        street?: T;
        buildingNumber?: T;
      };
  contact?:
    | T
    | {
        phoneNumbers?:
          | T
          | {
              phoneNumber?: T;
              info?: T;
              id?: T;
            };
        email?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faculties_select".
 */
export interface FacultiesSelect<T extends boolean = true> {
  name?: T;
  university?: T;
  classrooms?: T;
  coursesOfStudy?: T;
  address?:
    | T
    | {
        country?: T;
        zipCode?: T;
        city?: T;
        street?: T;
        buildingNumber?: T;
      };
  contact?:
    | T
    | {
        phoneNumbers?:
          | T
          | {
              phoneNumber?: T;
              info?: T;
              id?: T;
            };
        email?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "classrooms_select".
 */
export interface ClassroomsSelect<T extends boolean = true> {
  faculty?: T;
  floorNumber?: T;
  roomNumber?: T;
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coursesOfStudy_select".
 */
export interface CoursesOfStudySelect<T extends boolean = true> {
  fieldOfStudy?: T;
  faculty?: T;
  schedule?: T;
  courseType?: T;
  levelOfStudy?: T;
  obtainedTitle?: T;
  numberOfSemesters?: T;
  currentSemester?: T;
  startDate?: T;
  endDate?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lecturers_select".
 */
export interface LecturersSelect<T extends boolean = true> {
  academicTitles?: T;
  firstName?: T;
  middleName?: T;
  familyName?: T;
  title?: T;
  profilePicture?: T;
  address?:
    | T
    | {
        street?: T;
        city?: T;
        zipCode?: T;
      };
  phoneNumber?: T;
  email?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "studentProfilePictures_select".
 */
export interface StudentProfilePicturesSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "students_select".
 */
export interface StudentsSelect<T extends boolean = true> {
  username?: T;
  firstName?: T;
  middleName?: T;
  familyName?: T;
  pesel?: T;
  coursesOfStudy?: T;
  dateOfBirth?: T;
  profilePicture?: T;
  indexNumber?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedules_select".
 */
export interface SchedulesSelect<T extends boolean = true> {
  courseOfStudy?: T;
  weekAfullTimeSchedule?:
    | T
    | {
        monday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        tuesday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        wednesday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        thursday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        friday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
      };
  weekAPartTimeSchedule?:
    | T
    | {
        saturday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        sunday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
      };
  weekBfullTimeSchedule?:
    | T
    | {
        monday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        tuesday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        wednesday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        thursday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        friday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
      };
  weekBPartTimeSchedule?:
    | T
    | {
        saturday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
        sunday?:
          | T
          | {
              name?: T;
              lecturer?: T;
              form?: T;
              startTime?: T;
              numberOfHours?: T;
              classroom?: T;
              isOnline?: T;
              endTime?: T;
              id?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "announcements_select".
 */
export interface AnnouncementsSelect<T extends boolean = true> {
  sender?: T;
  recipients?:
    | T
    | {
        recipient?: T;
        id?: T;
      };
  subject?: T;
  content?: T;
  content_html?: T;
  priority?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}