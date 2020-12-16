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
      setError(error.message);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(`http://localhost:3000/pets/${selectedPetId}`)
      .then((response) => {
        setResult(response.data)
      })
      .catch((error) => {
        setError(error.message)
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    return;
  } else {
    // Fill out as part of Wave 3.
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
      .then((response) => {
        setResult(`Successfully removed pet ${selectedPetId}`);
      })
      .catch((error) => {
        setError(`Failed: you were unable to remove ${selectedPetId}`)
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
