import React from 'react';
import PropTypes from 'prop-types';
import CharacterData from './CharacterCard';

const CharacterList = props => {
	const {characters, query} = props;
	return(
		<ul className="characters__list">
			{characters
				.filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
				.map( chac => {
					return (
						<li className="character" key={chac.id}>
							<CharacterData 
								image = {chac.image}
								name = {chac.name}
								species = {chac.species}
							/>
						</li>
					);
			})}
	</ul>
	);
}
CharacterList.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.object).isRequired,
	query: PropTypes.string.isRequired
}
export default CharacterList;