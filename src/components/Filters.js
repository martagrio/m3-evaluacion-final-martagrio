import React from 'react';
import PropTypes from 'prop-types';
import '../css/Filters.css'


const Filters = props => {
	const {getQuery, query, getLocation, location} = props;
	return(
		<React.Fragment>
		<div className="app__search">
			<label htmlFor="query"></label>
			<input className="app__input"
				id = "query" 
				type="text" 
				onChange = {getQuery} 
				value={query}
				placeholder = "Please, enter the name of the desired character" />
			</div>
			<div className="search__planet">
				<label htmlFor="location">Location: </label>
					<input type="text" name="location" id="location"
						placeholder = "Please, enter the name of the desired location" 
						onChange = {getLocation}
						value = {location} />
			</div>
		</React.Fragment>	
	);
}

Filters.propTypes = {
	getQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired,
	getLocation: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}
export default Filters;