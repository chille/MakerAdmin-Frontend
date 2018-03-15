import React from 'react'
import { withRouter } from 'react-router'

// Backbone
import KeyModel from '../../Models/Key'

import Keys from '../Tables/Keys'
import Key from '../Forms/Key'

module.exports = class Edit extends React.Component
{
	constructor(props)
	{
		super(props);

		// Fetch the model from server
		var newModel = new KeyModel({key_id: this.props.match.params.key_id})
		newModel.fetch();

		this.state = {
			model: newModel,
		};
	}

	closeForm()
	{
		this.props.history.push("/membership/members/" + this.props.match.params.member_id + "/keys");
	}

	render()
	{
		return (
			<Key model={this.state.model} ref="edit" member_number={this.props.match.member_number} onCancel={this.closeForm.bind(this)} onUpdate={this.closeForm.bind(this)} onRemove={this.closeForm.bind(this)} route={this.props.route} />
		);
	}
}