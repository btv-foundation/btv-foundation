
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
        alert("Login successful!");
    } else {
        alert("Login failed.");
    }
}

function signup() {
    const user = document.getElementById("newUsername").value;
    const pass = document.getElementById("newPassword").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Signup successful! Now you can log in.");
    showLogin();
}

function showSignup() {
    document.getElementById("auth").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("auth").style.display = "block";
}
