import HomeRouter from '../components/index'
import GalleryPage from '../pages/gallery'
import Blog from '../pages/blog'
const publicRoute = [
    { path: '/', element: <HomeRouter /> },
    { path: '/gallery', element: <GalleryPage /> },
    { path: '/blog', element: <Blog /> },
]

export default publicRoute
