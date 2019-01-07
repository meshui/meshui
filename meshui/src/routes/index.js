
import SiteLayout from '../hoc/Layouts/Site'
import AdminLayout from '../hoc/Layouts/Admin'
import AuthLayout from '../hoc/Layouts/Auth'
import AppLayout from '../hoc/Layouts/App'


import Test from '../components/Test'
import Error404 from '../components/Errors/Error404'


var indexRoutes = [
  { path: "/test1", layout: SiteLayout, component: Test },
  { path: "/test2", layout: AdminLayout, component: Test },
  { path: "/test3", layout: AuthLayout, component: Test },
  { path: "/test4", layout: AppLayout, component: Test },

  { path: "/error", layout: SiteLayout, component: Error404 },
];

export default indexRoutes;