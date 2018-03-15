import React from 'react'

// Backbone
import CostCenterCollection from '../../Collections/CostCenter'

import EconomyCostCenters from './../../Components/Tables/CostCenters'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Kostnadsställen</h2>
				<EconomyCostCenters
					type={CostCenterCollection}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/costcenter"
					}}
				/>
			</div>
		);
	}
}