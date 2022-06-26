"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/werz/Desktop/programming/programming/portfilio/0xwerz.github.io/src/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/werz/Desktop/programming/programming/portfilio/0xwerz.github.io/src/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFFckIsU0FBU0MsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQ0U7a0JBQ0UsNEVBQUNILHFEQUFLO3NCQUNKLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDdEI7cUJBQ1AsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lPlxuICAgIDwvPlxuICApO1xufVxuICJdLCJuYW1lcyI6WyJUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n\n  }\n  body {\n    font-family: ${(props)=>props.theme.fonts.main\n};\n    font-size: 1.6rem;\n    background: ${(props)=>props.theme.colors.background1\n};\n    color: ${(props)=>props.theme.colors.primary1\n};\n    cursor: default;\n\n  }\n  h1,h2,h3,h4,h5,h6,button {\n    font-family: ${(props)=>props.theme.fonts.title\n};\n  }\n  a {\n    text-decoration: none;\n  }\n  li{\n    list-style: none;\n  }\n\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFDVDtBQUM3QyxNQUFNRSxZQUFZLEdBQUdGLGdFQUFpQixDQUFDO0VBQ3JDLEVBQUVDLHVEQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7aUJBYUcsRUFBRUUsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO0FBQUEsQ0FBQzs7Z0JBRW5DLEVBQUVILENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsV0FBVztBQUFBLENBQUM7V0FDL0MsRUFBRUwsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0csTUFBTSxDQUFDRSxRQUFRO0FBQUEsQ0FBQzs7Ozs7aUJBS2pDLEVBQUVOLENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0ssS0FBSztBQUFBLENBQUM7Ozs7Ozs7OztBQVNwRCxDQUFDO0FBRUQsaUVBQWVSLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvc3R5bGVzL2dsb2JhbHMuanM/ZDQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICR7bm9ybWFsaXplfTtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgfVxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5tYWlufTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kMX07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkxfTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgfVxuICBoMSxoMixoMyxoNCxoNSxoNixidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLnRpdGxlfTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwiR2xvYmFsU3R5bGVzIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/globals.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ \"./src/themes/default.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ \"./src/styles/globals.js\");\n\n\n\n\nconst Theme = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/werz/Desktop/programming/programming/portfilio/0xwerz.github.io/src/styles/theme.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/werz/Desktop/programming/programming/portfilio/0xwerz.github.io/src/styles/theme.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVaO0FBQ0Q7QUFFckMsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLGlCQUN6Qiw4REFBQ0osNERBQWE7UUFBQ0MsS0FBSyxFQUFFQSx1REFBSzs7MEJBQ3pCLDhEQUFDQyxnREFBWTs7Ozt5QkFBRztZQUNmRSxRQUFROzs7Ozs7aUJBQ0s7QUFDaEI7QUFFRixpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9zdHlsZXMvdGhlbWUuanM/MTlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lcy9kZWZhdWx0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4vZ2xvYmFscyc7XG5cbmNvbnN0IFRoZW1lID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICB7Y2hpbGRyZW59XG4gIDwvVGhlbWVQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lOyJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJUaGVtZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Temp fonts\n    fonts: {\n        title: \"Space Grotesk, sans-serif\",\n        main: \"Space Grotesk, sans-serif\"\n    },\n    // Colors for layout\n    colors: {\n        primary1: \"hsl(204,23.8%,95.9%)\",\n        background1: \"#1c1e1f\",\n        accent1: \"hsl(34.9,98.6%,72.9%)\",\n        button: \"hsl(205.1,100%,36.1%)\",\n        background2: \"hsl(232.7,27.3%,23.7%)\"\n    },\n    // Breakpoints for responsive design\n    breakpoints: {\n        sm: \"screen and (max-width: 640px)\",\n        md: \"screen and (max-width: 768px)\",\n        lg: \"screen and (max-width: 1024px)\",\n        xl: \"screen and (max-width: 1280px)\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztpRUFBZTtJQUNiLGFBQWE7SUFDYkEsS0FBSyxFQUFFO1FBQ0xDLEtBQUssRUFBRSwyQkFBMkI7UUFDbENDLElBQUksRUFBRSwyQkFBMkI7S0FDbEM7SUFDRCxvQkFBb0I7SUFDcEJDLE1BQU0sRUFBRTtRQUNOQyxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQ0MsTUFBTSxFQUFFLHVCQUF1QjtRQUMvQkMsV0FBVyxFQUFFLHdCQUF3QjtLQUN0QztJQUNELG9DQUFvQztJQUNwQ0MsV0FBVyxFQUFFO1FBQ1hDLEVBQUUsRUFBRSwrQkFBK0I7UUFDbkNDLEVBQUUsRUFBRSwrQkFBK0I7UUFDbkNDLEVBQUUsRUFBRSxnQ0FBZ0M7UUFDcENDLEVBQUUsRUFBRSxnQ0FBZ0M7S0FDckM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvdGhlbWVzL2RlZmF1bHQuanM/YjFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRlbXAgZm9udHNcbiAgZm9udHM6IHtcbiAgICB0aXRsZTogXCJTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmXCIsXG4gICAgbWFpbjogXCJTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgLy8gQ29sb3JzIGZvciBsYXlvdXRcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTE6IFwiaHNsKDIwNCwyMy44JSw5NS45JSlcIixcbiAgICBiYWNrZ3JvdW5kMTogXCIjMWMxZTFmXCIsIFxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXG4gICAgYnV0dG9uOiBcImhzbCgyMDUuMSwxMDAlLDM2LjElKVwiLFxuICAgIGJhY2tncm91bmQyOiBcImhzbCgyMzIuNywyNy4zJSwyMy43JSlcIixcbiAgfSxcbiAgLy8gQnJlYWtwb2ludHMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXG4gICAgbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xuICB9LFxufSJdLCJuYW1lcyI6WyJmb250cyIsInRpdGxlIiwibWFpbiIsImNvbG9ycyIsInByaW1hcnkxIiwiYmFja2dyb3VuZDEiLCJhY2NlbnQxIiwiYnV0dG9uIiwiYmFja2dyb3VuZDIiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();