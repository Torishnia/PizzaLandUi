import { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import { selectSort, setSort } from '../../redux/filter/slice';
import styles from './sort.module.sass';

type SortItem = {
  name: string;
  sortProperty: string;
}

export const sortName: SortItem[] = [
  { name:'popularity (DESC)', sortProperty: 'rating' },
  { name:'popularity (ASC)', sortProperty: '-rating' },
  { name: 'alphabet (DESC)', sortProperty: 'title' },
  { name: 'alphabet (ASC)', sortProperty: '-title' },
  { name: 'price (DESC)', sortProperty: 'price' },
  { name: 'price (ASC)', sortProperty: '-price' },
];

export default function Sort() {
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [open, setOpen] = useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const clickedPath = event.composedPath ? [...event.composedPath()] : [];
      if (!clickedPath.includes(sortRef.current)) {
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
        <span onClick={() => setOpen(!open)} >{sort.name}</span>
      </div>
      {open && <div className={styles.sort_popul}>
        <ul>
          {sortName.map((obj, i) => 
            <li 
              key={i} 
              onClick={() => onClickListItem(obj)}
              className={sort.sortProperty === obj.sortProperty ? styles.active : ''}
            >
              {obj.name}
            </li>
          )}
        </ul>
      </div>}
    </div>
  )
}
