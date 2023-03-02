import React from 'react';

import { sliders } from '../../data';
import style from './sliders.module.sass';

export default function Sliders() {
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        { sliders.map((slider) => <img key={slider.id} src={slider.src} alt={slider.alt}/>) }
      </div>
  </div>
  )
}
