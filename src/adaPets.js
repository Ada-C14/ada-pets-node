// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error)=> {
    setError(`Error: ${error.response.status}`)
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Wave 2.
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error)=> {
      setError(`Error 404, failed to get the requested pet: ${error.response.status}`)
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Wave 3.
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error)=> {
      setError(`Error 404, failed to remove pet: ${error.response.status}`)
    })
  }
};

const addPet = (petInfo) => {
  // Wave 4.
  const petNew = {
    name: petInfo.name,
    ...petInfo.options // spread operator
  }
  axios.post(`${BASE_URL}`,petNew)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error)=> {
    setError(`Error! failed to add pet: ${error.response.status}`)
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
