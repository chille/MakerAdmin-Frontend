import React from 'react';
import BackboneTable from './BackboneTable'
import DateTime from './Components/DateTime'
import auth from './auth'

module.exports = class AccessTokens extends BackboneTable
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
				title: "Access token",
			},
			{
				title: "Browser",
			},
			{
				title: "IP-adress",
			},
			{
				title: "Giltig till",
			},
		];
	}

	renderRow(row, i)
	{
		return (
			<tr key={i}>
				{auth.getAccessToken() == row.access_token ?
					<td><i className="uk-icon-check" /> {row.access_token}</td>
				:
					<td>{row.access_token}</td>
				}
				<td>{row.browser}</td>
				<td>{row.ip}</td>
				<td><DateTime date={row.expires} /></td>
			</tr>
		);
	}
}