import React from 'react'

// Backbone
import GroupModel from '../../Models/Group'

import Group from '../../Components/Forms/Group'
import { withRouter } from 'react-router'

module.exports = withRouter(class Edit extends React.Component
{
	constructor(props)
	{
		super(props);

		console.log(this.props.match.params);
		var group = new GroupModel({group_id: this.props.match.params.group_id});
		group.fetch();

		this.state = {
			model: group,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Redigera grupp</h2>
				<Group model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});
//GroupEditHandler.title = "Redigera grupp";