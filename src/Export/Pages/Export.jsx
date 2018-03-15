import React from 'react'

module.exports = class Export extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Export</h2>
				<p>Kör en request mot API och plocka ut data med hjälp av samma filtreringsinställnigar som finns i övriga gränssnitt. Konvertera sedan detta till en *.csv, eller annat lämpligt format och låt användaren ladda hem en fil.</p>
			</div>
		);
	}
}