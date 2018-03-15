import React from 'react'
import { NavLink, withRouter, matchPath } from 'react-router-dom'

module.exports = withRouter(class MenuItem extends React.Component
{
	render()
	{

		if(this.props.navItem.external)
		{
			return (
				<li>
					<a href={this.props.navItem.target}>{this.props.navItem.text}</a>
				</li>
			);
		}
		else
		{
			const match = matchPath(this.props.location.pathname, {
				path: this.props.navItem.match || this.props.navItem.target,
				exact: false,
				strict: false
			})

			if(match)
			{
				var className = "uk-active";
			}
			else
			{
				var className = null;
			}
		}

		return (
			<li className={className}>
				<NavLink activeClassName="uk-active" to={this.props.navItem.target}>
					<i className={"uk-icon-" + this.props.navItem.icon}></i>
					&nbsp;
					{this.props.navItem.text}
				</NavLink>
			</li>
		);
	}
});