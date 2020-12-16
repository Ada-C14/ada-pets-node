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
  .then(response => {
    setResult(response.data)
  })
  .catch((error) => {
    setError('Error! Can not retrieve information on pets.')
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('404 error, failed to get pet information')
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('Request failed. Could not remove pet')
    })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  const formattedPetInfo = {
    name: petInfo.name,
    ...petInfo.options
  };

  axios.post(BASE_URL, formattedPetInfo)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError('Request failed. Could not add pet')
  })

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
