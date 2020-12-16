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
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`unable to list pets - ${error.response.status} ${error.response.statusText}`);
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        // console.log(error.response.status, error.response.statusText);
        setError(`sorry, your request failed - ${error.response.status} ${error.response.statusText}`);
      })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult('thank you, that pet has been removed');
      })
      .catch((error) => {
        setError(`attempt to remove pet failed - ${error.response.status} ${error.response.statusText}`)
      })
  }
};

const addPet = (petInfo) => {
  const formattedPetInfo = {
    name: petInfo.name,
    ...petInfo.options
  };

  axios.post(BASE_URL, formattedPetInfo)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`attempt to add pet failed - ${error.response.status} ${error.response.statusText}`)
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
