import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function FullPizza() {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://64021c7d3779a86262658057.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error, not found', error);
      }
    }
    fetchPizza();
  }, [id])

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div>
      <img src={pizza.image} alt='pizza'/>
      <h2>{pizza.title}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <h4>{pizza.price} $</h4>
    </div>
  )
}
