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
      setResult(response.data);
    })
    .catch(() => {
      setError('Unable to get list of pets');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(BASE_URL + selectedPetId)
      .then(response => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error)
        setError('Request failed, 404 error. Invalid Id');
      })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(BASE_URL + selectedPetId)
      .then(() => {
        setResult(`succesfully deleted pet with ID ${selectedPetId}`);
        // console.log(`succesfully deleted pet with ID ${selectedPetId}` )
      })
      .catch(() => {
        setError('Request failed, unable to remove pet');
      })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  const param_info = petInfo.options;
  param_info.name = petInfo.name;
  console.log(param_info)
  axios.post(BASE_URL, param_info)
  .then(response => {
    setResult(response.data);
  })
  .catch(() => {
    setError('Request failed, unable to add pet');
  })

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
