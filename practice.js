const axios = require('axios');

const petInfo = {
  name: "Miso",
  owner: "Tram",
  age: 1,
}

axios.post('http://localhost:3000/pets/', petInfo)
    .then((response) => {
      console.log('Success! Pet added');
      // setResult(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log('Oops! Something went wrong:')
      // setError(error.response.data);
      console.log('Request failed');
    });