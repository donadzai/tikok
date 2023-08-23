import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../Components/Icons';
import config from '../../../config';
import SuggestAccounts from '../../../Components/SuggestAccounts';

const cx = classNames.bind(styles);

const sideBarData = [
    {
        to: config.routes.home,
        title: 'Dành cho bạn',
        icon : HomeIcon,
        active: HomeActiveIcon,
    },
    {
        to: config.routes.following,
        title: 'Đang Follow',
        icon : UserGroupIcon,
        active: UserGroupActiveIcon,
    },
    {
        to: config.routes.live,
        title: 'LIVE',
        icon : LiveIcon,
        active: LiveActiveIcon,
    },
]

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {
                    sideBarData.map((item , index) => {
                        const Icon = item.icon;
                        const ActiveIcon = item.active;
                        return <MenuItem key={index} to={item.to} title={item.title} icon = {<Icon />} active = {<ActiveIcon />}/>
                    })
                }
            </Menu>
            <SuggestAccounts lable='Có thể bạn quan tâm'/>
            <SuggestAccounts lable='Các tài khoản đang follow'/>
        </aside>
    );
}

export default Sidebar;
