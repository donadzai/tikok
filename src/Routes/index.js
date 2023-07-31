import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Upload from '../Pages/Upload';
import NoLayout from '../Pages/NoLayout';

const publicRotes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: 'onlyheader'
    },
    {
        path: '/nolayout',
        component: NoLayout,
        layout: 'nolayout'
    },
];

const privateRotes = [];

export {privateRotes, publicRotes}
