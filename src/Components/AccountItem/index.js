import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('user-name')}>Kiều Duy Đoàn</h4>
                <span className={cx('nick-name')}>chickenxz@21</span>
            </div>
        </div>
    );
}

export default AccountItem;
