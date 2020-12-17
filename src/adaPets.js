// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError("invalid url")
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {

    // Fill out as part of Wave 2.
    //where is petDetails function
    axios.get(BASE_URL + selectedPetId)  //need to call PETS API
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(` ${ error }`)
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(`Success! Deleted ${selectedPetId}`)
    })
    .catch((error) => {
      setError(` Failed to remove ${ error }`)
    })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL + petInfo)
  .then((response) => {
    setResult(`Success! ${petInfo}`)
  })
  .catch((error) => {
    setError(` Failed to add ${ error }`)
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
