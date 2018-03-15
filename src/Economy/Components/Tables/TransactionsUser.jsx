import React from 'react'
import BackboneTable from '../../../BackboneTable'
import { Link } from 'react-router-dom'
import Currency from '../../../Components/Currency'
import DateField from '../../../Components/Date'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = class Meep extends BackboneTable
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
				title: "Bokföringsdatum",
				sort: "accounting_date",
			},
			{
				title: "Transaktion",
				sort: "transaction_title",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
				sort: "amount",
			},
			{
				title: "",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><DateField date={row.attributes.accounting_date}/></td>
				<td><Link to={"/economy/" + row.attributes.period + "/instruction/" + row.attributes.instruction_number}>{row.attributes.transaction_title}</Link></td>
				<td className="uk-text-right"><Currency value={row.attributes.amount} currency="SEK" /></td>
				<td>
					<TableDropdownMenu>
						<Link to={"/product/" + row.attributes.entity_id + "/edit"}><i className="uk-icon-cog" /> Redigera metadata</Link>
						<Link to={"/economy/" + row.attributes.period + "/instruction/" + row.attributes.instruction_number}><i className="uk-icon-cog" /> Visa verifikation</Link>
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}