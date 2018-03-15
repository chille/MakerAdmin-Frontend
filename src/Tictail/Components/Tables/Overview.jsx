import React from 'react'
import { Link } from 'react-router-dom'
import Currency from '../../../Components/Currency'
import DateField from '../../../Components/Date'

// Backbone
import BackboneTable from '../../../BackboneTable'

module.exports = class Overview extends BackboneTable
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

	renderHeader ()
	{
		return [
			{
				title: "Datum",
			},
			{
				title: "Order ID",
			},
			{
				title: "Medlem",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
			},
			{
				title: "Local storage",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><DateField date={row.tictail.created_at} /></td>
				<td><a target="_blank" href={"https://tictail.com/dashboard/store/makerspace/settings/orders/" + row.tictail.number}>{row.tictail.number}</a></td>
				<td>{row.tictail.customer.name}</td>
				<td className="uk-text-right"><Currency value={row.tictail.subtotal} currency="SEK" /></td>
				<td>
					{row.storage ?
						<a target="_blank" href={config.apiBasePath + "/tictail/order/" + row.tictail.number}>{row.tictail.number}.json</a>
					:
						""
					}
				</td>
			</tr>
		);
	}
}