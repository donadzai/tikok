//Layouts
import { HeaderOnly } from "../components/Layouts"


//pages
import Home from "../Pages/Home"
import Following from "../Pages/Following"
import Upload from "../Pages/Upload"
import Search from "../Pages/Search"



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