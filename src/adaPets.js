// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.

// We could also separate out this function to better see where it is coming from
// const handleListPetsResponse = function(response) {
//   setResult(response.data)
// }

// axios.get(BASE_URL)
// .then(handleListPetsResponse)
// .catch...

// Potential Callback Function application
// Could also define setError function to not write a way to handle an error each time in your code
// let handleError = () => { // error handling logic}
// .catch(handleError)

const listPets = () => {
  axios.get(BASE_URL).then((response) => { // response is what we are naming the parameter that we receive back from api
    setResult(response.data)  // if successful, then this
  })
  .catch((error) => { // if error, then this
      if (error.response === undefined) {
        setError('We didn\'t get any response');
      } else {
      setError(`We failed to list pets with status code: ${error.response.status}`)
      }
    }
  )
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`) 
    .then((response) => {
      setResult(response.data)  // code executing with successful response
    })
    .catch((error) => {
      setError(error.message) // code executing when error. Where is error.message coming from in error response?
    });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data) // code executing with successful response after delete
    })
    .catch((error) => {
      setError(`We have failed to remove this pet. Error message: ${error.message}`) // code executing when error after delete action
    });
  }
};

const addPet = (petInfo) => {

  // Is there a less unwieldly way to do this? Besides dot notation?
  const input = {'name': petInfo['name'],
  'species': petInfo['options']['species'],
  'age': petInfo['options']['age'],
  'owner': petInfo['options']['owner'],
  'about': petInfo['options']['about']
  }
  // Pet in for to be added coming to me as part of petInfo object
  // It was entered by user in CLI
  // i then feed it into input to create a new object that I will input
  // the new object I make called input doesn't have options anymore, I've left it behind



  axios.post(BASE_URL, input) 
  .then((response) => {
    console.log(response.data) // not dealing with the request that we are sending. we are instead dealing with response we got back from api
    setResult(response.data)
  })
  .catch((error) => {
    setError('We failed to add your baby!')
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
