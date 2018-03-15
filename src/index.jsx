// Load jQuery and UIkit
global.jQuery = require('jquery')
global.$ = global.jQuery;
require('uikit')
require('uikit/dist/js/core/dropdown')
require('uikit/dist/js/components/pagination')
require('uikit/dist/js/components/autocomplete')
require('uikit/dist/js/components/notify')
require('uikit/dist/js/components/upload')

// React
import React from 'react';
import ReactDOM from 'react-dom';

// React router
import {
	Router,
	Switch,
	Route
} from 'react-router'
import { Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import Backbone from './Backbone/FullExtend'

// Login / OAuth
import auth from './auth'
import Login from './Pages/Login/Login'

// Menu
import NavBar from './Components/NavBar'
import NavSide from './Components/NavSide'
import Breadcrumb from './Components/Breadcrumb'

// New
import ResetPassword from './Pages/Login/ResetPassword'
import Dashboard from './Pages/Dashboard'
import Global from './Pages/Settings/Global'
import Automation from './Pages/Settings/Automation'
import AccessTokens from './Pages/Login/AccessTokens'
import About from './Pages/About'

var accountingPeriod = 2016;

var nav = {
	brand: "MakerAdmin 1.0",
	navItems:
	[
		{
			text: "Medlemmar",
			target: "/membership",
			icon: "user",
			children:
			[
				{
					text: "Medlemmar",
					target: "/membership/members",
					icon: "user",
				},
				{
					text: "Grupper",
					target: "/membership/groups",
					icon: "group",
				},
			],
		},
		{
			text: "Automation",
			target: "/auto",
			icon: "coffee",
			children:
			[
				{
					text: "Översikt",
					target: "/auto/overview",
				},
				{
					type: "separator",
				},
				{
					text: "Tictail-ordrar",
					target: "/auto/tictail",
				},
				{
					text: "Skapa verifikationer",
					target: "/auto/verification",
				},
				{
					text: "Multiaccess",
					target: "/auto/multiaccess",
				},
			],
		},
		{
			text: "Nycklar",
			target: "/keys",
			icon: "key",
		},
		{
			text: "Försäljning",
			target: "/sales",
			icon: "shopping-basket",
			children:
			[
				{
					text: "Översikt",
					target: "/sales/overview",
				},
				{
					text: "Produkter",
					target: "/sales/product",
				},
				{
					text: "Prenumerationer",
					target: "/sales/subscription",
				},
				{
					text: "Historik",
					target: "/sales/history",
				},
			],
		},
		{
			text: "Ekonomi",
			target: "/economy",
			icon: "money",
			children:
			[
				{
					text: "Översikt",
					target: "/economy/" + accountingPeriod + "/overview",
					match: "/economy/:period/overview",
				},
				{
					text: "Huvudbok",
					target: "/economy/" + accountingPeriod + "/masterledger",
					match: "/economy/:period/masterledger",
				},
				{
					text: "Verifikationer",
					target: "/economy/" + accountingPeriod + "/instruction",
					match: "/economy/:period/instruction",
					children:
					[
						{
							text: "",
							target: "/economy/" + accountingPeriod + "/instruction/:id",
							match: "/economy/:period/instruction/:id",
						},
					],
				},
				{
					text: "Fakturor",
					target: "/economy/" + accountingPeriod + "/invoice",
					match: "/economy/:period/invoice",
					children:
					[
						{
							text: "",
							target: "/economy/" + accountingPeriod + "/invoice/:id",
							match: "/economy/:period/invoice/:id",
						},
					],
				},
				{
					type: "heading",
					text: "Rapporter",
					target: "",
				},
				{
					text: "Balansrapport",
					target: "/economy/" + accountingPeriod + "/valuationsheet",
					match: "/economy/:period/valuationsheet",
				},
				{
					text: "Resultatrapport",
					target: "/economy/" + accountingPeriod + "/resultreport",
					match: "/economy/:period/resultreport",
				},
				{
					type: "heading",
					text: "Statistik",
					target: "",
				},
				{
					text: "Kostnadsställen",
					target: "/economy/" + accountingPeriod + "/costcenter",
					match: "/economy/:period/costcenter",
				},
			],
		},
		{
			text: "Utskick",
			target: "/messages",
			icon: "envelope",
			children: [
				{
					text: "Historik",
					target: "/messages/history",
					icon: "list",
				},
				{
					text: "Nytt utskick",
					target: "/messages/new",
					icon: "envelope",
				},
				{
					text: "Mallar",
					target: "/messages/templates",
					icon: "file-text-o",
				},
			],
		},
		{
			text: "Statistik",
			target: "/statistics",
			icon: "area-chart",
		},
		{
			text: "Inställningar",
			target: "/settings",
			icon: "cog",
			children:
			[
				// Inställningar
				{
					text: "Globala inställningar",
					target: "/settings/global",
				},
				{
					text: "Access tokens",
					target: "/settings/tokens",
				},
				{
					text: "Automation",
					target: "/settings/automation",
				},
				{
					type: "separator",
					target: "",
				},

				// Ekonomi
				{
					type: "heading",
					text: "Ekonomi",
					target: "",
					icon: "money",
				},
				{
					text: "Kontoplan",
					target: "/settings/economy/account",
				},
				{
					text: "Räkneskapsår",
					target: "/settings/economy/accountingperiod",
				},
				{
					text: "Debug",
					target: "/settings/economy/debug",
				},

				// Export
				{
					type: "heading",
					text: "Export",
					target: "",
					icon: "download",
				},
				{
					text: "Exportera data",
					target: "/settings/export",
				},
				{
					text: "Importera data",
					target: "/settings/import",
				},

				// About
				{
					type: "heading",
					text: "About",
					target: "",
					icon: "about",
				},
				{
					text: "About",
					target: "/settings/about",
				},
			],
		},
		{
			text: "Logga ut",
			target: "/logout",
			icon: "sign-out",
		},
	]
};

import ModuleEconomy from './Economy/Index'
import ModuleStatistics from './Statistics/Index'
import ModuleKeys from './Keys/Index'
import ModuleAuto from './Auto/Index'
import ModuleMembership from './Membership/Index'
import Logout from './Pages/Login/Logout'
import Error404 from './Pages/404'

class App extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			isLoggedIn: auth.isLoggedIn()
		};
	}

	updateAuth(isLoggedIn)
	{
		this.setState({
			isLoggedIn
		});
	}

	componentWillMount()
	{
		auth.onChange = this.updateAuth.bind(this);
	}

	render()
	{
		if(this.state.isLoggedIn)
		{
			return (
				<div>
					<NavBar />
					<div className="uk-container uk-container-center uk-margin-top">
						<div className="uk-grid">
							<div className="uk-width-medium-1-4">
								<NavSide navItems={nav.navItems} />
							</div>

							<div className="uk-width-medium-3-4">
								<Breadcrumb routes={this.props.routes}/>

								{this.props.children}
								<Switch>
									<Route exact path="/" component={Dashboard} />
									<Route exact path="/logout" component={Logout} />
									<Route exact path="/resetpassword" component={ResetPassword} />
									<Route exact path="/settings/global" component={Global} />
									<Route exact path="/settings/automation" component={Automation} />
									<Route exact path="/settings/tokens" component={AccessTokens} />
									<Route exact path="/settings/about" component={About} />

									<ModuleMembership />
									<ModuleEconomy />
									<ModuleStatistics />
									<ModuleKeys />
									<ModuleAuto />

									<Route component={Error404} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else
		{
			return (
				<Login />
			);
		}
	}
}

//TODO1
//App.title = "MakerAdmin"

ReactDOM.render((
	<Router history={history}>
		<Route path="/" component={App}/>
	</Router>
), document.getElementById("main"));