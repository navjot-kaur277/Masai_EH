function signup(userName) {
  let usernames = ["john", "alice", "emma"]; // existing users

  if (usernames.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Successful, Please Login";
  }
}

function login(userName, password) {
  let usernames = ["john", "alice", "emma"]; // existing users
  const correctPassword = "Emp@123";

  if (!usernames.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== correctPassword) {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}