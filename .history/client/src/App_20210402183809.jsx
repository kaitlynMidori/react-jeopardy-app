// import React from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
// import httpClient from './httpClient'
// import NavBar from './NavBar'
// import LogIn from './views/LogIn'
// import LogOut from './views/LogOut'
// import SignUp from './views/SignUp'
// // import VIP from './views/VIP'
// import Practice from './views/Practice'
// import Play from './views/Play'
// import Leaderboard from './views/Leaderboard'
// import Home from './views/Home'

// class App extends React.Component {
// 	state = { currentUser: httpClient.getCurrentUser() }

// 	onLoginSuccess(user) {
// 		this.setState({ currentUser: httpClient.getCurrentUser() })
// 	}

// 	logOut() {
// 		httpClient.logOut()
// 		this.setState({ currentUser: null })
// 	}

import React, {Component} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Play from "./views/Play";
import Practice from "./views/Practice";
import Leaderboard from "./views/Leaderboard";
import NoMatch from "./views/NoMatch";
import Nav from "./components/Nav";
import { Grommet } from "grommet";

const theme = { global: { colors: { doc: "#ff99cc" } } };

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

	render() {
		const { currentUser } = this.state
		return (
			<div className='App container'>

				<NavBar currentUser={currentUser} />

				<Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/practice" render={() => {
						return currentUser
							? <Practice />
							: <Redirect to="/login" />
					}} />

					<Route path="/play" render={() => {
						return currentUser
							? <Play />
							: <Redirect to="/login" />
					}} />

					<Route path="/leaderboard" render={() => {
						return currentUser
							? <Leaderboard />
							: <Redirect to="/login" />
					}} />

					<Route path="/" component={Home} />

				</Switch>
			</div>
		)
	}
}

export default App