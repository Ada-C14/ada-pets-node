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
      pets = response.data;
      setResult(pets);
    })
    .catch(() => {
      setError('Unsuccessful response!');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
    .then((response) =>{
      pet = response.data;
      setResult(pet);
    })
    .catch(() => {
      setError('Error: Request failed with status code 404');
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then(() => {
      setResult('Pet deleted!');
    })
    .catch(() => {
      setError('Failed to remove the selected pet')
    })
  }
};

const addPet = (petInfo) => {
  reqData = petInfo.options
  reqData.name = petInfo.name

  axios.post(BASE_URL, reqData)
  .then((response) => {
    pet = response.data;
    setResult(pet);
  })
  .catch(() => {
    setError('Failed to add the selected pet')
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};