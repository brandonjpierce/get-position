/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Grab the current x, y scroll offset
	 *
	 * @method getScrollPosition
	 *
	 * @return {Object} X, Y offset values
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getElementPosition = getElementPosition;
	function getScrollPosition() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	}

	/**
	 * Grab the current position of an element. Takes into account current scroll
	 * position of the window.
	 *
	 * @method getElementPosition
	 *
	 * @param {Object} el DOM node we want get position of
	 *
	 * @return {Object} Position coords of the DOM node
	 */

	function getElementPosition(el) {
	  var addOffset = arguments[1] === undefined ? true : arguments[1];

	  var rect = el.getBoundingClientRect();
	  var left = rect.left;
	  var top = rect.top;

	  if (addOffset) {
	    var scrollOffset = getScrollPosition();
	    left += scrollOffset.x;
	    top += scrollOffset.y;
	  }

	  return {
	    left: left,
	    top: top,
	    bottom: top + rect.height,
	    right: left + rect.width
	  };
	}

/***/ }
/******/ ]);