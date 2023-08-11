import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Fragment } from 'react';

import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <>
            <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon} onClick={onClick}>
                {data.title}
                {data.toggle_switch && <input className={cx('toggle-switch')} type="checkbox" />}
            </Button>
        </>
    );
}

export default MenuItem;
