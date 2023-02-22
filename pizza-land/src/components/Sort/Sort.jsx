import React from 'react';

import { IoMdArrowDropup } from 'react-icons/io';
import style from './sort.module.sass';

export default function Sort() {
  return (
    <div className={style.sort}>
      <div className={style.sort_label}>
        <IoMdArrowDropup />
        <b>Sorted by:</b>
        <span>popularity</span>
      </div>
      <div className={style.sort_popul}>
        <ul>
          <li className={style.active}>popularity</li>
          <li>price</li>
          <li>alphabet</li>
        </ul>
      </div>
    </div>
  )
}
