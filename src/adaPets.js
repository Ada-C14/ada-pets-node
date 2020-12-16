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
    setResult(response.data);
    // console.log(response)

  })
  .catch((error) => {
    setError(`Error msg ${error.message}`)
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) { 
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    
    // console.log(`${BASE_URL}/${selectedPetId}`)

    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
  
    })
    .catch((error) => {
      setError(`Error msg ${error.message}`)
    });
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
      setError('Failed to remove the pet')
    });
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  console.log(petInfo)
  reqData = petInfo.options
  reqData.name = petInfo.name
  axios.post(BASE_URL, reqData)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('Pet failed to add succesfully')
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
