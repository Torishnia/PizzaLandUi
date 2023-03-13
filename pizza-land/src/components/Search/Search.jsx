import React from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';

import styles from './search.module.sass';

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.container}>
      <MdYoutubeSearchedFor  className={styles.icon}/>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input} 
        placeholder='Search...'
      />
      {searchValue && 
        <VscClose 
          className={styles.removeInput}
          onClick={() => setSearchValue('')}
        />
      }
    </div>
  )
}
