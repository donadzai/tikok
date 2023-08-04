import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, big=false, children, ...passProps }) {
    let Tag = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    const classes = cx('wrapper', {
        big,
    });

    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    );
}

export default Button;
