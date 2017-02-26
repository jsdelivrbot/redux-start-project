import React, { Component } from "react";

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	render() {
		return (
			<div className="search-bar form-group">
				<input className="form-control"
					value={this.state.term}
					onChange={ event => this.inputChange(event.target.value) }/>
			</div>
		);
	}

	inputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
