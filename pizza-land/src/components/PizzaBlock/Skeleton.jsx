import React from "react";
import ContentLoader from "react-content-loader";

import style from './pizzaBlock.module.sass';

const Skeleton = (props) => (
  <ContentLoader 
    className={style.pizza_block}
    speed={2}
    width={280}
    height={471}
    viewBox="0 0 280 471"
    backgroundColor="#f8f7f7"
    foregroundColor="#e8e8e8"
  >
    <rect x="-2" y="-2" rx="10" ry="10" width="282" height="484" /> 
    <rect x="323" y="72" rx="10" ry="10" width="232" height="162" /> 
    <rect x="63" y="258" rx="0" ry="0" width="66" height="20" />
  </ContentLoader>
)

export default Skeleton;