export type academicTitles = 'BSc' | 'MSc' | 'PhD' | 'DSc' | 'prof';

export const getNameWithAcademicTitles = (
  { firstName, lastName }: { firstName: string; lastName: string },
  academicTitles: academicTitles[],
  locale: 'pl' | 'en',
): string => {
  const readableAcademicTitles = Array.from(academicTitles)
    .sort((title) => {
      switch (title) {
        case 'BSc':
          return 0;
        case 'MSc':
          return 1;
        case 'PhD':
          return 2;
        case 'DSc':
          return 3;
        case 'prof':
          return 4;
        default:
          return 5;
      }
    })
    .map((title) => {
      switch (locale) {
        case 'pl':
          switch (title) {
            case 'BSc':
              return 'Inż.';
            case 'MSc':
              return 'Mgr';
            case 'PhD':
              return 'Dr';
            case 'DSc':
              return 'Dr hab.';
            case 'prof':
              return 'Prof.';
            default:
              return '';
          }
        case 'en':
          switch (title) {
            case 'BSc':
              return 'BSc';
            case 'MSc':
              return 'MSc';
            case 'PhD':
              return 'PhD';
            case 'DSc':
              return 'DSc';
            case 'prof':
              return 'Prof.';
            default:
              return '';
          }
      }
    });

  return `${readableAcademicTitles.join(' ')} ${firstName} ${lastName}`;
};
