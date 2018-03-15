import React from 'react'
import BackboneTable from '../../../BackboneTable'

import { Link } from 'react-router-dom'
//import Currency from '../../../Components/Currency'

module.exports = class CostCenters extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 5;
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
			},
			{
				title: "Bokföringsdatum",
			},
			{
				title: "Beskrivning",
			},
			{
				title: "Belopp",
			},
		];
	},

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/economy/instruction/" + row.attributes.id}>{row.attributes.verification_number}</Link></td>
				<td>{row.attributes.accounting_date}</td>
				<td>{row.attributes.title}</td>
				<td>{row.attributes.amount}</td>
				<td><Link to={"/economy/instruction/" + row.attributes.id}>Visa</Link></td>
			</tr>
		);
	}
}