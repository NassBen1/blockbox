"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eae7eed16438\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2EzMWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlYWU3ZWVkMTY0MzhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/shared/LeftSidebar.tsx":
/*!*******************************************!*\
  !*** ./components/shared/LeftSidebar.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LeftSidebar() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"custom-scrollbar leftsidebar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full flex-1 flex-col gap-6 px-6\",\n                children: _constants__WEBPACK_IMPORTED_MODULE_1__.sidebarLinks.map((link)=>{\n                    const isActive = pathname.includes(link.route) && link.route.length > 1 || pathname === link.route;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: link.route,\n                        className: \"leftsidebar_link \".concat(isActive && \"bg-primary-500\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: link.imgURL,\n                                alt: link.label,\n                                width: 24,\n                                height: 28\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-light-1 max-lg:hidden\",\n                                children: link.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, link.label, true, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.SignedIn, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.SignOutButton, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/assets/logout.svg\",\n                                    alt: \"logout\",\n                                    width: 24,\n                                    height: 24\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-light-2 px-4 max-lg:hidden\",\n                                    children: \"Se d\\xe9connecter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox\\\\components\\\\shared\\\\LeftSidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(LeftSidebar, \"gA9e4WsoP6a20xDgQgrFkfMP8lc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = LeftSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftSidebar);\nvar _c;\n$RefreshReg$(_c, \"LeftSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0xlZnRTaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lDO0FBQ1o7QUFDRTtBQUN3QjtBQUNEO0FBRXRELFNBQVNPOztJQUNMLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxXQUFXTiw0REFBV0E7SUFDNUIscUJBQ0ksOERBQUNPO1FBQVFDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDVlgsb0RBQVlBLENBQUNhLEdBQUcsQ0FBQyxDQUFDQztvQkFDZixNQUFNQyxXQUFXLFNBQVVDLFFBQVEsQ0FBQ0YsS0FBS0csS0FBSyxLQUFLSCxLQUFLRyxLQUFLLENBQUNDLE1BQU0sR0FBRSxLQUFNVCxhQUFhSyxLQUFLRyxLQUFLO29CQUNuRyxxQkFDSSw4REFBQ2hCLGlEQUFJQTt3QkFBQ2tCLE1BQU1MLEtBQUtHLEtBQUs7d0JBRWhCTixXQUFXLG9CQUFpRCxPQUE3QkksWUFBWTs7MENBRTdDLDhEQUFDYixrREFBS0E7Z0NBQUNrQixLQUFLTixLQUFLTyxNQUFNO2dDQUFFQyxLQUFLUixLQUFLUyxLQUFLO2dDQUFFQyxPQUFPO2dDQUFJQyxRQUFROzs7Ozs7MENBQzdELDhEQUFDQztnQ0FBRWYsV0FBVTswQ0FBOEJHLEtBQUtTLEtBQUs7Ozs7Ozs7dUJBSjlDVCxLQUFLUyxLQUFLOzs7OztnQkFRN0I7Ozs7OzswQkFJSiw4REFBQ1g7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNOLG1EQUFRQTs4QkFDTCw0RUFBQ0Msd0RBQWFBO2tDQUNWLDRFQUFDTTs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNULGtEQUFLQTtvQ0FBQ2tCLEtBQUk7b0NBQXFCRSxLQUFJO29DQUFTRSxPQUFPO29DQUFJQyxRQUFROzs7Ozs7OENBQ2hFLDhEQUFDQztvQ0FBRWYsV0FBVTs4Q0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRTtHQW5DU0o7O1FBQ1VILHNEQUFTQTtRQUNQRCx3REFBV0E7OztLQUZ2Qkk7QUFxQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTGVmdFNpZGViYXIudHN4P2FjOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHtzaWRlYmFyTGlua3N9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge3VzZVBhdGhuYW1lLCB1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHtTaWduZWRJbiwgU2lnbk91dEJ1dHRvbn0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuXHJcbmZ1bmN0aW9uIExlZnRTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tc2Nyb2xsYmFyIGxlZnRzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC0xIGZsZXgtY29sIGdhcC02IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgIHtzaWRlYmFyTGlua3MubWFwKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAocGF0aG5hbWUuaW5jbHVkZXMobGluay5yb3V0ZSkgJiYgbGluay5yb3V0ZS5sZW5ndGggPjEpIHx8IHBhdGhuYW1lID09PSBsaW5rLnJvdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGluay5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGVmdHNpZGViYXJfbGluayAke2lzQWN0aXZlICYmICdiZy1wcmltYXJ5LTUwMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bGluay5pbWdVUkx9IGFsdD17bGluay5sYWJlbH0gd2lkdGg9ezI0fSBoZWlnaHQ9ezI4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LTEgbWF4LWxnOmhpZGRlblwiPntsaW5rLmxhYmVsfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8U2lnbmVkSW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZ25PdXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvbG9nb3V0LnN2Z1wiIGFsdD1cImxvZ291dFwiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1saWdodC0yIHB4LTQgbWF4LWxnOmhpZGRlblwiPlNlIGTDqWNvbm5lY3RlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaWduT3V0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9TaWduZWRJbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJzaWRlYmFyTGlua3MiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIlNpZ25lZEluIiwiU2lnbk91dEJ1dHRvbiIsIkxlZnRTaWRlYmFyIiwicm91dGVyIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibGluayIsImlzQWN0aXZlIiwiaW5jbHVkZXMiLCJyb3V0ZSIsImxlbmd0aCIsImhyZWYiLCJzcmMiLCJpbWdVUkwiLCJhbHQiLCJsYWJlbCIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/LeftSidebar.tsx\n"));

/***/ })

});