// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get('http://localhost:3000/pets')
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError('Oops, something went wrong.')
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
      setError('/failed/i')
    });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
    .then(() => {
      setResult(`Pet ${selectedPetId} is deleted.`);
    })
    .catch(() => {
      setError(`/failed/i`)
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
