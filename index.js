function signup(userName) {
  let usernames = ["john", "alice", "emma"]; // existing users

  if (usernames.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Successful, Please Login";
  }
}