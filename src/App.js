import React from 'react';
import {fetchCharacters} from './services/characters';
import Header from './components/Header';
import Landing from './components/Landing';
import CharacterDetail from './components/CharacterDetail';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import './css/Header.css'

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			characters: [],
			query: '',
			location: ''
		}

		this.getQuery = this.getQuery.bind(this);
		this.getLocation = this.getLocation.bind(this);
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
		});
	}

	getLocation(event) {
		const newLocation = event.currentTarget.value;
		this.setState({
			location: newLocation
		});
	} 

  render() {
		const {characters, query, location} = this.state;
    return (
      <div className="app">
				<Header />
				<Switch>
					<Route exact path="/" render={() => {
						return(
						<Landing 
							getQuery = {this.getQuery}
							characters = {characters}
							query = {query}
							location = {location}
							getLocation = {this.getLocation}
					  />
						);
					}}/>

					<Route path="/detail/:charId" render={(routerProps) => {
						return(
						<CharacterDetail
							routerProps = {routerProps} 
							characters = {characters}
					  />
						);
					}}/>
				</Switch>
      </div>
    );
  }
}

export default App;