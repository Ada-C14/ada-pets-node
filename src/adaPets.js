// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.

  axios.get(`${BASE_URL}`)
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
    // Fill out as part of Wave 3.
    axios.delete(`${BASE_URL + selectedPetId}`)
    .then((response) => {
      setResult(`Pet #${selectedPetId} has been removed from the database.`);
    })
    .catch((error) => {
      setError(`failed remove`)
      // setError(`Error, Pet #${selectedPetId} was not removed.`);
  });
  }
};

const addPet = (petInfo) => {
    // petInfo is an object with keys name and options
    //where the value for options is another object with the optional attributes
    reqData = petInfo.options
    reqData.name = petInfo.name

  // Fill out as part of Wave 4.
  axios.post(`${BASE_URL}`, reqData)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Failed add`);
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};