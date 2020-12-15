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
            setResult(response.data)
        })
        .catch((error) => {
            setError(error.message)
        })
};

const showDetails = (selectedPetId) => {
    if (!selectedPetId) {
        setError("You tried to show details for a pet without selecting it!");
    } else {
        axios.get(`${BASE_URL}${selectedPetId}`)
            .then((response) => {
                setResult(response.data)
            })
            .catch((error) => {
                setError(`Could not find pet: ${error.message}`)
            })
    }
};

const removePet = (selectedPetId) => {
    if (!selectedPetId) {
        setError("You tried to remove a pet without selecting it!");
    } else {
        axios.delete(`${BASE_URL}${selectedPetId}`)
            .then((response) => {
                setResult(response.data)
            })
            .catch((error) => {
                setError(`Could not remove pet: ${error.message}`)
            })
    }
};

const addPet = (petInfo) => {

    if (petInfo.options) {
        petInfo = { name: petInfo.name, ...petInfo.options };
    } else {
        petInfo = { name: petInfo.name };
    }

    axios.post(BASE_URL, petInfo)
        .then((response) => {
            setResult(response.data)
        })
        .catch((error) => {
            setError(`Could not add pet: ${error.message}`)
        })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
    listPets,
    showDetails,
    removePet,
    addPet
};