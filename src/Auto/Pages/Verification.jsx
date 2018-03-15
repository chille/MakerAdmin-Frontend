import React from 'react'
import TictailRelationsTable from '../Components/Tables/TictailRelations'

// Backbone
import TictailRelationsCollection from '../Collections/TictailRelations'

module.exports = class Verification extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>Skapa verifikationer</h1>

				<TictailRelationsTable type={TictailRelationsCollection} />
			</div>
		);
	}
}