import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick = () => {}, primary, leftIcon, outline,outlinePrimary,className, ...restProps }) {
    let Comp = 'button';

    const _props = {
        onClick,
        ...restProps,
    };

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        outlinePrimary,
        [className]: className,
    });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
