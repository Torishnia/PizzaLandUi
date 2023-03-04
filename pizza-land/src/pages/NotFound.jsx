import React from 'react';

import Oops from '../assets/image/page_not_found.jpg';
import style from '../pages/not_found.module.sass';

export default function NotFound() {
  return (
    <div className={style.container}>
      <img src={Oops} alt='Oops'/>
    </div>
  )
}
