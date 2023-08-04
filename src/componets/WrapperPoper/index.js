import classNames from "classnames/bind";
import styles from './WrapperPoper.module.scss'

const cx = classNames.bind(styles)

function WrapperPoper({children}) {
    return <div className={cx('wrapper')}>
        {children}
    </div>
}

export default WrapperPoper;