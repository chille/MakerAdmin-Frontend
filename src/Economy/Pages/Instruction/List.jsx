import React from 'react'

// Backbone
import InstructionCollection from '../../Collections/Instruction'

import { Link, withRouter } from 'react-router-dom'
import TableFilterBox from '../../../TableFilterBox'

import EconomyAccountingInstructions from '../../Components/Tables/Instructions'

module.exports = withRouter(class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			filters: this.props.filters || {},
		};
	}

	updateFilters(newFilter)
	{
		var filters = this.overrideFiltersFromProps(newFilter);
		this.setState({
			filters: filters
		});
	}

	overrideFiltersFromProps(filters)
	{
		return filters;
	}

	render()
	{
		return (
			<div className="uk-width-1-1">
				<h2>Verifikationer</h2>

				<p className="uk-float-left">Lista över samtliga verifikationer i bokföringen</p>
				<Link to={"/economy/" + this.props.match.params.period + "/instruction/add"} className="uk-button uk-button-primary uk-float-right"><i className="uk-icon-plus-circle"></i> Skapa ny verifikation</Link>

				<TableFilterBox onChange={this.updateFilters} />

				<EconomyAccountingInstructions
					type={InstructionCollection}
					filters={this.state.filters}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/instruction"
					}}
				/>
			</div>
		);
	}
});
//EconomyAccountingInstructionsHandler.title = "Visa verifikationer";