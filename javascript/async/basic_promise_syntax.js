// Creating a new Promise Object
// -----------------------------
//
// Rob remember this... (my take on it but think I'm correct)

// The whole point of this is if you have to make a request for data or something that
// takes time, then to use that data you have to wait a bit for it to get returned. Once
// it gets returned (ie its returned by the promise and waiting for you to use it) well
// then by golly you can consume or use it. Loop over the data or whatever. But you can't
// loop over data or use it otherwise until it gets returned. Kapeesh?

// A new promise takes two callback functions 'resolve' and 'reject' as parameters
// to an 'executor' function. This executor fx is something like a request
// for data or some kind of asyncronous operation that takes a bit of time.
// if it returns correctly then the 'resolve' callback gets called and what
// ever is in there as a argument gets returned. This could be an object or
// data or whatever. If something go's wrong then the 'reject' callback gets called.

const success = false;

const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(
      "this is simulating the successful return of an asyncronous fx getting returned"
    );
  } else {
    reject(
      "Nope! The asyncronous function failed to return what you wanted .\
      Maybe your networks down or something."
    );
  }
});

// How to use a Promise Object
// ---------------------------
// So now we want to use what ever's sitting there in the returned Promise Object.
// Theres some kind of value or data just waiting for us to grab and use. Now we can
// loop over the data or do what ever we need to do with the data. Go crazy man.
// Or, there is an error object if the executor function didnt resolve... boooo.

promise.then((data) => console.log(data)).catch((err) => console.log(err));
