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
    return (
      <div className="app">
				<header className="app__header">
					<h1 className="app__title">rick and morty</h1>
				</header>
				<main className="app__main">
				</main>
      </div>
    );
  }
}

export default App;
