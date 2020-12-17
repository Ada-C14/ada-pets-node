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
      setResult('success')
    })
    .catch((error) => {
    // setError(`You were unable to remove ${selectedPetId}.`)
    setError('This action failed, you could not remove the pet')
    });
  }
};

const addPet = (petInfo) => {
  
  let newPetInfo = petInfo.options
  newPetInfo.name = petInfo.name
  if (!petInfo) {
    setError("You did not provide the correct information to add pet");
  } else {
    axios.post(BASE_URL, newPetInfo)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`This failed. You couldn't add a pet`);
      });
  };
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
