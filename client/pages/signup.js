import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { FormControl, Container, Button, Typography } from '@material-ui/core'

class SignUp extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			qrl           : '',
			email         : '',
			signUpComplete: false,
			isloading     : false,
			error         : false
		}
		this.handleChange = this.handleChange.bind( this )
		this.handleSubmit = this.handleSubmit.bind( this )
		this.signUp = this.signUp.bind( this )
	}

	async signUp( email ) {
		this.setState( { isloading: true } )
		if( result ) {
			return this.setState( { signUpComplete: true } )
		}
		return this.setState( { error: true } )
	}

	handleSubmit( event ) {
		event.preventDefault()
		this.signUp( this.state.email )
	}

	handleChange( event ) {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.setState( {
			[name]: value
		} )
	}

	render() {
		return (
			<Container maxWidth='sm'  style={{padding: '5px'}}>
				<Typography variant="h4" style={{marginTop: '15px'}} component="h4">
          SIGNUP
				</Typography>
				{
					this.state.isloading &&
            <h3 style={{color: '#828282'}}>  Please wait.._ </h3>
				}

				{
					this.state.error &&
            <h3 style={{color: '#dc143c'}}> ERROR PLEASE TRY AGAIN_ </h3>
				}

				<form onSubmit={this.handleSubmit}  noValidate autoComplete="off">
					<FormControl fullWidth={ true } margin='normal'>
						<TextField id="email" label="Email" variant="filled" name="email" onChange={this.handleChange} value={this.state.email} />
					</FormControl>
					<Button style={{marginTop: '15px', padding: '10px 20px'}} type="submit" variant="contained" color="secondary">
              Submit
					</Button>
				</form>
			</Container >
		)
	}
}

function mapStateToProps( state, props ) {
	return {
		state
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		//sample to take note
		//`signUpToQuicksight: bindActionCreators(signUpToQuicksight, dispatch)`
		// how to use: this.props.signUpToQuicksight()
		// signUpToQuicksight will be in state/actions/users
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( SignUp )
