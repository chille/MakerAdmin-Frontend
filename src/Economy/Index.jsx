import React from 'react'
import { Route, Switch } from 'react-router'

import Overview from './Pages/Overview'
import MasterLedger from './Pages/MasterLedger'
//import Invoice from './Pages/Invoice'

import InstructionList from '../Pages/404'
import InstructionAdd from '../Pages/404'
import InstructionShow from '../Pages/404'
import InstructionShowImport from '../Pages/404'
import InvoiceList from '../Pages/404'
import InvoiceAdd from '../Pages/404'
import InvoiceShow from '../Pages/404'
import ValuationSheet from '../Pages/404'
import ResultReport from '../Pages/404'
import CostcenterList from '../Pages/404'
import CostcenterShow from '../Pages/404'
import AccountShow from '../Pages/404'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<Switch>
				<Route exact path="/economy" component={Overview} />
				<Route exact path="/economy/:period" component={Overview} />
				<Route exact path="/economy/:period/overview" component={Overview} />
				<Route exact path="/economy/:period/masterledger" component={MasterLedger} />
				<Route exact path="/economy/:period/instruction" component={InstructionList} />
				<Route exact path="/economy/:period/instruction/add" component={InstructionAdd} />
				<Route exact path="/economy/:period/instruction/:instruction_number" component={InstructionShow} />
				<Route exact path="/economy/:period/instruction/:instruction_number/import" component={InstructionShowImport} />
				<Route exact path="/economy/:period/invoice" component={InvoiceList} />
				<Route exact path="/economy/:period/invoice/list" component={InvoiceList} />
				<Route exact path="/economy/:period/invoice/add" component={InvoiceAdd} />
				<Route exact path="/economy/:period/invoice/:invoice_id" component={InvoiceShow} />
				<Route exact path="/economy/:period/valuationsheet" component={ValuationSheet} />
				<Route exact path="/economy/:period/resultreport" component={ResultReport} />
				<Route exact path="/economy/:period/costcenter" component={CostcenterList} />
				<Route exact path="/economy/:period/costcenter/:costcener_id" component={CostcenterShow} />
				<Route exact path="/economy/:period/account/:account_number" component={AccountShow} />
			</Switch>
		);
	}
}

/*
	// Settings
	{
		path: "settings",
		childRoutes: [
			{
				path: "economy",
				childRoutes: [
					{
						path: "debug",
						component: require("./Pages/Debug")
					},
					{
						path: "account",
						component: require("./Pages/Account/List")
					},
					{
						path: "account/add",
						component: require("./Pages/Account/Add")
					},
					{
						path: "account/:account_id",
						component: require("./Pages/Account/Show")
					},
					{
						path: "account/:account_id/edit",
						component: require("./Pages/Account/Edit")
					},
					{
						path: "accountingperiod",
						component: require("./Pages/AccountingPeriod/List")
					},
					{
						path: "accountingperiod/add",
						component: require("./Pages/AccountingPeriod/Add")
					},
					{
						path: "accountingperiod/:accountingperiod_id",
						component: require("./Pages/AccountingPeriod/Show")
					},
					{
						path: "accountingperiod/:accountingperiod_id/edit",
						component: require("./Pages/AccountingPeriod/Edit")
					},
				],
			},
		],
	}
*/