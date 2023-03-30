import { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import { ISort } from '../../interfaces';
import { selectSort, setSort } from '../../redux/filter/slice';
import styles from './sort.module.sass';

export const sortList: ISort[] = [
  { sortName:'popularity (DESC)', sortProperty: 'rating' },
  { sortName:'popularity (ASC)', sortProperty: '-rating' },
  { sortName: 'alphabet (DESC)', sortProperty: 'title' },
  { sortName: 'alphabet (ASC)', sortProperty: '-title' },
  { sortName: 'price (DESC)', sortProperty: 'price' },
  { sortName: 'price (ASC)', sortProperty: '-price' },
];

export default function Sort() {
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [open, setOpen] = useState(false);

  const onClickListItem = (obj: any) => {
    dispatch(setSort(obj));
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
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort_label}>
        {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown/>}
        <b>Sorted by:</b>
        <span onClick={() => setOpen(!open)} >{sort.sortName}</span>
      </div>
      {open && <div className={styles.sort_popul}>
        <ul>
          {sortList.map((obj, i) => 
            <li 
              key={i} 
              onClick={() => onClickListItem(obj)}
              className={sort.sortProperty === obj.sortProperty ? styles.active : ''}
            >
              {obj.sortName}
            </li>
          )}
        </ul>
      </div>}
    </div>
  )
}
