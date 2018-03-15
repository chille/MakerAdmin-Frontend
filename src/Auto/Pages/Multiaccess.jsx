import React from 'react'
import Multiaccess from '../Components/Multiaccess'
import File from '../../Components/Form/File'

module.exports = class MultiAccess extends React.Component
{
	componentDidMount()
	{
		this.setState({
			filename: ""
		});
	}

	uploadComplete(filename)
	{
		this.setState({filename});
	}

	render()
	{
		return (
			<div>
				<h1>MultiAccess avstämning</h1>

				<File action="/multiaccess/upload" onFile={this.uploadComplete} />

				<Multiaccess filename={this.state.filename} />
			</div>
		);
	}
}