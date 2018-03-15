import React from 'react'

// Backbone
import InstructionModel from '../../Models/Instruction'

import EconomyAccountingInstructionImport from '../../Components/InstructionImport'

module.exports = class Meep extends React.Component
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
		return <EconomyAccountingInstructionImport model={this.state.model} />
	}
}