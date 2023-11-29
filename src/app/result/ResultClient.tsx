"use client";

import React, { useState } from "react";
import SelectedConcern from "./selectedConcern/SelectedConcern";
import SelectedCookies from "./selectedCookies/SelectedCookies";
const ResultClient = () => {
  const [selectedCookie, setSelectedCookie] = useState(0);
  const selectCookie = (cookie: number) => {
    setSelectedCookie(cookie);
  };
  return (
    <div>
      {selectedCookie ? (
        <SelectedConcern goback={selectCookie} />
      ) : (
        <SelectedCookies selectedCookie={selectCookie} />
      )}
    </div>
  );
};

export default ResultClient;
