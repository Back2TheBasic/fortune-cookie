import Button from '../Button';
import Title from '../Title';

const SelectCategory = () => {
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

  return (
    <>
      <Title title="카테고리 선택" />
      {categories.map((category) => {
        return <Button key={category} name={category} />;
      })}
    </>
  );
};

export default SelectCategory;
