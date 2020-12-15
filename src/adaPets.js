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
      // console.log(response.data[1]);
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Oops! There was an error with your request.`);
    })
  };
// listPets();
// console.log(response.data[1].name); //finds pet at index 1's name

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
    })
      .catch((error) => {
        setError(`Oops! There was an error with your request: ${error}`);
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(`Success! Pet ${selectedPetId} has been deleted.`);
      })
      .catch((error) => {
        setError(`There was an error trying to remove ${selectedPetId}: ${error}`);
      })
  }
};

const addPet = (petInfo) => {
  let newPet = petInfo.options;
  newPet.name = petInfo.name;
  //Why doesn't it work when:
  //let newPet = petInfo.name;
  //newPet.options = petInfo.options;

  axios.post(BASE_URL, newPet)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Oops! Could not add ${newPet}: ${error}`)
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
