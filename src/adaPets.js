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
  })
  .catch((error) => {
    setError('Oops it looks like the pets did not get properly listed'); //error.message or `unsuccessful ${error}`
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
      axios.get(`${BASE_URL}${selectedPetId}`) //route
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`'Could not reach pet details'${error}`); //error.message or `unsuccessful ${error}`
      });
    };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(`${BASE_URL}${selectedPetId}`) //URL/API endpoint 
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`The pet has been removed ${error}`); //error.message or `unsuccessful ${error}`
      });
  }
};

const addPet = (petInfo) => {
//  let myPet = petInfo.options; // calling on options from test
//   myPet.name = petInfo.name;

  const newPetInfo = {
    name: petInfo.name,
    ...petInfo.options
  }
  
  axios.post(BASE_URL, newPetInfo) //route
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`The pet has not been added ${error}`); 
  });

};



// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
