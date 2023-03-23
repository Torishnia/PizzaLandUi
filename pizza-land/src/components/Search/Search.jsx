import React, { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/filter/slice';
import styles from './search.module.sass';

export default function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = useMemo(() => 
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 350),
  [dispatch])

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
