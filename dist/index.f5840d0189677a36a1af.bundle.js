/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  margin: 0;
}

#content {
  margin: 1rem 2rem;
}

#form-div {
  margin-bottom: 1rem;
}

input {
  line-height: 1.2rem;

  border: 1px solid grey;
  border-radius: 0.3rem;
  box-shadow: 1px 1px 2px rgb(212, 212, 212);

  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

button {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 0.5rem;
  border: 1px solid rgb(190, 190, 190);

  padding: 0.2rem 0.5rem;

  cursor: pointer;
}

.card-buttons button {
  font-size: 0.8rem;
}

button.new {
  background-color: rgb(195, 231, 231);
  border-color: rgb(173, 216, 216);
}

button.new:hover {
  background-color: rgb(182, 223, 223);
  border-color: rgb(158, 204, 204);
}

button.new:active {
  background-color: rgb(167, 212, 212);
  border-color: rgb(142, 189, 189);
}

button.cancel {
  background-color: rgb(255, 254, 175);
  border-color: rgb(240, 238, 158);
}

button.cancel:hover {
  background-color: rgb(243, 242, 160);
  border-color: rgb(228, 226, 143);
}

button.cancel:active {
  background-color: rgb(233, 231, 146);
  border-color: rgb(218, 216, 132);
}

button.edit {
  background-color: rgb(230, 206, 155);
  border-color: rgb(204, 180, 128);
}

button.edit:hover {
  background-color: rgb(218, 193, 139);
  border-color: rgb(190, 167, 115);
}

button.edit:active {
  background-color: rgb(207, 182, 128);
  border-color: rgb(175, 153, 103);
}

button.delete {
  background-color: rgb(231, 177, 177);
  border-color: rgb(204, 144, 144);
}

button.delete:hover {
  background-color: rgb(219, 161, 161);
  border-color: rgb(189, 130, 130);
}

button.delete:active {
  background-color: rgb(209, 149, 149);
  border-color: rgb(177, 117, 117);
}

button.save {
  background-color: rgb(177, 231, 177);
  border-color: rgb(146, 209, 146);
}

button.save:hover {
  background-color: rgb(159, 216, 159);
  border-color: rgb(134, 197, 134);
}

button.save:active {
  background-color: rgb(148, 207, 148);
  border-color: rgb(123, 185, 123);
}

#cards {
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(250px, auto) );
  gap: 0.5rem;
}

.card {
  font-size: 0.8rem;
  background-color: rgb(248, 248, 248);
  box-shadow: 1px 1px 2px rgb(212, 212, 212);

  border: 1px solid rgb(179, 179, 179);
  border-radius: 0.3rem;

  padding: 0.5rem;
}

.card-details {
  margin-bottom: 0.5rem;

  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
}

