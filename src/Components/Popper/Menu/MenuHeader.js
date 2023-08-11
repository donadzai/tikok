import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({menuHeaderTitle , onBack}) {
    return <div className={cx('menu-header')}>
        <button className={cx('back-btn')} onClick={onBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <span className={cx('menu-header-title')}>{menuHeaderTitle}</span>
    </div>
}

export default MenuHeader;