import React from 'react'

// Backbone
import GroupModel from '../../Models/Group'
import MemberCollection from '../../Collections/Member'

import { withRouter } from 'react-router'
import Group from '../../Components/Forms/Group'
import GroupMembers from '../../Components/Tables/GroupMembers'

module.exports = withRouter(class Show extends React.Component
{
	constructor(props)
	{
		super(props);

		var group = new GroupModel({
			group_id: this.props.match.params.group_id
		});
		group.fetch();

		this.title = "Meep";
		this.state = {
			model: group
		};
	}

	render()
	{
		return (
			<div>
				<Group model={this.state.model} route={this.props.route} />
				<GroupMembers type={MemberCollection} dataSource={{
					url: "/membership/group/" + this.props.match.params.group_id + "/members"
				}} />
			</div>
		);
	}
});
//GroupHandler.title = "Visa grupp";