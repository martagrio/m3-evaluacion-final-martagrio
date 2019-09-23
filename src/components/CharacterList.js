import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import '../css/CharacterList.css';

const CharacterList = props => {
	const {characters, query} = props;
	return(
		<ul className="characters__list">
			{characters
				.filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
				.map( chac => {
					return (
						<li className="character" key={chac.id}>
							<Link to={`/detail/${chac.id}`} className="character__link">
								<CharacterCard 
									image = {chac.image}
									name = {chac.name}
									species = {chac.species}
								/>
							</Link>
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