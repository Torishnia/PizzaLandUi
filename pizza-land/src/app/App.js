import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort/Sort';
import PizzaSlider_1 from '../components/image/pizza_slider_1.png';
import PizzaSlider_2 from '../components/image/pizza_slider_2.png';
import PizzaSlider_3 from '../components/image/pizza_slider_3.png';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.wrapper}>
            <img src={PizzaSlider_1} alt='PizzaSlider'/>
            <img src={PizzaSlider_2} alt='PizzaSlider'/>
            <img src={PizzaSlider_3} alt='PizzaSlider'/>
        </div>
      </div>
        
      <div>
        <Categories />
        <Sort />
        <h2>All pizzas</h2>
        <PizzaBlock />
      </div>
    </div>
  );
}

export default App;
