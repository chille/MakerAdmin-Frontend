import React from 'react'

// Backbone
import AccountModel from '../../Models/Account'

import EconomyAccount from '../../Components/Forms/Account'

module.exports = class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var account = new AccountModel({
			period: this.props.match.params.period,
		});
		this.state = {
			model: account,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa konto</h2>
				<EconomyAccount model={this.state.model} />
			</div>
		);
	}
}