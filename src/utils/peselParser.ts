export interface ParsedPesel {
  year: number;
  month: number;
  day: number;
  gender: 'm' | 'f';
  dateOfBirth: Date;
}

const isNumericString = (str: string): boolean => /^\d+$/.test(str);

const isValidDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
};

export const parsePesel = (peselInput: string): ParsedPesel => {
  if (typeof peselInput !== 'string') {
    throw new Error('peselInput must be a string');
  }

  const pesel = peselInput.trim();
  if (!isNumericString(pesel)) {
    throw new Error('pesel contains non-numeric characters');
  }

  const digits = pesel.split('').map((digit) => parseInt(digit, 10));

  // Verify control sum
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
  const controlSum = digits.reduce(
    (sum, digit, index) => sum + digit * weights[index],
    0,
  );

  if (controlSum % 10 !== 0) {
    throw new Error(`Control sum mismatch: ${pesel}`);
  }

  // Calculate year with respect to centuries
  let year = 1900 + digits[0] * 10 + digits[1];
  if (digits[2] >= 2 && digits[2] < 8) {
    year += Math.floor(digits[2] / 2) * 100;
  }
  if (digits[2] >= 8) {
    year -= 100;
  }

  const month = (digits[2] % 2) * 10 + digits[3];
  const day = digits[4] * 10 + digits[5];

  // Verify date of birth
  if (!isValidDate(day, month, year)) {
    throw new Error(`Invalid date of birth in PESEL: ${pesel}`);
  }

  const gender: 'm' | 'f' = digits[9] % 2 === 1 ? 'm' : 'f';

  const dateOfBirth = new Date(year, month - 1, day, 12, 0, 0, 0);

  // Return parsed PESEL details
  return {
    year,
    month,
    day,
    gender,
    dateOfBirth,
  };
};
