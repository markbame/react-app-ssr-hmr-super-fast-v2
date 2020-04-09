import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { FormControl, Container, Button, Typography } from '@material-ui/core'

class ChangePassword extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			qrl        : '',
			email      : '',
			oldPassword: '',
			password   : '',
			isloading  : false,
			success    : false
		}
		this.handleChange = this.handleChange.bind( this )
		this.handleSubmit = this.handleSubmit.bind( this )
		this.changePW = this.changePW.bind( this )
	}

	async changePW( email, tempPassword, password ) {
		this.setState( { isloading: true } )
		//change pw function here
	}

	handleSubmit( event ) {
		event.preventDefault()
		this.changePW( this.state.email, this.state.oldPassword, this.state.password )
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
          CHANGE PASSWORD
				</Typography>

				{ this.state.success &&
              <Redirect
              	to={{
              		pathname: '/login',
              		state   : { }
              	}}
              />
				}

				{
					this.state.isloading &&
            <h3 style={{color: '#828282'}}> Please wait.._ </h3>
				}

				{
					this.state.error &&
            <h3 style={{color: '#dc143c'}}> ERROR PLEASE TRY AGAIN_ </h3>
				}

				<form onSubmit={this.handleSubmit} noValidate autoComplete="off">
					<FormControl fullWidth={true} margin='normal'>
						<TextField id="email" label="Email" name="email" variant="filled" onChange={this.handleChange} value={this.state.email} />
					</FormControl>
					<FormControl fullWidth={true} margin='normal'>
						<TextField id="oldPassword" label="Old Password" name="oldPassword" type="password" variant="filled" onChange={this.handleChange} value={this.state.oldPassword} />
					</FormControl>
					<FormControl fullWidth={true} margin='normal'>
						<TextField id="password" label="New Password" name="password" type="password" variant="filled" onChange={this.handleChange} value={this.state.password} />
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

export default connect( mapStateToProps, mapDispatchToProps )( ChangePassword )
