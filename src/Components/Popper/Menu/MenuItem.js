import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ item, toggle, onClick, border }) {
    const classes = cx('wrapper', {
        border,
    });
    return (
        <Button onClick={onClick} className={classes} leftIcon={item.icon}>
            {item.title}
            {toggle && <input className={cx('toggle')} type="checkbox" />}
        </Button>
    );
}

export default MenuItem;
