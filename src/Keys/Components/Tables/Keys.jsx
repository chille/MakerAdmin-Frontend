import React from 'react'
import BackboneTable from '../../../BackboneTable'
import TableDropdownMenu from '../../../TableDropdownMenu'
import { Link, withRouter } from 'react-router-dom'

module.exports = withRouter(class Keys extends BackboneTable
{

	constructor(props)
	{
		super(props);

		this.state.columns = 4;
		this.state.linkPrefix = this.props.linkPrefix || "";
	}

	componentWillMount()
	{
		this.fetch();
	}

	removeTextMessage(entity)
	{
		return "Are you sure you want to remove key \"" + entity.tagid + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.modal.alert("Error deleting key");
	}

	onEdit(key)
	{
		this.props.history.push(this.state.linkPrefix + "/keys/" + key.get("key_id"));
	}

	renderHeader()
	{
		return [
			{
				title: "Status",
				sort: "status",
			},
			{
				title: "RFID",
				sort: "tagid",
			},
			{
				title: "Titel",
				sort: "title",
			},
			{
				title: "Kommentarer",
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
				<td>
					{(() => {
						switch (row.attributes.status) {
							case "active":   return <span><i className="uk-icon-check key-active"></i> Aktiv</span>;
							case "inactive": return <span><i className="uk-icon-close key-inactive"></i> Inaktiv</span>;
							case "auto":     return <span><i className="uk-icon-cog key-auto"></i> Auto</span>;
						}
					})()}
				</td>
				<td><Link to={this.state.linkPrefix + "/keys/" + row.attributes.key_id}>{row.attributes.tagid}</Link></td>
				<td><Link to={this.state.linkPrefix + "/keys/" + row.attributes.key_id}>{row.attributes.title}</Link></td>
				<td><Link to={this.state.linkPrefix + "/keys/" + row.attributes.key_id}>{row.attributes.description}</Link></td>
				<td>
					<TableDropdownMenu>
						{this.editButton(i)}
						{this.removeButton(i)}
					</TableDropdownMenu>
				</td>
			</tr>
		);
	}
});