import classNames from "classnames/bind";
import styles from './MenuItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles)

function MenuItem() {
    return <div className={cx('wrapper')}>
        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
        <span className={cx('title')}>Trước khi em tồn tại</span>
    </div>
}

export default MenuItem;