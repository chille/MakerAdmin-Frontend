import React from 'react'

// Backbone
import GroupModel from '../../Models/Group'

import Group from '../../Components/Forms/Group'
import { withRouter } from 'react-router'

module.exports = class Add extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			model: new GroupModel()
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa grupp</h2>
				<Group model={this.state.model} route={this.props.route} />
			</div>
		);
	}
}