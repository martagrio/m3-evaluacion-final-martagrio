import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';
import '../css/Landing.css';

const Landing = props => {

	const {getQuery, query, characters} = props;

	return(
		<main className="app__main">
			<Filters 
				getQuery = {getQuery}
				query = {query}	
			/>
			<CharacterList
				characters = {characters} 
				query = {query}
			/>
		</main>
	);
}

Landing.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.object).isRequired,
	getQuery: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired
}

export default Landing;