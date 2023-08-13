import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import { Wrapper as PopperWrap } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { Clean, Search as SearchIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setSearchResult([1, 2, 3, 4]);
    }, []);

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
                            <AccountItem />
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
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        setShowResult(true);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                <button className={cx('clean')}>
                    {searchValue && (
                        <Clean
                            onClean={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                                setShowResult(false);
                            }}
                        />
                    )}
                    {/* <FontAwesomeIcon className={cx('spinner-icon')} icon={faSpinner} /> */}
                </button>
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
