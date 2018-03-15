import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import Currency from '../../../Components/Currency'

module.exports = class History extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 7;
	}

	componentWillMount()
	{
		this.fetch();
	},

	renderHeader()
	{
		return [
			{
				title: "Datum",
				sort: "accounting_date",
			},
			{
				title: "Order",
				sort: "extid",
			},
			{
				title: "Medlem",
				sort: "member_number",
			},
			{
				title: "Beskrivning",
			},
			{
				title: "Produkt",
				sort: "product_title",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
				sort: "amount",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td>{row.attributes.accounting_date}</td>
				<td><Link to={"/entity/" + row.attributes.entity_id}>{row.attributes.extid}</Link></td>
				<td><Link to={"/membership/members/" + row.attributes.member_number}>{row.attributes.member_firstname} {row.attributes.member_lastname}</Link></td>
				<td>{row.attributes.instruction_title}</td>
				<td><Link to={"/sales/products/" + row.attributes.product_id}>{row.attributes.product_title}</Link></td>
				<td className="uk-text-right"><Currency value={-1 * row.attributes.amount} /></td>
			</tr>
		);
	}
}