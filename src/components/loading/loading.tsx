'use client';

import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '@/store/slice/loadingSlice';
import styles from './loading.module.scss';

const Loading = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div id="loading">
      {isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.loader}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
