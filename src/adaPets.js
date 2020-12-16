// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get('http://localhost:3000/pets/')
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError(error.message)
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
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
  } else {
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
    .then((response) => {
      setResult("success")
    })
    .catch((error) => {
    setError(error.message)
    });
  }
};

const addPet = (petInfo) => {
  // if petInfo not valid set error message
  // else
  // axios post(url /pets/)
  //.then response
  // set vairable = response.data.id
  // axios.get(url pets/id/)
  // setresult response.data
  if (!petInfo) {
    setError(`You tried to add an invalid pet!`);
  }
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
