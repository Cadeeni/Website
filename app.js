function alertButton() {
    alert("This is a test!")
}

var password = "Test"

function checkpass() {

if(document.getElementById('pass1').value != password) {
    alert('Incorrect Password!');
    return false;
}
if(document.getElementById('pass1').value == password) {

}
}

const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("design")

function sendEmail(){
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Design: ${message.value}`


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "order@order.cadenscorner.com",
        Password : "9489220D256D20D70C456A0717768C71BF42",
        To : 'order@order.cadenscorner.com',
        From : "order@order.cadenscorner.com",
        Subject : email.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    sendEmail();
})

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
     })
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
 })






 const firebaseConfig = {
    apiKey: "AIzaSyA4k0muF-BkWB9rMXwGZDJGyiEPD3q85nI",
    authDomain: "login-with-firebase-data-7b0c3.firebaseapp.com",
    databaseURL: "https://login-with-firebase-data-7b0c3-default-rtdb.firebaseio.com",
    projectId: "login-with-firebase-data-7b0c3",
    storageBucket: "login-with-firebase-data-7b0c3.appspot.com",
    messagingSenderId: "878149904188",
    appId: "1:878149904188:web:817521fdbc6328213fa039"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

  function register () {
    user = document.getElementById('r-user').value
    email = document.getElementById('r-email').value
    password = document.getElementById('r-password').value


  }

  auth.createUserWithEmailAndPassword(r-email, r-password)
  .then(function() {

    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
        email : r-email,
        user : r-user,
        password : r-password,
        last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)

    alert('User Created!')
  })

  .catch(function(error){
    var error_code = error.code
    var error_message = error.message
})

  if (validate_email(r-email) == false) or (validate_password(r-password) == false);{
   alert('Email Or Password is outta line')
    return
  }
  if (validate_feild(user) == false)

  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email) == true) {
        return true
    } else{
        return false
    }
}

  function validate_password(password){
    if(password < 6){
        return false
    } else {
        return true
    }
  }

  function validate_feild(field) {
    if (field == nul){
        return false
    } 
    
    if (field.length <= 0){
        return false
    } else {
        return true
    }
    
}



function closeBanner() {
    var banner = document.querySelector('.announcement-banner');
    banner.style.display = 'none';
}
 