// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then(response => {
      const result = response.data.map(pet => ({
        id: pet.id,
        name: pet.name
      }));
      setResult(result);
    })
    .catch(error => {
      setError("You cannot get the list of all pets.");
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        setError(String(error));
      })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        setError(`${error}. You cannot remove this pet.`);
      })
  }
};

const addPet = (petInfo) => {
  const reqData = {
    name: petInfo.name,
    ...petInfo.options
  };
  axios.post(BASE_URL, reqData)
    .then(response => {
      setResult(response.data);
    })
    .catch(error => {
      setError(`${error}. You cannot add this pet.`);
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
