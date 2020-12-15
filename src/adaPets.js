// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;//calling the result from result.js
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL) 

  .then((result) => {//callback function 
    setResult(result.data);
  })

  .catch((error)=> {//callback function
    setError('Unable to list all pets!');
  })
}

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId) // string concate because ',' works with console.log

    .then((result) => {
      setResult(result.data);
    })

    .catch((error) => {
      // string concate because ',' works with console.log
      setError('Error: failed , Status code: '+ error.response.status );
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((result)=> {
      setResult('Your selected pet is out of your control!');
    })

    .catch((error) => {
      setError('Error: failed, unable to remove');
    })

  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  const reqData = petInfo.options
  reqData.name = petInfo.name // added a field name to reqData and assigned it value to petInfo.name

  axios.post( BASE_URL, reqData)

  .then((result) => {
    setResult(result.data)
  })

  .catch((error) => {
    setError('Error: failed, cannot add')
  })

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
