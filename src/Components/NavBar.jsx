import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

module.exports = class NavBar extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			links:
			[
				{
					text: "Medlemmar",
					target: "/membership",
					icon: "user",
				},
				{
					text: "Automation",
					target: "/auto",
					icon: "coffee",
				},
				{
					text: "Nycklar",
					target: "/keys",
					icon: "key",
				},
				{
					text: "Försäljning",
					target: "/sales",
					icon: "shopping-basket",
				},
				{
					text: "Ekonomi",
					target: "/economy",
					icon: "money",
				},
				{
					text: "Utskick",
					target: "/messages",
					icon: "envelope",
				},
				{
					text: "Statistik",
					target: "/statistics",
					icon: "area-chart",
				},
				{
					text: "Inställningar",
					target: "/settings",
					icon: "cog",
				},
				{
					text: "Logga ut",
					target: "/logout",
					icon: "sign-out",
				},
			]
		};
	}

	render()
	{
		return (
			<nav className="uk-navbar">
				<div className="uk-container uk-container-center">
					<Link to="/" className="uk-navbar-brand">MakerAdmin</Link>
					<ul className="uk-navbar-nav uk-hidden-small uk-navbar-attached">
						{this.state.links.map(function (menuItem, i) {
							return (<MenuItem key={i} navItem={menuItem} />);
						})}
					</ul>
					<div className="uk-navbar-flip">
						<a className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas="{target:'#sidenav'}"></a>
					</div>
				</div>
			</nav>
		);
	}
}