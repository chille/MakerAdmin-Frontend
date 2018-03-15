import React from 'react'

// Backbone
import InstructionModel from '../../Models/Instruction'

import EconomyAccountingInstruction from '../../Components/Forms/Instruction'
import { withRouter } from 'react-router'

module.exports = withRouter(class Meep extends React.Component
{
	constructor()
	{
		super();

		var instruction = new InstructionModel();

		this.state = {
			model: instruction
		};
	}

	render()
	{
		return (<EconomyAccountingInstruction model={this.state.model} route={this.props.route} />);
	}
});