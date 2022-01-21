
var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("login-form-submit");
var loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
	var adm = loginForm.admission.value;
	var reg = loginForm.registration.value;
	var course = loginForm.course.value;
	var br = loginForm.branch.value;
	var sem = loginForm.sem.value;

    if (adm === "20GA0013" && reg === "MT20D41008" && course === "mt" && br === "cse" && sem === "4" ) {
        alert("You have succesfully paid fees for Semester 4.");
        window.location.href = "./home.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
var blink = document.getElementById('login-header');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 500);