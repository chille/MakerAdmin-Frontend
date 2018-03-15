import React from 'react'
import { withRouter } from 'react-router'

// Backbone
import KeyModel from '../../Models/Key'

import Keys from '../Tables/Keys'
import Key from '../Forms/Key'

module.exports = class Add extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			model: new KeyModel({member_id: this.props.match.params.member_id})
		};
	}

	closeForm()
	{
		this.props.history.push("/membership/members/" + this.props.match.params.member_id + "/keys");
	}

	render()
	{
		return (
			<Key model={this.state.model} ref="edit" onCancel={this.closeForm.bind(this)} onCreate={this.closeForm.bind(this)} onRemove={this.closeForm.bind(this)} route={this.props.route} />
		);
	}
}