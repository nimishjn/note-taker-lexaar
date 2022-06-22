import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxStore from './store/ReduxStore';
import { Provider } from 'react-redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={ReduxStore}>
			<App />
		</Provider>
	</React.StrictMode>
);
