import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Landing = props => {

	const {getQuery, query, characters, location, getLocation} = props;

	return(
		<main className="app__main">
			<Filters 
				getQuery = {getQuery}
				query = {query}
				location = {location}	
				getLocation = {getLocation}
			/>
			<CharacterList
				characters = {characters} 
				query = {query}
				location = {location}	
			/>
		</main>
	);
}

Landing.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.object).isRequired,
	getQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired,
	getLocation: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
}

export default Landing;