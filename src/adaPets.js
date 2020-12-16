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
    setError(`${error}. Unable to retrieve information on pets.`);
  })
};
listPets();
const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`${error}. Could not get information on pet ${selectedPetId}.`);
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(`Successfully deleted pet ${selectedPetId}.`);
    })
    .catch((error) => {
      setError(`${error}. Could not remove pet ${selectedPetId}`);
    })
  }
};

const addPet = (petInfo) => {
  let inputData = petInfo.options;
  inputData.name = petInfo.name;
  axios.post(BASE_URL, inputData)
  .then((response) => {
    setResult(inputData);
  })
  .catch((error) => {
    setError(`${error}. Could not add pet ${inputData.id}`);
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
