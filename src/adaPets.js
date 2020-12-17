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
  axios.get(BASE_URL).then( // if successful, then this
    (response) => {setResult(response.data)} // response is what we are naming the parameter that we receive back from api
  ).catch( // if error, then this
    (error) => { 
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
      setError(error.message)
    });
  }
};

// const showDetails = (selectedPetId) => {
//   if (!selectedPetId) {
//     setError("You tried to show details for a pet without selecting it!");
//   } else {
//     axios.get(`${BASE_URL}${selectedPetId}`).then(
//       (response) => {setResult(response.data)}
//     ).catch(
//       (error) => {setError(error.response)}
//     )
//   }
// };

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
