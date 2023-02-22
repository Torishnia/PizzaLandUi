import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import Sort from '../components/Sort/Sort';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Categories />
      <Sort />
    </div>
  );
}

export default App;
