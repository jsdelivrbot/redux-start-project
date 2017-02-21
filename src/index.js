/* Packages */
import React, { Component } 	from "react";
import ReactDOM 					from "react-dom";
import YTSearch 					from "youtube-api-search";
/* Components */
import SearchBar 					from "./components/search_bar";
import VideoList					from "./components/video_list";
/* API Key from https://console.developers.google.com/apis/dashboard for YouTube */
const API_KEY = "AIzaSyCF_ikzfUXduzWPsg3EnBR_1zmnxra0i_8";


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {

			//By using arrow-function we can use "this". When the key and value is
			//the same, we can shorten it
			this.setState({ videos });
		});
	}

	render() {
		return(
			<div>
				<SearchBar />
				<VideoList videos={ this.state.videos }/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));
