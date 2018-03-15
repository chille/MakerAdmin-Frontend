import React from 'react'

// Backbone
import SalesHistoryCollection from '../Collections/SalesHistory'
import SalesHistoryModel from '../Models/SalesHistory'

import TableFilterBox from '../../TableFilterBox'
import History from '../Components/Tables/History'

module.exports = class Meep extends React.Component
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
			<div>
				<h2>Försäljningshistorik</h2>
				<p>På denna sida ser du en lista på samtliga sålda produkter.</p>
				<TableFilterBox onChange={this.updateFilters} />
				<History type={SalesHistoryCollection} filters={this.state.filters} />
			</div>
		);
	}
}
//SalesHistoryHandler.title = "Visa försäljning";