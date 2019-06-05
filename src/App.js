import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Styles
import './App.css';

// Components
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';

// Redux
import store from './redux/store/store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Header/>
					<Route exact path="/" component={Landing} />
					<Route exact path="/login" component={Login} />
				</Router>
			</Provider>
		);
	}
}

export default App;
