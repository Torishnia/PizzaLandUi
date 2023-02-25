import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sliders from '../components/Sliders/Sliders';
import Sort from '../components/Sort/Sort';
import { pizzas } from '../data';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Sliders/>
      <div>
        <Categories />
        <Sort />
        <h2>All pizzas</h2>
        <div className={style.items}>
          { pizzas.map((pizza) => <PizzaBlock image={pizza.image} title={pizza.title} price={pizza.price}/>) }
        </div>
      </div>
    </div>
  );
}

export default App;
