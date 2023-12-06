'use client';

import { useState } from 'react';
import FortuneCookieResult from '@/components/fortune-cookie/FortuneCookie';
import FortuneCookieChoice from '@/components/fortune-cookie-choice/FortuneCookieChoice';

const ResultClient = () => {
  const [selectedCookie, setSelectedCookie] = useState(0);
  const selectCookie = (cookie: number) => {
    setSelectedCookie(cookie);
  };
  return (
    <div>
      {selectedCookie ? (
        <FortuneCookieResult goback={selectCookie} />
      ) : (
        <FortuneCookieChoice selectedCookie={selectCookie} />
      )}
    </div>
  );
};

export default ResultClient;
