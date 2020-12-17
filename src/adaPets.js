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
  }) .catch((error) => {
    setError('error')
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else { axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data)
    }) .catch((error) => {
      setError(`Error 404: failed to find ${error.response.status}`)
    })
  }
};

// Not sure if I wanted to delete??
const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    selectedPetIdName = selectedPetId
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data)
    }) .catch((error) => {
      setError(`Error 404: failed to remove ${selectedPetIdName}`)
    })
  }
};



// Check getting help @Beatrice
const addPet = (petInfo) => { 
  const reqData = {
    name: petInfo.name,
    ...petInfo.options
  };
  axios.post(BASE_URL, reqData)
  .then((response) => {
    setResult(response.data)
  }) .catch((error) => {
    setError('Error!: Failed to add')
  })};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
