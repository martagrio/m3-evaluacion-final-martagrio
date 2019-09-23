import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
	
	const {routerProps, characters} = props;
	const charId = parseInt(routerProps.match.params.charId);
	const character = characters.filter(item => item.id === charId);

	if (charId > characters.length) {
		return (
			<React.Fragment>
				<Link to ="/" className="app__go-back">volver</Link>
				<p className="error_message">Actualmente sólo hay 20 personajes.</p>
			</React.Fragment>
		);
	}

	if (character[0]) {
		const {image, name, status, origin, episode} = character[0];
		return(
			<React.Fragment>
				<Link to ="/" className="app__go-back">volver</Link>
				<div className="character__detail">
					<div className="detail__image">
						<img src={image} alt={name} />
					</div>
					<h2 className="detail__name">{name}</h2>
					<p className="detail__status"><strong>Status:</strong> {status}</p>
					<p className="detail__origin"><strong>Origin:</strong> {origin.name}</p>
					<p className="detail_episodes"><strong>Episodes:</strong> {episode.length}</p>
				</div>
			</React.Fragment>	
	);
	} else {

	}
	return(
		<React.Fragment>
			<Link to ="/" className="app__go-back">volver</Link>
			<p className="error_message"> Ese personaje no está actualmente registrado</p>
		</React.Fragment>	
	);
}

CharacterDetail.propTypes = {
	routerProps: PropTypes.object.isRequired,
	characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;