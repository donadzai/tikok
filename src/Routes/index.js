import routes from "../config/routes";

import Following from "../Pages/Following";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Upload from "../Pages/Upload";
import Profile from "../Pages/Profile";

import { HeaderOnly } from "../Components/Layouts";

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path:routes.following,
        component: Following,
    },
    {
        path:routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path:routes.search,
        component: Search,
        layout: null,
    },
    {
        path:routes.profile,
        component: Profile,
    },
]

const privateRoutes = []

export {publicRoutes, privateRoutes};
