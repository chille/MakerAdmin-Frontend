import React from 'react'
import { withRouter } from 'react-router'
//import PropTypes from 'prop-types';

class GenericEntityForm extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			disableSend: true,
			ignoreExitHook: false,
			model: this.props.model,
		};

		// TODO: This following is a hack for code that should be refactored
		this.model = this.state.model;

		this.state.model.on("sync", this.onModelChange.bind(this));
		//TODO1: What event should we update on? sync or change?
	}

	onModelChange(a)
	{
		console.log("GenericEntityForm.onModelChange()");
		console.log(a);
		console.log(this.props.model.length);

		this.setState({model: this.state.model});
	}

	componentDidMount()
	{
		var _this = this;
/*
		// User should get a warning if trying to leave the page when there is any unsaved data in the form
		this.context.router.setRouteLeaveHook(this.props.route, () =>
		{
			// TODO: När den här funktionen väl är registrerad verkar den ligga kvar tills nästa sidladdning,
			// så om modellen försvinner kommer den gnälla. En bättre lösning vore att avregistrera exit handlern,
			// när den inte längre behövs. Det här problemet dyker upp lite överallt.
			// TODO: Verkar vara fixat nu?
			if(this.state.ignoreExitHook !== true && /*this.wrapper !== undefined && this.state.model !== undefined &&* this.state.model.isDirty())
			{
				return "Du har information som inte är sparad. Är du säker på att du vill lämna sidan?";
			}
		})
*/
		// If we create a enableSendButton() function it will be called everytime a model have changed
		// The enableSendButton() function should be used to validate the model and enable/disable the send/save button
		this.state.model.on("change sync", function() {
			_this.updateSendButton();
		});
	}

	updateSendButton()
	{
		if(this.__proto__.hasOwnProperty("enableSendButton"))
		{
			var _this = this;
			// We need to have a delay so setState() has propely updated the state
			setTimeout(() =>
			{
				// The user might already have leaved the page via an onCreate or onUpdate handler
				// Ignore this call if the model is destroyed
				if(/*_this.wrapper !== undefined &&*/ _this.state.model !== undefined)
				{
					// Note: We invert the result because we want the function to return true to activate the button, while disabled="" works the other way
					_this.setState({disableSend: !(_this.enableSendButton())});
				}
			}, 0);
		}
	}

	handleChange(event)
	{
		// Update the model with new value
		var target = event.target;
		var key = target.getAttribute("name");
		this.state.model.set(key, target.value);

		// When we change the value of the model we have to rerender the component
		this.forceUpdate();
	}

	// Generic cancel function
	cancel(entity)
	{
		if(this.props.hasOwnProperty("onCancel"))
		{
			this.props.onCancel(entity);
		}
		else if(this.__proto__.hasOwnProperty("onCancel"))
		{
			this.onCancel(entity);
		}
	}

	// Generic remove function
	removeEntity(event)
	{
		var _this = this;

		// Prevent the form from being submitted
		event.preventDefault();

		// Ask the user from confirmation and then try to remove
		var entity = this.state.model;
		UIkit.modal.confirm(this.removeTextMessage(entity.attributes), function()
		{
			entity.destroy({
				wait: true,
				success: function(model, response)
				{
					if(response.status == "deleted")
					{
						if(_this.props.hasOwnProperty("onRemove"))
						{
							_this.props.onRemove();
						}
						else if(_this.__proto__.hasOwnProperty("onRemove"))
						{
							_this.onRemove();
						}
						else
						{
							UIkit.notify("Successfully deleted", {status: "success"});
						}
					}
					else
					{
						if(_this.props.hasOwnProperty("onRemoveError"))
						{
							_this.props.onRemoveError(_this.state.model);
						}
						else if(_this.__proto__.hasOwnProperty("onRemoveError"))
						{
							_this.onRemoveError(_this.state.model);
						}
						else
						{
							UIkit.notify("Error while deleting", {timeout: 0, status: "danger"});
						}
					}
				},
				error: function()
				{
					if(_this.props.hasOwnProperty("onRemoveError"))
					{
						_this.props.onRemoveError(_this.state.model);
					}
					else if(_this.__proto__.hasOwnProperty("onRemoveError"))
					{
						_this.onRemoveError(_this.state.model);
					}
					else
					{
						UIkit.notify("Error while deleting", {timeout: 0, status: "danger"});
					}
				},
			});
		});
		return false;
	}

	// Generic save function
	saveEntity(event)
	{
		var _this = this;

		// Clear the created_at and updated_at
		this.state.model.set("created_at", null);
		this.state.model.set("updated_at", null);

		// Prevent the form from being submitted
		event.preventDefault();

		this.state.model.save(null, {
			success: function(model, response)
			{
				if(response.status == "created")
				{
					if(_this.props.hasOwnProperty("onCreate"))
					{
						_this.props.onCreate(_this.state.model);
					}
					else if(_this.__proto__.hasOwnProperty("onCreate"))
					{
						_this.onCreate(_this.state.model);
					}
					else
					{
						UIkit.notify("Successfully saved", {status: "success"});
					}
				}
				else if(response.status == "updated")
				{
					if(_this.props.hasOwnProperty("onUpdate"))
					{
						_this.props.onUpdate(_this.state.model);
					}
					else if(_this.__proto__.hasOwnProperty("onUpdate"))
					{
						_this.onUpdate(_this.state.model);
					}
					else
					{
						UIkit.notify("Successfully updated", {status: "success"});
					}
				}
				else
				{
					if(_this.props.hasOwnProperty("onSaveError"))
					{
						_this.props.onSaveError(_this.state.model);
					}
					else if(_this.__proto__.hasOwnProperty("onSaveError"))
					{
						_this.onSaveError(_this.state.model);
					}
					else
					{
						UIkit.notify("Error while saving", {timeout: 0, status: "danger"});
					}
				}
			},
			error: function(model, response, options)
			{
				if(response.status == 422)
				{
					_this.setState({
						error_column:  response.responseJSON.column,
						error_message: response.responseJSON.message,
					});
				}
				else
				{
					if(_this.props.hasOwnProperty("onSaveError"))
					{
						_this.props.onSaveError(_this.state.model);
					}
					else if(_this.__proto__.hasOwnProperty("onSaveError"))
					{
						_this.onSaveError(_this.state.model);
					}
					else
					{
						UIkit.notify("Error while saving", {timeout: 0, status: "danger"});
					}
				}
			},
		});
	}

	// Render the cancel button
	cancelButton()
	{
		return (
			<a className="uk-button uk-button-danger uk-float-left" onClick={this.cancel.bind(this)}><i className="uk-icon-close"></i> Avbryt</a>
		);
	}

	// Render the remove button
	removeButton(text)
	{
		if(this.state.model.id === undefined)
		{
			return;
		}

		if(text === undefined)
		{
			var text = "Spara";
		}

		return (
			<a className="uk-button uk-button-danger uk-float-left" onClick={this.removeEntity.bind(this)}><i className="uk-icon-trash"></i> {text}</a>
		);
	}

	// Render the save button
	saveButton(text)
	{
		if(text === undefined)
		{
			var text = "Spara";
		}

		return (
			<button className="uk-button uk-button-success uk-float-right" disabled={this.state.disableSend} onClick={this.saveEntity.bind(this)}><i className="uk-icon-save"></i> {text}</button>
		);
	}

	render()
	{
		return (<p>meep</p>);
	}
}

//GenericEntityForm.contextTypes = { router: PropTypes.object }

export default GenericEntityForm;