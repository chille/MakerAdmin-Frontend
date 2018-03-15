import React from 'react'
import { Route, Switch } from 'react-router'

import List from './Pages/List'
import Add from './Pages/Add'
import Show from './Pages/Show'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<Route exact path="/keys" component={List} />
				<Switch>
					<Route exact path="/keys/add" component={Add} />
					<Route exact path="/keys/:id" component={Show} />
				</Switch>
			</div>
		);
	}
}