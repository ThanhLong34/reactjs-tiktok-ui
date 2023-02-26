import { routes } from '@/configs';

// Layouts
import { HeaderOnly } from '@/layouts';

// Pages
import HomePage from '@/pages/Home';
import FollowingPage from '@/pages/Following';
import UploadPage from '@/pages/Upload';
import SearchPage from '@/pages/Search';
import ProfilePage from '@/pages/Profile';

// Routes không cần đăng nhập vẫn truy cập được
const publicRoutes = [
   {
      path: routes.home,
      component: HomePage,
   },
   {
      path: routes.following,
      component: FollowingPage,
   },
   {
      path: routes.upload,
      component: UploadPage,
      layout: HeaderOnly,
   },
   {
      path: routes.search,
      component: SearchPage,
      layout: null,
   },
   {
      path: routes.profile,
      component: ProfilePage,
      layout: null,
   },
];

// Routes cần đăng nhập mới truy cập được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
