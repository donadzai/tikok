import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Image from '../../Image';
import Button from '../../Button';
import { Check } from '../../Icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <Image
                    src="https://haycafe.vn/wp-content/uploads/2022/02/Nhung-co-gai-xinh-dep-va-de-thuong-606x600.jpg"
                    alt="avatar"
                    className={cx('avatar')}
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('account-body')}>
                <h4 className={cx('name-wrap')}>
                    <span className={cx('name')}>Kiều Duy Đoàn</span>
                    <Check />
                </h4>
                <span>chickenxz@21</span>
            </div>
            <div>
                <span className={cx('value')}>100M</span>
                <span>Follow</span>
                <span className={cx('value')}>100M </span>
                <span>Likes</span>
            </div>
        </div>
    );
}

export default AccountPreview;
