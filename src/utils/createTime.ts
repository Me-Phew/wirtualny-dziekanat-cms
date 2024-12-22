export const createTime = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  return new Date(new Date().setHours(hours, minutes, 0, 0));
};

export const createTimeISOString = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  return new Date(new Date().setHours(hours, minutes, 0, 0)).toISOString();
};
