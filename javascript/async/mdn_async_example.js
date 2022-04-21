/* I was trying to see here if async/await would turn a function into a
 * promise but it doesnt seem to in this case. The first example runs
 * fine as a promise but the second will run the console.log statement
 * before the timeout dealio which shows that it isnt waiting for the
 * await thingy to finish. It returns undefined.
 *
 *
 */
// function resolvedAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling...");
//   const result = await resolvedAfter2Seconds();
//   console.log(result);
// }

// asyncCall();
// console.log("prints out before or after???");

//---------------------------------------------------------
//
// function After2Seconds() {
//   setTimeout(() => {
//     // console.log("inside the timeout");
//     return "hello";
//   }, 2000);
// }

// async function bobs() {
//   const result = await After2Seconds();
//   // console.log(result);
// }

// bobs();

//---------------------------------------------------------
const fetchUserDetails = async (userId) => {
  // pretend we make an asynchronous call
  // and return the user details
  return { name: "Robin", likes: ["toys", "pizzas"] };
};
console.log("bob");

fetchUserDetails().then((user) => console.log(user));
