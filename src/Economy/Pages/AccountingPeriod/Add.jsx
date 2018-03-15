import React from 'react'

// Backbone
import AccountingPeriodModel from '../../Models/Account'

import EconomyAccountingPeriod from '../../Components/Forms/AccountingPeriod'

module.exports = class Meep extends React.Component
{
	constructor()
	{
		super();

		var account = new AccountingPeriodModel();

		this.state = {
			model: account,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa räkneskapsår</h2>
				<EconomyAccountingPeriod model={this.state.model} />
			</div>
		);
	}
}