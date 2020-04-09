import AppRoot from './app'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Changepw from './pages/changepw'

const routes = [
	{
		component: AppRoot,
		routes   : [
			{
				path     : '/',
				exact    : true,
				component: Home
			},
			{
				path     : '/home',
				component: Home
			},
			{
				path     : '/login',
				component: Login
			},
			{
				path     : '/signup',
				component: Signup
			},
			{
				path     : '/changepw',
				component: Changepw
			},
			{
				path     : '*',
				component: Home
			}
		]
	}
]

export default routes
