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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
const posts = {
  portagency: {
    component: "PORT AGENCY",
    children: [{
      "component": "p",
      "children": "We provide agency services and shipping expertise to local and foreign ship owning, trading, and industry interests. We ensure vessels a fast turnaround, covering bunkering, stores, spares and repairs, cash advances, attending to crew change and timely support of all other required activities with maximum efficiency at appropriate cost.",
      "style": "text-left p-2"
    }, {
      "component": "p",
      "style": "text-left p-2",
      "children": "We offers full range of agency services to ship and cargo owners. Our company acts on behalf of ship operators, charterers and represents them during berthing arrangements and prior reservation, inward and outward custom clearances, coordination of cargo operations in port, warehouses, payment of port dues and handling of requests of ship, crew etc.,"
    }, {
      "component": "ul",
      "style": "text-left list-disc pl-6",
      "children": [{
        "component": "li",
        "style": "text-left p-2",
        "children": "Providing all port related information to the Owner’s to fix their vessels for discharging/loading of cargoes and for smooth turn round of the vessel."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Provide advisory on port rules and restrictions."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Providing Estimated Port Disbursement Account (EPDA)"
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Providing all Pre-arrival port information / instructions/Documents needed for berthing of the vessel to the Master."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Ensuring timely berthing of the vessels upon arrival and timely departure upon completion of discharging/loading."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Drawing up the documents for submitting to the Port, Customs, Quarantine, Immigration etcetera all statutory authorities."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Liaise with Shippers/ Receivers/ Terminal Operators Pre-Berthing Questionnaires prior arrival of vessels and during cargo operations and complete the vessels smoothly in time."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Submit Notice of Readiness (NOR), Statement of Fact (SOF) and Mandatory Ship Report (MSR) documents, and obtain cargo permits, not excluding daily reports to ship owners."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Also as protecting agents we take care of your assets from the ground. We work closely with your appointed agents to ensure cost effectiveness."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "We vet Documents against Acceptance (DA) and prevent overcharges."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Validate SOF"
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "We act as proxy in dispute and incident management."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Disburse funds within statutory requirements."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Collecting freight on cargoes where ever applicable."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Contacting shippers and the receivers of the goods."
      }]
    }]
  },
  "CHARTERING": {
    "component": "p",
    "children": "We trace out the cargoes available in Indian Markets to export out of India and support the Ship Owners/Disponent Owners for fixing of their vessels to carry out these cargoes."
  },
  "CREW HANDLING": {
    "component": "ul",
    "children": [{
      "component": "li",
      "style": "text-left p-2",
      "children": " Issue of Letter of Invitations (LOI) to Owners/Crew Manning Agents to apply for TRANSIT VISA with Indian Embassies for incoming crew to arrive India for joining vessels."
    }, {
      "component": "li",
      "children": [{
        "component": "span",
        "style": "text-left p-2",
        "children": "The personalised attention from the movement of the arrival of the crew members at our airports until the effective boarding passing through the transportation to the port to safely board the vessel for incoming crew."
      }, {
        "component": "p",
        "style": "text-left p-2",
        "children": "Similarly, we ensure safe landing of the dis-embarking crew from the vessel, clearance through Customs, Port, Immigration Authorities and obtain Travel Permits and dropping at airport smoothly for departing to their home towns."
      }]
    }, {
      "component": "li",
      "style": "text-left p-2",
      "children": "Arranging for the necessary doctor for the crew for any medical assistance."
    }, {
      "component": "li",
      "style": "text-left p-2",
      "children": "Accommodation in hotels as and when required with economical costs."
    }, {
      "component": "li",
      "style": "text-left p-2",
      "children": "Arrangement of Air Tickets as and when required with low fares."
    }]
  },
  "HUSBANDRY": {
    "component": "HUSBANDRY",
    "children": [{
      "component": "p",
      "style": "text-left p-2",
      "children": "Giving top priority for the time and money are key considerations of masters, owners and operators, our ships supply services operates 24/7 with a standby for emergency response and management support."
    }, {
      "component": "b",
      "style": "text-left p-2 text-gray-800",
      "children": "We offer and arrange following services:"
    }, {
      "component": "ul",
      "style": "text-left list-disc pl-6",
      "children": [{
        "component": "li",
        "style": "text-left p-2",
        "children": "Receiving of Ship Spares at Airport and Clearing through Customs and placement of same onboard the vessel within short time."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "CTM (Cash to Master) – Be assured any payments to your Master and Crew are handled professionally with the aid of security services wherever necessary – your funds are safe with us."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Supply of Fresh Water with economical costs."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Supply of BA Charts, NP Publications and other publications if any."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Workshop assistance for any kind of Ship Repairs within short notice."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "All technical assistance viz., fire extinguishers new and any kind of services maintenance, Indian Cargo gear certification with competent person etc. all services."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Removal of sludge and garbage disposal."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "All kind of surveys i.e. P & I Surveys, Class Surveys, PSC Survey, Off/On hire Bunkers + Condition Surveys etc."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Under Water Services for hull, rudder & propeller cleaning."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Supply of all kind of fresh provisions, ship stores & chemicals etc."
      }, {
        "component": "li",
        "style": "text-left p-2",
        "children": "Supply of dunnage material for steel cargo, sugar and rice vessels etc."
      }]
    }]
  },
  "BUNKERING": {
    "component": "p",
    "children": "We are providing Bunkering services at port of Visakhapatnam & Gangavaram in East Coast Ports of India. We make sure to replenish our customers with world class companies to supply required fuels, lubricants with an internationally approved standard norm."
  }
};

/***/ })

/******/ });