import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss'
import AccountItem from "./AccountItem";


const cx = classNames.bind(styles);


function SuggestAccounts({lable}) {
    return <div className={cx('wrapper')}>
        <h4 className={cx('header')}>{lable}</h4>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
    </div>
}

SuggestAccounts.propTypes = {
    lable : PropTypes.string.isRequired,
}

export default SuggestAccounts;