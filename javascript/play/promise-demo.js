// This is from the promises tutorial from javascripttutorial.net
// But it wont load the data grrrrrrrrr

const url = "https://www.javascripttutorial.net/sample/promise/api.json";
// const url = "https://jsonplaceholder.typicode.com/todos/";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status == 200) {
        console.log(this.response);
        resolve(this.response);
      } else {
        console.log(this.response);
        reject(this.status);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

btn.addEventListener("click", () => {
  load(URL)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});
