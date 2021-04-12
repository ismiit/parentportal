
var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("login-form-submit");
var loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = loginForm.username.value;
    var account = loginForm.account.value;
	var phone = loginForm.phone.value;

    if (username === "20GA0013" && account === "39370374168" && phone === "7978427797") {
        alert("You have successfully logged in.");
        window.location.href = "./home.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
var blink = document.getElementById('blinka');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 700);