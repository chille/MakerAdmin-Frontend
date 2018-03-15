import React from 'react'

// Backbone
import TemplatesCollection from '../../Collections/Templates'

import { Link } from 'react-router-dom'
import Templates from '../../Components/Tables/Templates'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Mallar</h2>

				<div className="uk-clearfix">
					<p className="uk-float-left">Mallar som används för att skicka mail</p>
					<Link to="/messages/templates/new" className="uk-button uk-button-primary uk-float-right"><i className="uk-icon-plus-circle"></i> Skapa ny mall</Link>
				</div>

				<Templates type={TemplatesCollection} />
			</div>
		);
	}
}