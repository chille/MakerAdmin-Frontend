import React from 'react'

// Backbone
import KeyModel from '../Models/Key'

import Key from '../Components/Forms/Key'
import { withRouter } from 'react-router'

module.exports = withRouter(class Show extends React.Component
{
	constructor(props)
	{
		super(props);

		var key = new KeyModel({
			key_id: this.props.match.params.id
		});

		key.fetch();

		this.state =  {
			model: key,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Redigera RFID-nyckel</h2>
				<Key model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});
//KeysOverviewHandler.title = "Nycklar";