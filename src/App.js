import React from 'react';
import {fetchCharacters} from './services/characters';
import './App.css';
import './css/Header.css'

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			characters: []
		}
  }

	componentDidMount() {
		this.getCharacters();
	}

	getCharacters() {
		fetchCharacters()
		.then(characters => {
			this.setState({
				characters: characters
			})
		})
	}

  render() {
		const {characters} = this.state;
    return (
      <div className="app">
				<header className="app__header">
					<h1 className="app__title">rick and morty</h1>
				</header>
				<main className="app__main">
					<ul className="characters__list">
						{characters.map( chac => {
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
				</main>
      </div>
    );
  }
}

export default App;
