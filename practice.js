const axios = require('axios');

axios.get('http://localhost:3000/pet')
    .then((response) => {
      console.log('Success! Here is a list of all pets:');
      // setResult(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log('Oops! Something went wrong:')
      // setError(error.response.data);
      console.log(error.response.statusText);
    });