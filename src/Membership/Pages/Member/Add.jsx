import React from 'react'

// Backbone
import MemberModel from '../../Models/Member'

import MemberForm from '../../Components/Forms/Member'
import { withRouter } from 'react-router'

module.exports = class Add extends React.Component
{
	constructor()
	{
		this.state = {
			model: new MemberModel(),
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa medlem</h2>
				<MemberForm model={this.state.model} route={this.props.route} />
			</div>
		);
	}
}
//MemberAddHandler.title = "Skapa medlem";