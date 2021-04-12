<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parent Portal - Login</title>
  <link rel="stylesheet" href="Login_page.css">
  <script defer src="Login_page.js"></script>
</head>

<body>
  <main id="main-holder">
    <p id="blinka" style="color:red;">Newly admitted student will able to login once their registration is approved by the Competent Authority.</br>All new students please note that your new email will be activated after the last date of admission and you will get email from admin. </p>
    <h1 id="login-header">Parent Portal - IIT(ISM)</h1>
	<img src="./img/logo.png" alt="IIT(ISM)" style="width:150px;height:150px;">
    
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    
    <form id="login-form">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Enter Admission Number">
      <input type="text" name="account" id="account-field" class="login-form-field" placeholder="Bank Account Number of the Student">
	  <input type="text" name="phone" id="phone-field" class="login-form-field" placeholder="Parent's Phone Number">
      <input type="button" value="Login" onclick="./index.html" id="login-form-submit">
    </form>
  
  </main>
</body>

</html>
