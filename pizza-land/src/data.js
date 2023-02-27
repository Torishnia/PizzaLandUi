import pizzaMexico from './assets/image/Mexico.jpg';
import pizzaCalifornia from './assets/image/California.jpg';
import pizzaCheseOverload from './assets/image/Cheese Overload.jpg';
import pizzaGreek from './assets/image/Greek.jpg';
import pizzaNeapolitan from './assets/image/Neapolitan.png';
import pizzaBavarian from './assets/image/Bavarian.jpg';
import pizzaSlider_1 from './assets/image/pizza_slider_1.png';
import pizzaSlider_2 from './assets/image/pizza_slider_2.png';
import pizzaSlider_3 from './assets/image/pizza_slider_3.png';

export const pizzas = [
  {
    id: 1,
    title: 'Mexico',
    price: 10,
    image: pizzaMexico,
    types: [0, 1],
    sizes: [25, 30, 40],
    category: 1,
    rating: 6,
  },
  {
    id: 2,
    title: 'California',
    price: 20,
    image: pizzaCalifornia,
    types: [0, 1],
    sizes: [25, 30, 40],
    category: 2,
    rating: 8,
  },
  {
    id: 3,
    title: 'Greek',
    price: 15,
    image: pizzaGreek,
    types: [0, 1],
    sizes: [25, 30, 40],
    category: 3,
    rating: 6,
  },
  {
    id: 4,
    title: 'Chese Overload',
    price: 15,
    image: pizzaCheseOverload,
    types: [0, 1],
    sizes: [30, 40],
    category: 4,
    rating: 8,
  },
  {
    id: 5,
    title: 'Neapolitan',
    price: 20,
    image: pizzaNeapolitan,
    types: [1],
    sizes: [25, 30],
    category: 5,
    rating: 7,
  },
  {
    id: 6,
    title: 'Bavarian',
    price: 10,
    image: pizzaBavarian,
    types: [0, 1],
    sizes: [25, 30, 40],
    category: 6,
    rating: 7,
  },
];

export const sliders = [
  {
    id: 1,
    src: pizzaSlider_1,
    alt: 'PizzaSlider',
  },
  {
    id: 2,
    src: pizzaSlider_2,
    alt: 'PizzaSlider',
  },
  {
    id: 3,
    src: pizzaSlider_3,
    alt: 'PizzaSlider',
  },
];
