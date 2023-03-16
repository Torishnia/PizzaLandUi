import React, { useMemo, useContext, useRef, useState } from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';
import debounce from 'lodash.debounce';

import { SearchContext } from '../../app/App';
import styles from './search.module.sass';

export default function Search() {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const updateSearchValue = useMemo(() => 
    debounce((str) => {
    setSearchValue(str)
    }, 250),
  [setSearchValue])

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <MdYoutubeSearchedFor  className={styles.icon}/>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input} 
        placeholder='Search...'
      />
      {value && 
        <VscClose 
          className={styles.removeInput}
          onClick={onClickClear}
        />
      }
    </div>
  )
}
