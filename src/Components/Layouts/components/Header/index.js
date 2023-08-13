import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import {
    Add,
    Clean,
    Search,
    MoreMenu,
    Language,
    Feedback,
    Keyboard,
    Moon,
    Message,
    Notication,
    Profile,
    Favorite,
    Coin,
    Analysis,
    Camera,
    Home,
    Setting,
    Logout,
} from '../../../Icons';
import { Wrapper as PopperWrap } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';

const cx = classNames.bind(styles);

const login = true;

const menuItems = [
    {
        title: 'Tiếng Việt',
        icon: <Language className={cx('icon')} />,
        children: {
            title: 'Languages',
            data: [
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        title: 'Phản hồi và trợ giúp',
        icon: <Feedback className={cx('icon')} />,
    },
    {
        title: 'Phím tắt trên bàn phím',
        icon: <Keyboard className={cx('icon')} />,
    },
    {
        title: 'Chế độ tối',
        icon: <Moon className={cx('icon')} />,
        toggle: true,
    },
];

const userLogin = [
    {
        title: 'Xem hồ sơ',
        icon: <Profile className={cx('icon')} />,
    },
    {
        title: 'Yêu thích',
        icon: <Favorite className={cx('icon')} />,
    },
    {
        title: 'Nhận xu',
        icon: <Coin className={cx('icon')} />,
    },
    {
        title: 'Xem phân tích',
        icon: <Analysis className={cx('icon')} />,
    },
    {
        title: 'LIVE Studio',
        icon: <Camera className={cx('icon')} />,
    },
    {
        title: 'Trung tâm LIVE',
        icon: <Home className={cx('icon')} />,
    },
    {
        title: 'Cài đặt',
        icon: <Setting className={cx('icon')} />,
    },
    ...menuItems,
    {
        title: 'Đăng xuất',
        icon: <Logout className={cx('icon')} />,
        border: true,
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <img src={images.logo.default} alt="logo" />
            <HeadlessTippy
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
                    <input placeholder="Tìm kiếm" />
                    <button className={cx('clean')}>
                        <Clean />
                        <FontAwesomeIcon className={cx('spinner-icon')} icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <Search className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                <Button outline leftIcon={<Add className={cx('add-icon')} />}>
                    Tải lên
                </Button>

                {login ? (
                    <>
                        <Tippy content="Tin nhắn">
                            <button className={cx('btn-actions')}>
                                <Message className={cx('message-icon')} />
                            </button>
                        </Tippy>

                        <Tippy content="Hộp thư">
                            <button className={cx('btn-actions')}>
                                <Notication />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <Button primary>Đăng nhập</Button>
                )}

                <Menu data={login ? userLogin : menuItems}>
                    {login ? (
                        <Image
                            className={cx('avatar')}
                            src="https://wellavn.com//uploads/2022/08/31/images/gai-xinh-tren-ip.jpg"
                            alt="avatar"
                            customDefaultImage = 'https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-the-beautiful-girl-with-long-red-hair-is-wearing-sunglasses-image_2575108.png'
                        />
                    ) : (
                            <MoreMenu className={cx('more-menu-icon')} />
                    )}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
