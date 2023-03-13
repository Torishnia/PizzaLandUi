import React from 'react';

import Sliders from '../components/Sliders/Sliders';
import Content from '../components/Content/Content';

export default function Home({ searchValue }) {
  return (
    <div>
      <Sliders />
      <Content searchValue={searchValue} />
    </div>
  )
}
