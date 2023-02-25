
let submit_button = document.getElementById("btn");
submit_button.onclick = (e) => {
    e.preventDefault();

    let Full_Name = document.getElementById("fullname")
    let fullName = Full_Name.value;

    let User_Name = document.getElementById("username")
    let userName = User_Name.value;

    let mail = document.getElementById("email")
    let email = mail.value;

    let Password = document.getElementById("password")
    let pass = Password.value;

    let Confirm_Password = document.getElementById("confirmpassword")
    let confirmpass = Confirm_Password.value;

    let Error = document.querySelectorAll(".errorMsg");

    /* validateName */
    function validateName() {
        if (fullName === "") {
            Error[0].innerHTML = "name can not be Empty "
            Full_Name.classList.add("fail")

        }
        else if (fullName.length < 3) {
            Error[0].innerHTML = "name can not be less than 3 characters"
            Full_Name.classList.add("fail")
        }
        else if (fullName.match(/[0-9]/)) {
            Error[0].innerHTML = "name can not contains numbers "
            Full_Name.classList.add("fail")
        }
        else {
            Error[0].style.display = "none"
            Full_Name.classList.remove("fail")
            Full_Name.classList.add("success")
        }
    }
    validateName()

    /* validateUserName */
    function validateUserName() {
        if (userName === "") {
            Error[1].innerHTML = "user name can not be Empty "
            User_Name.classList.add("fail")

        }
        else if (userName.length < 3) {
            Error[1].innerHTML = "user name can not be less Than 3 characters"
            User_Name.classList.add("fail")
        }
        else {
            Error[1].style.display = "none"
            User_Name.classList.remove("fail")
            User_Name.classList.add("success")
        }
    }
    validateUserName()

    /* validateEmail */
    function validateEmail() {
        if (email === "") {
            Error[2].innerHTML = "email can not be empty"
            mail.classList.add("fail")
        }
        else if (!(email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))) {
            Error[2].innerHTML = "Invalid Mail !"
            mail.classList.add("fail")
        }
        else {
            Error[2].style.display = "none"
            mail.classList.remove("fail")
            mail.classList.add("success")
        }
    }

    validateEmail()


    /* validatePassword */
    function validatePassword() {
        if (pass === "") {
            Error[3].innerHTML = "password can not be empty"
            Password.classList.add("fail")
        }
        else if (pass.length < 8) {
            Error[3].innerHTML = "password can not be less than 8 characters "
            Password.classList.add("fail")
        }

        else {
            Error[3].style.display = "none"
            Password.classList.remove("fail")
            Password.classList.add("success")
        }
    }

    validatePassword()

    /* validateconfirmPassword */
    function validateconfirmPassword() {
        if (confirmpass === "") {
            Error[4].innerHTML = "confirm password can not be empty "
            Confirm_Password.classList.add("fail")
        }

        else if (confirmpass.length < 8) {
            Error[4].innerHTML = "password can not be less than 8 characters "
            Confirm_Password.classList.add("fail")
        }

        else if (confirmpass !== pass) {
            Error[4].innerHTML = "password not matching,enter the password again"
            Confirm_Password.classList.add("fail")
        }

        else {
            Error[4].style.display = "none"
            Confirm_Password.classList.remove("fail")
            Confirm_Password.classList.add("success")
        }
    }

    validateconfirmPassword()

    /* validateGender */
    function validateGender() {
        var gender = document.getElementsByName("gendergroup");
        if (!(gender[0].checked || gender[1].checked)) {
            Error[5].innerHTML = "please choose your gender"
        }
        else {
            Error[5].style.display = "none"
        }
    }

    validateGender()


    /*Store data in Local Storage */
    localStorage.setItem('FullName', fullName);
    localStorage.setItem('UserName', userName);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Confirmpassword', confirmpass);


    // console.log(localStorage.getItem('FullName'));
    // console.log(localStorage.getItem('UserName'));
    // console.log(localStorage.getItem('Email'));
    // console.log(localStorage.getItem('Password'));
    // console.log(localStorage.getItem('Confirmpassword'));
}








