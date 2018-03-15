import React from 'react'

import { Link, withRouter } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateTimeField from '../../../Components/DateTime'
import TableDropdownMenu from '../../../TableDropdownMenu'
import classNames from 'classnames/bind'

module.exports = withRouter(class List extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 5;
		this.state.showRow = {};
	}

	componentWillMount()
	{
		this.fetch();
	}

	removeTextMessage(template)
	{
		return "Är du säker på att du vill ta bort utskicksmallen \"" + template.title + "\"?";
	}

	removeErrorMessage()
	{
		UIkit.notify("Fel uppstod vid borttagning av mall", {timeout: 0, status: "danger"});
	}

	renderHeader()
	{
		return [
			{
				title: "Namn",
				sort: "name",
			},
			{
				title: "Rubrik",
				sort: "title",
			},
			{
				title: "",
			},
		];
	}

	toggle(template_id)
	{
		this.state.showRow[template_id] = !this.state.showRow[template_id];
		this.forceUpdate();
	}

	renderRow(row, i)
	{
		var classes = classNames({
			"toggle": true,
			"show": this.state.showRow.hasOwnProperty(row.attributes.template_id) && this.state.showRow[row.attributes.template_id],
		});

		return [
			(
				<tr key={i}>
					<td>{row.attributes.name}</td>
					<td><Link to={"/messages/templates/" + row.attributes.template_id}>{row.attributes.title}</Link></td>
					<td className="uk-text-right">
						<a className="uk-margin-small-right uk-button uk-button-mini uk-button-success" onClick={this.toggle.bind(this, row.attributes.template_id)}>
							{this.state.showRow.hasOwnProperty(row.attributes.template_id) && this.state.showRow[row.attributes.template_id] == true ? 
								<div><i className="uk-icon-angle-up"></i> Dölj</div>
							:
								<div><i className="uk-icon-angle-down"></i> Visa</div>
							}
						</a>
						<Link className="uk-margin-small-right uk-button uk-button-mini uk-button-primary" to={"/messages/new?template=" + row.attributes.template_id} ><i className="uk-icon-envelope"></i> Skicka</Link>
						<TableDropdownMenu>
							<Link to={"/messages/templates/" + row.attributes.template_id + ""}><i className="uk-icon-cog"></i> Redigera mall</Link>
							{this.removeButton(i, "Ta bort mall")}
						</TableDropdownMenu>
					</td>
				</tr>
			),
			(
				<tr className={classes}>
					<td colSpan={5}>
						<div className="wrapper">
							<div className="scrolling">
								{row.attributes.description.split("\n").map(function(item) {
									return (
										<span>
											{item}
											<br/>
										</span>
									)
								})}
							</div>
						</div>
					</td>
				</tr>
			)
		];
	}
}));