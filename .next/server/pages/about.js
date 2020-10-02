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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/newlayout.js":
/*!*********************************!*\
  !*** ./components/newlayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst links = [{\n  href: '/',\n  label: 'Home'\n}, {\n  href: '/about',\n  label: 'Who We Are'\n}, {\n  href: '/service/port%20agency',\n  label: 'Services'\n}, {\n  href: '/gallery',\n  label: 'Gallery'\n}, {\n  href: '/contactus',\n  label: 'Contact Us'\n}];\nfunction Layout({\n  children,\n  title = 'Gaganshipping',\n  href\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const handleClick = (e, href) => {\n    e.preventDefault();\n    router.push(href);\n  };\n\n  return __jsx(\"div\", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, title), __jsx(\"meta\", {\n    charSet: \"utf-8\"\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\"\n  })), __jsx(\"div\", {\n    className: \"nav-helpertext justify-end b-r-2 pr-5 p-1\"\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 20 20\",\n    fill: \"currentColor\",\n    className: \"support w-4 h-5 mx-2\"\n  }, __jsx(\"path\", {\n    \"fill-rule\": \"evenodd\",\n    d: \"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z\",\n    \"clip-rule\": \"evenodd\"\n  })), \"Have any enquiry? 24/7\", __jsx(\"svg\", {\n    viewBox: \"0 0 20 20\",\n    fill: \"currentColor\",\n    className: \"phone w-4 h-5 mx-2\"\n  }, __jsx(\"path\", {\n    d: \"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\"\n  })), \"+91-98661-05677\"), __jsx(\"div\", {\n    className: \"text-center flex-grow text-5xl pt-3 text-blue-900 logo-h\"\n  }, __jsx(\"h2\", {\n    style: {\n      'position': 'relative'\n    }\n  }, __jsx(\"img\", {\n    className: \"h-12 inline-block\",\n    src: '../images/logo_new.png',\n    style: {\n      'vertical-align': 'bottom',\n      'position': 'absolute',\n      'left': '20px',\n      'top': '20px',\n      'height': '75px'\n    }\n  }), __jsx(\"span\", null, \"GAGAN SHIPPING SERVICES\"))), __jsx(\"nav\", {\n    className: \"flex items-center justify-between flex-wrap bg-white-100 pl-4 pt-3  pb-2 border-b-4 border-gray-200 shadow\"\n  }, __jsx(\"div\", {\n    className: \"block lg:hidden\"\n  }, __jsx(\"button\", {\n    className: \"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white\"\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-3 w-3\",\n    viewBox: \"0 0 20 20\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, __jsx(\"title\", null, \"Menu\"), __jsx(\"path\", {\n    d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n  })))), __jsx(\"div\", {\n    className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center\"\n  }, __jsx(\"div\", {\n    className: \"text-sm lg:flex-grow \"\n  }, links.map(({\n    href,\n    label\n  }) => __jsx(\"a\", {\n    href: href,\n    key: label,\n    onClick: e => {\n      handleClick(e, href);\n    },\n    className: `btn block mt-4  mx-2 lg:inline-block lg:mt-0 hover:text-blue-600 transition duration-150 ease-in-out mr-4  uppercase ${router.asPath.split('/')[1] === href.split('/')[1] ? 'active' : ''}`\n  }, label))))), __jsx(\"div\", {\n    className: \"pageload-effect\"\n  }, children), __jsx(\"footer\", null, __jsx(\"div\", {\n    className: \"flex items-center justify-between flex-wrap bg-gray-100 py-2 px-8 border-t-2 border-gray-200\"\n  }, __jsx(\"div\", {\n    class: \"w-1/4 h-12\"\n  }, __jsx(\"img\", {\n    className: \"h-10 w-auto sm:h-18  logo\",\n    src: '../images/logo_new.jpeg'\n  })), __jsx(\"div\", {\n    class: \"w-3/4 h-12 text-right footer-copyrights pr-4\"\n  }, \"Copyright \\xA9 2020 gaganshipping pvt ltd. All rights reseverd.\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld2xheW91dC5qcz9lNWM2Il0sIm5hbWVzIjpbImxpbmtzIiwiaHJlZiIsImxhYmVsIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIm1hcCIsImFzUGF0aCIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUNWO0FBQUVDLE1BQUksRUFBRSxHQUFSO0FBQWFDLE9BQUssRUFBRTtBQUFwQixDQURVLEVBRVY7QUFBRUQsTUFBSSxFQUFFLFFBQVI7QUFBa0JDLE9BQUssRUFBRTtBQUF6QixDQUZVLEVBR1Y7QUFBRUQsTUFBSSxFQUFFLHdCQUFSO0FBQWtDQyxPQUFLLEVBQUU7QUFBekMsQ0FIVSxFQUlWO0FBQUVELE1BQUksRUFBRSxVQUFSO0FBQW9CQyxPQUFLLEVBQUU7QUFBM0IsQ0FKVSxFQUtWO0FBQUVELE1BQUksRUFBRSxZQUFSO0FBQXNCQyxPQUFLLEVBQUU7QUFBN0IsQ0FMVSxDQUFkO0FBUWUsU0FBU0MsTUFBVCxDQUFnQjtBQUFFQyxVQUFGO0FBQVlDLE9BQUssR0FBRyxlQUFwQjtBQUFxQ0o7QUFBckMsQ0FBaEIsRUFBNkQ7QUFDeEUsUUFBTUssTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJUixJQUFKLEtBQWE7QUFDN0JRLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSixVQUFNLENBQUNLLElBQVAsQ0FBWVYsSUFBWjtBQUNILEdBSEQ7O0FBSUEsU0FDSSxtQkFDSSxNQUFDLGdEQUFELFFBQ0kscUJBQVFJLEtBQVIsQ0FESixFQUVJO0FBQU0sV0FBTyxFQUFDO0FBQWQsSUFGSixFQUdJO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDO0FBQTlCLElBSEosQ0FESixFQU1JO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFSTtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQXlCLFFBQUksRUFBQyxjQUE5QjtBQUE2QyxhQUFTLEVBQUM7QUFBdkQsS0FBOEU7QUFBTSxpQkFBVSxTQUFoQjtBQUEwQixLQUFDLEVBQUMscWdCQUE1QjtBQUFraUIsaUJBQVU7QUFBNWlCLElBQTlFLENBRkosNEJBSVY7QUFBSyxXQUFPLEVBQUMsV0FBYjtBQUF5QixRQUFJLEVBQUMsY0FBOUI7QUFBNkMsYUFBUyxFQUFDO0FBQXZELEtBQTRFO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFBNUUsQ0FKVSxvQkFOSixFQVlJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFJLFNBQUssRUFBRTtBQUFDLGtCQUFZO0FBQWI7QUFBWCxLQUFxQztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFtQyxPQUFHLEVBQUUsd0JBQXhDO0FBQW1FLFNBQUssRUFBRTtBQUFDLHdCQUFrQixRQUFuQjtBQUE2QixrQkFBWSxVQUF6QztBQUFxRCxjQUFRLE1BQTdEO0FBQXFFLGFBQU8sTUFBNUU7QUFBb0YsZ0JBQVU7QUFBOUY7QUFBMUUsSUFBckMsRUFBdU4sOENBQXZOLENBREosQ0FaSixFQWVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FJSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFzQyxXQUFPLEVBQUMsV0FBOUM7QUFBMEQsU0FBSyxFQUFDO0FBQWhFLEtBQTZGLDRCQUE3RixFQUFnSDtBQUFNLEtBQUMsRUFBQztBQUFSLElBQWhILENBREosQ0FESixDQUpKLEVBU0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDS0wsS0FBSyxDQUFDWSxHQUFOLENBQVUsQ0FBQztBQUFFWCxRQUFGO0FBQVFDO0FBQVIsR0FBRCxLQUNQO0FBQUcsUUFBSSxFQUFFRCxJQUFUO0FBQWUsT0FBRyxFQUFFQyxLQUFwQjtBQUEyQixXQUFPLEVBQUdPLENBQUQsSUFBTztBQUFFRCxpQkFBVyxDQUFDQyxDQUFELEVBQUlSLElBQUosQ0FBWDtBQUFzQixLQUFuRTtBQUFxRSxhQUFTLEVBQUcsd0hBQXVISyxNQUFNLENBQUNPLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixNQUFnQ2IsSUFBSSxDQUFDYSxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFoQyxHQUFxRCxRQUFyRCxHQUFnRSxFQUFHO0FBQTNRLEtBQWdSWixLQUFoUixDQURILENBREwsQ0FESixDQVRKLENBZkosRUFnQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFrQ0UsUUFBbEMsQ0FoQ0osRUFpQ0ksc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsS0FDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUEyQyxPQUFHLEVBQUU7QUFBaEQsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUM7QUFBWCx1RUFKSixDQURKLENBakNKLENBREo7QUE4Q0giLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5jb25zdCBsaW5rcyA9IFtcbiAgICB7IGhyZWY6ICcvJywgbGFiZWw6ICdIb21lJyB9LFxuICAgIHsgaHJlZjogJy9hYm91dCcsIGxhYmVsOiAnV2hvIFdlIEFyZScgfSxcbiAgICB7IGhyZWY6ICcvc2VydmljZS9wb3J0JTIwYWdlbmN5JywgbGFiZWw6ICdTZXJ2aWNlcycgfSxcbiAgICB7IGhyZWY6ICcvZ2FsbGVyeScsIGxhYmVsOiAnR2FsbGVyeScgfSxcbiAgICB7IGhyZWY6ICcvY29udGFjdHVzJywgbGFiZWw6ICdDb250YWN0IFVzJyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSA9ICdHYWdhbnNoaXBwaW5nJywgaHJlZiB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBocmVmKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICByb3V0ZXIucHVzaChocmVmKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVscGVydGV4dCBqdXN0aWZ5LWVuZCBiLXItMiBwci01IHAtMVwiPlxuXG4gICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInN1cHBvcnQgdy00IGgtNSBteC0yXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0yIDBjMCAuOTkzLS4yNDEgMS45MjktLjY2OCAyLjc1NGwtMS41MjQtMS41MjVhMy45OTcgMy45OTcgMCAwMC4wNzgtMi4xODNsMS41NjItMS41NjJDMTUuODAyIDguMjQ5IDE2IDkuMSAxNiAxMHptLTUuMTY1IDMuOTEzbDEuNTggMS41OEE1Ljk4IDUuOTggMCAwMTEwIDE2YTUuOTc2IDUuOTc2IDAgMDEtMi41MTYtLjU1MmwxLjU2Mi0xLjU2MmE0LjAwNiA0LjAwNiAwIDAwMS43ODkuMDI3em0tNC42NzctMi43OTZhNC4wMDIgNC4wMDIgMCAwMS0uMDQxLTIuMDhsLS4wOC4wOC0xLjUzLTEuNTMzQTUuOTggNS45OCAwIDAwNCAxMGMwIC45NTQuMjIzIDEuODU2LjYxOSAyLjY1N2wxLjU0LTEuNTR6bTEuMDg4LTYuNDVBNS45NzQgNS45NzQgMCAwMTEwIDRjLjk1NCAwIDEuODU2LjIyMyAyLjY1Ny42MTlsLTEuNTQgMS41NGE0LjAwMiA0LjAwMiAwIDAwLTIuMzQ2LjAzM0w3LjI0NiA0LjY2OHpNMTIgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgSGF2ZSBhbnkgZW5xdWlyeT8gMjQvN1xuICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwicGhvbmUgdy00IGgtNSBteC0yXCI+PHBhdGggZD1cIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIj48L3BhdGg+PC9zdmc+XG4gICs5MS05ODY2MS0wNTY3NzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4LWdyb3cgdGV4dC01eGwgcHQtMyB0ZXh0LWJsdWUtOTAwIGxvZ28taFwiPlxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eydwb3NpdGlvbic6ICdyZWxhdGl2ZSd9fT48aW1nIGNsYXNzTmFtZT1cImgtMTIgaW5saW5lLWJsb2NrXCIgc3JjPXsnLi4vaW1hZ2VzL2xvZ29fbmV3LnBuZyd9ICBzdHlsZT17eyd2ZXJ0aWNhbC1hbGlnbic6ICdib3R0b20nLCAncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnbGVmdCc6ICcyMHB4JywgJ3RvcCc6ICcyMHB4JywgJ2hlaWdodCc6ICc3NXB4J319Lz48c3Bhbj5HQUdBTiBTSElQUElORyBTRVJWSUNFUzwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgYmctd2hpdGUtMTAwIHBsLTQgcHQtMyAgcGItMiBib3JkZXItYi00IGJvcmRlci1ncmF5LTIwMCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHRleHQtd2hpdGUgbXItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTAgdy1hdXRvIHNtOmgtMTggIGxvZ29cIiBzcmM9eycuLi9pbWFnZXMvbG9nb19uZXcuanBlZyd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC0yMDAgYm9yZGVyLXRlYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTMgdy0zXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzpmbGV4LWdyb3cgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKCh7IGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfSBrZXk9e2xhYmVsfSBvbkNsaWNrPXsoZSkgPT4geyBoYW5kbGVDbGljayhlLCBocmVmKSB9fSBjbGFzc05hbWU9e2BidG4gYmxvY2sgbXQtNCAgbXgtMiBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IG1yLTQgIHVwcGVyY2FzZSAke3JvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsxXSA9PT0gaHJlZi5zcGxpdCgnLycpWzFdID8gJ2FjdGl2ZScgOiAnJ31gfSA+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlbG9hZC1lZmZlY3RcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgYmctZ3JheS0xMDAgcHktMiBweC04IGJvcmRlci10LTIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNCBoLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTAgdy1hdXRvIHNtOmgtMTggIGxvZ29cIiBzcmM9eycuLi9pbWFnZXMvbG9nb19uZXcuanBlZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0zLzQgaC0xMiB0ZXh0LXJpZ2h0IGZvb3Rlci1jb3B5cmlnaHRzIHByLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsgMjAyMCBnYWdhbnNoaXBwaW5nIHB2dCBsdGQuIEFsbCByaWdodHMgcmVzZXZlcmQuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/newlayout.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_newlayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/newlayout */ \"./components/newlayout.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction About() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_newlayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, __jsx(\"div\", {\n    className: \"banner1\"\n  }, __jsx(\"img\", {\n    src: \"https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80\",\n    height: \"500\"\n  }), __jsx(\"div\", {\n    className: \"banner_title\"\n  }, __jsx(\"h1\", {\n    className: \"p-4\"\n  }, \"An India\\u2019s leading shipping company\"), __jsx(\"span\", {\n    className: \"p-2\"\n  }, \"A name with a reputation in the shipping agency and it\\u2019s allied businesses\"))), __jsx(\"section\", {\n    className: \"m-20\"\n  }, __jsx(\"div\", {\n    className: \"features\"\n  }, __jsx(\"h2\", {\n    className: \"mb-10 uppercase\"\n  }, \"GAGAN SHIPPING SERVICES\"), __jsx(\"p\", null, \"\\\" Whether you're a vessel Owner/Disponent Owners/ Operator looking for quality shipping services, a market leader in need of a most competitive, timely and reliable services, or in a line of marine operations seeking world-class support services, think GSS.\\\"\"), __jsx(\"p\", {\n    className: \"article_par\"\n  }, \"A name with a reputation in the shipping agency and it\\u2019s allied businesses. This company has established by a qualified person in the shipping industry besides served over three decades in an India\\u2019s leading shipping company serving the nation globally with over 100 years.\"), __jsx(\"p\", {\n    className: \"article_par\"\n  }, __jsx(\"b\", null, \"GSS\"), \" a hallmark of the company is the ability to keep to its professional commitments and the reliability it has towards the global shipping industry.      The founder leadership style is based on a  hands-on experience  with MBA in Shipping & Port Management, Member in Narottam Morarjee Institute of Shipping, Mumbai and also holding a Rule 8 Certificate to act as  \\u2018Customs House Agent\\u2019 issued by  Indian Customs.\"), __jsx(\"p\", {\n    className: \"article_par\"\n  }, \"With years of strong presence in the Indian market, equipped with professionals & expertise \", __jsx(\"b\", null, \"GSS\"), \" is able to traverse a steep growth graph in terms of volumes of businesses. A pure professional in action when it comes to finding solutions for your vessels movements, we extend our services and ensure safe handling of your Dry Bulk/Break Bulk/General Cargo and Containerised Cargoes.\"), __jsx(\"p\", {\n    className: \"article_par pb-40\"\n  }, \"We at \", __jsx(\"b\", null, \"GSS\"), \" believe in commitment to our customers in terms of services and our mission is to go that extra mile to ensure cent percent customer satisfaction\")))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsS0FBVCxHQUFpQjtBQUM1QixTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0ksTUFBQyw2REFBRCxRQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLE9BQUcsRUFBQyw4R0FBVDtBQUF3SCxVQUFNLEVBQUM7QUFBL0gsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLGdEQURKLEVBRUk7QUFBTSxhQUFTLEVBQUM7QUFBaEIsdUZBRkosQ0FGSixDQURKLEVBUUk7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCwrQkFESixFQUVJLHdSQUZKLEVBTUk7QUFBRyxhQUFTLEVBQUM7QUFBYixtU0FOSixFQVVJO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FDSSx1QkFESiwyYUFWSixFQWFJO0FBQUcsYUFBUyxFQUFDO0FBQWIscUdBQ29HLHVCQURwRyxtU0FiSixFQWdCSTtBQUFHLGFBQVMsRUFBQztBQUFiLGVBQ1UsdUJBRFYsdUpBaEJKLENBREosQ0FSSixDQURKLENBREo7QUFtQ0giLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbmV3bGF5b3V0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5ODE5Mzk1NzAxMS0zOWI5ZjI5MTY5OTI/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMTUwJnE9ODBcIiBoZWlnaHQ9XCI1MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lcl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNFwiPkFuIEluZGlh4oCZcyBsZWFkaW5nIHNoaXBwaW5nIGNvbXBhbnk8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yXCI+QSBuYW1lIHdpdGggYSByZXB1dGF0aW9uIGluIHRoZSBzaGlwcGluZyBhZ2VuY3kgYW5kIGl04oCZcyBhbGxpZWQgYnVzaW5lc3Nlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTAgdXBwZXJjYXNlXCI+R0FHQU4gU0hJUFBJTkcgU0VSVklDRVM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgV2hldGhlciB5b3UncmUgYSB2ZXNzZWwgT3duZXIvRGlzcG9uZW50IE93bmVycy8gT3BlcmF0b3IgbG9va2luZyBmb3IgcXVhbGl0eSBzaGlwcGluZyBzZXJ2aWNlcywgYSBtYXJrZXQgbGVhZGVyIGluIG5lZWQgb2YgYSBtb3N0IGNvbXBldGl0aXZlLCB0aW1lbHkgYW5kIHJlbGlhYmxlIHNlcnZpY2VzLCBvciBpbiBhIGxpbmUgb2YgbWFyaW5lIG9wZXJhdGlvbnMgc2Vla2luZyB3b3JsZC1jbGFzcyBzdXBwb3J0IHNlcnZpY2VzLCB0aGluayBHU1MuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGVfcGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBuYW1lIHdpdGggYSByZXB1dGF0aW9uIGluIHRoZSBzaGlwcGluZyBhZ2VuY3kgYW5kIGl04oCZcyBhbGxpZWQgYnVzaW5lc3Nlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNvbXBhbnkgaGFzIGVzdGFibGlzaGVkIGJ5IGEgcXVhbGlmaWVkIHBlcnNvbiBpbiB0aGUgc2hpcHBpbmcgaW5kdXN0cnkgYmVzaWRlcyBzZXJ2ZWQgb3ZlciB0aHJlZSBkZWNhZGVzIGluIGFuIEluZGlh4oCZcyBsZWFkaW5nIHNoaXBwaW5nIGNvbXBhbnkgc2VydmluZyB0aGUgbmF0aW9uIGdsb2JhbGx5IHdpdGggb3ZlciAxMDAgeWVhcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9wYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5HU1M8L2I+IGEgaGFsbG1hcmsgb2YgdGhlIGNvbXBhbnkgaXMgdGhlIGFiaWxpdHkgdG8ga2VlcCB0byBpdHMgcHJvZmVzc2lvbmFsIGNvbW1pdG1lbnRzIGFuZCB0aGUgcmVsaWFiaWxpdHkgaXQgaGFzIHRvd2FyZHMgdGhlIGdsb2JhbCBzaGlwcGluZyBpbmR1c3RyeS4gICAgICBUaGUgZm91bmRlciBsZWFkZXJzaGlwIHN0eWxlIGlzIGJhc2VkIG9uIGEgIGhhbmRzLW9uIGV4cGVyaWVuY2UgIHdpdGggTUJBIGluIFNoaXBwaW5nICYgUG9ydCBNYW5hZ2VtZW50LCBNZW1iZXIgaW4gTmFyb3R0YW0gTW9yYXJqZWUgSW5zdGl0dXRlIG9mIFNoaXBwaW5nLCBNdW1iYWkgYW5kIGFsc28gaG9sZGluZyBhIFJ1bGUgOCBDZXJ0aWZpY2F0ZSB0byBhY3QgYXMgIOKAmEN1c3RvbXMgSG91c2UgQWdlbnTigJkgaXNzdWVkIGJ5ICBJbmRpYW4gQ3VzdG9tcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlX3BhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGggeWVhcnMgb2Ygc3Ryb25nIHByZXNlbmNlIGluIHRoZSBJbmRpYW4gbWFya2V0LCBlcXVpcHBlZCB3aXRoIHByb2Zlc3Npb25hbHMgJmFtcDsgZXhwZXJ0aXNlIDxiPkdTUzwvYj4gaXMgYWJsZSB0byB0cmF2ZXJzZSBhIHN0ZWVwIGdyb3d0aCBncmFwaCBpbiB0ZXJtcyBvZiB2b2x1bWVzIG9mIGJ1c2luZXNzZXMuIEEgcHVyZSBwcm9mZXNzaW9uYWwgaW4gYWN0aW9uIHdoZW4gaXQgY29tZXMgdG8gZmluZGluZyBzb2x1dGlvbnMgZm9yIHlvdXIgdmVzc2VscyBtb3ZlbWVudHMsIHdlIGV4dGVuZCBvdXIgc2VydmljZXMgYW5kIGVuc3VyZSBzYWZlIGhhbmRsaW5nIG9mIHlvdXIgRHJ5IEJ1bGsvQnJlYWsgQnVsay9HZW5lcmFsIENhcmdvIGFuZCBDb250YWluZXJpc2VkIENhcmdvZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9wYXIgcGItNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBhdCA8Yj5HU1M8L2I+IGJlbGlldmUgaW4gY29tbWl0bWVudCB0byBvdXIgY3VzdG9tZXJzIGluIHRlcm1zIG9mIHNlcnZpY2VzIGFuZCBvdXIgbWlzc2lvbiBpcyB0byBnbyB0aGF0IGV4dHJhIG1pbGUgdG8gZW5zdXJlIGNlbnQgcGVyY2VudCBjdXN0b21lciBzYXRpc2ZhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });