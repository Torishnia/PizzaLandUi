import React from 'react';

import styles from './categories.module.sass';

export const CategoryDisplayMapper: Record<string, string> = {
  'ALL': 'All',
  'MEAT': 'Meat',
  'VEGETARIAN': 'Vegetarian',
  'GRILL': 'Grill',
  'SPICY': 'Spicy',
}

const Categories: React.FC<any> = React.memo((props: any) => {
  const { categorySelectedId, categories, onChangeCategory } = props;

  return (
    <div className={styles.categories}>
      <ul>
        <li
          key={'default-category'}
          className={categorySelectedId === null ? styles.active : ''}
          onClick={() => onChangeCategory(null)}
        >{CategoryDisplayMapper['ALL']}</li>
        {
          categories.map((category: any, index: any) => (
            <li
              key={index}
              className={categorySelectedId === category.id ? styles.active : ''}
              onClick={() => onChangeCategory(category.id)}
            >{CategoryDisplayMapper[category.title]}</li>
          ))
        }
      </ul>
    </div>
  );
});

export default Categories;
