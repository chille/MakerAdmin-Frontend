import React from 'react'

// Backbone
import AccountModel from '../../Models/Account'
import TransactionCollection from '../../Collections/Transaction'

import EconomyAccount from '../../Components/Forms/Account'
import Transactions from '../../Components/Tables/Transactions'
import { withRouter } from 'react-router'

module.exports = withRouter(class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		// Load account model
		var account = new AccountModel({
			period: this.props.match.params.period,
			account_number: this.props.match.params.account_number
		});
		account.fetch();

		this.state = {
			account_model: account,
		};
	}

	render()
	{
		console.log("Period: " + this.props.match.params.period);

		return (
			<div>
				<h2>Konto</h2>
				<EconomyAccount
					model={this.state.account_model}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/account/" + this.props.match.params.account_number
					}}
					route={this.props.route}
				/>
				<Transactions
					type={TransactionCollection}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/account/" + this.props.match.params.account_number + "/transactions"
					}}
					route={this.props.route}
				/>
			</div>
		);
	}
});