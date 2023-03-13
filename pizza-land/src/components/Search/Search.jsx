import React from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';

import style from './search.module.sass';

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={style.container}>
      <MdYoutubeSearchedFor  className={style.icon}/>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.input} 
        placeholder='Search...'
      />
      {searchValue && <VscClose className={style.removeInput} />}
    </div>
  )
}
