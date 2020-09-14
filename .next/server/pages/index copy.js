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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("X20c");


/***/ }),

/***/ "X20c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ IndexPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/layout.js

var __jsx = external_react_default.a.createElement;


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
  const router = Object(router_["useRouter"])();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("div", null, __jsx(head_default.a, null, __jsx("title", null, title), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-white-100 p-2 px-8 border-b-2 border-gray-200"
  }, __jsx("div", {
    className: "flex items-center flex-shrink-0 text-white mr-6"
  }, __jsx("img", {
    className: "h-10 w-auto sm:h-18  logo",
    src: '../images/logo_new.jpeg'
  })), __jsx("div", {
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
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
  }, __jsx("div", {
    className: "text-sm lg:flex-grow"
  }, links.map(({
    href,
    label
  }) => __jsx("div", {
    className: "inline-block h-auto"
  }, __jsx("a", {
    href: href,
    key: label,
    onClick: e => {
      handleClick(e, href);
    },
    className: `btn block mt-4 pr-4 lg:inline-block lg:mt-0 hover:text-blue-600 transition duration-150 ease-in-out mr-4  uppercase ${router.asPath.split('/')[1] === href.split('/')[1] ? 'active' : ''}`
  }, label)))), __jsx("div", {
    className: "nav-helpertext"
  }, __jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "support w-4 h-5 mx-2"
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    "clip-rule": "evenodd"
  })), "custom care suport 24/7  call us", __jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "phone w-4 h-5 mx-2"
  }, __jsx("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  })), "7799209295"))), __jsx("div", {
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
// CONCATENATED MODULE: ./pages/index copy.js

var index_copy_jsx = external_react_default.a.createElement;

function IndexPage() {
  return index_copy_jsx(Layout, null, index_copy_jsx("div", {
    class: "max-w-sm w-full lg:max-w-full "
  }, index_copy_jsx("div", {
    class: "flex h-full w-full overflow-hidden h-screen"
  }, index_copy_jsx("div", {
    class: "w-3/5 p-2 bg-white-400  align-middle pt-40 relative"
  }, index_copy_jsx("div", {
    class: "text-3xl pl-20 font-thin  text-center text-gray-600 pt-40  tracking-wide"
  }, "A Unique Service Offering", index_copy_jsx("br", null), index_copy_jsx("span", {
    class: "text-indigo-600 pl-2 text-5xl font-bold pt-3 tracking-wider"
  }, " Speed and Reliability.")), index_copy_jsx("svg", {
    class: "hidden lg:block absolute items-center right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
    fill: "currentColor",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, index_copy_jsx("polygon", {
    points: "50,0 100,0 50,100 0,100"
  }))), index_copy_jsx("div", {
    class: "w-3/5 custimg bg-blue-500  h-full text-center bg-fixed"
  })), index_copy_jsx("div", {
    class: "bg-indigo-600 text-center py-4 lg:px-4"
  }, index_copy_jsx("div", {
    class: "p-2 bg-indigo-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",
    role: "alert"
  }, index_copy_jsx("span", {
    class: "flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
  }, "New"), index_copy_jsx("span", {
    class: "font-semibold mr-2 text-left flex-auto"
  }, "Get the coolest t-shirts from our brand new store"), index_copy_jsx("svg", {
    class: "fill-current opacity-75 h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, index_copy_jsx("path", {
    d: "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
  })))), index_copy_jsx("div", {
    class: "text-xl italic text-center w-full font-thin text-gray-600 pt-20"
  }, index_copy_jsx("span", {
    class: "text-indigo-600 pl-2 text-4xl font-bold pt-3  not-italic uppercase tracking-widest"
  }, " Service"), index_copy_jsx("br", null), "\"Good customer service costs less than bad customer service.\""), index_copy_jsx("div", {
    class: "flex flex-wrap p-10 pl-20 pr-20 pt-20 font-thin"
  }, index_copy_jsx("div", {
    class: "w-1/3 item-center ml-auto text-center"
  }, index_copy_jsx("img", {
    src: '../images/projects.png',
    class: "block m-auto w-24"
  }), index_copy_jsx("div", {
    class: "text-xl uppercase text-gray-700 tracking-wider font-semibold"
  }, "Ship agency"), index_copy_jsx("p", {
    class: "leading-relaxed pt-2 pl-10 pr-10 text-gray-600"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")), index_copy_jsx("div", {
    class: "w-1/3 item-center ml-auto text-center"
  }, index_copy_jsx("img", {
    src: '../images/projects.png',
    class: "block m-auto w-24"
  }), index_copy_jsx("div", {
    class: "text-xl uppercase text-gray-700 tracking-wider font-semibold"
  }, "Personal Mangement"), index_copy_jsx("p", {
    class: "leading-relaxed pt-2 pl-10 pr-10 text-gray-600"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")), index_copy_jsx("div", {
    class: "w-1/3 item-center ml-auto text-center"
  }, index_copy_jsx("img", {
    src: '../images/projects.png',
    class: "block m-auto w-24"
  }), index_copy_jsx("div", {
    class: "text-xl uppercase text-gray-700 tracking-wider font-semibold"
  }, "Project"), index_copy_jsx("p", {
    class: "leading-relaxed pt-2 pl-10 pr-10 text-gray-600"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"))), index_copy_jsx("div", {
    class: "text-xl italic text-center w-full font-thin text-gray-600 p-40"
  }, index_copy_jsx("span", {
    class: "text-indigo-600 pl-2 text-4xl font-bold pt-3  not-italic uppercase tracking-widest"
  }, " who we are"), index_copy_jsx("br", null), "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")));
}

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