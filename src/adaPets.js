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
  .then((response) => {
    // console.log(response)
    setResult(response.data);

  })
  .catch((error) => {
    // console.log(erro)
    setError('request to list pets failed!');
  });
};
// console.log(listPets());


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
   
  } else {
    axios.get(BASE_URL + selectedPetId)

    .then((response) => {
      // console.log(response);
      setResult(response.data);
    })
    .catch(function (error) {
      // console.log(error);
      setError(`Show details failed with ID ${error.response.status}!`);
    });
  };
};


const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)

    .then((response) => {
      // console.log(response);
      setResult(`pet with ID ${setResult} removed!`);
    })
    .catch(function (error) {
      // console.log(error);
      setError(`you request to remove a pet failed with ${error.response.status} code!`);
    });
    
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
