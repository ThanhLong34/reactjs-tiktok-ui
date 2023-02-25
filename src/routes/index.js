// Layouts
import { HeaderOnly } from '@/components/Layout';

// Pages
import HomePage from '@/pages/Home';
import FollowingPage from '@/pages/Following';
import UploadPage from '@/pages/Upload';
import SearchPage from '@/pages/Search';

// Routes không cần đăng nhập vẫn truy cập được
const publicRoutes = [
   {
      path: '/',
      component: HomePage,
   },
   {
      path: '/following',
      component: FollowingPage,
   },
   {
      path: '/upload',
      component: UploadPage,
      layout: HeaderOnly,
   },
   {
      path: '/search',
      component: SearchPage,
      layout: null,
   },
];

// Routes cần đăng nhập mới truy cập được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
