// Use Node-style imports for dependencies.
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
      setResult(response.data);
    })
    .catch(error => {
      setError('Was not able to get list of pets')
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + `${selectedPetId}`)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => {
        setError(`${error.response.status} Failed to retrieve pet`);
      })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + `${selectedPetId}`)
    .then(response => {
      setResult('Pet removed');
    })
    .catch(error => {
      setError('Failed to remove pet');
    })
  };
};


const addPet = (petInfo) => {
  // Need to flatten petInfo into format POST request expects
  let reqData = petInfo.options;
  reqData.name = petInfo.name;
  axios.post(BASE_URL, reqData)
    .then(response => {
      setResult(response.data);
    })
    .catch(error => {
      setError('Failed to add pet');
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
