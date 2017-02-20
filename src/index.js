import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

/*API Key from https://console.developers.google.com/apis/dashboard for YouTube*/
const API_KEY = "AIzaSyCF_ikzfUXduzWPsg3EnBR_1zmnxra0i_8";
// Create a new component. This component should produce some HTML.
const App = () => {
	return(
		<div>
			<SearchBar />
		</div>
	);
};

//Put component into the DOM, inside the element with a class of "container"
ReactDOM.render(<App />, document.querySelector('.container'));
