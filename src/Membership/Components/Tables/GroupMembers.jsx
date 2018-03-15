import React from 'react'
import BackboneTable from '../../../BackboneTable'
import { Link, withRouter } from 'react-router-dom'
import TableDropdownMenu from '../../../TableDropdownMenu'
import auth from '../../../auth'

module.exports = class GroupMembers extends BackboneTable
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

	removeTextMessage(group)
	{
		return "Are you sure you want to remove group \"" + group.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.notify("Error deleting group", {timeout: 0, status: "danger"});
	}

	removeUser(member_id)
	{
		var _this = this;

		// Send API request
		$.ajax({
			method: "POST",
			url: config.apiBasePath + "/membership/member/" + member_id + "/groups/remove",
			headers: {
				"Authorization": "Bearer " + auth.getAccessToken()
			},
			data: JSON.stringify({
				groups: [this.props.match.params.group_id],
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
				title: "Medlemsnummer",
			},
			{
				title: "Namn",
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
				<td><Link to={"/membership/members/" + row.member_id}>{row.member_number}</Link></td>
				<td><Link to={"/membership/members/" + row.member_id}>{row.firstname} {row.lastname}</Link></td>
				<td>
					<TableDropdownMenu>
						<a onClick={this.removeUser.bind(this, row.member_id)}><i className="uk-icon-trash" /> Ta bort medlem ur grupp</a>
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
}