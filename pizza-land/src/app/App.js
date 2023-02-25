import Categories from '../components/Categories/Categories';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Sliders from '../components/Sliders/Sliders';
import Sort from '../components/Sort/Sort';
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
        <Content/>
      </div>
    </div>
  );
}

export default App;
