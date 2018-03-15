import React from 'react'

// Backbone
import MasterledgerCollection from '../Collections/Masterledger'

import EconomyAccounts from '../Components/Tables/Masterledger'

module.exports = class MasterLedger extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Huvudbok</h2>
				<EconomyAccounts
					type={MasterledgerCollection}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/masterledger",
					}}
				/>
			</div>
		);
	}
}