webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hamburger.jsx":
/*!**********************************!*\
  !*** ./components/Hamburger.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/aliaksandr/playground/me/components/Hamburger.jsx";




var Hamburger = function Hamburger(_ref) {
  var isActive = _ref.isActive,
      onActivate = _ref.onActivate,
      size = _ref.size,
      thickness = _ref.thickness;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    isActive: isActive,
    onClick: onActivate,
    size: size,
    thickness: thickness,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
};

Hamburger.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onActivate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Hamburger.defaultProps = {
  isActive: false,
  onActivate: function onActivate() {},
  size: 100,
  thickness: 10
};

var defaultPosition = function defaultPosition(angle, height) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:translateY(", "px) rotate(", "deg);}to{transform:rotate(0deg) translateY(0px);}"], height, angle);
};

var rotate = function rotate(angle, height) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["to{transform:translateY(", "px) rotate(", "deg);}"], height, angle);
};

var stick = function stick(angle, height, thickness) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["content:'';position:absolute;background-color:white;width:100%;height:", "px;border-radius:10px;animation:", " 0.5s forwards;"], thickness, function (props) {
    return props.isActive ? rotate(angle, height) : defaultPosition(angle, height);
  });
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hamburger__Container",
  componentId: "l02850-0"
})(["pointer-events:all;width:", "px;height:", "px;position:relative;&::before{", "}&::after{", " top:", "px;}"], function (props) {
  return props.size;
}, function (props) {
  return props.size / 2 + props.thickness;
}, function (props) {
  return stick(45, props.size / 4, props.thickness);
}, function (props) {
  return stick(-45, -(props.size / 4), props.thickness);
}, function (props) {
  return props.size / 2;
});
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ })

})
//# sourceMappingURL=index.js.d51f061c795c2c9cc72c.hot-update.js.map