/* Packages */
import React, { Component } 	from "react";
import ReactDOM 					from "react-dom";
import YTSearch 					from "youtube-api-search";
/* Components */
import SearchBar 					from "./components/search_bar";
import VideoList					from "./components/video_list";
import VideoDetail				from "./components/video_detail";
/* API Key from https://console.developers.google.com/apis/dashboard for YouTube */
const API_KEY = "AIzaSyCF_ikzfUXduzWPsg3EnBR_1zmnxra0i_8";


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.searchVideo();
	}

	searchVideo() {
		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {

			//By using arrow-function we can use "this". When the key and value is
			//the same, we can shorten it
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return(
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));
