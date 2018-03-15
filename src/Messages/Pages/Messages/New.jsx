import React from 'react'
import { withRouter } from 'react-router'
import MessageForm from '../../Components/Forms/Message'

// Backbone
import MessageModel from '../../Models/Message'

module.exports = withRouter(class Meep extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			model: new MessageModel(),
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa utskick</h2>
				<MessageForm model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});
//MailSendHandler.title = "Skapa utskick";