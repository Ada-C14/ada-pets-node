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
      // console.log(response.data);
      setResult(response.data);
    })
    .catch((error) => {
      // console.log(error.response);
      setError('There was an error!');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      // console.log(response.data);
      setResult(response.data);
    })
    .catch((error) => {
      // console.log(error.response);
      setError('404: request failed');
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult('Pet succesfully removed!')
    })
    .catch((error) => {
      setError('Failed to remove selected pet')
    })
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  // console.log(petInfo)
  let input = {'name': petInfo.name,
  'age': petInfo.options.age,
  'species': petInfo.options.species,
  'about': petInfo.options.about,
  'owner': petInfo.options.owner
}
  
  axios.post(BASE_URL, input)
    .then((response) => {
    // console.log(response.data)
    setResult(response.data)
  })
  .catch((error) => {
    // console.log(error)
    setError('failed to add pet')
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};