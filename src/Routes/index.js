<<<<<<< HEAD
//Layouts
import { HeaderOnly } from "../components/Layouts"


//pages
import Home from "../Pages/Home"
import Following from "../Pages/Following"
import Upload from "../Pages/Upload"
import Search from "../Pages/Search"


=======
import Following from "../pages/Following";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Upload from "../pages/Upload";

import { HeaderOnly } from "../components/layouts";
>>>>>>> alpha

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
<<<<<<< HEAD
        path: '/search',
        component: Search,
        layout: null,
    },
    {
=======
>>>>>>> alpha
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
<<<<<<< HEAD
]

const praviteRoutes = []

export {publicRoutes, praviteRoutes}
=======
    {
        path: '/search',
        component: Search,
        layout: null,
    },
]

const privateRoutes = []

export {publicRoutes, privateRoutes};
>>>>>>> alpha
