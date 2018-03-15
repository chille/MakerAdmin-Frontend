import React from 'react'

import { Link, withRouter } from 'react-router-dom'
import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

import Input from '../../../Components/Form/Input'
import Textarea from '../../../Components/Form/Textarea'

module.exports = withRouter(class Group extends GenericEntityForm
{
	constructor(props)
	{
		super(props);

		this.state.error_column = "title";
		this.state.error_message = "meep meep";
	}

	removeTextMessage(group)
	{
		return "Är du säker på att du vill ta bort gruppen \"" + group.title + "\"?";
	}

	onRemove(entity)
	{
		UIkit.notify("Successfully deleted", {status: "success"});
		this.props.history.push("/membership/groups");
	}

	onRemoveError()
	{
		UIkit.notify("Fel uppstod vid borttagning av group", {timeout: 0, status: "danger"});
	}

	onCreate(model)
	{
		UIkit.notify("Successfully created", {status: "success"});
		this.props.history.push("/membership/groups/" + model.get("group_id"));
	}

	onUpdate(model)
	{
		UIkit.notify("Successfully updated", {status: "success"});
		this.props.history.push("/membership/groups");
	}

	onSaveError()
	{
		UIkit.notify("Error saving model", {timeout: 0, status: "danger"});
	}

	onCancel(entity)
	{
		this.props.history.push("/membership/groups");
	}

	// Disable the send button if there is not enough data in the form
	enableSendButton()
	{
		// Validate required fields
		if(
			this.model.isDirty() &&
			this.state.model.attributes.name.length > 0 &&
			this.state.model.attributes.title.length > 0
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
			<div className="meep">
				<form className="uk-form uk-margin-bottom" onSubmit={this.save}>
					<Input    model={this.model} name="name"        title="Namn" />
					<Input    model={this.model} name="title"       title="Titel" icon="tag" />
					<Textarea model={this.model} name="description" title="Beskrivning" />

					<div className="uk-form-row uk-margin-top">
						<div className="uk-form-controls">
							{this.cancelButton()}
							{this.removeButton("Ta bort grupp")}
							{this.saveButton("Spara grupp")}
						</div>
					</div>
				</form>
			</div>
		);
	}
});