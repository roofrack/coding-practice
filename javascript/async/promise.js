// const resource = "https://jsonplaceholder.typicode.com/todos/";
const resource = "./todos.json";

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Could not fetch data");
      }
    });
  });
};

getTodos(resource)
  .then((data) => {
    console.log("promise resolved", data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
