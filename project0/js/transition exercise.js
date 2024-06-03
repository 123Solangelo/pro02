// Define the array of users
var users = [
    { username: "hod", password: "5555" },
    { username: "test", password: "test" },
    { username: "user2", password: "qwerty" }
  ];
  
  // Function to check login credentials
  function checkLogin() {
    // Get the input values from the form
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
  
    // Flag to track if login is successful
    var loginSuccessful = false;
  
    // Iterate through the array of users
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      // Check if the input values match the current user's credentials
      if (inputUsername === user.username && inputPassword === user.password) {
        // Set the flag to true
        loginSuccessful = true;
        break;
      }
    }
  
    // Check the login status
    if (loginSuccessful) {
      // Display a success message
      alert("Login successful!");

      window.location.href = "html/Homepage.html";
    } 
    else {
      // Display an error message
      alert("Invalid username or password. Please try again.");
    }
  }