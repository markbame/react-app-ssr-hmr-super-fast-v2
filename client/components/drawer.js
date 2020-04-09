import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Home, LockOpen, VpnKey, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles( {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
} )

export default function SideDrawer() {
	const classes = useStyles()
	const [state, setState] = React.useState( {
		top   : false,
		left  : false,
		bottom: false,
		right : false,
	} )

	const toggleDrawer = ( side, open ) => ( event ) => {
		if ( event.type === 'keydown' && ( event.key === 'Tab' || event.key === 'Shift' ) ) {
			return
		}

		setState( { ...state, [side]: open } )
	}

	const sideList = ( side ) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer( side, false )}
			onKeyDown={toggleDrawer( side, false )}
		>
			<List>
				<Link  to="/">
					<ListItem button key={'Home'}>
						<ListItemIcon><Home /></ListItemIcon>
						<ListItemText primary={'Home'} />
					</ListItem>
				</Link>
				<Link  to="/login">
					<ListItem button key={'SignIn'}>
						<ListItemIcon><LockOpen /></ListItemIcon>
						<ListItemText primary={'SignIn'} />
					</ListItem>
				</Link>
				<Link  to="/signup">
					<ListItem button key={'SignUp'}>
						<ListItemIcon><ExitToApp /></ListItemIcon>
						<ListItemText primary={'SignUp'} />
					</ListItem>
				</Link>
				<Link  to="/changepw">
					<ListItem button key={'Changepw'}>
						<ListItemIcon><VpnKey /></ListItemIcon>
						<ListItemText primary={'Change Password'} />
					</ListItem>
				</Link>
			</List>
			<Divider />
		</div>
	)

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton onClick={toggleDrawer( 'left', true )} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon style={{ color: '#fff' }} />
					</IconButton>
					<Drawer open={state.left} onClose={toggleDrawer( 'left', false )}>
						{sideList( 'left' )}
					</Drawer>
				</Toolbar>
			</AppBar>

		</div>
	)
}
