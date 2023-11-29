'use client';

import React, { useState } from 'react';
import FortuneCookieResult from '@/components/fortuneCookie/FortuneCookie';
import FortuneCookieChoice from '@/components/fortuneCookieChoice/FortuneCookieChoice';

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
