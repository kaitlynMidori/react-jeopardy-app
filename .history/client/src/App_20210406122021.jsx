import React, {Component} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Play from "./pages/Play";
import Practice from "./pages/Practice";
import Leaderboard from "./pages/Leaderboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/home";
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
    return (
      <Grommet theme={theme}>
        <Router basename = "/app">
          <div>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home /> 
              </Route>
              <Route exact path= "/login">
                <Login updateUser={this.updateUser} />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/play">
                <Play />
              </Route>
              <Route exact path="/practice">
                <Practice />
              </Route>
              <Route exact path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </Grommet>
    );
  }
}

export default App;