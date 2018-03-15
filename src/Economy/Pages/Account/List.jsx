import React from 'react'

// Backbone
import AccountCollection from '../../Collections/Account'

import { Link, withRouter } from 'react-router-dom'

import EconomyAccounts from '../../Components/Tables/Accounts'

module.exports = withRouter(class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Konton</h2>

				<p className="uk-float-left">På denna sida ser du en lista över samtliga bokföringskonton, även de som inte har några bokförda verifikationer.</p>
				<Link to={"/settings/economy/account/add"} className="uk-button uk-button-primary uk-float-right"><i className="uk-icon-plus-circle"></i> Skapa nytt konto</Link>

				<EconomyAccounts
					type={AccountCollection}
					dataSource={{
						url: "/economy/" + this.props.match.params.period + "/account"
					}}
				/>
			</div>
		);
	}
});