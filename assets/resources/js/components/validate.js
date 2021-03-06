const signupForm = document.querySelector('.signup-form')
const signupName = document.querySelector('.signup-input[name="name"]')
const signupEmail = document.querySelector('.signup-input[name="email"]')

let validName = false
let validEmail = false

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

signupForm.addEventListener('submit', function(e) {
  let canSubmit = false

  if (validName === true && validEmail === true) {
    canSubmit = true
  }

  if (canSubmit === false) {
    e.preventDefault()
  }

  checkNameInput()
  checkEmailInput()
})

signupName.addEventListener('blur', () => checkNameInput())
signupEmail.addEventListener('blur', () => checkEmailInput())

function checkNameInput() {
  let nameValue = signupName.value.trim()

  if (nameValue === '' || nameValue == null) {
    setErrorState(signupName, 'Name is required')
  } else {
    validName = true
    setSuccessState(signupName)
  }
}

function checkEmailInput() {
  let emailValue = signupEmail.value.trim()

  if (emailValue === '' || emailValue == null) {
    setErrorState(signupEmail, 'Email is required')
  } else if (!emailRegex.test(emailValue)) {
    setErrorState(signupEmail, 'Please enter a valid email address')
  } else {
    validEmail = true
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
