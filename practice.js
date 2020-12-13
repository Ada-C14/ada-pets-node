const axios = require('axios');

axios.delete('http://localhost:3000/pets/21')
    .then((response) => {
      console.log('Success! Here is a list of all pets:');
      // setResult(response.data);
      console.log('Pet is deleted');
    })
    .catch((error) => {
      console.log('Oops! Something went wrong:')
      // setError(error.response.data);
      console.log('Request failed');
    });