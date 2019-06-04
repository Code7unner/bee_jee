import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Styles
import './App.css';

// Components
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';

// Redux
import store from './redux/store/store';

function App() {
	return (
		<Provider store={store}>
			<Router>
                <Header/>
                <Route exact path="/" component={Landing} />
            </Router>
		</Provider>
	);
}

export default App;
