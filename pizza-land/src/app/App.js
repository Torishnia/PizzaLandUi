import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Categories />
    </div>
  );
}

export default App;
