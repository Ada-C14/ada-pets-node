// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Wave 1
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`encountered the following error(s): ${error.message}`);
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Wave 2
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`encountered the following error(s): ${error.message}`);
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Wave 3
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(`Pet with id ${selectedPetId} has been adopted ❤️❤️❤️!`);
    })
    .catch((error) => {
      setError('failed to remove pet: something went wrong 👾🧨');
    })
  }
};

const addPet = (petInfo) => {
  // Wave 4
  let reqData = petInfo.options;
  reqData.name = petInfo.name;
  axios.post(BASE_URL, reqData)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('failed to add pet: something went wrong 👾🧨');
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
