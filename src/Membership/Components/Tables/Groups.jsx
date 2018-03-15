import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = class Groups extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 9;
	}

	componentWillMount()
	{
		this.fetch();
	}

	removeTextMessage(group)
	{
		return "Are you sure you want to remove group \"" + group.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.notify("Error deleting group", {timeout: 0, status: "danger"});
	}

	renderHeader()
	{
		return [
			{
				title: "Titel",
				sort: "title",
			},
			{
				title: "Antal medlemmar",
				sort: "membercount",
			},
			{
				title: "",
			}
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/membership/groups/" + row.attributes.group_id}>{row.attributes.title}</Link></td>
				<td>{row.attributes.num_members}</td>
				<td>
					<TableDropdownMenu>
						<Link to={"/membership/groups/" + row.attributes.group_id + "/edit"}><i className="uk-icon-cog"></i> Redigera grupp</Link>
						{this.removeButton(i, "Ta bort grupp")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}