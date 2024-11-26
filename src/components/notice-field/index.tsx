import { NoticeField, NoticeFieldProps } from './index.client';

export const NoticeFieldRSC = async ({ text, type }: NoticeFieldProps) => {
  return <NoticeField type={type} text={text} />;
};