.card-details span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.card.editing {
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,mJAAmJ;;EAEnJ,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;;EAEnB,sBAAsB;EACtB,qBAAqB;EACrB,0CAA0C;;EAE1C,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,mJAAmJ;EACnJ,qBAAqB;EACrB,oCAAoC;;EAEpC,sBAAsB;;EAEtB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,+DAA+D;EAC/D,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,oCAAoC;EACpC,0CAA0C;;EAE1C,oCAAoC;EACpC,qBAAqB;;EAErB,eAAe;AACjB;;AAEA;EACE,qBAAqB;;EAErB,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  \n  margin: 0;\n}\n\n#content {\n  margin: 1rem 2rem;\n}\n\n#form-div {\n  margin-bottom: 1rem;\n}\n\ninput {\n  line-height: 1.2rem;\n\n  border: 1px solid grey;\n  border-radius: 0.3rem;\n  box-shadow: 1px 1px 2px rgb(212, 212, 212);\n\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\nbutton {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(190, 190, 190);\n\n  padding: 0.2rem 0.5rem;\n\n  cursor: pointer;\n}\n\n.card-buttons button {\n  font-size: 0.8rem;\n}\n\nbutton.new {\n  background-color: rgb(195, 231, 231);\n  border-color: rgb(173, 216, 216);\n}\n\nbutton.new:hover {\n  background-color: rgb(182, 223, 223);\n  border-color: rgb(158, 204, 204);\n}\n\nbutton.new:active {\n  background-color: rgb(167, 212, 212);\n  border-color: rgb(142, 189, 189);\n}\n\nbutton.cancel {\n  background-color: rgb(255, 254, 175);\n  border-color: rgb(240, 238, 158);\n}\n\nbutton.cancel:hover {\n  background-color: rgb(243, 242, 160);\n  border-color: rgb(228, 226, 143);\n}\n\nbutton.cancel:active {\n  background-color: rgb(233, 231, 146);\n  border-color: rgb(218, 216, 132);\n}\n\nbutton.edit {\n  background-color: rgb(230, 206, 155);\n  border-color: rgb(204, 180, 128);\n}\n\nbutton.edit:hover {\n  background-color: rgb(218, 193, 139);\n  border-color: rgb(190, 167, 115);\n}\n\nbutton.edit:active {\n  background-color: rgb(207, 182, 128);\n  border-color: rgb(175, 153, 103);\n}\n\nbutton.delete {\n  background-color: rgb(231, 177, 177);\n  border-color: rgb(204, 144, 144);\n}\n\nbutton.delete:hover {\n  background-color: rgb(219, 161, 161);\n  border-color: rgb(189, 130, 130);\n}\n\nbutton.delete:active {\n  background-color: rgb(209, 149, 149);\n  border-color: rgb(177, 117, 117);\n}\n\nbutton.save {\n  background-color: rgb(177, 231, 177);\n  border-color: rgb(146, 209, 146);\n}\n\nbutton.save:hover {\n  background-color: rgb(159, 216, 159);\n  border-color: rgb(134, 197, 134);\n}\n\nbutton.save:active {\n  background-color: rgb(148, 207, 148);\n  border-color: rgb(123, 185, 123);\n}\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat( auto-fill, minmax(250px, auto) );\n  gap: 0.5rem;\n}\n\n.card {\n  font-size: 0.8rem;\n  background-color: rgb(248, 248, 248);\n  box-shadow: 1px 1px 2px rgb(212, 212, 212);\n\n  border: 1px solid rgb(179, 179, 179);\n  border-radius: 0.3rem;\n\n  padding: 0.5rem;\n}\n\n.card-details {\n  margin-bottom: 0.5rem;\n\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 1rem;\n}\n\n.card-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card.editing {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodos: () => (/* binding */ renderTodos)
/* harmony export */ });
function renderTodos(todoArr, contentContainer) {
  // remove all contents from container
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // render each todo in a card
  for (let i in todoArr) {
    const todoCard = document.createElement('div')
    todoCard.id = `card ${i}`
    const todoDetails = document.createElement('div')
    const todoBtns = document.createElement('div')
    todoDetails.classList.add('card-details')
    todoBtns.classList.add('card-buttons')
    todoCard.classList.add('card')
    for (let [key, value] of Object.entries(todoArr[i])) {
      const spanKey = document.createElement('span')
      spanKey.textContent = `${key}: `
      const spanValue = document.createElement('span')
      spanValue.textContent = value
      todoDetails.appendChild(spanKey)
      todoDetails.appendChild(spanValue)
    }
    const btnEditTodo = document.createElement('button')
    btnEditTodo.textContent = "Edit"
    btnEditTodo.classList.add('edit')
    btnEditTodo.classList.add('edit-todo')
    btnEditTodo.id = `edit ${todoArr[i]["Todo ID"]}`
    const btnDeleteTodo = document.createElement('button')
    btnDeleteTodo.textContent = "Delete"
    btnDeleteTodo.classList.add('delete')
    btnDeleteTodo.classList.add('delete-todo')
    btnDeleteTodo.id = `delete ${todoArr[i]["Todo ID"]}`
    todoBtns.appendChild(btnEditTodo)
    todoBtns.appendChild(btnDeleteTodo)
    todoCard.appendChild(todoDetails)
    todoCard.appendChild(todoBtns)
    contentContainer.appendChild(todoCard)
  }
}




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   setTodos: () => (/* binding */ setTodos)
/* harmony export */ });
function getTodos() {
  const todoArrJSON = localStorage.getItem('todoArr')
  return JSON.parse(todoArrJSON)
}


function setTodos(todoArr) {
  if (todoArr.length) { // prevent saving 'undefined' if no length
    localStorage.setItem('todoArr', JSON.stringify(todoArr))
  } else {
    localStorage.clear()
  }
}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  static currentTodoId = 0
  constructor(title, description, dueDate, priority, notes) {
    this["Title"] = title
    this["Description"] = description
    this["Due Date"] = dueDate
    this["Priority"] = priority
    this["Notes"] = notes
    this["Todo ID"] = Todo.currentTodoId++
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





let todoArr = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getTodos)() || []
if (todoArr.length > 0) {
  const newCurrentId = todoArr[todoArr.length-1]["Todo ID"]
  _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.currentTodoId = newCurrentId + 1
} else {
  _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.currentTodoId = 0
}
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)

const formDiv = document.getElementById('form-div')
const cardsDiv = document.getElementById('cards')

// create form elements for creating or updating todo details
const btnDeleteAllTodos = document.createElement('button')
btnDeleteAllTodos.id = 'btn-delete-all-todos'
btnDeleteAllTodos.classList.add('delete')
btnDeleteAllTodos.textContent = 'Delete All Todos'
formDiv.appendChild(btnDeleteAllTodos)

const btnNewTodo = document.createElement('button')
btnNewTodo.id = 'btn-new-todo'
btnNewTodo.classList.add('new')
btnNewTodo.textContent = 'New Todo'
formDiv.appendChild(btnNewTodo)

const formTodo = document.createElement('form')
formTodo.id = 'form-todo'
// formTodo.setAttribute('hidden', true)
formDiv.appendChild(formTodo)

const inputTitle = document.createElement('input')
inputTitle.id = 'input-todo-title'
inputTitle.placeholder = 'Todo title'
formTodo.appendChild(inputTitle)

