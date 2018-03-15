import React from 'react'
import MessagesTable from '../Tables/Recipients'

// Backbone
import MessageModel from '../../Models/Message'

import { Link, withRouter } from 'react-router-dom'
import MessageForm from '../../Components/Forms/Message'

module.exports = class New extends React.Component
{
	constructor()
	{
		var newModel = new MessageModel();

		this.state = {
			model: newModel,
		};
	}

	onCancel()
	{
		// Reset the recipients field so the page exit handler don't whine
		this.state.model.set("recipients", []);

		// Go back to members messages
		this.props.history.push("/membership/members/" + this.props.match.params.member_id + "/messages");
	}

	onCreate(model)
	{
		this.setState({ignoreExitHook: true});
		this.props.history.push("/membership/members/" + this.props.match.params.member_id + "/messages");
		UIkit.notify("Ditt meddelande har skickats", {status: "success"});
	}

	render()
	{
		return (
			<div>
				<MessageForm recipient={{type: "member", id: this.props.match.params.member_id}} ref="message" model={this.state.model} onCancel={this.onCancel.bind(this)} onCreate={this.onCreate.bind(this)} route={this.props.route} />
			</div>
		);
	}
}