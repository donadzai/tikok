import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as MenuWrap } from '../index';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    return (
        <Tippy
            appendTo={() => document.body}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <MenuWrap className = {cx('menu-wrap')}>
                        {data.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </MenuWrap>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
