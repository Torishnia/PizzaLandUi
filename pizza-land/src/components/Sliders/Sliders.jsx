import React from 'react';

import { sliders } from '../../data';
import styles from './sliders.module.sass';

export default function Sliders() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        { sliders.map((slider) => <img key={slider.id} src={slider.src} alt={slider.alt}/>) }
      </div>
  </div>
  )
}
