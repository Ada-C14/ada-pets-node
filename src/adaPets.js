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
    axios.get(`${BASE_URL + selectedPetId}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL + selectedPetId}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError('Unfortunately, this request failed to remove a pet.');
      });
  }
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, {name:petInfo.name,...petInfo.options})
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError("Unfortunately, this request failed to add a pet.");
      });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
