import React from 'react'

// Backbone
import AccountModel from '../..//Models/Account'

import EconomyAccount from '../../Components/Forms/Account'

module.exports = class Meep extends React.Component
{
	constructor()
	{
		super();

		var account = new AccountModel({
			period: this.props.match.params.period,
			account_number: this.props.match.params.id
		});
		account.fetch();

		this.state = {
			model: account,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Redigera konto</h2>
				<EconomyAccount model={this.state.model} />
			</div>
		);
	}
}