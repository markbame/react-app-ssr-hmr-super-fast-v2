import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
const Navigation = ( {name} ) => {
	return (
		<div>
			<h3>{name}</h3>
			<Menu mode="horizontal">
				<Menu.Item key="home">
					<Link to="/home">Home</Link>
				</Menu.Item>
				<Menu.Item key="invoices">
					<Link to="/invoices">Invoices</Link>
				</Menu.Item>
				<Menu.Item key="products">
					<Link to="/products">Products</Link>
				</Menu.Item>
				<Menu.Item key="admin">
					<Link to="/admin">Settings</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Navigation
