'use client';

import SelectCategory from '@/components/select/SelectCategory';
import SelectQuestion from '@/components/select/SelectQuestion';
import { selectSelectedCategory } from '@/store/slice/selectSlice';
import { useSelector } from 'react-redux';

const SelectClient = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  return selectedCategory === '' ? <SelectCategory /> : <SelectQuestion />;
};

export default SelectClient;
