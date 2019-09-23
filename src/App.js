import React from 'react';
import {fetchCharacters} from './services/characters';
import Header from './components/Header';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';

import './App.css';
import './css/Header.css'

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			characters: [],
			query: ''
		}

		this.getQuery = this.getQuery.bind(this);
  }

	componentDidMount() {
		this.getCharacters();
	}

	getCharacters() {
		fetchCharacters()
		.then(characters => {
			this.setState({
				characters: characters.results
			})
		})
	}

	getQuery(event){
		const userQuery = event.currentTarget.value;
		this.setState({
			query: userQuery
		})
	}

  render() {
		const {characters, query} = this.state;
    return (
      <div className="app">
				<Header />
				<main className="app__main">
					<Filter 
						getQuery = {this.getQuery}
						query = {query}	
					/>
					<CharacterList
						characters = {characters} 
						query = {query}
					/>

				</main>
      </div>
    );
  }
}

export default App;