import React from 'react'

// Backbone
import CostCenterModel from '../../Models/CostCenter'

import EconomyCostCenter from '../../Components/Forms/CostCenter'

module.exports = class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var id = this.props.match.params.id;

		var costcenter = new CostCenterModel({id: id});
		costcenter.fetch();

		this.state = {
			model: costcenter
		};
	}

	render()
	{
		return (<EconomyCostCenter model={this.state.model} />);
	}
}