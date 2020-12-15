// What is the verb and path of the request to get a list of pets from this API?
//VERB: GET; PATH: http://localhost:3000/pets
// The response of this request should be a list of pets. What kind of data structure is the list of pets? What is the status code of this request? Test it with Postman.
//ARRAY OF OBJECTS--200 OK 
// What is the verb and path of the request to get the details of a single pet from this API?
// VERB: GET PATH: http://localhost:3000/pets/id
// What are the query parameters of this request?
//The id number
// Test with Postman:
// What kind of data structure is the details of a single, valid pet? What is the status code of this request?
//AN OBJECT (hash)
// What do we get back if we give an invalid pet id? What is the status code of this request?
// An empty object {}; 404-not found
// What is the verb and path of the request to create a new pet using this API?
//Verb: POST, PATH: http://localhost:3000/pets
// What are the parameters we can pass into this request? Which parameters are required? Which are optional?
//name, species, age, owner. All appear to be optional. 
// When a pet is successfully created, we get back a response. What is the data structure of this response? What is the status code?
//OBJECt --201 created
// After we create a pet, we can verify that the pet was created from the response. We can also verify that the pet was created and added to the list of pets another way. What else can we do?
//look the pet up by id (GET request) or look at entire list of pets. 