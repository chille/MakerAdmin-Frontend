import React from 'react'
import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

module.exports = class AccountingPeriod extends GenericEntityForm
{
	render()
	{
		return (
			<div>
				<form className="uk-form uk-form-horizontal">
					<div className="uk-form-row">
						<label className="uk-form-label">Namn</label>
						<div className="uk-form-controls">
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<input type="text" value={this.state.model.attributes.name} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
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
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<textarea value={this.state.model.attributes.description} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
							</div>
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Startdatum</label>
						<div className="uk-form-controls">
							<input type="text" value={this.state.model.attributes.start} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Slutdatum</label>
						<div className="uk-form-controls">
							<input type="text" value={this.state.model.attributes.end} className="uk-form-width-large" onChange={this.handleChange.bind(this)} />
						</div>
					</div>
				</form>
			</div>
		);
	}
}