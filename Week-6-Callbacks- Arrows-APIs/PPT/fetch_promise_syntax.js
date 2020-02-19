fetch(url)
    .then( (response) => {
        // Response contains JSON, but as a string
        console.log(response)
        // Converts JSON from response into an object
        // response.json() returns a promise
        // The result of the promise is handled in the
        // next then() block when the promise resolves
        return response.json()
    }).then(  (data) => {
        // data is a javascript object
        // It's the resolved result of response.json()
        console.log(data)
        // do something with data here
    }).catch(  (error) => {
        // If an error occurs, a promise is rejected
        // In this case, the catch runs
        // Deal with errors here
    console.log('error!', error);
})