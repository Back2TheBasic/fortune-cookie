'use client';

import { useState } from 'react';
import FortuneCookieResult from '@/components/fortune-cookie/FortuneCookie';
import FortuneCookieChoice from '@/components/fortune-cookie-choice/FortuneCookieChoice';

const ResultClient = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const selectCookie = (cookie: number) => {
    const _ = cookie;
    setModalOpen(true);
  };
  return (
    <div id="result-client">
      <FortuneCookieChoice selectedCookie={selectCookie} />
      {modalOpen && <FortuneCookieResult openModal={setModalOpen} />}
    </div>
  );
};

export default ResultClient;
