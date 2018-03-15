import React from 'react'

module.exports = class Currency extends React.Component
{
	render()
	{
		var formatter = new Intl.NumberFormat('sv-SE', {
			/*
			style: 'currency',
			currency: 'SEK',
			*/
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		var value = formatter.format(this.props.value / 100);
		return (<span>{value} {this.props.currency}</span>);
	}
}