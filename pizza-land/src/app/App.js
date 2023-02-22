import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort/Sort';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Categories />
      <Sort />
      <h2>All pizzas</h2>
      <PizzaBlock />
    </div>
  );
}

export default App;
