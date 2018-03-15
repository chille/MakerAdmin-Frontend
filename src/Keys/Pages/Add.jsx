import React from 'react'

// Backbone
import KeyModel from '../Models/Key'

import Key from '../Components/Forms/Key'
import { withRouter } from 'react-router'

module.exports = withRouter(class Add extends React.Component
{
	constructor()
	{
		super();

		this.state =  {
			model: new KeyModel,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Lägg till ny RFID-tagg</h2>
				<Key model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});
//KeysOverviewHandler.title = "Nycklar";