import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateTimeField from '../../../Components/DateTime'

module.exports = class RecipientsUser extends BackboneTable
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
				title: "Status",
				sort: "status",
			},
			{
				title: "Mottagare",
				sort: "recipient",
			},
			{
				title: "Meddelande",
				sort: "subject",
			},
			{
				title: "",
			},
		];
	}

	renderRow(row, i)
	{
		// Trim the subject to a better length
		if(row.attributes.subject.length > 33)
		{
			row.attributes.subject = row.attributes.subject.substr(0, 30) + "...";
		}

		return [
			(
				<tr key={i}>
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
					<td>
						{
								row.attributes.message_type == "email" ?
									(<span><i className="uk-icon-envelope" title="E-post" /> {row.attributes.recipient}</span>)
							:
								row.attributes.message_type == "sms" ?
									(<span><i className="uk-icon-commenting" title="SMS" /> {row.attributes.recipient}</span>)
							:
								row.attributes.message_type
						}
					</td>
					<td>{row.attributes.subject}</td>
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