(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./node_modules/raw-loader/index.js!./submitEventForm/editor.css":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./submitEventForm/editor.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-text-block {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./submitEventForm/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./submitEventForm/component.js":
/*!**************************************!*\
  !*** ./submitEventForm/component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SubmitEventForm; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar vcvAPI = Object(vc_cake__WEBPACK_IMPORTED_MODULE_8__[\"getService\"])('api');\n\nvar SubmitEventForm = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SubmitEventForm, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(SubmitEventForm);\n\n  function SubmitEventForm(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SubmitEventForm);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SubmitEventForm, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(SubmitEventForm.prototype), \"updateShortcodeToHtml\", this).call(this, \"[submit_event_form]\", this.ref);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(SubmitEventForm.prototype), \"updateShortcodeToHtml\", this).call(this, \"[submit_event_form]\", this.ref);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId; // destructuring assignment for attributes from settings.json with access public\n\n      var submitEventBlockClasses = 'vce-submit-event-form-block';\n      var wrapperClasses = 'vce-submit-event-form-wrapper vce';\n      var customProps = {};\n\n      if (typeof customClass === 'string' && customClass) {\n        submitEventBlockClasses = submitEventBlockClasses.concat(' ' + customClass);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: submitEventBlockClasses\n      }, editor, customProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: wrapperClasses,\n        id: 'el-' + id\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"vcvhelper\",\n        ref: function ref(_ref) {\n          _this.ref = _ref;\n        },\n        \"data-vcvs-html\": \"[submit_event_form]\"\n      })));\n    }\n  }]);\n\n  return SubmitEventForm;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./submitEventForm/component.js?");

/***/ }),

/***/ "./submitEventForm/index.js":
/*!**********************************!*\
  !*** ./submitEventForm/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./submitEventForm/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = Object(vc_cake__WEBPACK_IMPORTED_MODULE_0__[\"getService\"])('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./submitEventForm/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: false,\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./submitEventForm/editor.css\")\n});\n\n//# sourceURL=webpack:///./submitEventForm/index.js?");

/***/ }),

/***/ "./submitEventForm/settings.json":
/*!***************************************!*\
  !*** ./submitEventForm/settings.json ***!
  \***************************************/
/*! exports provided: darkTextSkin, designOptions, editFormTab1, metaEditFormTabs, relatedTo, metaOrder, customClass, metaCustomId, tag, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"darkTextSkin\\\":{\\\"type\\\":\\\"toggleSmall\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":false},\\\"designOptions\\\":{\\\"type\\\":\\\"designOptions\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":{},\\\"options\\\":{\\\"label\\\":\\\"Design Options\\\"}},\\\"editFormTab1\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"metaCustomId\\\",\\\"customClass\\\"],\\\"options\\\":{\\\"label\\\":\\\"General\\\"}},\\\"metaEditFormTabs\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"editFormTab1\\\",\\\"designOptions\\\"]},\\\"relatedTo\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"General\\\"]},\\\"metaOrder\\\":{\\\"type\\\":\\\"number\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":3},\\\"customClass\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Extra class name\\\",\\\"description\\\":\\\"Add an extra class name to the element and refer to it from Custom CSS option.\\\"}},\\\"metaCustomId\\\":{\\\"type\\\":\\\"customId\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Element ID\\\",\\\"description\\\":\\\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\\\"}},\\\"tag\\\":{\\\"access\\\":\\\"protected\\\",\\\"type\\\":\\\"string\\\",\\\"value\\\":\\\"submitEventForm\\\"}}\");\n\n//# sourceURL=webpack:///./submitEventForm/settings.json?");

/***/ })

},[['./submitEventForm/index.js']]]);