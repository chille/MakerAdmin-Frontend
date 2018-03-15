import React from 'react'
import BackboneTable from '../../../BackboneTable'

import DateField from '../../../Components/Date'
import { Link, withRouter } from 'react-router-dom'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = withRouter(class AccountingPeriods extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 7;
	}

	componentWillMount()
	{
		this.fetch();
	}

	removeTextMessage(entity)
	{
		return "Are you sure you want to remove period \"" + entity.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.modal.alert("Error deleting period");
	}

	renderHeader()
	{
		return [
			{
				title: "Namn",
				sort: "name",
			},
			{
				title: "Titel",
				sort: "title",
			},
			{
				title: "Period",
				sort: "start",
			},
			{
				title: "",
			},
		];
	}

	activatePeriod(period)
	{
/*
		console.log("Aktivera räkneskapsår " + period);

		// TODO: Set config
		console.log("Gammalt val: " + config.accountingPeriod);
		config.accountingPeriod = period;
*/

		this.props.history.push("/economy/" + period);
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/settings/economy/accountingperiod/" + row.attributes.accountingperiod_id + "/edit"}>{row.attributes.name}</Link></td>
				<td>{row.attributes.title}</td>
				<td><DateField date={row.attributes.start} /> - <DateField date={row.attributes.end} /></td>
				<td>
					<TableDropdownMenu>
						<a onClick={this.activatePeriod.bind(this, row.attributes.name)}><i className="uk-icon-check"></i> Välj räkneskaper</a>
						<Link to={"/settings/economy/accountingperiod/" + row.attributes.accountingperiod_id + "/edit"}><i className="uk-icon-cog"></i> Redigera räkneskapsår</Link>
						{this.removeButton(i, "Ta bort räkneskapsår")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
});