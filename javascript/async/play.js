const success = true;

const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Yes Rob, it worked");
  } else {
    reject("nope, you dummy");
  }
});

// promise();
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
