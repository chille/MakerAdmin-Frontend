import React from 'react'

// Backbone
import TransactionCollection from '../../Collections/Transaction'

import TransactionsUser from '../../Components/Tables/TransactionsUser'

module.exports = class List extends React.Component
{
	render()
	{
		return (
			<TransactionsUser
				type={TransactionCollection}
				dataSource={{
					url: "/related",
					params: {
						param: "/membership/member/" + this.props.match.params.member_id,
						matchUrl: "/economy/transaction/(.*)",
						from: "economy/transactions",
					}
				}}
			/>
		);
	}
}