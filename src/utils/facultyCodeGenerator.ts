export const generateFacultyCode = (facultyName: string): string => {
  if (!facultyName) {
    return '';
  }

  const facultyCode = facultyName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return facultyCode;
};
