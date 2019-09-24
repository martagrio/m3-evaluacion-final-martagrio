import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import '../css/CharacterDetail.css';

const CharacterDetail = props => {
	
	const {routerProps, characters} = props;
	const charId = parseInt(routerProps.match.params.charId);
	const character = characters.filter(item => item.id === charId);

	if (charId > characters.length) {
		return (
			<div className="detail__error">
				<Link to ="/" className="app__go-back">{`< back`}</Link>
				<p className="error_message">Actualmente sólo hay 20 personajes.</p>
			</div>
		);
	}

	if (character[0]) {
		const {image, name, status, origin, episode} = character[0];
		return(
			<div className="detail__box">
				<Link to ="/" className="app__go-back">{`< back`}</Link>
				<div className="character__detail">
					<div className="detail__image">
						<img src={image} alt={name} className="detail__img"/>
					</div>
					<div className="detail__text">
						<h2 className="detail__name">{name}</h2>
						<p className="detail__status"><strong>Status:</strong> {(status === 'Dead') ? <i className="fas fa-skull-crossbones"></i> : `${status}`}</p>
						<p className="detail__origin"><strong>Origin:</strong> {origin.name}</p>
						<p className="detail_episodes"><strong>Episodes:</strong> {episode.length}</p>
					</div>
				</div>
			</div>	
	);
	} else {

	}
	return(
		<div className="detail__error">
			<Link to ="/" className="app__go-back">{`< back`}</Link>
			<p className="error_message"> Ese personaje no está actualmente registrado</p>
		</div>	
	);
}

CharacterDetail.propTypes = {
	routerProps: PropTypes.object.isRequired,
	characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;