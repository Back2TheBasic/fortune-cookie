import { useDispatch } from 'react-redux';
import { SELECT_CATEGORY } from '@/store/slice/selectSlice';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';

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
      <Title>카테고리 선택</Title>
      {categories.map((category) => {
        return (
          <Button onClick={() => selectCategory(category)} key={category}>
            {category}
          </Button>
        );
      })}
    </>
  );
};

export default SelectCategory;
