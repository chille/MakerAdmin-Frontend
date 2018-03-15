import React from 'react'
import GenericEntityForm from '../../../Components/Form/GenericEntityForm'
import { withRouter } from 'react-router'
import Input from '../../../Components/Form/Input'
import Date from '../../../Components/Form/Date'
import Textarea from '../../../Components/Form/Textarea'

//TODO: withRouter?
module.exports = withRouter(class Key extends GenericEntityForm
{
	constructor(props)
	{
		console.log("Key.constructor");

		super(props);
	}

	removeTextMessage(key)
	{
		return "Är du säker på att du vill ta bort nyckeln \"#" + key.tagid + " " + key.title + "\"?";
	}

	onRemove(entity)
	{
		UIkit.notify("Successfully deleted", {status: "success"});
		this.props.history.push("/keys");
	}

	onRemoveError(entity)
	{
		UIkit.notify("Ett fel uppstod vid borttagning av nyckel", {timeout: 0, status: "danger"});
	}

	onCreate(entity)
	{
		this.props.history.push("/keys/" + entity.get("key_id"));
		UIkit.notify("Successfully created", {status: "success"});
	}

	onUpdate(entity)
	{
		this.props.history.push("/keys");
		UIkit.notify("Successfully updated", {status: "success"});
	}

	onSaveError()
	{
		UIkit.notify("Error saving key", {timeout: 0, status: "danger"});
	}

	onCancel(entity)
	{
		this.props.history.push("/keys");
	}

	renderErrorMsg(column)
	{
		if(this.state.error_column == column)
		{
			return (
				<p className="uk-form-help-block error">Error: {this.state.error_message}</p>
			);
		}
	}

	// Disable the send button if there is not enough data in the form
	enableSendButton()
	{
		console.log("MEEP MEEP VROOM");
		console.log(this.state.model.isDirty());
		// Validate required fields
		if(
			this.state.model.isDirty() &&
			this.state.model.attributes.tagid.length > 0
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
		console.log(this.props.model.attributes.status);

		return (
			<div className="meep">
				<form className="uk-form">
					<div className="uk-grid">
						<div className="uk-width-1-1">
							{this.state.model.attributes.created_at != "0000-00-00T00:00:00Z" ?
								<div className="uk-grid">
									<div className="uk-width-1-2">
										<Date model={this.state.model} name="created_at" title="Skapad" disabled={true} />
									</div>
									<div className="uk-width-1-2">
										<Date model={this.state.model} name="updated_at" title="Ändrad" disabled={true} />
									</div>
								</div>
							: ""}

							<Input model={this.state.model} name="tagid" title="RFID" placeholder="Använd en RFID-läsare för att läsa av det unika numret på nyckeln" />
							<Input model={this.state.model} name="title" title="Titel" placeholder="Det är valfritt att lägga in en beskrivning av nyckeln" />
							<Textarea model={this.state.model} name="description" title="Beskrivning" placeholder="Det är valfritt att lägga in en beskrivning av nyckeln" />

							<div className="datebox">
								<div className="uk-form-row">
									<label className="uk-form-label" htmlFor="status">
										Status
									</label>
									<div className="uk-form-controls">
										<select ref="status" id="status" name="status" value={this.state.model.attributes.status} className="uk-form-width-large" onChange={this.handleChange.bind(this)} >
											<option value="active">Aktiv</option>
											<option value="inactive">Inaktiv</option>
											<option value="auto">Auto</option>
										</select>
										{this.renderErrorMsg("status")}
									</div>
								</div>

								<div className="uk-form-row">
									<div className="uk-form-controls">
										<p>
											<i className="uk-icon-info-circle" />
											{(() => {
												switch (this.state.model.attributes.status) {
													case "active":   return " En aktiv nyckel är permanent aktiv inom de datum som specificeras nedan och påverkas altså inte av eventuella betalningar.";
													case "inactive": return " En inaktiv nyckel är permanent inaktiv och går ej att använda i passersystem förän den aktiveras igen.";
													case "auto":     return " Auto-läget beräknar fram om nyckeln skall vara aktiv eller ej beroende på medlemmens eventuella betalningar.";
												}
											})()}
										</p>
									</div>
								</div>

								{this.state.model.status == "active" ?
									<div className="uk-grid">
										<div className="uk-width-1-2">
											<Date model={this.state.model} name="startdate" title="Startdatum" icon2="calendar" />
										</div>
										<div className="uk-width-1-2">
											<Date model={this.state.model} name="enddate" title="Slutdatum" icon2="calendar" />
										</div>
									</div>
								: ""}
							</div>

							<div className="uk-form-row uk-margin-top">
								<div className="uk-form-controls">
									{this.cancelButton()}
									{this.removeButton("Ta bort nyckel")}
									{this.saveButton("Spara nyckel")}
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
});