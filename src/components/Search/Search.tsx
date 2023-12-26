import React, { useCallback, useEffect, useRef, useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import styles from './search.module.sass';
import PizzaService from '../../services/PizzaService';
import { IPizza } from '../../interfaces';
import { E_StatusComponent } from '../../enums';
import SearchCard from '../SearchCard/SearchCard';

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchStatus, setSearchStatus] = useState<E_StatusComponent>(E_StatusComponent.LOADING);
  const [searchResult, setSearchResult] = useState<IPizza[]>([]);
  const [isResultBlockOpen, setIsResultBlockOpen] = useState(false);

  const getPizzas = useCallback(async (value: string) => {
    const result = await PizzaService.getAllPizzas({ categoryId: null, search: value, sortBy: 'title', sortOrder: 'ASC' });
    setSearchResult(result);
  }, []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIsResultBlockOpen(false);
    setSearchValue(event.target.value);

    if (!value.trim()) return;
    setIsResultBlockOpen(true);

    getPizzas(value)
      .then(() => setSearchStatus(E_StatusComponent.SUCCESS))
      .catch(() => setSearchStatus(E_StatusComponent.ERROR));
  }

  const onClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedPath = event.composedPath ? [...event.composedPath()] : [];
      if (inputRef.current && !clickedPath.includes(inputRef.current)) {
        setIsResultBlockOpen(false);
        setSearchValue('');
      }
    }

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.search_block}>
        <input
          placeholder='Search...'
          className={styles.search_input}
          ref={inputRef}
          value={searchValue}
          onChange={onChangeInput}
        />
        <MdYoutubeSearchedFor  className={styles.search_icon}/>
        { searchValue && <VscClose className={styles.clear_icon} onClick={onClear} /> }
      </div>
      
      {
        isResultBlockOpen && (
          searchStatus === E_StatusComponent.LOADING
            ? (
              <div className={styles.result_block}>
                <span className={styles.loading_block}>Loading...</span>
              </div>
            )
            : (
              searchStatus === E_StatusComponent.SUCCESS && searchResult.length
                ? (
                  <div className={styles.result_block}>
                    {
                      searchResult.map((item, index) => <SearchCard key={index} {...item} />)
                    }
                  </div>
                )
                : (
                  <div className={styles.result_block}>
                    <span className={styles.not_found_block}>Not found</span>
                  </div>
                )
            )
        )
      }
    </div>
  )
}

export default Search;
