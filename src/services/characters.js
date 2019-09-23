const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => fetch(ENDPOINT)
.then(response => response.json())
.then(data => data.results);

export {fetchCharacters}; 