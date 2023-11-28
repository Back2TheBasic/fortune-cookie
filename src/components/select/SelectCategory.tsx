import { SELECT_CATEGORY } from '@/store/slice/selectSlice';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Title from '../Title';

const SelectCategory = () => {
  const dispatch = useDispatch();

  const categories: string[] = [
    '취업',
    '학업',
    '연애',
    '건강',
    '가족',
    '인간관계',
    '재물/돈',
    '종합',
  ];
  const selectCategory = (category: string) => {
    dispatch(SELECT_CATEGORY(category));
  };

  return (
    <>
      <Title title="카테고리 선택" />
      {categories.map((category) => {
        return (
          <Button
            onClick={() => selectCategory(category)}
            key={category}
            name={category}
          />
        );
      })}
    </>
  );
};

export default SelectCategory;
