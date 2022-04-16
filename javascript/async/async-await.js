// using fetch rather than XMLHttpRequest...
// sooooo much easier! fetch is fantastic.
// netninja async tutorial #9

// const resource = "https://jsonplaceholder.typicode.com/todos/";

const getTodooos = () => {
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
};

// getTodooos();

// ================================
// Using async/await #10
// =================================
// this is even better and less code

const resource = "./todos.json";
const getTodos = async () => {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error("can not fetch the data bad, very bad");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
// the err.message here comes from the above Error object
