import React from 'react'
import { renderRoutes } from 'react-router-config'
import Drawer from '../components/drawer'
import 'babel-polyfill'

const AppRoot = ( props ) => {
	return <div>
		<Drawer />
		{renderRoutes( props.route.routes )}
	</div>
}

export default AppRoot
