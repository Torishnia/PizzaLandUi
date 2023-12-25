import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';

import styles from './sort.module.sass';
import { ISort, ISortProperty } from '../../interfaces';

export const SortArray: ISort[] = [
  { sortBy: 'title', sortOrder: 'ASC', displayText: 'Name (ASC)' },
  { sortBy: 'title', sortOrder: 'DESC', displayText: 'Name (DESC)' },
  { sortBy: 'price', sortOrder: 'ASC', displayText: 'Price (ASC)' },
  { sortBy: 'price', sortOrder: 'DESC', displayText: 'Price (DESC)' },
  { sortBy: 'rating', sortOrder: 'ASC', displayText: 'Rating (ASC)' },
  { sortBy: 'rating', sortOrder: 'DESC', displayText: 'Rating (DESC)' },
];

const Sort: React.FC<ISortProperty> = React.memo((props: ISortProperty) => {
  const { displayText, onChangeSorting } = props;

  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onChangeSort = (item: ISort) => {
    onChangeSorting(item)
    setOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedPath = event.composedPath ? [...event.composedPath()] : [];
      if (sortRef.current && !clickedPath.includes(sortRef.current)) {
        setOpen(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [])

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.sort_label}>
        {
          open
            ? <IoMdArrowDropup />
            : <IoMdArrowDropdown/>
        }
        <b>Sorted by:</b>
        <span onClick={() => setOpen(!open)} >{displayText}</span>
      </div>

      {
        open && (
          <div className={styles.sort_popul}>
            <ul>
              {
                SortArray.map((item, index) => (
                  <li
                    key={index}
                    className={displayText === item.displayText ? styles.active : ''}
                    onClick={() => onChangeSort(item)}
                  >
                    {item.displayText}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
})

export default Sort;
