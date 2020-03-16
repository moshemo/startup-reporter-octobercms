const signupForm = document.querySelector('.signup-form')
const signupName = document.querySelector('.signup-input[name="name"]')
const signupEmail = document.querySelector('.signup-input[name="email"]')

// const signupNameErrorState = false
// const signupEmailErrorState = false
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

signupForm.addEventListener('submit', function(e) {
  e.preventDefault()
  checkInputs()
})

// if (signupNameErrorState == true) {
//   signupName.addEventListener('focusout', function() {
//     if (!nameValue === '' && !nameValue == null) {
//       setSuccessState(signupName)
//     }
//   })
// }

function checkInputs() {
  let nameValue = signupName.value.trim()
  let emailValue = signupEmail.value.trim()

  if (nameValue === '' || nameValue == null) {
    signupNameErrorState = true
    setErrorState(signupName, 'Name is required')
  } else {
    setSuccessState(signupName)
  }

  if (emailValue === '' || emailValue == null) {
    signupEmailErrorState = true
    setErrorState(signupEmail, 'Email is required')
  } else if (!isEmail(emailValue)) {
    signupEmailErrorState = true

    setErrorState(signupEmail, 'Please enter a valid email address')
  } else {
    setSuccessState(signupEmail)
  }
}

function setErrorState(input, message) {
  const errorDiv = input.nextElementSibling

  input.classList.add('input-error')
  errorDiv.classList.remove('hidden')
  errorDiv.textContent = message
}

function setSuccessState(input) {
  const errorDiv = input.nextElementSibling

  input.classList.remove('input-error')
  errorDiv.classList.add('hidden')
  errorDiv.textContent = ''
}

function isEmail(email) {
  return emailRegex.test(email)
}
