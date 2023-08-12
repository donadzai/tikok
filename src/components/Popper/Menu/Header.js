import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Left } from '../../Icons';

const cx = classNames.bind(styles);

function Header({data , onClick}) {
    return (
        <div className={cx('heading')}>
            <button onClick={onClick} className={cx('back-btn')}>
                <Left/>
            </button>
            <span>{data.title}</span>
        </div>
    );
}

export default Header;
