import React from 'react';
import {fetchCharacters} from './services/characters';
import Header from './components/Header';
import Landing from './components/Landing';
import {Route, Switch} from 'react-router-dom';

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
				<Landing 
					getQuery = {this.getQuery}
					characters = {characters}
					query = {query}
				/>
      </div>
    );
  }
}

export default App;