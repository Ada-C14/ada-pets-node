// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response)=> {
    // console.log(response.data)
    setResult(response.data);
  })
  .catch((error) => {
    // console.log(`This is the error message ${error}`)
    setError(`This is the error message ${error.message}`);
  })
};


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  axios.get(`${BASE_URL}${selectedPetId}`)
  .then((response) => {
    console.log(response.data)
    setResult(response.data)
  })
  .catch((error) => {
    setError(`select show details ${error.message}`)
  })
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }

  axios.delete(`${BASE_URL}${selectedPetId}`)
  .then((response) => {
    setResult(response.status);
  })
  .catch((error) => {
    setError(`remove select ${error.message}`);
  });
};

const addPet = (petInfo) => {
  const {options, ...rest} = petInfo
  const newPetInfo = {...options, ...rest}
  axios.post(BASE_URL, newPetInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    // set(petInfo)
    setError('The program failed to add the new pet :( please try again later!');
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
