// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((result) => {setResult(result.data)})
  .catch((error) => {setError('There was an error with your request.')})
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
  axios.get(BASE_URL + selectedPetId)
    .then((result) => {setResult(result.data)})
    .catch((error) => {setError(`${error.response.status}: failed request`)})
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(BASE_URL + selectedPetId)
    .then((result) => {setResult(result.data)})
    .catch((error) => {setError(`Unable to remove pet: ${error}`)})
  };
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL, petInfo)
  .then((result) => {setResult(result.data)})
  .catch((error) => {setError(`Failed to add new pet: ${error}`)})
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
