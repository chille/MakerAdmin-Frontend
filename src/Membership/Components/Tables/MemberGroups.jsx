import React from 'react'
import BackboneTable from '../../../BackboneTable'
import { Link, withRouter } from 'react-router-dom'
import TableDropdownMenu from '../../../TableDropdownMenu'
import auth from '../../../auth'

module.exports = class MemberGroups extends BackboneTable
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

	removeUser(group_id)
	{
		var _this = this;

		// Send API request
		$.ajax({
			method: "POST",
			url: config.apiBasePath + "/membership/member/" + this.props.match.params.member_id + "/groups/remove",
			headers: {
				"Authorization": "Bearer " + auth.getAccessToken()
			},
			data: JSON.stringify({
				groups: [group_id],
			}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
		}).done(function () {
			UIkit.notify("Medlem borttagen ur grupp", {status: "success"});
			_this.fetch();
		});
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
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				<td><Link to={"/membership/groups/" + row.group_id}>{row.title}</Link></td>
				<td>{row.num_members}</td>
				<td>
					<TableDropdownMenu>
						<Link to={"/membership/groups/" + row.group_id + "/edit"}><i className="uk-icon-cog" /> Redigera grupp</Link>
						<a onClick={this.removeUser.bind(this, row.group_id)}><i className="uk-icon-trash" /> Ta bort medlem ur grupp</a>
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}