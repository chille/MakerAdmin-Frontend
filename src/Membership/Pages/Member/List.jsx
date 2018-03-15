import React from 'react'

// Backbone
import MemberCollection from '../../Collections/Member'

import { Link } from 'react-router-dom'
import TableFilterBox from '../../../TableFilterBox'

import Members from '../../Components/Tables/Members'

module.exports = class List extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			filters: this.props.filters || {}
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
				<h2>Medlemmar</h2>

				<p className="uk-float-left">På denna sida ser du en lista på samtliga medlemmar.</p>
				<Link to="/membership/members/add" className="uk-button uk-button-primary uk-float-right"><i className="uk-icon-plus-circle"></i> Skapa ny medlem</Link>

				<TableFilterBox onChange={this.updateFilters} />
				<Members type={MemberCollection} filters={this.state.filters} />
			</div>
		);
	}
}
//MembersHandler.title = "Visa medlemmar";