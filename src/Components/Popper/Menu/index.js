import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrap } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    const [history, setHistory] = useState([{ data: data }]);

    const current = history[history.length - 1];

    return (
        <HeadlessTippy
            onHide={() => {
                setHistory(prev => prev.slice(0,1));
            }}
            placement="bottom-end"
            interactive
            appendTo={() => document.body}
            render={(attrs) => (
                <div className={cx('menu-wrap')} tabIndex="-1" {...attrs}>
                    <PopperWrap className={cx('custom-menu')}>
                        {history.length > 1 && (
                            <Header
                                onClick={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                                data={current}
                            />
                        )}
                        <div className={cx('menu-container')}>
                            {current.data.map((item, index) => {
                                return (
                                    <MenuItem
                                        border = {item.border}
                                        onClick={() => {
                                            if (item.children) {
                                                setHistory((prev) => [...prev, item.children]);
                                            }
                                        }}
                                        toggle={item.toggle}
                                        key={index}
                                        item={item}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrap>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
