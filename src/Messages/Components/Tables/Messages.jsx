import React from 'react'

import { Link } from 'react-router-dom'
import BackboneTable from '../../../BackboneTable'
import DateTimeField from '../../../Components/DateTime'

module.exports = class Messages extends BackboneTable
{
	constructor(props)
	{
		super(props);

		this.state.columns = 6;
	}

	componentWillMount()
	{
		this.fetch();
	}

	renderHeader()
	{
		return [
			{
				title: "Skapad",
				sort: "created_at",
			},
			{
				title: "Typ",
				sort: "type",
			},
			{
				title: "Status",
				sort: "status",
			},
			{
				title: "Meddelande",
				sort: "subject",
			},
			{
				title: "Mottagare",
			},
		];
	}

	renderRow(row, i)
	{
		// Trim the subject to a better length
		if(row.attributes.subject.length > 33)
		{
			row.attributes.subject = row.subject.substr(0, 30) + "...";
		}

		return (
			<tr key={i}>
				<td><DateTimeField date={row.attributes.created_at} /></td>
				<td>
					{
						row.attributes.message_type == "email" ?
							(<span><i className="uk-icon-envelope" title="E-post" /> E-post</span>)
						: row.attributes.message_type == "sms" ?
							(<span><i className="uk-icon-commenting" title="SMS" /> SMS</span>)
						:
							row.attributes.message_type
					}
				</td>
				<td>
					{(() => {
						switch (row.attributes.status) {
							case "queued": return <span>Köad</span>;
							case "failed": return "Sändning misslyckades";
							case "sent":   return <span>Skickad <DateTimeField date={row.attributes.date_sent} /></span>;
							default:       return "Okänt";
						}
					})()}
				</td>
				<td><Link to={"/messages/" + row.attributes.message_id}>{row.attributes.subject}</Link></td>
				<td className="uk-text-right">{row.attributes.num_recipients} st</td>
			</tr>
		);
	}
}