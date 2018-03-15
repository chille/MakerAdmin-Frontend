import React from 'react'

module.exports = class DateTime extends React.Component
{
	render()
	{
		var str = <em>Ej angivet</em>;
		if(this.props.date !== undefined && this.props.date != "")
		{
			var options = {
				year: 'numeric', month: 'numeric', day: 'numeric',
				hour: 'numeric', minute: 'numeric', second: 'numeric',
				hour12: false
			};

			// Parse the date
			var parsed_date = Date.parse(this.props.date);

			// If the date was parsed successfully we should update the string
			if(!isNaN(parsed_date))
			{
				var str = new Intl.DateTimeFormat("sv-SE", options).format(parsed_date);
			}

		}

		return (<span>{str}</span>);
	}
}