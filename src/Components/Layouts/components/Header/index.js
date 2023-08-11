import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
    faCircleXmark,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faBitcoinSign,
    faChartLine,
    faVideo,
    faHouse,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Fragment } from 'react';

import images from '../../../../assets/images';
import { Wrapper as PopperWrap } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);

const userLogin = true;

const menuItem = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        title: 'Phản hổi và trợ giúp',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Phím tắt trên bàn phím',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
    {
        title: 'Chế độ tối',
        icon: <FontAwesomeIcon icon={faMoon} />,
        toggle_switch: true,
    },
];

const menuUser = [
    {
        title: 'Xem hồ sơ',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/chickenxz@21',
    },
    {
        title: 'Yêu thích',
        icon: <FontAwesomeIcon icon={faBookmark} />,
        to: '/favorite',
    },
    {
        title: 'Nhận xu',
        icon: <FontAwesomeIcon icon={faBitcoinSign} />,
        to: '/coin',
    },
    {
        title: 'Xem phân tích',
        icon: <FontAwesomeIcon icon={faChartLine} />,
        to: '/analysis',
    },
    {
        title: 'LIVE Studio',
        icon: <FontAwesomeIcon icon={faVideo} />,
        to: '/live',
    },
    {
        title: 'Trung tâm LIVE',
        icon: <FontAwesomeIcon icon={faHouse} />,
        to: '/livecenter',
    },
    {
        title: 'Cài đặt',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/settings',
    },
    ...menuItem,
    {
        title: 'Đăng xuất',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        to: '/logout',
        border_top: true,
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo.default} alt="TikTok" />
                </div>

                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('action')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    {userLogin ? (
                        <Fragment>
                            <Tippy content="Tin nhắn">
                                <button className={cx('btn-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('btn-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faMessage} />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}

                    <Menu data={userLogin ? menuUser : menuItem}>
                        {userLogin ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg"
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
