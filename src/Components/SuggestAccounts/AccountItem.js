import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestAccounts.module.scss';
import config from '../../config';
import Image from '../Image';
import {Wrapper} from '../Popper'
import {Check} from '../Icons'
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy
            appendTo={() => document.body}
            offset={[40, 0]}
            delay={[800, 0]}
            interactive
            placement='bottom'
            render={(attrs) => (
                <div className={cx('account-preview')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <AccountPreview />
                    </Wrapper>
                </div>
            )}
        >
            <Link to={config.routes.profile} className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    src="https://haycafe.vn/wp-content/uploads/2022/02/Nhung-co-gai-xinh-dep-va-de-thuong-606x600.jpg"
                    alt="avatar"
                />
                <div className={cx('account-body')}>
                    <h4 className={cx('name-wrap')}>
                        <span className={cx('name')}>Kiều Duy Đoàn</span>
                        <Check />
                    </h4>
                    <span className={cx('nickname')}>
                        chickenxz@21
                    </span>
                </div>
            </Link>
        </Tippy>
    );
}

export default AccountItem;
