import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// Backbone
import KeysCollection from '../../Collections/Keys'

import Keys from '../Tables/Keys'
import Key from '../Forms/Key'

module.exports = class List extends React.Component
{
	onEdit(key)
	{
		this.props.history.push("/membership/members/" + this.props.match.params.member_id + "/keys/" + key.get("key_id"));
	}

	render()
	{
		return (
			<div>
				<Keys
					type={KeysCollection}
					linkPrefix={"/membership/members/" + this.props.match.params.member_id}
					dataSource={{
						url: "/related",
						params: {
							param: "/membership/member/" + this.props.match.params.member_id,
							matchUrl: "/keys/(.*)",
							from: "keys",
						}
					}}
					onEdit={this.onEdit.bind(this)}
					route={this.props.route}
				/>
				<Link to={"/membership/members/" + this.props.match.params.member_id + "/keys/add"} className="uk-button uk-button-primary"><i className="uk-icon-plus-circle" /> Lägg till ny RFID-tagg</Link>
			</div>
		);
	}
}