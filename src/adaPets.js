// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  
    axios.get(BASE_URL)
      .then( response => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch( error => {
          setError(error.message);
      });
    
    
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    console.log(selectedPetId);
    axios.get((BASE_URL + selectedPetId))
      .then( response => {
          setResult(response.data);
      })
      .catch( error => {
          setError(error.message);
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete((BASE_URL + selectedPetId))
    .then( response => {
        setResult(response.data);
    })
    .catch( error => {
        setError(`${error.message}, failed to remove: ${selectedPetId}`);
    });
  }
};

const addPet = (petInfo) => {
  const info = {}
  info.name = petInfo.name
  Object.assign(info, petInfo.options)
  
  axios.post(BASE_URL, info)
  .then( response => {
    setResult(response.data);
  })
  .catch( error => {
    setError(`${error.message}, unable to add pet`);
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
