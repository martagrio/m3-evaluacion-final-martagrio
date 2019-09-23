import React from 'react';
import {fetchCharacters} from './services/characters';
import './App.css';
import Header from './components/Header';
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
				characters: characters
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
					<div className="app__search">
						<input className="app__input" 
							type="text" 
							onChange = {this.getQuery} 
							value={query}
							placeholder = "Please, enter the name of the desired character" />	
					</div>
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
				</main>
      </div>
    );
  }
}

export default App;
