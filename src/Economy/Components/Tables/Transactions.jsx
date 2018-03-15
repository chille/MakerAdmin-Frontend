import React from 'react'
import BackboneTable from '../../../BackboneTable'
import { Link, withRouter } from 'react-router-dom'
import Currency from '../../../Components/Currency'
import DateField from '../../../Components/Date'

module.exports = withRouter(class Transactions extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 6;
	}

	componentWillMount()
	{
		console.log("fetch");
		this.fetch();
	}

	renderHeader()
	{
		return [
			{
				title: "Bokföringsdatum",
			},
			{
				title: "Verifikation",
			},
			{
				title: "Transaktion",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
			},
			{
				title: "Saldo",
				class: "uk-text-right",
			},
			{
				title: "",
			},
		];
	}

	renderRow(row, i)
	{
		if(typeof row.files != "undefined")
		{
			var icon = <i className="uk-icon-file"></i>;
		}
		else
		{
			var icon = "";
		}

		return (
			<tr key={i}>
				<td><DateField date={row.attributes.accounting_date}/></td>
				<td><Link to={"/economy/" + this.props.match.params.period + "/instruction/" + row.attributes.instruction_number}>{row.attributes.instruction_number} {row.attributes.instruction_title}</Link></td>
				<td>{row.attributes.transaction_title}</td>
				<td className="uk-text-right"><Currency value={row.attributes.amount} currency="SEK" /></td>
				<td className="uk-text-right"><Currency value={row.attributes.balance} currency="SEK" /></td>
				<td>{icon}</td>
			</tr>
		);
	}
});