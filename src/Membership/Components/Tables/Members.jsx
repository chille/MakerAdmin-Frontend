import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateField from '../../../Components/Date'
import TableDropdownMenu from '../../../TableDropdownMenu'

module.exports = class Members extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 7;
	}

/*
	// TODO: Få igång denna igen
	fetch: function(search)
	{
		if(search !== undefined && search.length > 0)
		{
			// Update the paginator so that is tells us we're on page 1
			this.pagination[1].currentPage = 0;
			this.pagination[2].currentPage = 0;
			this.pagination[1].render();
			this.pagination[2].render();

			// Make sure the Backbone collection will receive page 1
			this.getCollection().state.currentPage = 1;
		}
	},
*/
	componentWillMount()
	{
		this.fetch();
	}

	removeTextMessage(member)
	{
		return "Are you sure you want to remove member \"" + member.firstname + " " + member.lastname + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.notify("Ett fel uppstod vid borttagning av medlem", {timeout: 0, status: "danger"});
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/membership/members/" + row.attributes.member_id}>{row.attributes.member_number}</Link></td>
				<td>-</td>
				<td>{row.attributes.firstname}</td>
				<td>{row.attributes.lastname}</td>
				<td>{row.attributes.email}</td>
				<td><DateField date={row.attributes.created_at} /></td>
				<td>
					<TableDropdownMenu>
						<Link to={"/membership/members/" + row.attributes.member_id}><i className="uk-icon-cog"></i> Redigera medlem</Link>
						{this.removeButton(i, "Ta bort medlem")}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}

	renderHeader()
	{
		return [
			{
				title: "#",
				sort: "member_id",
			},
			{
				title: "Kön",
			},
			{
				title: "Förnamn",
				sort: "firstname",
			},
			{
				title: "Efternamn",
				sort: "lastname",
			},
			{
				title: "E-post",
				sort: "email",
			},
			{
				title: "Blev medlem",
				sort: "created_at",
			},
			{
				title: "",
			},
		];
	}
}