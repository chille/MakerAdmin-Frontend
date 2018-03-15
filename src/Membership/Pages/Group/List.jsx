import React from 'react'

// Backbone
import GroupCollection from '../../Collections/Group'

import Groups from '../../Components/Tables/Groups'

import { Link } from 'react-router-dom'

import TableFilterBox from '../../../TableFilterBox'

module.exports = class List extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			filters: {}
		};
	}

	overrideFiltersFromProps(filters)
	{
		return filters;
	}

	updateFilters(newFilter)
	{
		var filters = this.overrideFiltersFromProps(newFilter);
		this.setState({
			filters: filters
		});
	}

	render()
	{
		return (
			<div>
				<h2>Grupper</h2>

				<p className="uk-float-left">På denna sida ser du en lista på samtliga grupper.</p>
				<Link className="uk-button uk-button-primary uk-float-right" to="/membership/groups/add"><i className="uk-icon-plus-circle"></i> Skapa ny grupp</Link>

				<TableFilterBox onChange={this.updateFilters.bind(this)} />
				<Groups type={GroupCollection} filters={this.state.filters} />
			</div>
		);
	}
}
//GroupsHandler.title = "Visa grupper";