import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


import images from '../../../../assets/images';
import styles from './Header.module.scss';
import Search from './Search';
import Button from '../../../Buttons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('img')} src={images.logo} alt="logo" />
            </div>

            <span>
                <Search />
            </span>

            <div className={cx('action')}>
                <Button big>
                    <img className={cx('img-download')} src={images.logo_download} alt="logo-download" />
                    <span>Tải bản Window</span>
                </Button>

                <FontAwesomeIcon className={cx('setting')} icon={faGear} />

                <div>
                    <img className={cx('avatar')} src={images.avatar} alt='avatar'/>
                </div>
            </div>
        </header>
    );
}

export default Header;
