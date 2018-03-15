import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import CountryDropdown from '../../../Components/Form/CountryDropdown'
import DateTimeField from '../../../Components/DateTime'

import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

import Input from '../../../Components/Form/Input'

module.exports = withRouter(class Member extends GenericEntityForm
{
	removeTextMessage(member)
	{
		return "Är du säker på att du vill ta bort medlemmen \"#" + member.member_number + " " + member.firstname + " " + member.lastname + "\"?";
	}

	onRemove(entity)
	{
		UIkit.notify("Successfully deleted", {status: "success"});
		this.props.history.push("/membership/members");
	}

	onRemoveError()
	{
		UIkit.notify("Ett fel uppstod vid borttagning av medlem", {timeout: 0, status: "danger"});
	}

	onCreate(model)
	{
		UIkit.notify("Successfully created", {status: "success"});
		this.props.history.push("/membership/members/" + model.get("member_id"));
	}

	onUpdate(model)
	{
		UIkit.notify("Successfully updated", {status: "success"});
	}

	onSaveError()
	{
		UIkit.notify("Error saving member", {timeout: 0, status: "danger"});
	}

	onCancel(entity)
	{
		this.props.history.push("/membership/members");
	}

	changeCountry(country)
	{
		this.model.set({
			address_country: country
		});
	}

	// Disable the send button if there is not enough data in the form
	enableSendButton()
	{
		// Validate required fields
		if(
			this.model.isDirty() &&
			this.state.model.attributes.firstname.length > 0 &&
			this.state.model.attributes.email.length > 0
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
				<form className="uk-form">
					<fieldset >
						<legend><i className="uk-icon-user"></i> Personuppgifter</legend>

						<Input model={this.model} name="civicregno" title="Personnummer" />
						<Input model={this.model} name="firstname"  title="Förnamn" />
						<Input model={this.model} name="lastname"   title="Efternamn" />
						<Input model={this.model} name="email"      title="E-post" />
						<Input model={this.model} name="phone"      title="Telefonnummer" />
					</fieldset>

					<fieldset data-uk-margin>
						<legend><i className="uk-icon-home"></i> Adress</legend>

						<Input model={this.model} name="address_street"  title="Address" />
						<Input model={this.model} name="address_extra"   title="Address extra" placeholder="Extra adressrad, t ex C/O adress" />
						<Input model={this.model} name="address_zipcode" title="Postnummer" />
						<Input model={this.model} name="address_city"    title="Postort" />

						<div className="uk-form-row">
							<label htmlFor="" className="uk-form-label">Land</label>
							<div className="uk-form-controls">
								<CountryDropdown country={this.state.model.attributes.address_country} onChange={this.changeCountry.bind(this)} />
							</div>
						</div>
					</fieldset>

					{this.state.model.attributes.member_id > 0 ?
						<fieldset data-uk-margin>
							<legend><i className="uk-icon-tag"></i> Metadata</legend>

							<div className="uk-form-row">
								<label className="uk-form-label">Medlem sedan</label>
								<div className="uk-form-controls">
									<i className="uk-icon-calendar"></i>
									&nbsp;
									<DateTimeField date={this.state.model.attributes.created_at} />
								</div>
							</div>

							<div className="uk-form-row">
								<label className="uk-form-label">Senast uppdaterad</label>
								<div className="uk-form-controls">
									<i className="uk-icon-calendar"></i>
									&nbsp;
									<DateTimeField date={this.state.model.attributes.updated_at} />
								</div>
							</div>
						</fieldset>
					: ""}

					<div className="uk-form-row">
						{this.cancelButton()}
						{this.removeButton("Ta bort medlem")}
						{this.saveButton("Spara personuppgifter")}
					</div>
				</form>
			</div>
		);
	}
});