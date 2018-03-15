import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import Currency from '../../../Components/Currency'
//import DateField from '../../../Components/Date'
import TableDropdownMenu from '../../../TableDropdownMenu'


module.exports = class Products extends BackboneTable
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
		return "Are you sure you want to remove product \"" + entity.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.notify("Error deleting product", {timeout: 0, status: "danger"});
	}

	renderHeader()
	{
		return [
			{
				title: "Namn",
				sort: "title",
			},
			{
				title: "Giltig till",
				sort: "expiry_date",
			},
			{
				title: "Prenumeration",
				sort: "auto_extend",
			},
			{
				title: "Giltighetstid",
				sort: "interval",
			},
			{
				title: "Pris",
				sort: "price",
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
				<td><Link to={"/sales/product/" + row.attributes.product_id}>{row.attributes.title}</Link></td>
				<td>{row.attributes.expiry_date}</td>
				<td>{row.attributes.auto_extend}</td>
				<td>{row.attributes.interval}</td>
				<td><Currency value={row.attributes.price} /></td>
				<td>
					<TableDropdownMenu>
						<Link to={"/sales/product/" + row.attributes.product_id}><i className="uk-icon-cog" /> Redigera produkt</Link>
						{this.removeButton(i, "Ta bort produkt")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}