import React from 'react'

// Backbone
import MessagesCollection from '../../Collections/Messages'

import { Link } from 'react-router-dom'
import MessagesTable from '../../Components/Tables/Messages'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Utskickshistorik</h2>

				<p>Visa lista över samtliga utskick.</p>

				<MessagesTable type={MessagesCollection} />
			</div>
		);
	}
}
//Messages.title = "Utskickshistorik";