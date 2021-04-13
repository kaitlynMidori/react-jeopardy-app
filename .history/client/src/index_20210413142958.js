import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { UsersContextProvider } from './contexts/Users.js'
import * as serviceWorker from './serviceWorker'
import 'milligram'
import './styles.css'

import App from './App'

ReactDOM.render(
	<Router>
	  <React.StrictMode>
		<UsersContextProvider>
		  <App />
		</UsersContextProvider>
	  </React.StrictMode>
	</Router>,
	document.getElementById('root'),
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

// ReactDOM.render(
// 	<Router><App /></Router>,
// 	document.getElementById('root')
// ) 