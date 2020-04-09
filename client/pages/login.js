import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { FormControl, Container, Button, Typography } from '@material-ui/core'

class Login extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			qrl          : '',
			email        : '',
			password     : '',
			authenticated: false,
			isloading    : false,
			error        : false
		}
		this.handleChange = this.handleChange.bind( this )
		this.handleSubmit = this.handleSubmit.bind( this )
		this.signIn = this.signIn.bind( this )
	}

	async signIn( email, password ) {
		this.setState( { isloading: true, error: false } )
		//signin function
	}

	handleSubmit( event ) {
		event.preventDefault()
		this.signIn( this.state.email, this.state.password )
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
                    SIGNIN
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
					<FormControl fullWidth={true} margin='normal'>
						<TextField id="email" label="Email" name="email" variant="filled" onChange={this.handleChange} value={this.state.email} />
					</FormControl>
					<FormControl fullWidth={true} margin='normal'>
						<TextField id="password" label="Password" type="password" name="password" variant="filled" onChange={this.handleChange} value={this.state.password} />
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

	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Login )
