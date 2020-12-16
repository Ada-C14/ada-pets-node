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
      // console.log(response.date);
      setResult(response.data);
    })
    .catch((error) => {
      setError('error!');
    })
    .finally(() => {
      console.log('LIST ALL PETS - COMPLETE');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError('show details failed - select user id');
  } else {
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('request failed - 404');
    })
    .finally(() => {
      console.log('SHOW DETAILS - COMPLETE');
    })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError('remove pet failed - select user id');
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data);
    }) 
    .catch((error) => {
      setError('remove request failed - 404');
    })
    .finally(() => {
      console.log('REMOVE PET COMPLETE')
    })
  };
};

const addPet = (petInfo) => {

  const reqData = {
    name: petInfo.name,
    ...petInfo.options
  };
  axios.post(BASE_URL, {
    name: reqData.name,
    species: reqData.species,
    age: reqData.age,
    owner: reqData.owner,
    about: reqData.about
  })
  .then((response) => {
    setResult(result.data);
  }) 
  .catch((error) => {
    setError('add pet failed - 404');
  })
  .finally(() => {
    console.log('ADD PET COMPLETE');
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
