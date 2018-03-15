import React from 'react'
import BackboneTable from '../../../BackboneTable'

module.exports = class InvoiceList extends BackboneTable
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
				sort: "invoice_number",
			},
			{
				title: "Förfallodatum",
				sort: "date_expiry",
			},
			{
				title: "Mottagare",
				sort: "title",
			},
			{
				title: "Referens",
				sort: "your_reference",
			},
			{
				title: "Belopp",
				class: "uk-text-right",
				sort: "_total",
			},
			{
				title: "Status",
				sort: "status",
			},
		];
	}

	renderRow(row, i)
	{
		if(row.attributes.status == "unpaid")
		{
			row.attributes.status = "Obetald";
		}

		return (
			<tr key={i}>
				<td><Link to={"/economy/invoice/" + row.attributes.invoice_number}>{row.attributes.invoice_number}</Link></td>
				<td><DateField date={row.attributes.date_expiry} /></td>
				<td>{row.attributes.title}</td>
				<td>{row.attributes.your_reference}</td>
				<td className="uk-text-right"><Currency value={row.attributes._total} currency={row.attributes.currency} /></td>
				<td>{row.attributes.status}</td>
			</tr>
		);
	}
}