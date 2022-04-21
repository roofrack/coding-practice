async function getData() {
  // const api_url = "10.138.72.251:3000/users";
  const api_url = "localhost:3000/users";
  const response = await fetch("api_url");
  // const data = await response.json();
  const data = await JSON.parse(response);
  return data;
}

console.log("hi robbie");
getData().then((data) => console.log(data));
console.log("does it work");
