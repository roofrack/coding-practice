const getTodos = (callback) => {
  // const url = "https://jsonplaceholder.typicode.com/todos/";
  const url = "./todos.json";

  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });
};

getTodos((err, data) => {
  console.log("callback fired!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
