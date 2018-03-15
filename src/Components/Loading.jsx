import React from 'react'

module.exports = class Loading extends React.Component
{
	render()
	{
		return (
			<span><i className="uk-icon-refresh uk-icon-spin"></i> Hämtar data...</span>
		);
	}
}