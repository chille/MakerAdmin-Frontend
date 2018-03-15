import React from 'react'
import { Route, Switch } from 'react-router'

import Overview from './Pages/Overview'

module.exports = class Index extends React.Component
{
	render()
	{
		return (
			<Switch>
				<Route exact path="/statistics" component={Overview} />
			</Switch>
		);
	}
}