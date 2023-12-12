'use client';

import React from 'react';
import styles from './loading.module.scss';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '@/store/slice/loadingSlice';

const Loading = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.loader}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