const inputDescription = document.createElement('input')
inputDescription.id = 'input-todo-description'
inputDescription.placeholder = 'Todo description'
formTodo.appendChild(inputDescription)

const inputDueDate = document.createElement('input')
inputDueDate.id = 'input-todo-due-date'
inputDueDate.placeholder = 'Todo due date'
formTodo.appendChild(inputDueDate)

const inputPriority = document.createElement('input')
inputPriority.id = 'input-todo-priority'
inputPriority.placeholder = 'Todo priority'
formTodo.appendChild(inputPriority)

const inputNotes = document.createElement('input')
inputNotes.id = 'input-todo-notes'
inputNotes.placeholder = 'Todo notes'
formTodo.appendChild(inputNotes)

const btnUpdateTodo = document.createElement('button')
btnUpdateTodo.id = 'btn-update-todo'
btnUpdateTodo.classList.add('edit')
btnUpdateTodo.textContent = 'Update Todo'
btnUpdateTodo.setAttribute('hidden', true)
formTodo.appendChild(btnUpdateTodo)

const btnSaveNewTodo = document.createElement('button')
btnSaveNewTodo.id = 'btn-save-todo'
btnSaveNewTodo.classList.add('save')
btnSaveNewTodo.textContent = 'Save Todo'
formTodo.appendChild(btnSaveNewTodo)

const btnCancel = document.createElement('button')
btnCancel.id = 'btn-cancel-edit'
btnCancel.classList.add('cancel')
btnCancel.textContent = 'Cancel'
formTodo.appendChild(btnCancel)



function resetFormInputs() {
  inputTitle.value = ""
  inputDescription.value = ""
  inputDueDate.value = ""
  inputPriority.value = ""
  inputNotes.value = ""
  delete btnUpdateTodo.dataset.elementId
  btnSaveNewTodo.removeAttribute('hidden')
  btnUpdateTodo.setAttribute('hidden', true)
  const cards = document.querySelectorAll('.card')
  cards.forEach(card=>{
    card.classList.remove('editing')
  })
}


function newTodo() {
  formTodo.toggleAttribute('hidden')
  resetFormInputs()
}

function saveTodoDataToArray(todoArr) {
  const todo = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value, 
    inputNotes.value
    )
  todoArr.push(todo)
  resetFormInputs()
}


btnNewTodo.addEventListener('click', newTodo)


btnUpdateTodo.addEventListener('click', (event)=>{
  event.preventDefault()
  const elementId = btnUpdateTodo.dataset.elementId
  updateTodoDetails(elementId)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)

  ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setTodos)(todoArr) // save all todos
})

btnCancel.addEventListener('click', (event)=>{
  event.preventDefault()
  delete btnUpdateTodo.dataset.elementId
  resetFormInputs()
})


btnSaveNewTodo.addEventListener('click', (event)=>{
  event.preventDefault()
  saveTodoDataToArray(todoArr)
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)

  ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setTodos)(todoArr) // save all todos
})


btnDeleteAllTodos.addEventListener('click', ()=>{
  const isDelete = confirm('Are you sure you want to delete ALL todos?')
  if (isDelete) {
    todoArr = []
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setTodos)(todoArr)
    _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.currentTodoId = 0
  }
})


// add edit function to edit button on each todo card
document.addEventListener('click', (event)=>{
  const allBtnEdit = document.querySelectorAll('.edit-todo')
  allBtnEdit.forEach(btnEdit=>{
    const cardId = parseInt(btnEdit.id.split(' ')[1])
    if (event.target.id === btnEdit.id) {
      loadTodoDetails(cardId, todoArr)
      const newCardId = `card ${cardId}`
      const card = document.getElementById(newCardId)
      card.classList.add('editing') 
      formTodo.removeAttribute('hidden')
      btnUpdateTodo.removeAttribute('hidden')
      btnSaveNewTodo.setAttribute('hidden', true)
    }
  })
})


// add delete function to delete button on each todo card
document.addEventListener('click', (event)=>{
  const allBtnDelete = document.querySelectorAll('.delete-todo')
  allBtnDelete.forEach(btnDelete=>{
    const cardId = parseInt(btnDelete.id.split(' ')[1])
    if (event.target.id === btnDelete.id) {
      deleteTodo(cardId, todoArr)
      resetFormInputs()  
    }
  })
})


// load details from selected todo into input fields
function loadTodoDetails(cardId, todoArr) {
  let elementId
  for (let i in todoArr) {
    if (todoArr[i]["Todo ID"] === cardId) {
      elementId = i
      inputTitle.value = todoArr[i]["Title"]
      inputDescription.value = todoArr[i]["Description"]
      inputDueDate.value = todoArr[i]["Due Date"]
      inputPriority.value = todoArr[i]["Priority"]
      inputNotes.value = todoArr[i]["Notes"]
      break
    }
  }
  btnUpdateTodo.dataset.elementId = elementId
}


