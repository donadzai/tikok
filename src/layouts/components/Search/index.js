import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import * as searchServices from '../../../services/searchService';
import styles from './Search.module.scss';
import { Wrapper as PopperWrap } from '../../../Components/Popper';
import AccountItem from '../../../Components/AccountItem';
import { Clean, Search as SearchIcon } from '../../../Components/Icons';
import useDebounce from '../../../hooks/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);
    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setShowSpinner(true);

        const fetchApi = async () => {
            setShowSpinner(true);
            const result = await searchServices.search(debounce, 'less');
            setSearchResult(result);
            setShowSpinner(false);
        };

        fetchApi();
    }, [debounce]);

    const handleInput = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
        setShowResult(true);
    };

    return (
        <HeadlessTippy
            onClickOutside={() => setShowResult(false)}
            visible={searchResult.length > 0 && showResult}
            interactive
            appendTo={() => document.body}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrap>
                        <h4 className={cx('result-heading')}>Accounts</h4>
                        <div className={cx('result-container')}>
                            {searchResult.map((result) => {
                                return (
                                    <AccountItem
                                        key={result.id}
                                        onClick={() => {
                                            setSearchResult([]);
                                            setSearchValue('');
                                        }}
                                        data={result}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrap>
                </div>
            )}
        >
            <div className={cx('seach-wrapper')}>
                <input
                    ref={inputRef}
                    placeholder="Tìm kiếm"
                    value={searchValue}
                    onChange={handleInput}
                    onFocus={() => setShowResult(true)}
                />
                <button className={cx('clean')}>
                    {searchValue && !showSpinner && (
                        <Clean
                            onClean={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                                setShowResult(false);
                            }}
                        />
                    )}
                </button>
                {showSpinner && <FontAwesomeIcon className={cx('spinner-icon')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
