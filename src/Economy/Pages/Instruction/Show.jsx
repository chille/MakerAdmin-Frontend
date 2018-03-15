import React from 'react'

// Backbone
import InstructionModel from '../../Models/Instruction'

import EconomyAccountingInstruction from '../../Components/Forms/Instruction'
import { withRouter } from 'react-router'

module.exports = withRouter(class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var instruction = new InstructionModel({
			period: this.props.match.params.period,
			instruction_number: this.props.match.params.instruction_number
		});
		instruction.fetch();

		this.state = {
			model: instruction
		};
	}

	render()
	{
		return (<EconomyAccountingInstruction model={this.state.model} route={this.props.route} />);
	}
});