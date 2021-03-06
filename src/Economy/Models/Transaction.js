import Backbone from 'backbone'

module.exports = Backbone.Model.fullExtend(
{
	idAttribute: "entity_id",//TODO
	urlRoot: function()
	{
		return "/economy/" + this.get("period") + "/transaction";
	},
	defaults: {
		created_at: "",
		updated_at: "",
		transaction_title: "",
		transaction_description: "",
		accounting_instruction: "",
		accounting_account: "",
		accounting_cost_center: "",
		amount: 0,
		external_id: "",
		instruction_title: "",
		instruction_number: 0,
		accounting_date: "",
		extid: 0,
		balance: 0,
	},
});