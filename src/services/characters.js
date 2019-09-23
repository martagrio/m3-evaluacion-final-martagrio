const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchCharacters = () => fetch(ENDPOINT)
.then(response => response.json())

export {fetchCharacters};