import React from 'react'
import { withRouter } from 'react-router'
import TemplateForm from '../../Components/Forms/Template'

// Backbone
import TemplateModel from '../../Models/Template'

module.exports = withRouter(class Meep extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			model: new TemplateModel()
		};
	}

	render()
	{
		return (
			<div>
				<h2>Skapa mall</h2>
				<TemplateForm model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});