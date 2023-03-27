import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './fullPizza.module.sass';

export default function FullPizza() {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://64021c7d3779a86262658057.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error, not found', error);
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate])

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <h2>{pizza.title}</h2>
      <div className={styles.container_content}>
        <div className={styles.container_content_wrapper}>
          {
            pizza.otherImgs.map((oImg) => (<img key={oImg.id} src={oImg.img} alt={oImg.alt} />))
          }
        </div>
      </div>
      
      <p>{pizza.description}</p>
      <h4>{pizza.price} $</h4>
      <Link to='/'>
        <button className={styles.container_button}>&larr; Go back</button>
      </Link>
    </div>
  )
}
