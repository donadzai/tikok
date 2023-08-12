import classNames from "classnames/bind";

import styles from './AccountItem.module.scss'
import { Check } from "../Icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://phunugioi.com/wp-content/uploads/2020/04/hot-girl-truong-hoc-deo-kinh.jpg" alt="avatar"/>
        <div className={cx('info')}>
            <div className={cx('user-name-wrap')}>
                <h4 className={cx('user-name')}>Kiều Duy Đoàn</h4>
                <span>
                    <Check />
                </span>
            </div>
            <p className={cx('user-nickname')}>Chickenxz21@</p>
        </div>
    </div>
}

export default AccountItem;