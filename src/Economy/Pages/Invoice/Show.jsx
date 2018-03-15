import React from 'react'

// Backbone
import InvoiceModel from '../../Models/Invoice'

import Invoice from '../../Components/Forms/Invoice'

module.exports = class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var id = this.props.match.params.id;
		var invoice = new InvoiceModel({id: id});
		invoice.fetch();

		this.state = {
			model: invoice
		};
	}

	render()
	{
		return (
			<div>
				<h2>Faktura</h2>
				<Invoice model={this.state.model} />
			</div>
		);
	}
}