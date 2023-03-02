import React from 'react';
import { useState } from 'react';

import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import style from './sort.module.sass';

export default function Sort() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const sortName = ['popularity', 'price', 'alphabet'];
  const selectedSortName = sortName[selected];

  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  }

  return (
    <div className={style.sort}>
      <div className={style.sort_label}>
        {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown/>}
        <b>Sorted by:</b>
        <span onClick={() => setOpen(!open)} >{selectedSortName}</span>
      </div>
      {open && <div className={style.sort_popul}>
        <ul>
          {sortName.map((name, i) => 
            <li 
              key={name} 
              onClick={() => onClickListItem(i)}
              className={selected === i ? style.active : ''}
            >
              {name}
            </li>
          )}
        </ul>
      </div>}
    </div>
  )
}
