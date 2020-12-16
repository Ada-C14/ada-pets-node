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
      let petsData = 
        response.data.map((animal) => {
          const id = animal.id;
          const name = animal.name;
          return {id, name}
        });

      setResult(petsData);
    })
    .catch((error) => {
      setError('It failed, here\'s why:', error.response.data)
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    const petDetails = () => {
      const petId = BASE_URL.concat(selectedPetId);
      axios.get(petId)
      .then((response) => {
        setResult(response.data)
      })
      .catch((error) => {
        setError('Whoops, maybe there isn\'t a pet?', error.message)
      });
    };
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    const removePet = BASE_URL.concat(selectedPetId)
    axios.delete(removePet)
    .then((response) => {
      setResult('It worked!')
    })
    .catch((error) => {
      setError('It failed to remove the pet!')
    })
  }
};

const addPet = (petInfo) => {
  addPetInfo = {
    name: petInfo.name,
    age: petInfo.options.age,
    species: petInfo.options.species,
    about: petInfo.options.about,
    owner: petInfo.options.owner
  };

  axios.post(BASE_URL, addPetInfo)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError('It failed to add new pet, here\'s why:', error.response)
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};