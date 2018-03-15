import React from 'react'

import { Link, withRouter } from 'react-router-dom'

module.exports = withRouter(class Meep extends React.Component
{
	render()
	{
		return (
				<div>
					<h3>Data från import</h3>
					<Link to={"/economy/" + this.props.match.params.period + "/instruction/" + this.state.model.attributes.instruction_number}>Tillbaka till verifikation</Link>
					<form className="uk-form uk-form-horizontal">
					<div className="uk-grid">
						<div className="uk-width-1-2">
							<div className="uk-form-row">
								<label className="uk-form-label">Importerad från</label>
								<div className="uk-form-controls">
									<div className="uk-form-icon">
										<i className="uk-icon-institution"></i>
										<input type="text" value={this.state.model.attributes.importer} disabled />
									</div>
								</div>
							</div>

							<div className="uk-form-row">
								<label className="uk-form-label">Externt id</label>
								<div className="uk-form-controls">
									<div className="uk-form-icon">
										<i className="uk-icon-database"></i>
										<input type="text" value={this.state.model.attributes.external_id} disabled />
									</div>
								</div>
							</div>

							<div className="uk-form-row">
								<label className="uk-form-label">Externt datum</label>
								<div className="uk-form-controls">
									<div className="uk-form-icon">
										<i className="uk-icon-database"></i>
										<input type="text" value={this.state.model.attributes.external_date} disabled />
									</div>
								</div>
							</div>

							<div className="uk-form-row">
								<label className="uk-form-label">Data</label>
								<div className="uk-form-controls">
									<textarea value={this.state.model.attributes.external_data} />
								</div>
							</div>
						</div>
					</div>
					</form>
				</div>
		);
	}
});