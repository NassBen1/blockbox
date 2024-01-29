"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/onboarding/page",{

/***/ "(app-pages-browser)/./app/(auth)/onboarding/page.tsx":
/*!****************************************!*\
  !*** ./app/(auth)/onboarding/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = (param)=>{\n    let { user, btnTitle } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const onSubmit = async (values)=>{\n        console.log(\"Hello\");\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                const userData = {\n                    _username: values.username,\n                    _userAddress: userAddress\n                };\n                await contract.methods.registerUser(userData._username, userData._userAddress).send({\n                    from: userAddress\n                });\n                console.log(\"Utilisateur enregistr\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'enregistrement de l'utilisateur sur la blockchain:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-start gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        className: \"text-base-semibold text-light-2\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"text\",\n                        id: \"username\",\n                        className: \"text-light-2 bg-dark-1\",\n                        ...register(\"username\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"bio\",\n                        className: \"text-base-semibold text-light-2\",\n                        children: \"Bio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        rows: 5,\n                        id: \"bio\",\n                        className: \"text-light-2 bg-dark-1\",\n                        ...register(\"bio\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                onClick: handleSubmit(onSubmit),\n                className: \"bg-primary-500\",\n                children: btnTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXV0aCkvb25ib2FyZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQytCO0FBQ2pDO0FBQzZCO0FBQ0g7QUFDSjtBQUNNO0FBQ0o7QUFtQmhELE1BQU1RLE9BQXdCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQVM7O0lBQ3BELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1gsd0RBQU9BO0lBRTFDLE1BQU1ZLFdBQXNDLE9BQU9DO1FBQy9DQyxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJO1lBQ0EsSUFBSUMsT0FBT0MsUUFBUSxFQUFFO2dCQUNqQixNQUFNQyxPQUFPLElBQUlqQiw0Q0FBSUEsQ0FBQ2UsT0FBT0MsUUFBUTtnQkFDckMsTUFBTUQsT0FBT0MsUUFBUSxDQUFDRSxNQUFNO2dCQUM1QixNQUFNQyxXQUFXLElBQUlGLEtBQUtHLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDbkIsOERBQVdBLEVBQUVELDhEQUFlQTtnQkFDbkUsTUFBTXFCLFdBQVcsTUFBTUwsS0FBS0csR0FBRyxDQUFDRyxXQUFXO2dCQUMzQyxNQUFNQyxjQUFjRixRQUFRLENBQUMsRUFBRTtnQkFDL0IsTUFBTUcsV0FBVztvQkFDYkMsV0FBV2QsT0FBT2UsUUFBUTtvQkFDMUJDLGNBQWNKO2dCQUVsQjtnQkFFQSxNQUFNTCxTQUFTVSxPQUFPLENBQUNDLFlBQVksQ0FBQ0wsU0FBU0MsU0FBUyxFQUFFRCxTQUFTRyxZQUFZLEVBQUVHLElBQUksQ0FBQztvQkFBRUMsTUFBTVI7Z0JBQVk7Z0JBQ3hHWCxRQUFRQyxHQUFHLENBQUM7WUFDaEIsT0FBTztnQkFDSEQsUUFBUW9CLEtBQUssQ0FBQztZQUNsQjtRQUNKLEVBQUUsT0FBT0EsT0FBTztZQUNacEIsUUFBUW9CLEtBQUssQ0FBQyx1RUFBeUVBO1FBQzNGO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1DLFNBQVE7d0JBQVdGLFdBQVU7a0NBQWtDOzs7Ozs7a0NBR3RFLDhEQUFDaEMsdURBQUtBO3dCQUNGbUMsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEosV0FBVTt3QkFDVCxHQUFHMUIsU0FBUyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDeUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUMsU0FBUTt3QkFBTUYsV0FBVTtrQ0FBa0M7Ozs7OztrQ0FHakUsOERBQUMvQiw2REFBUUE7d0JBQ0xvQyxNQUFNO3dCQUNORCxJQUFHO3dCQUNISixXQUFVO3dCQUNULEdBQUcxQixTQUFTLE1BQU07Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNKLHlEQUFNQTtnQkFBQ29DLFNBQVMvQixhQUFhQztnQkFBV3dCLFdBQVU7MEJBQzlDM0I7Ozs7Ozs7Ozs7OztBQUlqQjtHQXpETUY7O1FBQ2lDUCxvREFBT0E7OztLQUR4Q087QUEyRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhhdXRoKS9vbmJvYXJkaW5nL3BhZ2UudHN4PzhlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgU3VibWl0SGFuZGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiQC9jb25zdGFudHMvZ2xvYmFsXCI7XHJcbmltcG9ydCBjb250cmFjdEFCSSBmcm9tIFwiQC9jb25zdGFudHMvY29udHJhY3RBQklcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90ZXh0YXJlYSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgIG9iamVjdGZJZDogc3RyaW5nO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJpbzogc3RyaW5nO1xyXG4gICAgICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgYnRuVGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEZvcm1WYWx1ZXMge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGJpbzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB1c2VyLCBidG5UaXRsZSB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPEZvcm1WYWx1ZXM+KCk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8Rm9ybVZhbHVlcz4gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckFkZHJlc3MgPSBhY2NvdW50c1swXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIF91c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIF91c2VyQWRkcmVzczogdXNlckFkZHJlc3NcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0ZXJVc2VyKHVzZXJEYXRhLl91c2VybmFtZSwgdXNlckRhdGEuX3VzZXJBZGRyZXNzKS5zZW5kKHsgZnJvbTogdXNlckFkZHJlc3MgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXRpbGlzYXRldXIgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzIHN1ciBsYSBibG9ja2NoYWluIScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWV0YU1hc2sgblxcJ2VzdCBwYXMgaW5zdGFsbMOpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQgZGUgbFxcJ3V0aWxpc2F0ZXVyIHN1ciBsYSBibG9ja2NoYWluOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlLXNlbWlib2xkIHRleHQtbGlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlnaHQtMiBiZy1kYXJrLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigndXNlcm5hbWUnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaW9cIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Utc2VtaWJvbGQgdGV4dC1saWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQmlvXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImJpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saWdodC0yIGJnLWRhcmstMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cImJnLXByaW1hcnktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7YnRuVGl0bGV9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIldlYjMiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsIklucHV0IiwiVGV4dGFyZWEiLCJCdXR0b24iLCJQYWdlIiwidXNlciIsImJ0blRpdGxlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjMiLCJlbmFibGUiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsInVzZXJBZGRyZXNzIiwidXNlckRhdGEiLCJfdXNlcm5hbWUiLCJ1c2VybmFtZSIsIl91c2VyQWRkcmVzcyIsIm1ldGhvZHMiLCJyZWdpc3RlclVzZXIiLCJzZW5kIiwiZnJvbSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsImlkIiwicm93cyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(auth)/onboarding/page.tsx\n"));

/***/ })

});