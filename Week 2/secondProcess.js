fetch("http://localhost:3000/handleSum?limit=5", {
    method: 'GET',
    // headers:{},
    // body: JSON.stringify({
    //     "limit" : 5,
    // }),
})
.then(response => 
    response.json())
.then(jsonBody => 
    console.log(jsonBody)
)
// .then((err) => {
//     console.error(`Fetch error: ${err}`);
// })