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
    setError(`Error status: ${error.response.status}`);
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Failed to get pet. Error status: ${error.response.status}`);
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
      .then((response) => {
        setResult(`Successfully removed pet with id ${selectedPetId}`);
      })
      .catch((error) => {
        setError(`Failed to remove pet. Error status: ${error.response.status}`);
      })
  }
};

const addPet = (petInfo) => {
  const formattedPetParams = {
    name: petInfo.name,
    ...petInfo.options
  };

  axios.post(BASE_URL, formattedPetParams)
    .then((response) => {
      console.log(petInfo);
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Failed to add pet. Error status: ${error.response.status}`);
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
