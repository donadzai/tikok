import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { Check } from '../Icons';
import Image from '../Image'

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link onClick={onClick} to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <div className={cx('user-name-wrap')}>
                    <h4 className={cx('user-name')}>{data.full_name || 'Kiều Duy Đoàn'}</h4>
                    {data.tick && (
                        <span>
                            <Check />
                        </span>
                    )}
                </div>
                <p className={cx('user-nickname')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
