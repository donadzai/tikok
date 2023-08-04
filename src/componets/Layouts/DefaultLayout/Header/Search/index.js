import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Seach.module.scss';
import WrapperPoper from '../../../../WrapperPoper';
import MenuItem from '../../../../MenuItem';

const cx = classNames.bind(styles);

function Search() {
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapperPoper>
                        <div className={cx('content')}>
                            <h4 className={cx('header')}>Kết quả tìm kiếm</h4>
                            <div className={cx('menu-result')}>
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                        </div>
                    </WrapperPoper>
                </div>
            )}
            interactive
            visible
            placement="bottom"
        >
            <div className={cx('wrapper')}>
                <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                <input className={cx('input')} placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
            </div>
        </Tippy>
    );
}

export default Search;
