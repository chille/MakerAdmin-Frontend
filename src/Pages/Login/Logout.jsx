import React from 'react';
import auth from '../../auth'
import { withRouter } from 'react-router'

module.exports = withRouter(class Logout extends React.Component
{
	componentDidMount()
	{
		auth.logout()
		this.props.history.push("/");
	}

	render()
	{
		return <p>Logging out...</p>
	}
});