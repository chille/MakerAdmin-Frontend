import React from 'react'
import BackboneTable from '../../../BackboneTable'

import { Link, withRouter } from 'react-router-dom'
import Currency from '../../../Components/Currency'
import DateField from '../../../Components/Date'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = withRouter(class Instructions extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 6;
	}

	componentWillMount()
	{
		this.fetch();
	}

	renderHeader()
	{
		return [
			{
				title: "#",
				sort: "instruction_number",
			},
			{
				title: "Bokföringsdatum",
				sort: "accounting_date",
			},
			{
				title: "Beskrivning",
				sort: "title",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
			},
			{
				title: "",
			},
			{
				title: "",
			},
		];
	}

	removeTextMessage(entity)
	{
		return "Are you sure you want to remove instruction \"" + entity.instruction_number + " " + entity.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.modal.alert("Error deleting instruction");
	}

	renderRow(row, i)
	{
//		if(typeof row.files != "undefined")
		if(row.attributes.has_vouchers)
		{
			var icon = <i className="uk-icon-file"></i>;
		}
		else
		{
			var icon = "";
		}

		return (
			<tr key={i}>
				<td><Link to={"/economy/" + this.props.match.params.period + "/instruction/" + row.attributes.instruction_number}>{row.attributes.instruction_number}</Link></td>
				<td><DateField date={row.attributes.accounting_date}/></td>
				<td>{row.attributes.title}</td>
				<td className="uk-text-right"><Currency value={row.attributes.balance}/></td>
				<td>{icon}</td>
				<td>
					<TableDropdownMenu>
						<Link to={"/economy/" + this.props.match.params.period + "/instruction/" + row.attributes.instruction_number}><i className="uk-icon-cog"/> Redigera verifikation</Link>
						{this.removeButton(i, "Ta bort verifikation")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
});