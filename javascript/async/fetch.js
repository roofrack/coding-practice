// fetch rather than XMLHttpRequest
// sooooo much easier! fetch is fantastic.
// netninja async tutorial #10

// const resource = "https://jsonplaceholder.typicode.com/todos/";
const resource = "./todos.json";

fetch(resource)
  .then((response) => {
    // console.log("resolved", response);
    return response.json();
    // this 'return response.json()' returns a promise
    // so we can tack on a then with another callback fx here
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
