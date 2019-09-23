import React from 'react';
import PropTypes from 'prop-types';


const Filters = props => {
	const {getQuery, query} = props;
	return(
		<div className="app__search">
			<label htmlFor="query"></label>
			<input className="app__input"
				id = "query" 
				type="text" 
				onChange = {getQuery} 
				value={query}
				placeholder = "Please, enter the name of the desired character" />	
	</div>
	);
}

Filters.propTypes = {
	getQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired
}
export default Filters;