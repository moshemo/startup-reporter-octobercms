/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/resources/css/styles.css":
/*!*****************************************!*\
  !*** ./assets/resources/css/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/resources/js/app.js":
/*!************************************!*\
  !*** ./assets/resources/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hamburger */ "./assets/resources/js/components/hamburger.js");
/* harmony import */ var _components_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/validate */ "./assets/resources/js/components/validate.js");
/* harmony import */ var _components_validate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_validate__WEBPACK_IMPORTED_MODULE_1__);



document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    Object(_components_hamburger__WEBPACK_IMPORTED_MODULE_0__["hamburgerJs"])();
    Object(_components_validate__WEBPACK_IMPORTED_MODULE_1__["validateJs"])();
  }
}; // if (document.readyState() === 'loading') {
//   document.addEventListener('DOMContentLoaded', hamburgerJs)
// } else {
//   hamburgerJs()
// }
// hamburgerJs()
// if (document.readyState() === 'loading') {
//   document.addEventListener('DOMContentLoaded', function() {
//     hamburgerJs()
//   })
// } else {
//   hamburgerJs()
// }

/***/ }),

/***/ "./assets/resources/js/components/hamburger.js":
/*!*****************************************************!*\
  !*** ./assets/resources/js/components/hamburger.js ***!
  \*****************************************************/
/*! exports provided: hamburgerJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburgerJs", function() { return hamburgerJs; });
var mobileTrigger = document.querySelector('.hamburger');
var mobileMenu = document.querySelector('.mobile-menu');
function hamburgerJs() {
  mobileTrigger.addEventListener('click', function () {
    mobileTrigger.classList.toggle('is-active');
    mobileMenu.classList.toggle('mobile-menu-open');
    console.log('hambguer js is working 5');
  });
}

/***/ }),

/***/ "./assets/resources/js/components/validate.js":
/*!****************************************************!*\
  !*** ./assets/resources/js/components/validate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var signupForm = document.querySelector('.signup-form');
var signupName = document.querySelector('.signup-input[name="name"]');
var signupEmail = document.querySelector('.signup-input[name="email"]');
var validName = false;
var validEmail = false;
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
signupForm.addEventListener('submit', function (e) {
  var canSubmit = false;

  if (validName === true && validEmail === true) {
    canSubmit = true;
  }

  if (canSubmit === false) {
    e.preventDefault();
  }

  checkNameInput();
  checkEmailInput();
});
signupName.addEventListener('blur', function () {
  return checkNameInput();
});
signupEmail.addEventListener('blur', function () {
  return checkEmailInput();
});

function checkNameInput() {
  var nameValue = signupName.value.trim();

  if (nameValue === '' || nameValue == null) {
    setErrorState(signupName, 'Name is required');
  } else {
    validName = true;
    setSuccessState(signupName);
  }
}

function checkEmailInput() {
  var emailValue = signupEmail.value.trim();

  if (emailValue === '' || emailValue == null) {
    setErrorState(signupEmail, 'Email is required');
  } else if (!emailRegex.test(emailValue)) {
    setErrorState(signupEmail, 'Please enter a valid email address');
  } else {
    validEmail = true;
    setSuccessState(signupEmail);
  }
}

function setErrorState(input, message) {
  var errorDiv = input.nextElementSibling;
  input.classList.add('input-error');
  errorDiv.classList.remove('hidden');
  errorDiv.textContent = message;
}

function setSuccessState(input) {
  var errorDiv = input.nextElementSibling;
  input.classList.remove('input-error');
  errorDiv.classList.add('hidden');
  errorDiv.textContent = '';
}

function isEmail(email) {
  return emailRegex.test(email);
}

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi ./assets/resources/js/app.js ./assets/resources/css/styles.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\octobersite\themes\startup-reporter\assets\resources\js\app.js */"./assets/resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\octobersite\themes\startup-reporter\assets\resources\css\styles.css */"./assets/resources/css/styles.css");


/***/ })

/******/ });