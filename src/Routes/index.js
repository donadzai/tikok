import config from "../config";

import Following from "../Pages/Following";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Upload from "../Pages/Upload";
import Profile from "../Pages/Profile";

import { HeaderOnly } from "../layouts";

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path:config.routes.following,
        component: Following,
    },
    {
        path:config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path:config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path:config.routes.profile,
        component: Profile,
    },
]

const privateRoutes = []

export {publicRoutes, privateRoutes};
