import React from 'react';

interface NoticeFieldProps {
  type: 'info';
  text: string;
}

import './styles.scss';

export function NoticeField({ type, text }: NoticeFieldProps) {
  return (
    <div className="notice-field__wrapper">
      <div className="notice-field__text">{text}</div>
    </div>
  );
}
