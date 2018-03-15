import React from 'react'
import { Link, withRouter } from 'react-router-dom'

module.exports = withRouter(class Breadcrumb extends React.Component
{
	render()
	{
		return (<span></span>);
/*
		// TODO
		//		const depth = this.props.routes.length;
		return (
			<ul className="uk-breadcrumb">
				{this.props.routes.map((item, index) =>
					<li key={index}>
						<Link
							onlyActiveOnIndex={true}
							activeClassName="uk-active"
							to={item.path || ''}>
							{item.component.title}
						</Link>
					</li>
				)}
			</ul>
		);
*/
	}
});