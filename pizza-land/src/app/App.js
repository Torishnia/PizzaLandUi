import Header from '../components/Header/Header';
import Sliders from '../components/Sliders/Sliders';
import Content from '../components/Content/Content';
import style from './app.module.sass';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Sliders />
      <Content />
    </div>
  );
}

export default App;
