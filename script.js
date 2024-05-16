const form = document.querySelector("form"),
      emailField = form.querySelector(".email-field"),
      emailInput = emailField.querySelector(".email"),
      passField = form.querySelector(".create-password"),
      passInput = passField.querySelector(".password"),
      cPassField = form.querySelector(".confirm-password"),
      cPassInput = cPassField.querySelector(".cPassword");

// Email Validation
function checkEmail(){
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailpattern)){
        return emailField.classList.add("invalid") //adding invalid class if email value do not matched
    }
    emailField.classList.remove("invalid") // removing invalid class if email value matched with emailpattern

}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon
        if(pInput.type === "password"){
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "text";
    });  
});

// Password Validation
function createPass(){
    const passPattern = 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@!%*?&]{8,}$/;

      if(!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid"); //adding invalid class if password input value do not match
      }
      passField.classList.remove("invalid"); //removing invalid class if password input value do not match   
    }

    // confirm password validation
    function confirmPass(){
        if(passInput.value !== cPassInput.value || cPassInput.value === ""){
          return cPassField.classList.add("invalid");
        }
    cPassField.classList.remove("invalid");
    }

// Calling function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(0); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if(
      !emailField.classList.contains("invalid") &&
      !passField.classList.contains("invalid") &&
      !cPassField.classList.contains("invalid")
    ) {
      location.href = form.getAttribute("action");
    }

});
