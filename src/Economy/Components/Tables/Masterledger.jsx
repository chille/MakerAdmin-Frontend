import React from 'react'
import BackboneTable from '../../../BackboneTable'
import { Link, withRouter } from 'react-router-dom'
import Currency from '../../../Components/Currency'

module.exports = withRouter(class MasterLedger extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 3;
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
				sort: "account_number",
			},
			{
				title: "Konto",
				sort: "title",
			},
			{
				title: "Kontobalans",
				class: "uk-text-right",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/economy/" + this.props.match.params.period + "/account/" + row.attributes.account_number}>{row.attributes.account_number}</Link></td>
				<td>{row.attributes.title}</td>
				<td className="uk-text-right"><Currency value={row.attributes.balance} /></td>
			</tr>
		);
	}
});