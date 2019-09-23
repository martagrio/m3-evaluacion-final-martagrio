import React from 'react';
import './App.css';
import './css/Header.css'

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			characters: []
		}
  }

  render() {
    return (
      <div className="app">
				<header className="app__header">
					<h1 className="app__title">rick and morty</h1>
				</header>
      </div>
    );
  }
}

export default App;
