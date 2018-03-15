import React from 'react'

import { Link, withRouter } from 'react-router-dom'

import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

module.exports = withRouter(class Key extends GenericEntityForm
{
	removeTextMessage(template)
	{
		return "Är du säker på att du vill ta bort utskicksmallen \"" + template.title + "\"?";
	}

	onRemove(entity)
	{
		UIkit.notify("Successfully deleted", {status: "success"});
		this.props.history.push("/messages/templates");
	}

	onRemoveError()
	{
		UIkit.notify("Fel uppstod vid borttagning av mall", {timeout: 0, status: "danger"});
	}

	onCreate(model)
	{
		UIkit.notify("Successfully created", {status: "success"});
		this.props.history.push("/messages/templates/" + model.get("template_id"));
	}

	onUpdate(model)
	{
		UIkit.notify("Successfully updated", {status: "success"});
		this.props.history.push("/messages/templates");
	}

	onSaveError()
	{
		UIkit.notify("Error saving model", {timeout: 0, status: "danger"});
	}

	onCancel(entity)
	{
		this.props.history.push("/messages/templates");
	}

	// Disable the send button if there is not enough data in the form
	enableSendButton()
	{
		// Validate data
		if(
			this.model.isDirty() &&
			this.state.model.attributes.name.length > 0 &&
			this.state.model.attributes.title.length > 0 &&
			this.state.model.attributes.description.length > 0
		)
		{
			// Enable button
			return true;
		}

		// Disable button
		return false;
	}

	render()
	{
		return (
			<form className="uk-form">
				<div className="uk-form-row">
					<label htmlFor="name" className="uk-form-label">{this.state.model.attributes.name ? "Namn" : ""}</label>
					<div className="uk-form-controls">
						<input type="text" name="name" id="name" value={this.state.model.attributes.name} placeholder="Namn" onChange={this.handleChange.bind(this)} className="uk-form-width-large" />
					</div>
				</div>

				<div className="uk-form-row">
					<label htmlFor="title" className="uk-form-label">{this.state.model.attributes.title ? "Titel" : ""}</label>
					<div className="uk-form-controls">
						<input type="text" name="title" id="title" value={this.state.model.attributes.title} placeholder="Titel" onChange={this.handleChange.bind(this)} className="uk-form-width-large" />
					</div>
				</div>

				<div className="uk-form-row">
					<label htmlFor="description" className="uk-form-label">{this.state.model.attributes.description ? "Meddelande" : ""}</label>
					<div className="uk-form-controls">
						<textarea name="description" onChange={this.handleChange.bind(this)} value={this.state.model.attributes.description} className="uk-form-width-large" rows="20"/>
					</div>
				</div>

				<div className="uk-form-row">
					{this.cancelButton()}
					{this.removeButton("Ta bort mall")}
					{this.saveButton("Spara mall")}
				</div>
			</form>
		);
	}
});