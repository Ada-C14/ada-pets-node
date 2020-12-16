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
      setError('whoops');
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
        setError('sorry, your request failed - 404 error');
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
        setError('sorry, your attempt to remove that pet failed')
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
      setError('sorry, it failed to add the new pet')
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
