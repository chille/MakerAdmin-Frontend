import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router'

module.exports = withRouter(class Index extends React.Component
{
	render()
	{
		console.log(this.props);

		return (
			<div>
				<Switch>
					<Redirect exact from="/membership" to="/membership/members" />

					<Route exact path="/membership/groups" component={require('./Pages/Group/List')} />
					<Route exact path="/membership/groups/:group_id/edit" component={require('./Pages/Group/Edit')} />
					<Switch>
						<Route exact path="/membership/groups/add" component={require('./Pages/Group/Add')} />
						<Route exact path="/membership/groups/:group_id" component={require('./Pages/Group/Show')} />
					</Switch>

					<Route path="/membership/members" component={require('./Pages/Member/List')} />
					<Switch>
							<Route exact path="/membership/members/add" component={require('./Pages/Member/Add')} />
							<Route path="/membership/members/:member_id" component={require('./Pages/Member/Show')} />
					</Switch>

				</Switch>
			</div>
		);
	}
});

/*
			<div>
				<Switch>
					<Redirect exact from="/membership" to="/membership/members" />

					<Route path="/membership/members" component={require('./Pages/Member/List')} />
					<Switch>
						<Switch>
							<Route exact path="/membership/members/add" component={require('./Pages/Member/Add')} />
							<Route path="/membership/members/:member_id" component={require('./Pages/Member/Show')} />
							<Switch>
								<Route exact path="/membership/members/:member_id" component={require('./Components/UserBox/User/Show')} />
								<Route exact path="/membership/members/:member_id/info" component={require('./Components/UserBox/User/Show')} />
								<Route exact path="/membership/members/:member_id/groups" component={require('./Components/UserBox/Groups/List')} />
								<Route exact path="/membership/members/:member_id/groups/add" component={require('./Components/UserBox/Groups/Add')} />
								<Route path="/membership/members/:member_id/keys" component={require('../Keys/Components/UserBox/List')} />
								<Switch>
									<Route exact path="/membership/members/:member_id/keys/add" component={require('../Keys/Components/UserBox/Add')} />
									<Route exact path="/membership/members/:member_id/keys/:key_id" component={require('../Keys/Components/UserBox/Edit')} />
								</Switch>
								<Route exact path="/membership/members/:member_id/subscriptions" component={require('../Sales/Components/UserBox/Subscriptions/List')} />
								<Route exact path="/membership/members/:member_id/transactions" component={require('../Economy/Components/UserBox/List')} />
								<Route exact path="/membership/members/:member_id/messages" component={require('../Messages/Components/UserBox/List')} />
								<Route exact path="/membership/members/:member_id/messages/new" component={require('../Messages/Components/UserBox/New')} />
							</Switch>
						</Switch>
					</Switch>

					<Route exact path="/membership/groups" component={require('./Pages/Group/List')} />
					<Route exact path="/membership/groups/:group_id/edit" component={require('./Pages/Group/Edit')} />
					<Switch>
						<Route exact path="/membership/groups/add" component={require('./Pages/Group/Add')} />
						<Route exact path="/membership/groups/:group_id" component={require('./Pages/Group/Show')} />
					</Switch>
				</Switch>
			</div>
*/