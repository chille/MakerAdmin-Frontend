import React from 'react'
import MenuItem from './MenuItem'
import { withRouter } from 'react-router-dom'
import { matchPath } from 'react-router'

module.exports = withRouter(class NavSide extends React.Component
{
	render()
	{
		// Get the main category (level 0)
		var activeItem = null;
		for(var i = 0; i < this.props.navItems.length; i++)
		{
			var item = this.props.navItems[i];

			const match = matchPath(this.props.location.pathname, {
				path: item.match || item.target,
				exact: false,
				strict: false
			})

			if(match)
			{
				activeItem = item;
			}
		}

		// There is no active menu, or children.
		if(activeItem === null || typeof activeItem.children == 'undefined')
		{
			return false;
		}
		else
		{
			return (
				<div className="uk-panel uk-panel-box" data-uk-sticky="{top:35}">
					<ul className="uk-nav uk-nav-side" data-uk-scrollspy-nav="{closest:'li', smoothscroll:true}">
						<li className="uk-nav-header">{activeItem.text}</li>
						<li className="uk-nav-divider"></li>
						{activeItem.children.map(function (navItem, i) {
							if(typeof navItem.type != "undefined" && navItem.type == "separator")
							{
								return (<li key={i} className="uk-nav-divider"></li>);
							}
							else if(typeof navItem.type != "undefined" && navItem.type == "heading")
							{
								return (<li key={i} className="uk-nav-header">{navItem.text}</li>);
							}
							else
							{
								return (<MenuItem key={i} navItem={navItem} activeItem={activeItem} />);
							}
						})}
					</ul>
				</div>
			);
		}
	}
});