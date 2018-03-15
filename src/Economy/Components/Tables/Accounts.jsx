import React from 'react'
import BackboneTable from '../../../BackboneTable'

import { Link } from 'react-router-dom'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = class Accounts extends BackboneTable
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


	removeTextMessage(entity)
	{
		return "Are you sure you want to remove account \"" + entity.account_number + " " + entity.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.modal.alert("Error deleting account");
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
				title: "Beskrivning",
				sort: "description",
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
				<td><Link to={"/settings/economy/account/" + row.attributes.account_number + "/edit"}>{row.attributes.account_number}</Link></td>
				<td>{row.attributes.title}</td>
				<td>{row.attributes.description}</td>
				<td>
					<TableDropdownMenu>
						<Link to={"/settings/economy/account/" + row.attributes.account_number + "/edit"}><i className="uk-icon-cog"></i> Redigera konto</Link>
						{this.removeButton(i, "Ta bort konto")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}