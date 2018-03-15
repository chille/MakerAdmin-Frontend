import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateField from '../../../Components/Date'

module.exports = class Subscriptions extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 4;
	}

	componentWillMount()
	{
		this.fetch();
	}

	renderHeader()
	{
		return [
			{
				title: "Medlem",
			},
			{
				title: "Startdatum",
				sort: "date_start",
			},
			{
				title: "Beskrivning",
				sort: "description",
			},
			{
				title: "Produkt",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td>{row.attributes.member_id}</td>
				<td><DateField date={row.attributes.date_start} /></td>
				<td>{row.attributes.title}</td>
				<td><Link to={"/sales/product/" + row.attributes.product_id}>Visa</Link></td>
			</tr>
		);
	}
}