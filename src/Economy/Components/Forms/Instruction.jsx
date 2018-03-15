import React from 'react'
import auth from '../../../auth'

import { Link, withRouter } from 'react-router-dom'
import Currency from '../../../Components/Currency'
import GenericEntityForm from '../../../Components/Form/GenericEntityForm'

module.exports = withRouter(class Message extends GenericEntityForm
{
	render()
	{
		if(this.state.model.attributes.transactions.length == 0)
		{
			var content = <tr><td colSpan="4"><em>Denna verifikation saknar bokförda poster</em></td></tr>;
		}
		else
		{
			var _this = this;
			var content = this.state.model.attributes.transactions.map(function (row, i)
			{
				return (
					<tr key={i}>
						<td>
							<Link to={"/economy/" + _this.state.model.attributes.period + "/account/" + row.account_number}>{row.account_number} {row.account_title}</Link>
						</td>
						<td>{row.title}</td>
						<td className="uk-text-right"><Currency value={row.balance} /></td>
					</tr>
				);
			})
		}

		if(this.state.model.attributes.entity_id == 0)
		{
			var title = "Skapa verifikation";
		}
		else
		{
			var title = this.state.model.attributes.instruction_number === null ? "Preliminär verifikation" : "Verifikation " + this.state.model.attributes.instruction_number;
			title = title + " - " + this.state.model.attributes.title;
		}

		if(this.state.model.attributes.files.length == 0)
		{
			var files = <tr><td colSpan="4"><em>Det finns inga filer kopplade till denna verifikation</em></td></tr>;
		}
		else
		{
			var _this = this;
			var files = this.state.model.attributes.files.map(function (file, i)
			{
				return (
					<tr key={i}>
						<td><a href={config.apiBasePath + "/economy/" + _this.props.match.params.period + "/file/" + _this.state.model.attributes.external_id + "/" + file + "?bearer=" + auth.getAccessToken()}>{file}</a></td>
					</tr>
				);
			})
		}

		return (
			<div>
				<h2>{title}</h2>

				<form className="uk-form uk-form-horizontal">
					<div className="uk-grid">
						<div className="uk-width-1-6">
							<label className="uk-form-label">Verifikationsnr</label>
						</div>
						<div className="uk-width-2-6">
							<div className="uk-form-icon">
								<i className="uk-icon-tag"></i>
								<input type="text" value={this.state.model.attributes.instruction_number} disabled />
							</div>
						</div>
						<div className="uk-width-1-6">
							<label className="uk-form-label">Skapad</label>
						</div>
						<div className="uk-width-2-6">
							<div className="uk-form-icon">
								<i className="uk-icon-calendar"></i>
								<input type="text" value={this.state.model.attributes.created_at} disabled />
							</div>
						</div>
					</div>
					<div className="uk-grid">
						<div className="uk-width-1-6">
							<label className="uk-form-label">Bokföringsdatum</label>
						</div>
						<div className="uk-width-2-6">
							<div className="uk-form-icon">
								<i className="uk-icon-calendar"></i>
								<input type="text" value={this.state.model.attributes.accounting_date} onChange={this.handleChange.bind(this)} />
							</div>
						</div>
						<div className="uk-width-1-6">
							<label className="uk-form-label">Ändrad</label>
						</div>
						<div className="uk-width-2-6">
							<div className="uk-form-icon">
								<i className="uk-icon-calendar"></i>
								<input type="text" value={this.state.model.attributes.updated_at} disabled />
							</div>
						</div>
					</div>

					<div className="uk-grid">
						<div className="uk-width-1-6">
							<label className="uk-form-label">Belopp</label>
						</div>
						<div className="uk-width-2-6">
							<div className="uk-form-icon">
								<i className="uk-icon-usd"></i>
								<input type="text" value={this.state.model.attributes.balance} disabled />
							</div>
						</div>
						{ this.state.model.attributes.entity_id != 0 ?
							<div className="uk-width-1-6">
								<label className="uk-form-label">Importerad från</label>
							</div>
						: "" }
						{ this.state.model.attributes.entity_id != 0 ?
							<div className="uk-width-2-6">
								<div className="uk-form-icon">
									<i className="uk-icon-institution"></i>
									<input type="text" value={this.state.model.attributes.importer} disabled />
								</div>
								<p><em><Link to={"/economy/" + this.props.match.params.period + "/instruction/" + this.state.model.attributes.instruction_number + "/import"}>Visa data från import</Link></em></p>
							</div>
						: "" }
					</div>

					<div className="uk-grid">
						<div className="uk-width-1-6">
							<label className="uk-form-label">Kommentar</label>
						</div>
						<div className="uk-width-3-6">
							<textarea value={this.state.model.attributes.description} onChange={this.handleChange.bind(this)} />
						</div>
					</div>
				</form>

				<table className="uk-table">
					<thead>
						<tr>
							<th>Konto</th>
							<th>Kommentar</th>
							<th className="uk-text-right">Belopp</th>
						</tr>
					</thead>
					<tbody>
						{content}
					</tbody>
				</table>

				<table className="uk-table">
					<thead>
						<tr>
							<th>Filnamn</th>
						</tr>
					</thead>
					<tbody>
						{files}
					</tbody>
				</table>
			</div>
		);
	}
});