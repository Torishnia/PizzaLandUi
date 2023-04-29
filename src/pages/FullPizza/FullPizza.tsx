import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './fullPizza.module.sass';
import PizzaType from '../../components/PizzaType/PizzaType';

export default function FullPizza() {
  const [pizza, setPizza] = useState<{
    id: string,
    image: string,
    title: string,
    otherImgs: [{
      id: number,
      img: string,
      alt: string,
    }],
    description: string,
    price: number,
    types: number[],
    sizes: number[],
    count: 0,
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://64021c7d3779a86262658057.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error, not found');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate])

  if (!pizza) {
    return (
      <span>Loading pizza...</span>
    );
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

      <div className={styles.container_info}>
        <div className={styles.container_info_back}>
          <Link to='/'>
            <button className={styles.container_info_back_button}>&larr; Go back</button>
          </Link>
        </div>
        <div className={styles.container_info_type}>
          <PizzaType id={pizza.id} title={pizza.title} price={pizza.price} sizes={pizza.sizes} types={pizza.types} image={pizza.image} count={pizza.count} />
        </div>
      </div>

    </div>
  )
}
