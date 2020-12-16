// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) => {setResult(response.data)})
  .catch((error) => {setError(`Failed to list pets with status code: ${error.response.status}`)})
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL+selectedPetId)
    .then((response) => {setResult(response.data)})
    .catch((error) => {setError(`404: Request failed`)})
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL+selectedPetId)
    .then((response) => {setResult(response.data)})
    .catch((error) => {setError(`Failed to remove a pet`)})
  }
};

const addPet = (petInfo) => {
  //petInfo is an object with keys name and options
  //where the value for options is another object with the optional attributes
  let reqData = petInfo.options;
  reqData.name = petInfo.name;
  axios.post(BASE_URL, reqData)
  //console.log(response.data)
    .then((response) => {setResult(response.data)})
    .catch((error) => {
      console.log(setError(`Failed to add a pet`));
    })
    
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
