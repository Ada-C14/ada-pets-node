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
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Something went wrong: ${error}.`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    //note: cannot use params because params are for QUERY PARAMS not for different end points
    axios.get(`${BASE_URL}${selectedPetId}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`Something went wrong: ${error}.`);
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Something went wrong and failed, nothing was removed: ${error}.`);
    });
  }
};

const addPet = (petInfo) => {
  if (!petInfo) {
    setError("You tried to create a pet without giving any information about the pet!");
  } else {
    axios.post(BASE_URL, {
      name: petInfo.name,
      age: petInfo.options.age,
      species: petInfo.options.species,
      about: petInfo.options.about,
      owner: petInfo.options.owner
    })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`Something went wrong, nothing was added: ${error}.`);
      });
  }
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
