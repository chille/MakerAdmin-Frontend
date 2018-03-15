import React from 'react'

// Backbone
import SubscriptionCollection from '../../../Collections/Subscription'

import SubscriptionsUser from '../../../Components/Tables/SubscriptionsUser'

module.exports = class List extends React.Component
{
	render()
	{
		return (
			<SubscriptionsUser
				type={SubscriptionCollection}
				dataSource={{
					url: "/related",
					params: {
						param: "/membership/member/" + this.props.match.params.member_id,
						matchUrl: "/sales/subscription/(.*)",
						from: "sales/subscription",
					}
				}}
			/>
		);
	}
}