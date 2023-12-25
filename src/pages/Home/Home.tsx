import React from 'react';

import Sliders from '../../components/Sliders/Sliders';
import Content from '../../components/Content/Content';

const Home: React.FC = () => {
  console.log('Home');
  
  return (
    <div>
      <Sliders />
      <Content />
    </div>
  )
}

export default Home;