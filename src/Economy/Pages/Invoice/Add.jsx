import React from 'react'

// Backbone
import InvoiceModel from '../../Models/Invoice'

import Invoice from '../../Components/Forms/Invoice'

module.exports = class Meep extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			model: new InvoiceModel()
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa faktura</h2>
				<Invoice model={this.state.model} />
			</div>
		);
	}
}