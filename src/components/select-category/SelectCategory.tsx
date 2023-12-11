import { useDispatch } from 'react-redux';
import { SELECT_CATEGORY } from '@/store/slice/selectSlice';
import { categories } from '@/utils/const';
import { TCategory } from '@/types/type';
import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import styles from './SelectCategory.module.scss';

const SelectCategory = () => {
  const dispatch = useDispatch();

  const selectCategory = (category: TCategory) => {
    dispatch(SELECT_CATEGORY(category));
  };

  return (
    <>
      <Title>카테고리 선택</Title>
      <section className={styles['category__container']}>
        {categories.map((category) => {
          return (
            <Button
              onClick={() => selectCategory(category)}
              key={category}
              shape="short"
            >
              {category}
            </Button>
          );
        })}
      </section>
    </>
  );
};

export default SelectCategory;
