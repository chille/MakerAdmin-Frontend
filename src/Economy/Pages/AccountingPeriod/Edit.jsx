import React from 'react'

// Backbone
import AccountingPeriodModel from '../../Models/AccountingPeriod'

import EconomyAccountingPeriod from '../../Components/Forms/AccountingPeriod'

module.exports = class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var id = this.props.match.params.id;

		var accountingperiod = new AccountingPeriodModel({accountingperiod_id: id});
		accountingperiod.fetch();

		this.state = {
			model: accountingperiod,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Redigera räkneskapsår</h2>
				<EconomyAccountingPeriod model={this.state.model} />
			</div>
		);
	}
}