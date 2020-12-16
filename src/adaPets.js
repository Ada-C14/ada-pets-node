// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
       .then(response => {
         setResult(response.data)
       })
       .catch(error => {
         setError(`List pets action failed => ${error.response.status}: ${error.response.statusText}`)
       })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`)
         .then(response => {
           setResult(response.data)
         })
         .catch(error => {
          setError(`Show details action failed => ${error.response.status}: ${error.response.statusText}`)
         })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
         .then(response => {
           setResult(response.data)
         })
         .catch(error => {
            setError(`Remove pet action failed => ${error.response.status}: ${error.response.statusText}`)
         })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
