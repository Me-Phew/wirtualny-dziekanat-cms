import React from 'react';

import './index.scss';

export interface NoticeFieldProps {
  type: 'info';
  text: string;
}

export const NoticeField: React.FC<NoticeFieldProps> = ({ type, text }) => {
  return (
    <div className="notice-field__wrapper">
      <div className="notice-field__text">{text}</div>
    </div>
  );
};
