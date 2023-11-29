'use client';

import { useSelector } from 'react-redux';
import { selectSelectedCategory } from '@/store/slice/selectSlice';
import SelectCategory from '@/components/select-category/SelectCategory';
import SelectQuestion from '@/components/select-question/SelectQuestion';

const SelectClient = () => {
  const selectedCategory = useSelector(selectSelectedCategory);
  return selectedCategory === '' ? <SelectCategory /> : <SelectQuestion />;
};

export default SelectClient;
