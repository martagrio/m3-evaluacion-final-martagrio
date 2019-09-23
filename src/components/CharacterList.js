import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
	const {characters, query} = props;
	return(
		<ul className="characters__list">
			{characters
				.filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
				.map( chac => {
					return (
						<li className="character" key={chac.id}>
							<div className="character__img">
								<img src={chac.image} alt={chac.name}/>
							</div>
							<h2 className="chacracter__name">{chac.name}</h2>
							<h3 className="character__species">{chac.species}</h3>
						</li>
					);
			})}
	</ul>
	);
}
CharacterList.propTypes = {
	characters: PropTypes.array.isRequired,
	query: PropTypes.string.isRequired
}
export default CharacterList;