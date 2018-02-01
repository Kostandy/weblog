import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Button } from 'material-ui';
import Typography from 'material-ui/Typography';
import { School } from 'material-ui-icons';

const styles = theme => ({
	root: {
		width: '100%',
	},
	flex: {
		flex: 1,
	},
	icon: {
		margin: "0 10px",
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

function Navbar(props) {
	const { classes } = props;
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<School className={classes.icon} />
				<Typography type="title" color="inherit" className={classes.flex} align="left">
					{props.siteName}
				</Typography>
				<Button color="inherit" className={classes.alignRight}>Login</Button>
			</Toolbar>
		</AppBar>
	);
}

Navbar.defaultProps = {
	siteName: "Weblog"
};

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);