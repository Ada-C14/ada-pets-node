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
    setResult(response.data); //copied '.then' verbage from trip api project
  })
  .catch((error) => {
  setError('Error', error.response); 
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(`http://localhost:3000/pets/${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('Oops! Your request failed with status code 404');
    })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
    .then((response) => {
      setResult(response.data);

    })
    .catch((error) => {
      setError(`Yikes! Failed to remove pet with the selected pet id of: ${selectedPetId}`);
    })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  //After several failed test attemtps, realized wave 4 tests are showing pet info can include required and optional info....name is always required, but the others are add-ons
  //have to write 'if' statement to take care of this.
  if (petInfo.options) {
    PetInfo = { name: petInfo.name, ...petInfo.options};
    } else {
      PetInfo = {name: petInfo.name};
      };
    
  axios.post(BASE_URL, PetInfo)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
  setError('Failed to add pet to adoption list!', error.response); 
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
