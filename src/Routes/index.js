import Following from "../Pages/Following";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Upload from "../Pages/Upload";

import { HeaderOnly } from "../Components/Layouts";

const publicRoutes = [
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
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
]

const privateRoutes = []

export {publicRoutes, privateRoutes};
