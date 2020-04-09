import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from 'client/state/actions/users'
import { Container, Typography } from '@material-ui/core'

class Home extends Component {

	static fetchData( store ) {
		return store.dispatch( settings() )
	}

	render() {
		return (
			<Container maxWidth='sm'   style={{padding: '5px'}}>
				<Typography variant="h4"  style={{marginTop: '15px'}} component="h4">
             SSR HMR REACT APP V2
				</Typography>
				<ul>
					<li>Ready to use scafold for rapid prototyping</li>
					<li>Take note of the pattern</li>
					<li>For upgrades please contact me or submit a pull request</li>
					<li>SSR - server side rendering</li>
					<li>HMR - hot module reload</li>
				</ul>
			</Container>
		)
	}
}

function mapStateToProps( state ) {
	const {users} = state
	return {users}
}

function mapDispatchToProps( dispatch ) {
	return {
		//see signup sample
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Home )
