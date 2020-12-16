// What is the verb and path of the request to get a list of pets from this API?
// get; http://localhost:3000/pets
// What kind of data structure is the list of pets? What is the status code of this request?
// json, array of hashes, 200 OK
// What is the verb and path of the request to get the details of a single pet from this API?
// get; http://localhost:3000/pets/${petId}
// What are the query parameters of this request?
// no query parameters
// What kind of data structure is the details of a single, valid pet? What is the status code of this request?
// json, one hash, 200 OK
// What do we get back if we give an invalid pet id? What is the status code of this request?
// 404 Not Found; json empty hash
// What is the verb and path of the request to create a new pet using this API?
// post, http://localhost:3000/pets
// What are the parameters we can pass into this request? Which parameters are required? Which are optional?
// we can pass:  name, species, age, owner; none of them are required (weird)
// When a pet is successfully created, we get back a response. What is the data structure of this response? What is the status code?
// json; hash; 201 Created
// After we create a pet, we can verify that the pet was created from the response. We can also verify that the pet was created and added to the list of pets another way. What else can we do?
// we can look up pets/${newPetId}, or do a get request for /pets and check that the new pet is on there

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
      setError('whoops');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
