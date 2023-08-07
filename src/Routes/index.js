//Layouts
import { HeaderOnly } from "../components/layouts"


//pages
import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import Search from "../pages/Search"



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
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
]

const praviteRoutes = []

export {publicRoutes, praviteRoutes}