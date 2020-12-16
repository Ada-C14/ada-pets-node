// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL).then(
    (response) => {setResult(response.data)}
  ).catch(
    // (error) => {setError(`Failed to list pets with status code: ${error.status}`)}
    // WHAT DOES UNDEFINED MEAN HERE
    function(error) {
      if (error.response === undefined) {
        setError('We didn\'t get any response');
      } else {
      console.log(error.response.status)
      setError(`Failed to list pets with status code: ${error.response.status}`)
      }
    }

  )
  
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
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
