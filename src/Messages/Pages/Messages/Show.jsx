import React from 'react'

// Backbone
import MessageModel from '../../Models/Message'
import RecipientsCollection from '../../Collections/Recipients'

//import { Link } from 'react-router-dom'
import RecipientsTable from '../../Components/Tables/Recipients'
import Message from '../../Components/Message'

module.exports = class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		// Load message model
		var message = new MessageModel({
			message_id: this.props.match.params.id
		});
		message.fetch();

		this.state = {
			message_model: message,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Utskick</h2>
				<Message model={this.state.message_model} />

				<RecipientsTable
					type={RecipientsCollection}
					dataSource={{
						url: "/messages/" + this.props.match.params.id + "/recipients",
					}}
				/>
			</div>
		);
	}
}
//Recipients.title = "";