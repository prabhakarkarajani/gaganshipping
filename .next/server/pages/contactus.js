module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RBZ5");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5cZY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const links = [{
  href: '/',
  label: 'Home'
}, {
  href: '/about',
  label: 'Who We Are'
}, {
  href: '/service/portagency',
  label: 'Service'
}, {
  href: '/gallery',
  label: 'Gallery'
}, {
  href: '/contactus',
  label: 'Contact Us'
}];
function Layout({
  children,
  title = 'Gaganshipping',
  href
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx("div", {
    className: "nav-helpertext justify-end b-r-2 pr-5 p-1"
  }, __jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "support w-4 h-5 mx-2"
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    "clip-rule": "evenodd"
  })), "Call me when you are free", __jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "phone w-4 h-5 mx-2"
  }, __jsx("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  })), "+91 - 81434 - 71234, +91 - 98661- 05677"), __jsx("div", {
    className: "text-center flex-grow text-5xl pt-3 text-blue-900 logo-h"
  }, __jsx("h2", null, __jsx("img", {
    className: "h-12 inline-block",
    src: '../images/logo_new.png',
    style: {
      'vertical-align': 'bottom'
    }
  }), __jsx("span", null, "AGAN SHIPPING SERVICES"))), __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-white-100 pl-4 pt-3  pb-2 border-b-4 border-gray-200 shadow"
  }, __jsx("div", {
    className: "block lg:hidden"
  }, __jsx("button", {
    className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("title", null, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  })))), __jsx("div", {
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center"
  }, __jsx("div", {
    className: "text-sm lg:flex-grow "
  }, links.map(({
    href,
    label
  }) => __jsx("a", {
    href: href,
    key: label,
    onClick: e => {
      handleClick(e, href);
    },
    className: `btn block mt-4  mx-2 lg:inline-block lg:mt-0 hover:text-blue-600 transition duration-150 ease-in-out mr-4  uppercase ${router.asPath.split('/')[1] === href.split('/')[1] ? 'active' : ''}`
  }, label))))), __jsx("div", {
    className: "pageload-effect"
  }, children), __jsx("footer", null, __jsx("div", {
    className: "flex items-center justify-between flex-wrap bg-gray-100 py-2 px-8 border-t-2 border-gray-200"
  }, __jsx("div", {
    class: "w-1/4 h-12"
  }, __jsx("img", {
    className: "h-10 w-auto sm:h-18  logo",
    src: '../images/logo_new.jpeg'
  })), __jsx("div", {
    class: "w-3/4 h-12 text-right footer-copyrights pr-4"
  }, "Copyright \xA9 2020 gaganshipping pvt ltd. All rights reseverd."))));
}

/***/ }),

/***/ "RBZ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_newlayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5cZY");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Contact() {
  const [errorObj, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    email: false,
    contact: false,
    inValidEmail: false,
    inValidContact: false
  });
  const [submitted, setSubmitted] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  function submitForm(data) {
    fetch('/api/contactus', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res); // res.status === 200 ? setSubmitted(true) : ''
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_newlayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("div", {
    className: "banner1"
  }, __jsx("img", {
    src: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
    height: "500"
  }), __jsx("div", {
    className: "banner_title"
  }, __jsx("h1", {
    className: "pl-8 text-left"
  }, "Contact Us"))), __jsx("div", {
    class: "flex w-5/6 m-auto my-10 text-gray-700"
  }, __jsx("div", {
    className: "flex-none w-1/2 text-center border-double border-r-2  py-2 m-2 "
  }, __jsx("p", {
    className: "text-4xl"
  }, "GAGAN SHIPPING SERVICES"), __jsx("p", null, "Door No: 39-9-9, Tenneti Nagar, Murali Nagar, Visakhapatnam \u2013 530 007", __jsx("br", null), "Telephone: +91 \u2013 891 \u2013 2540468; Mobile: +91 - 98661 \u2013 05677", __jsx("br", null), "E-Mail: gaganship@gmail.com")), __jsx("div", {
    class: "flex-none w-1/2 text-gray-700 px-4 py-2 m-2"
  }, __jsx("p", {
    className: "text-3xl"
  }, "CONTACT PERSONS"), __jsx("p", {
    className: "text-gray-900"
  }, __jsx("span", null, __jsx("b", {
    className: "text-lg"
  }, "G.G.Rao"), " ", __jsx("br", null), "Mobile:+91-98661\u201305677 "))))));
}

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });