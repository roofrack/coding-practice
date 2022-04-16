function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}

function findUser(username) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    console.log(user);
  });
}

findUser("john");
