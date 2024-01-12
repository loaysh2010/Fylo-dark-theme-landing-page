function validateEmail(value) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Test the email against the regular expression
    return emailRegex.test(value);
  }
  
  divSubscribe = document.getElementsByClassName("access-form");
  emailElement = document.getElementsByName("mail");
  button = document.getElementsByTagName("button");
  
  button[1].onclick = function () {
    emailValue = emailElement[0].value;
    if (!validateEmail(emailValue)) {
      divSubscribe[0].classList.add("error");
    }
    else{
      emailElement.value="";
      divSubscribe[0].classList.remove("error");
    }
  };
  