// update todoArr with updated todo details and rerender
function updateTodoDetails(elementId) {
  todoArr[elementId]["Title"] = inputTitle.value
  todoArr[elementId]["Description"] = inputDescription.value
  todoArr[elementId]["Due Date"] = inputDueDate.value
  todoArr[elementId]["Priority"] = inputPriority.value
  todoArr[elementId]["Notes"] = inputNotes.value
  resetFormInputs()
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)
  ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setTodos)(todoArr)
}


function deleteTodo(cardId, todoArr) {
  const isDelete = confirm('Are you sure you want to delete this todo?')
  if (!isDelete) return

  for (let i in todoArr) {
    if (todoArr[i]["Todo ID"] === cardId) {
      todoArr.splice(i,1)
      if (!todoArr.length) {
        _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.currentTodoId = 0
      }
      break
    }
  }

  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoArr, cards)
  ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setTodos)(todoArr)
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBVztBQUNiLEVBQUUsd0RBQVE7QUFDVjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1Q0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaURBQVc7QUFDYixFQUFFLHdEQUFRO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIFxuICBtYXJnaW46IDA7XG59XG5cbiNjb250ZW50IHtcbiAgbWFyZ2luOiAxcmVtIDJyZW07XG59XG5cbiNmb3JtLWRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcblxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigyMTIsIDIxMiwgMjEyKTtcblxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xuXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1idXR0b25zIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5idXR0b24ubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjMxLCAyMzEpO1xuICBib3JkZXItY29sb3I6IHJnYigxNzMsIDIxNiwgMjE2KTtcbn1cblxuYnV0dG9uLm5ldzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDIyMywgMjIzKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTU4LCAyMDQsIDIwNCk7XG59XG5cbmJ1dHRvbi5uZXc6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMjEyLCAyMTIpO1xuICBib3JkZXItY29sb3I6IHJnYigxNDIsIDE4OSwgMTg5KTtcbn1cblxuYnV0dG9uLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMTc1KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDE1OCk7XG59XG5cbmJ1dHRvbi5jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDIsIDE2MCk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIyOCwgMjI2LCAxNDMpO1xufVxuXG5idXR0b24uY2FuY2VsOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMSwgMTQ2KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAyMTYsIDEzMik7XG59XG5cbmJ1dHRvbi5lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjA2LCAxNTUpO1xuICBib3JkZXItY29sb3I6IHJnYigyMDQsIDE4MCwgMTI4KTtcbn1cblxuYnV0dG9uLmVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxOTMsIDEzOSk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE5MCwgMTY3LCAxMTUpO1xufVxuXG5idXR0b24uZWRpdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxODIsIDEyOCk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NSwgMTUzLCAxMDMpO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTc3LCAxNzcpO1xuICBib3JkZXItY29sb3I6IHJnYigyMDQsIDE0NCwgMTQ0KTtcbn1cblxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDE2MSwgMTYxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTg5LCAxMzAsIDEzMCk7XG59XG5cbmJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTQ5LCAxNDkpO1xuICBib3JkZXItY29sb3I6IHJnYigxNzcsIDExNywgMTE3KTtcbn1cblxuYnV0dG9uLnNhdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAyMzEsIDE3Nyk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE0NiwgMjA5LCAxNDYpO1xufVxuXG5idXR0b24uc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIxNiwgMTU5KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTM0LCAxOTcsIDEzNCk7XG59XG5cbmJ1dHRvbi5zYXZlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDIwNywgMTQ4KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTIzLCAxODUsIDEyMyk7XG59XG5cbiNjYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgYXV0bykgKTtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5jYXJkIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDIxMiwgMjEyLCAyMTIpO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuXG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmNhcmQtZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xufVxuXG4uY2FyZC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1kZXRhaWxzIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhcmQuZWRpdGluZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUpBQW1KOztFQUVuSixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMENBQTBDOztFQUUxQyxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUpBQW1KO0VBQ25KLHFCQUFxQjtFQUNyQixvQ0FBb0M7O0VBRXBDLHNCQUFzQjs7RUFFdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrREFBK0Q7RUFDL0QsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQ0FBMEM7O0VBRTFDLG9DQUFvQztFQUNwQyxxQkFBcUI7O0VBRXJCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7O0VBRXJCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxufVxcblxcbiNmb3JtLWRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigyMTIsIDIxMiwgMjEyKTtcXG5cXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xcblxcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQtYnV0dG9ucyBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbi5uZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMjMxLCAyMzEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTczLCAyMTYsIDIxNik7XFxufVxcblxcbmJ1dHRvbi5uZXc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMjIzLCAyMjMpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTU4LCAyMDQsIDIwNCk7XFxufVxcblxcbmJ1dHRvbi5uZXc6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIxMiwgMjEyKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0MiwgMTg5LCAxODkpO1xcbn1cXG5cXG5idXR0b24uY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMTc1KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0MCwgMjM4LCAxNTgpO1xcbn1cXG5cXG5idXR0b24uY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MiwgMTYwKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIyOCwgMjI2LCAxNDMpO1xcbn1cXG5cXG5idXR0b24uY2FuY2VsOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzEsIDE0Nik7XFxuICBib3JkZXItY29sb3I6IHJnYigyMTgsIDIxNiwgMTMyKTtcXG59XFxuXFxuYnV0dG9uLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjA2LCAxNTUpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA0LCAxODAsIDEyOCk7XFxufVxcblxcbmJ1dHRvbi5lZGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE5MywgMTM5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE5MCwgMTY3LCAxMTUpO1xcbn1cXG5cXG5idXR0b24uZWRpdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTgyLCAxMjgpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc1LCAxNTMsIDEwMyk7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTc3LCAxNzcpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA0LCAxNDQsIDE0NCk7XFxufVxcblxcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTYxLCAxNjEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTg5LCAxMzAsIDEzMCk7XFxufVxcblxcbmJ1dHRvbi5kZWxldGU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE0OSwgMTQ5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NywgMTE3LCAxMTcpO1xcbn1cXG5cXG5idXR0b24uc2F2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAyMzEsIDE3Nyk7XFxuICBib3JkZXItY29sb3I6IHJnYigxNDYsIDIwOSwgMTQ2KTtcXG59XFxuXFxuYnV0dG9uLnNhdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjE2LCAxNTkpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTM0LCAxOTcsIDEzNCk7XFxufVxcblxcbmJ1dHRvbi5zYXZlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAyMDcsIDE0OCk7XFxuICBib3JkZXItY29sb3I6IHJnYigxMjMsIDE4NSwgMTIzKTtcXG59XFxuXFxuI2NhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIGF1dG8pICk7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMjEyLCAyMTIsIDIxMik7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jYXJkLWRldGFpbHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jYXJkLWRldGFpbHMgc3BhbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5jYXJkLmVkaXRpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlclRvZG9zKHRvZG9BcnIsIGNvbnRlbnRDb250YWluZXIpIHtcbiAgLy8gcmVtb3ZlIGFsbCBjb250ZW50cyBmcm9tIGNvbnRhaW5lclxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLy8gcmVuZGVyIGVhY2ggdG9kbyBpbiBhIGNhcmRcbiAgZm9yIChsZXQgaSBpbiB0b2RvQXJyKSB7XG4gICAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9DYXJkLmlkID0gYGNhcmQgJHtpfWBcbiAgICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdG9kb0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpXG4gICAgdG9kb0J0bnMuY2xhc3NMaXN0LmFkZCgnY2FyZC1idXR0b25zJylcbiAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kb0FycltpXSkpIHtcbiAgICAgIGNvbnN0IHNwYW5LZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHNwYW5LZXkudGV4dENvbnRlbnQgPSBgJHtrZXl9OiBgXG4gICAgICBjb25zdCBzcGFuVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHNwYW5WYWx1ZS50ZXh0Q29udGVudCA9IHZhbHVlXG4gICAgICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZChzcGFuS2V5KVxuICAgICAgdG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoc3BhblZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuRWRpdFRvZG8udGV4dENvbnRlbnQgPSBcIkVkaXRcIlxuICAgIGJ0bkVkaXRUb2RvLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxuICAgIGJ0bkVkaXRUb2RvLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG9kbycpXG4gICAgYnRuRWRpdFRvZG8uaWQgPSBgZWRpdCAke3RvZG9BcnJbaV1bXCJUb2RvIElEXCJdfWBcbiAgICBjb25zdCBidG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuICAgIGJ0bkRlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbiAgICBidG5EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJylcbiAgICBidG5EZWxldGVUb2RvLmlkID0gYGRlbGV0ZSAke3RvZG9BcnJbaV1bXCJUb2RvIElEXCJdfWBcbiAgICB0b2RvQnRucy5hcHBlbmRDaGlsZChidG5FZGl0VG9kbylcbiAgICB0b2RvQnRucy5hcHBlbmRDaGlsZChidG5EZWxldGVUb2RvKVxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzKVxuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKHRvZG9CdG5zKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmQpXG4gIH1cbn1cblxuXG5leHBvcnQge1xuICByZW5kZXJUb2Rvcyxcbn0iLCJmdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgY29uc3QgdG9kb0FyckpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0FycicpXG4gIHJldHVybiBKU09OLnBhcnNlKHRvZG9BcnJKU09OKVxufVxuXG5cbmZ1bmN0aW9uIHNldFRvZG9zKHRvZG9BcnIpIHtcbiAgaWYgKHRvZG9BcnIubGVuZ3RoKSB7IC8vIHByZXZlbnQgc2F2aW5nICd1bmRlZmluZWQnIGlmIG5vIGxlbmd0aFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvQXJyJywgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpXG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxufVxuXG5cbmV4cG9ydCB7XG4gIGdldFRvZG9zLFxuICBzZXRUb2Rvcyxcbn0iLCJjbGFzcyBUb2RvIHtcbiAgc3RhdGljIGN1cnJlbnRUb2RvSWQgPSAwXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpc1tcIlRpdGxlXCJdID0gdGl0bGVcbiAgICB0aGlzW1wiRGVzY3JpcHRpb25cIl0gPSBkZXNjcmlwdGlvblxuICAgIHRoaXNbXCJEdWUgRGF0ZVwiXSA9IGR1ZURhdGVcbiAgICB0aGlzW1wiUHJpb3JpdHlcIl0gPSBwcmlvcml0eVxuICAgIHRoaXNbXCJOb3Rlc1wiXSA9IG5vdGVzXG4gICAgdGhpc1tcIlRvZG8gSURcIl0gPSBUb2RvLmN1cnJlbnRUb2RvSWQrK1xuICB9XG59XG5cblxuZXhwb3J0IHtcbiAgVG9kbyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21haW4uY3NzXCJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCJcbmltcG9ydCB7IGdldFRvZG9zLCBzZXRUb2RvcyB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgeyByZW5kZXJUb2RvcyB9IGZyb20gXCIuL2RvbVwiXG5cbmxldCB0b2RvQXJyID0gZ2V0VG9kb3MoKSB8fCBbXVxuaWYgKHRvZG9BcnIubGVuZ3RoID4gMCkge1xuICBjb25zdCBuZXdDdXJyZW50SWQgPSB0b2RvQXJyW3RvZG9BcnIubGVuZ3RoLTFdW1wiVG9kbyBJRFwiXVxuICBUb2RvLmN1cnJlbnRUb2RvSWQgPSBuZXdDdXJyZW50SWQgKyAxXG59IGVsc2Uge1xuICBUb2RvLmN1cnJlbnRUb2RvSWQgPSAwXG59XG5yZW5kZXJUb2Rvcyh0b2RvQXJyLCBjYXJkcylcblxuY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWRpdicpXG5jb25zdCBjYXJkc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcycpXG5cbi8vIGNyZWF0ZSBmb3JtIGVsZW1lbnRzIGZvciBjcmVhdGluZyBvciB1cGRhdGluZyB0b2RvIGRldGFpbHNcbmNvbnN0IGJ0bkRlbGV0ZUFsbFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bkRlbGV0ZUFsbFRvZG9zLmlkID0gJ2J0bi1kZWxldGUtYWxsLXRvZG9zJ1xuYnRuRGVsZXRlQWxsVG9kb3MuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbmJ0bkRlbGV0ZUFsbFRvZG9zLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBBbGwgVG9kb3MnXG5mb3JtRGl2LmFwcGVuZENoaWxkKGJ0bkRlbGV0ZUFsbFRvZG9zKVxuXG5jb25zdCBidG5OZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bk5ld1RvZG8uaWQgPSAnYnRuLW5ldy10b2RvJ1xuYnRuTmV3VG9kby5jbGFzc0xpc3QuYWRkKCduZXcnKVxuYnRuTmV3VG9kby50ZXh0Q29udGVudCA9ICdOZXcgVG9kbydcbmZvcm1EaXYuYXBwZW5kQ2hpbGQoYnRuTmV3VG9kbylcblxuY29uc3QgZm9ybVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmZvcm1Ub2RvLmlkID0gJ2Zvcm0tdG9kbydcbi8vIGZvcm1Ub2RvLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSlcbmZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVRvZG8pXG5cbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dFRpdGxlLmlkID0gJ2lucHV0LXRvZG8tdGl0bGUnXG5pbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gJ1RvZG8gdGl0bGUnXG5mb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKVxuXG5jb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuaW5wdXREZXNjcmlwdGlvbi5pZCA9ICdpbnB1dC10b2RvLWRlc2NyaXB0aW9uJ1xuaW5wdXREZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdUb2RvIGRlc2NyaXB0aW9uJ1xuZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbilcblxuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuaW5wdXREdWVEYXRlLmlkID0gJ2lucHV0LXRvZG8tZHVlLWRhdGUnXG5pbnB1dER1ZURhdGUucGxhY2Vob2xkZXIgPSAnVG9kbyBkdWUgZGF0ZSdcbmZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSlcblxuY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0UHJpb3JpdHkuaWQgPSAnaW5wdXQtdG9kby1wcmlvcml0eSdcbmlucHV0UHJpb3JpdHkucGxhY2Vob2xkZXIgPSAnVG9kbyBwcmlvcml0eSdcbmZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpXG5cbmNvbnN0IGlucHV0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dE5vdGVzLmlkID0gJ2lucHV0LXRvZG8tbm90ZXMnXG5pbnB1dE5vdGVzLnBsYWNlaG9sZGVyID0gJ1RvZG8gbm90ZXMnXG5mb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dE5vdGVzKVxuXG5jb25zdCBidG5VcGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0blVwZGF0ZVRvZG8uaWQgPSAnYnRuLXVwZGF0ZS10b2RvJ1xuYnRuVXBkYXRlVG9kby5jbGFzc0xpc3QuYWRkKCdlZGl0JylcbmJ0blVwZGF0ZVRvZG8udGV4dENvbnRlbnQgPSAnVXBkYXRlIFRvZG8nXG5idG5VcGRhdGVUb2RvLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSlcbmZvcm1Ub2RvLmFwcGVuZENoaWxkKGJ0blVwZGF0ZVRvZG8pXG5cbmNvbnN0IGJ0blNhdmVOZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0blNhdmVOZXdUb2RvLmlkID0gJ2J0bi1zYXZlLXRvZG8nXG5idG5TYXZlTmV3VG9kby5jbGFzc0xpc3QuYWRkKCdzYXZlJylcbmJ0blNhdmVOZXdUb2RvLnRleHRDb250ZW50ID0gJ1NhdmUgVG9kbydcbmZvcm1Ub2RvLmFwcGVuZENoaWxkKGJ0blNhdmVOZXdUb2RvKVxuXG5jb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuQ2FuY2VsLmlkID0gJ2J0bi1jYW5jZWwtZWRpdCdcbmJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKVxuYnRuQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbmZvcm1Ub2RvLmFwcGVuZENoaWxkKGJ0bkNhbmNlbClcblxuXG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybUlucHV0cygpIHtcbiAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCJcbiAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCJcbiAgaW5wdXREdWVEYXRlLnZhbHVlID0gXCJcIlxuICBpbnB1dFByaW9yaXR5LnZhbHVlID0gXCJcIlxuICBpbnB1dE5vdGVzLnZhbHVlID0gXCJcIlxuICBkZWxldGUgYnRuVXBkYXRlVG9kby5kYXRhc2V0LmVsZW1lbnRJZFxuICBidG5TYXZlTmV3VG9kby5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gIGJ0blVwZGF0ZVRvZG8uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJylcbiAgY2FyZHMuZm9yRWFjaChjYXJkPT57XG4gICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0aW5nJylcbiAgfSlcbn1cblxuXG5mdW5jdGlvbiBuZXdUb2RvKCkge1xuICBmb3JtVG9kby50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gIHJlc2V0Rm9ybUlucHV0cygpXG59XG5cbmZ1bmN0aW9uIHNhdmVUb2RvRGF0YVRvQXJyYXkodG9kb0Fycikge1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgaW5wdXRUaXRsZS52YWx1ZSwgXG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgXG4gICAgaW5wdXREdWVEYXRlLnZhbHVlLCBcbiAgICBpbnB1dFByaW9yaXR5LnZhbHVlLCBcbiAgICBpbnB1dE5vdGVzLnZhbHVlXG4gICAgKVxuICB0b2RvQXJyLnB1c2godG9kbylcbiAgcmVzZXRGb3JtSW5wdXRzKClcbn1cblxuXG5idG5OZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VG9kbylcblxuXG5idG5VcGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGVsZW1lbnRJZCA9IGJ0blVwZGF0ZVRvZG8uZGF0YXNldC5lbGVtZW50SWRcbiAgdXBkYXRlVG9kb0RldGFpbHMoZWxlbWVudElkKVxuICByZW5kZXJUb2Rvcyh0b2RvQXJyLCBjYXJkcylcblxuICBzZXRUb2Rvcyh0b2RvQXJyKSAvLyBzYXZlIGFsbCB0b2Rvc1xufSlcblxuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGRlbGV0ZSBidG5VcGRhdGVUb2RvLmRhdGFzZXQuZWxlbWVudElkXG4gIHJlc2V0Rm9ybUlucHV0cygpXG59KVxuXG5cbmJ0blNhdmVOZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIHNhdmVUb2RvRGF0YVRvQXJyYXkodG9kb0FycilcbiAgcmVuZGVyVG9kb3ModG9kb0FyciwgY2FyZHMpXG5cbiAgc2V0VG9kb3ModG9kb0FycikgLy8gc2F2ZSBhbGwgdG9kb3Ncbn0pXG5cblxuYnRuRGVsZXRlQWxsVG9kb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCBpc0RlbGV0ZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgQUxMIHRvZG9zPycpXG4gIGlmIChpc0RlbGV0ZSkge1xuICAgIHRvZG9BcnIgPSBbXVxuICAgIHJlbmRlclRvZG9zKHRvZG9BcnIsIGNhcmRzKVxuICAgIHNldFRvZG9zKHRvZG9BcnIpXG4gICAgVG9kby5jdXJyZW50VG9kb0lkID0gMFxuICB9XG59KVxuXG5cbi8vIGFkZCBlZGl0IGZ1bmN0aW9uIHRvIGVkaXQgYnV0dG9uIG9uIGVhY2ggdG9kbyBjYXJkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgY29uc3QgYWxsQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8nKVxuICBhbGxCdG5FZGl0LmZvckVhY2goYnRuRWRpdD0+e1xuICAgIGNvbnN0IGNhcmRJZCA9IHBhcnNlSW50KGJ0bkVkaXQuaWQuc3BsaXQoJyAnKVsxXSlcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBidG5FZGl0LmlkKSB7XG4gICAgICBsb2FkVG9kb0RldGFpbHMoY2FyZElkLCB0b2RvQXJyKVxuICAgICAgY29uc3QgbmV3Q2FyZElkID0gYGNhcmQgJHtjYXJkSWR9YFxuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0NhcmRJZClcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZWRpdGluZycpIFxuICAgICAgZm9ybVRvZG8ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgYnRuVXBkYXRlVG9kby5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICBidG5TYXZlTmV3VG9kby5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpXG4gICAgfVxuICB9KVxufSlcblxuXG4vLyBhZGQgZGVsZXRlIGZ1bmN0aW9uIHRvIGRlbGV0ZSBidXR0b24gb24gZWFjaCB0b2RvIGNhcmRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICBjb25zdCBhbGxCdG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvZG8nKVxuICBhbGxCdG5EZWxldGUuZm9yRWFjaChidG5EZWxldGU9PntcbiAgICBjb25zdCBjYXJkSWQgPSBwYXJzZUludChidG5EZWxldGUuaWQuc3BsaXQoJyAnKVsxXSlcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBidG5EZWxldGUuaWQpIHtcbiAgICAgIGRlbGV0ZVRvZG8oY2FyZElkLCB0b2RvQXJyKVxuICAgICAgcmVzZXRGb3JtSW5wdXRzKCkgIFxuICAgIH1cbiAgfSlcbn0pXG5cblxuLy8gbG9hZCBkZXRhaWxzIGZyb20gc2VsZWN0ZWQgdG9kbyBpbnRvIGlucHV0IGZpZWxkc1xuZnVuY3Rpb24gbG9hZFRvZG9EZXRhaWxzKGNhcmRJZCwgdG9kb0Fycikge1xuICBsZXQgZWxlbWVudElkXG4gIGZvciAobGV0IGkgaW4gdG9kb0Fycikge1xuICAgIGlmICh0b2RvQXJyW2ldW1wiVG9kbyBJRFwiXSA9PT0gY2FyZElkKSB7XG4gICAgICBlbGVtZW50SWQgPSBpXG4gICAgICBpbnB1dFRpdGxlLnZhbHVlID0gdG9kb0FycltpXVtcIlRpdGxlXCJdXG4gICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gdG9kb0FycltpXVtcIkRlc2NyaXB0aW9uXCJdXG4gICAgICBpbnB1dER1ZURhdGUudmFsdWUgPSB0b2RvQXJyW2ldW1wiRHVlIERhdGVcIl1cbiAgICAgIGlucHV0UHJpb3JpdHkudmFsdWUgPSB0b2RvQXJyW2ldW1wiUHJpb3JpdHlcIl1cbiAgICAgIGlucHV0Tm90ZXMudmFsdWUgPSB0b2RvQXJyW2ldW1wiTm90ZXNcIl1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGJ0blVwZGF0ZVRvZG8uZGF0YXNldC5lbGVtZW50SWQgPSBlbGVtZW50SWRcbn1cblxuXG4vLyB1cGRhdGUgdG9kb0FyciB3aXRoIHVwZGF0ZWQgdG9kbyBkZXRhaWxzIGFuZCByZXJlbmRlclxuZnVuY3Rpb24gdXBkYXRlVG9kb0RldGFpbHMoZWxlbWVudElkKSB7XG4gIHRvZG9BcnJbZWxlbWVudElkXVtcIlRpdGxlXCJdID0gaW5wdXRUaXRsZS52YWx1ZVxuICB0b2RvQXJyW2VsZW1lbnRJZF1bXCJEZXNjcmlwdGlvblwiXSA9IGlucHV0RGVzY3JpcHRpb24udmFsdWVcbiAgdG9kb0FycltlbGVtZW50SWRdW1wiRHVlIERhdGVcIl0gPSBpbnB1dER1ZURhdGUudmFsdWVcbiAgdG9kb0FycltlbGVtZW50SWRdW1wiUHJpb3JpdHlcIl0gPSBpbnB1dFByaW9yaXR5LnZhbHVlXG4gIHRvZG9BcnJbZWxlbWVudElkXVtcIk5vdGVzXCJdID0gaW5wdXROb3Rlcy52YWx1ZVxuICByZXNldEZvcm1JbnB1dHMoKVxuICByZW5kZXJUb2Rvcyh0b2RvQXJyLCBjYXJkcylcbiAgc2V0VG9kb3ModG9kb0Fycilcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGNhcmRJZCwgdG9kb0Fycikge1xuICBjb25zdCBpc0RlbGV0ZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0b2RvPycpXG4gIGlmICghaXNEZWxldGUpIHJldHVyblxuXG4gIGZvciAobGV0IGkgaW4gdG9kb0Fycikge1xuICAgIGlmICh0b2RvQXJyW2ldW1wiVG9kbyBJRFwiXSA9PT0gY2FyZElkKSB7XG4gICAgICB0b2RvQXJyLnNwbGljZShpLDEpXG4gICAgICBpZiAoIXRvZG9BcnIubGVuZ3RoKSB7XG4gICAgICAgIFRvZG8uY3VycmVudFRvZG9JZCA9IDBcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVG9kb3ModG9kb0FyciwgY2FyZHMpXG4gIHNldFRvZG9zKHRvZG9BcnIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=