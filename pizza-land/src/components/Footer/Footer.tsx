import React from 'react';
import { Link } from 'react-router-dom';
import { TfiLocationPin } from 'react-icons/tfi';

import pizzaSlice from '../../assets/image/pizzaSlice.png';
import visa from '../../assets/image/visa-svgrepo-com.png';
import masterCard from '../../assets/image/Mastercard-Logo.wine.png';
import appleCard from '../../assets/image/Apple_Card-Logo.wine.png';
import styles from './footer.module.sass';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.container_content}>
          <Link to='/'>
            <div className={styles.container_content_logo}>
              <div>
                <img src={pizzaSlice} alt="logo" />
              </div>
              <div>
                <h1>Pizza Land</h1>
              </div>
            </div>
          </Link>
          <div>
            <p>All rights reserved.</p>
          </div>
        </div>

        <div className={styles.container_bankCard}>
          <h2>Support for payments</h2>
          <div className={styles.container_bankCard_info}>
            <div className={styles.container_bankCard_info_image1}>
              <img src={visa} alt='visa'/>
            </div>
            <div className={styles.container_bankCard_info_image2}>
              <img src={masterCard} alt='visa'/>
            </div>
            <div className={styles.container_bankCard_info_image3}>
              <img src={appleCard} alt='visa'/>
            </div>
          </div>
        </div>

        <div className={styles.container_info}>
          <h2>+1(270)-954-3538</h2>
          <h3>From 10:00 to 21:30</h3>
          <h4>pizza.land@gmail.com</h4>
          <div className={styles.container_info_city}>
            <TfiLocationPin className={styles.container_info_city_icon} />
            <span>Kentucky</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;
