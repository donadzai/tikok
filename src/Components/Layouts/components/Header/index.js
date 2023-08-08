import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import images from '../../../../assets/images';
import { Wrapper as PopperWrap } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo.default} alt="TikTok" />
                </div>

                <Tippy
                    interactive
                    appendTo={() => document.body}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrap>
                                <h4 className={cx('heading')}>Accounts</h4>
                                <div className={cx('result-title')}>
                                    <AccountItem />
                                </div>
                            </PopperWrap>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search user accounts" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button outline leftIcon = {<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
