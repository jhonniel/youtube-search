import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyByPzvYHAQz1Q_WTLDCU6RVs7K3Jawa4uc';

const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));