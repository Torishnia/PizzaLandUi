import { useState } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import { setSort } from '../../redux/filter/slice';
import styles from './sort.module.sass';

export const sortName = [
  { name:'popularity (DESC)', sortProperty: 'rating' },
  { name:'popularity (ASC)', sortProperty: '-rating' },
  { name: 'alphabet (DESC)', sortProperty: 'title' },
  { name: 'alphabet (ASC)', sortProperty: '-title' },
  { name: 'price (DESC)', sortProperty: 'price' },
  { name: 'price (ASC)', sortProperty: '-price' },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  }

  return (
    <div className={styles.sort}>
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
