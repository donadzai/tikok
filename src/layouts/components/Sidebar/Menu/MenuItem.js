import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, active }) {
    return (
        <NavLink
            to={to}
            className={(nav) => {
                return cx('menu-item', { active: nav.isActive });
            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{active}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
