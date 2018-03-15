import React from 'react'
import DateTimeField from '../../Components/DateTime'

module.exports = class Meep extends React.Component
{
	render()
	{
		this.state.model.attributes.message_type = "sms"
		return (
			<div>
				<div className="uk-panel uk-panel-box uk-margin-bottom">
					<dl>
						<dt>Skapad</dt>
						<dd><DateTimeField date={this.state.model.attributes.created_at} /></dd>

						<dt>Typ</dt>
						<dd>
							{
									this.state.model.attributes.message_type == "email" ?
										(<span><i className="uk-icon-envelope" title="E-post" /> E-post</span>)
								:
									this.state.model.attributes.message_type == "sms" ?
										(<span><i className="uk-icon-commenting" title="SMS" /> SMS</span>)
								:
									this.state.model.attributes.message_type
							}
						</dd>

						<dt>Status</dt>
						<dd>{this.state.model.attributes.status}</dd>

						<dt>Antal mottagare</dt>
						<dd>{this.state.model.attributes.num_recipients}</dd>
					</dl>
				</div>

				<div className="uk-panel uk-panel-box uk-margin-bottom">
					{
						this.state.model.attributes.message_type != "sms" ?
							<h3 className="uk-panel-title">{this.state.model.attributes.subject}</h3>
						:
							''
					}

					
					{this.state.model.attributes.body}
				</div>
			</div>
		);
	}
}