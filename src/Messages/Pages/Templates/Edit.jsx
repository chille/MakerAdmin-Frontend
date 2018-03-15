import React from 'react'

// Backbone
import TemplateModel from '../../Models/Template'

import TemplateForm from '../../Components/Forms/Template'
import { withRouter } from 'react-router'

module.exports = withRouter(class Meep extends React.Component
{
	constructor(props)
	{
		super(props);

		var model = new TemplateModel({
			template_id: this.props.match.params.id
		});

		var _this = this;
		model.fetch();

		this.state = {
			model: model,
		};
	}

	render()
	{
		return (
			<div>
				<h2>Redigera mall</h2>
				<TemplateForm model={this.state.model} route={this.props.route} />
			</div>
		);
	}
});