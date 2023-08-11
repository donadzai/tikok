import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as MenuWrap } from '../index';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    const [history, setHistory] = useState([{ data: data }]);

    const current = history[history.length - 1];
    return (
        <Tippy
            appendTo={() => document.body}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <MenuWrap className={cx('menu-wrap')}>
                        {history.length > 1 && (
                            <MenuHeader
                                menuHeaderTitle={current.title}
                                onBack={() => {
                                    setHistory((prev) => {
                                        console.log('prev', prev);
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children;
                            return (
                                <MenuItem
                                    key={index}
                                    data={item}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => [...prev, item.children]);
                                        }
                                    }}
                                />
                            );
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

// const myArray = [1,2,3,4,5,6]

// console.log(myArray.splice(0, 10 ));

// console.log(myArray);
