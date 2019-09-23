import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
	const {image, name, species} = props;
	return(
		<React.Fragment>
			<div className="character__img">
				<img src={image} alt={name}/>
			</div>
			<h2 className="chacracter__name">{name}</h2>
			<h3 className="character__species">{species}</h3>
		</React.Fragment>
	);
}

CharacterCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	species: PropTypes.string.isRequired
}

export default CharacterCard;