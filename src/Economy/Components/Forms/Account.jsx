import React from 'react'
import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

import Currency from '../../../Components/Currency'
import { withRouter } from 'react-router'

module.exports = withRouter(class Account extends GenericEntityForm
{
	render()
	{
		return (
			<div>
				<form className="uk-form uk-form-horizontal">
					<div className="uk-form-row">
						<label className="uk-form-label">Kontonummer</label>
						<div className="uk-form-controls">
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<input type="text" value={this.state.model.attributes.account_number} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
							</div>
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Titel</label>
						<div className="uk-form-controls">
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<input type="text" value={this.state.model.attributes.title} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
							</div>
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Beskrivning</label>
						<div className="uk-form-controls">
							<textarea value={this.state.model.attributes.description} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Balans</label>
						<div className="uk-form-controls">
							<Currency value={this.state.model.attributes.balance} currency="SEK" />
						</div>
					</div>
				</form>
			</div>
		);
	}
});