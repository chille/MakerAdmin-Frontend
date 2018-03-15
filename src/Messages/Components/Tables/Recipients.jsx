import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateTimeField from '../../../Components/DateTime'

module.exports = class Recipients extends BackboneTable
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

	renderHeader()
	{
		return [
			{
				title: "Medlem",
				sort: "recipient_id",
			},
			{
				title: "Mottagare",
				sort: "recipient",
			},
			{
				title: "Status",
				sort: "status",
			},
			{
				title: "",
			},
		];
	}

	renderRow(row, i)
	{
		return [
			(
				<tr key={i}>
					<td><Link to={"/membership/members/" + row.attributes.member_id + "/messages"}>Visa</Link></td>
					<td>{row.attributes.recipient}</td>
					<td>
						{(() => {
							switch (row.attributes.status) {
								case "queued": return <span>Köad <DateTimeField date={row.attributes.created_at} /></span>;
								case "failed": return "Sändning misslyckades";
								case "sent":   return <span>Skickad <DateTimeField date={row.attributes.date_sent} /></span>;
								default:       return "Okänt";
							}
						})()}
					</td>
					<td className="uk-text-right">
						<a data-uk-toggle={"{target: \"#recipient-" + row.attributes.recipient_id + "\"}"}>Visa meddelande <i className="uk-icon-angle-down" /></a>
					</td>
				</tr>
			),
			(
				<tr id={"recipient-" + row.attributes.recipient_id} className="uk-hidden">
					<td colSpan={4}>
						{row.attributes.message_type != "sms" ? <h3>{row.attributes.subject}</h3> : ''}
						<p>{row.attributes.body}</p>
					</td>
				</tr>
			)
		];
	}
}