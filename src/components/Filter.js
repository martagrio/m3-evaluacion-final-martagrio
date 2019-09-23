import React from 'react';
import PropTypes from 'prop-types';


const Filter = props => {
	const {getQuery, query} = props;
	return(
		<div className="app__search">
			<input className="app__input" 
				type="text" 
				onChange = {getQuery} 
				value={query}
				placeholder = "Please, enter the name of the desired character" />	
	</div>
	);
}

Filter.propTypes = {
	getQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired
}
export default Filter;