import DashboardLayout from '../layout/DashboardLayout.vue'
import UserDashboardLayout from '../layout/UserDashboardLayout.vue'
import NotFound from '../pages/NotFoundPage.vue'
import UserOverview from 'src/pages/UserOverview.vue'
import AdminOverview from 'src/pages/AdminOverview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import AdminProfile from 'src/pages/AdminProfile.vue'
import Login from 'src/pages/LoginView.vue'

const routes = [
  // Nueva ruta para redirigir al inicio de sesión
  {
    path: '/',
    redirect: '/login'
  },
  // Rutas para el rol de admin
  {
    path: '/admin',
    component: DashboardLayout,
    children: [
      {
        path: '/',
        redirect: 'overview'
      },
      {
        path: 'overview',
        name: 'Overview',
        component: AdminOverview
      },
      {
        path: 'user',
        name: 'User',
        component: AdminProfile
      },
      // Resto de las rutas para admin
    ]
  },
  // Rutas para el rol de usuario
  {
    path: '/user',
    component: UserDashboardLayout,
    children: [
      {
        path: '/',
        redirect: 'overview'
      },
      {
        path: 'overview',
        name: 'Overview',
        component: UserOverview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      // Resto de las rutas para usuario
    ]
  },
  // Ruta para la página de inicio de sesión
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // Ruta para página no encontrada
  { path: '*', component: NotFound }
]

export default routes;
