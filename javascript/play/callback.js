function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ])
  }, 1000)
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username)
    callback(user)
  })
}

findUser('john', console.log)

/*
This is the callback function that gets placed as an 
argument inside the getUsers function...

    (users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
     }

Then the array of data gets passed into this callback function
as an argument. It gets stuffed in and replaces the 'users'
parameter. Kapeeesh?

Also I was confused about how the 'find((user) => user.username === username))' callback worked.
What does the user in find(user) refer to? But its just a placeholder. It is a parameter and all
its doing is saying find in that array above the object where the username is equal to "john".
Just accept this Robert. Can use any word here instead of user. Chill man.

Do not be confused by the callback parameter in the findUser function.
That 'callback' parameter gets replaced by 'console.log'. Very simple.
*/
