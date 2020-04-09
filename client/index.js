import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './state/store'
    
if ( module.hot ) {
	module.hot.accept()
}

const main = document.getElementById( 'root' )
const renderOrHydrate = main.innerHTML.trim().length ? 'hydrate' : 'render'
ReactDOM[renderOrHydrate](
	<Provider store={store}>
		<BrowserRouter store={store}>{renderRoutes( routes )}</BrowserRouter>
	</Provider>,
	main
)
