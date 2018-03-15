import React from 'react'
import Groups from '../../Tables/Groups'
import { Link } from 'react-router-dom'

// Backbone
import MemberModel from '../../../Models/Member'

import MemberForm from '../../Forms/Member'

module.exports = class Show extends React.Component
{
	constructor(props)
	{
		super(props);

		var member = new MemberModel({
			member_id: this.props.match.params.member_id
		});

		var _this = this;
		member.fetch();

		this.state = {
			model: member,
		};
	}


	render()
	{
		return (
			<div>
				<MemberForm model={this.state.model} route={this.props.route} />
			</div>
		);
	}
}