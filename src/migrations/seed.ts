import { createTimeISOString } from '@/utils/createTime';
import type { MigrateUpArgs } from '@payloadcms/db-postgres';
import path from 'path';

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.create({
    collection: 'users',
    data: {
      name: 'Admin',
      email: 'admin@ans-ns.edu.pl',
      password: 'demo',
      roles: ['admin', 'user'],
      _verified: true,
    },
  });

  await payload.create({
    collection: 'universities',
    data: {
      name: 'Akademia Nauk Stosowanych',
      deanearyAddress: {
        street: 'Staszica',
        city: 'Nowy Sącz',
        zipCode: '33-300',
        buildingNumber: '1',
        country: 'Polska',
      },
      contact: {
        email: 'sog@ans-ns.edu.pl',
        phoneNumbers: [
          { phoneNumber: '+48 18 547 56 02' },
          { phoneNumber: '+48 18 547 56 03' },
        ],
      },
    },
  });

  const classroom = await payload.create({
    collection: 'classrooms',
    data: {
      floorNumber: 1,
      roomNumber: 9,
    },
  });

  const faculty = await payload.create({
    collection: 'faculties',
    data: {
      name: 'Wydział Inżynieryjny',
      classrooms: [classroom.id],
      address: {
        buildingNumber: '1A',
        city: 'Nowy Sącz',
        country: 'Polska',
        street: 'Zamenhofa',
        zipCode: '33-300',
      },
      contact: {
        email: 'wi@ans-ns.edu.pl',
        phoneNumbers: [
          { phoneNumber: '+48 18 547 29 08' },
          { phoneNumber: '+48 18 547 29 07' },
        ],
      },
    },
  });

  const lecturer = await payload.create({
    collection: 'lecturers',
    data: {
      firstName: 'Jan',
      middleName: 'Kazimierz',
      familyName: 'Nowak',
      academicTitles: ['BSc', 'prof'],
      address: {
        city: 'Nowy Sącz',
        street: 'Kwiatowa',
        zipCode: '33-300',
      },
      email: 'jankazimierz@ans-ns.edu.pl',
      phoneNumber: '+48 123 456 789',
    },
  });

  const schedule = await payload.create({
    collection: 'schedules',
    data: {
      weekAfullTimeSchedule: {
        monday: [
          {
            name: 'Grafika i komunikacja człowiek-komputer',
            form: 'project',
            startTime: createTimeISOString({ hours: 10, minutes: 10 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie zaawansowane',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 11, minutes: 45 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Oprogramowanie CMS (Joomla)*',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 14, minutes: 15 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
        ],
        tuesday: [
          {
            name: 'Programowanie urządzeń mobilnych',
            form: 'project',
            startTime: createTimeISOString({ hours: 15, minutes: 25 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Systemy operacyjne',
            form: 'project',
            startTime: createTimeISOString({ hours: 17, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Technologia sieciowa',
            form: 'lab',
            startTime: createTimeISOString({ hours: 18, minutes: 35 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        wednesday: [
          {
            name: 'Język angielski',
            form: 'language',
            startTime: createTimeISOString({ hours: 9, minutes: 10 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        thursday: [
          {
            name: 'Systemy operacyjne',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 9, minutes: 35 }),
            classroom: classroom.id,
            isOnline: true,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Systemy operacyjne',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 11, minutes: 15 }),
            classroom: classroom.id,
            isOnline: true,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie zaawansowane',
            form: 'project',
            startTime: createTimeISOString({ hours: 15, minutes: 25 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie aplikacji WEB',
            form: 'project',
            startTime: createTimeISOString({ hours: 17, minutes: 50 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        friday: [
          {
            name: 'Programowanie urządzeń mobilnych',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 8, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Technologia sieciowa',
            form: 'lab',
            startTime: createTimeISOString({ hours: 14, minutes: 55 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Oprogramowanie CMS (Joomla)*',
            form: 'project',
            startTime: createTimeISOString({ hours: 17, minutes: 20 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
      },
      weekBfullTimeSchedule: {
        monday: [
          {
            name: 'Grafika i komunikacja człowiek-komputer',
            form: 'project',
            startTime: createTimeISOString({ hours: 8, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Ochrona systemów komputerowych przed hakerami i atakami penetracyjnymi*',
            form: 'lab',
            startTime: createTimeISOString({ hours: 12, minutes: 55 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Grafika i komunikacja człowiek-komputer',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 15, minutes: 15 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
        ],
        tuesday: [
          {
            name: 'Programowanie urządzeń mobilnych',
            form: 'project',
            startTime: createTimeISOString({ hours: 15, minutes: 25 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Systemy operacyjne',
            form: 'project',
            startTime: createTimeISOString({ hours: 17, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Technologia sieciowa',
            form: 'lab',
            startTime: createTimeISOString({ hours: 18, minutes: 35 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        wednesday: [
          {
            name: 'Język angielski',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 9, minutes: 10 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        thursday: [
          {
            name: 'Systemy operacyjne',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 9, minutes: 35 }),
            classroom: classroom.id,
            isOnline: true,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Systemy operacyjne',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 11, minutes: 15 }),
            classroom: classroom.id,
            isOnline: true,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie urządzeń mobilnych ',
            form: 'exercises',
            startTime: createTimeISOString({ hours: 13, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie aplikacji WEB',
            form: 'lab',
            startTime: createTimeISOString({ hours: 14, minutes: 40 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie zaawansowane',
            form: 'project',
            startTime: createTimeISOString({ hours: 16, minutes: 20 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Programowanie zaawansowane',
            form: 'project',
            startTime: createTimeISOString({ hours: 18, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
        friday: [
          {
            name: 'Technologia sieciowa',
            form: 'lecture',
            startTime: createTimeISOString({ hours: 8, minutes: 0 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 3,
            lecturer: lecturer.id,
          },
          {
            name: 'Technologia sieciowa',
            form: 'lab',
            startTime: createTimeISOString({ hours: 14, minutes: 30 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
          {
            name: 'Oprogramowanie CMS (Joomla)*',
            form: 'project',
            startTime: createTimeISOString({ hours: 16, minutes: 10 }),
            classroom: classroom.id,
            isOnline: false,
            numberOfHours: 2,
            lecturer: lecturer.id,
          },
        ],
      },
    },
  });

  const courseOfStudy = await payload.create({
    collection: 'coursesOfStudy',
    data: {
      fieldOfStudy: 'Informatyka stosowana',
      faculty: faculty.id,
      schedule: schedule.id,
      courseType: 'fullTime',
      levelOfStudy: 'firstDegree',
      obtainedTitle: 'engineer',
      numberOfSemesters: 7,
      currentSemester: 3,
      startDate: '2023-10-01',
    },
  });

  const profilePicture = await payload.create({
    collection: 'studentProfilePictures',
    data: {},
    filePath: path.resolve(payload.config.custom.dirname, 'assets/jnowak.jpg'),
  });

  await payload.create({
    collection: 'students',
    data: {
      firstName: 'Kamil',
      middleName: 'Jacek',
      familyName: 'Nowak',
      email: 'knowak@ans-ns.edu.pl',
      password: 'demo',
      pesel: '94102087254',
      profilePicture: profilePicture.id,
      coursesOfStudy: [courseOfStudy.id],
    },
  });
}
