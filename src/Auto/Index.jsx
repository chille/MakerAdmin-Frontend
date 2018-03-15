import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Overview from './Pages/Test'
import Tictail from '../Tictail/Pages/Overview'
import Verification from './Pages/Verification'
import MultiAccess from './Pages/Multiaccess'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<Redirect from="/auto" to="/auto/overview" />
				<Switch>
					<Route exact path="/auto/overview" component={Overview} />
					<Route exact path="/auto/tictail" component={Tictail} />
					<Route exact path="/auto/verification" component={Verification} />
					<Route exact path="/auto/multiaccess" component={MultiAccess} />
				</Switch>
			</div>
		);
	}
}