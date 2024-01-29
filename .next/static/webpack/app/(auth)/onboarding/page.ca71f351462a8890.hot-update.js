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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = (param)=>{\n    let { user, btnTitle } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const onSubmit = async (values)=>{\n        console.log(\"Hello\");\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                const userData = {\n                    _username: values.username,\n                    _userAddress: userAddress,\n                    _bio: values.bio\n                };\n                await contract.methods.registerUser(userData._username, userData._bio).send({\n                    from: userAddress\n                });\n                console.log(userData._username, userData._bio);\n                console.log(\"Utilisateur enregistr\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'enregistrement de l'utilisateur sur la blockchain:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-start gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex text-3xl font-bold text-light-2\",\n                children: \"Inscrivez-vous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"flex text-xl text-light-2\",\n                children: \"Rejoignez des milliers d'utilisateurs sur le r\\xe9seau Ethereum\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        className: \"text-base-semibold text-light-2\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"text\",\n                        id: \"username\",\n                        className: \"text-light-2 bg-dark-1\",\n                        ...register(\"username\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"bio\",\n                        className: \"text-base-semibold text-light-2\",\n                        children: \"Bio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        rows: 5,\n                        id: \"bio\",\n                        className: \"text-light-2 bg-dark-1\",\n                        ...register(\"bio\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                onClick: handleSubmit(onSubmit),\n                className: \"bg-primary-500\",\n                children: \"Enregistrez-vous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(auth)\\\\onboarding\\\\page.tsx\",\n        lineNumber: 59,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Page, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXV0aCkvb25ib2FyZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQytCO0FBQ2pDO0FBQzZCO0FBQ0g7QUFDSjtBQUNNO0FBQ0o7QUFtQmhELE1BQU1RLE9BQXdCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQVM7O0lBQ3BELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR1gsd0RBQU9BO0lBRTFDLE1BQU1ZLFdBQXNDLE9BQU9DO1FBQy9DQyxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJO1lBQ0EsSUFBSUMsT0FBT0MsUUFBUSxFQUFFO2dCQUNqQixNQUFNQyxPQUFPLElBQUlqQiw0Q0FBSUEsQ0FBQ2UsT0FBT0MsUUFBUTtnQkFDckMsTUFBTUQsT0FBT0MsUUFBUSxDQUFDRSxNQUFNO2dCQUM1QixNQUFNQyxXQUFXLElBQUlGLEtBQUtHLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDbkIsOERBQVdBLEVBQUVELDhEQUFlQTtnQkFDbkUsTUFBTXFCLFdBQVcsTUFBTUwsS0FBS0csR0FBRyxDQUFDRyxXQUFXO2dCQUMzQyxNQUFNQyxjQUFjRixRQUFRLENBQUMsRUFBRTtnQkFDL0IsTUFBTUcsV0FBVztvQkFDYkMsV0FBV2QsT0FBT2UsUUFBUTtvQkFDMUJDLGNBQWNKO29CQUNkSyxNQUFNakIsT0FBT2tCLEdBQUc7Z0JBRXBCO2dCQUVBLE1BQU1YLFNBQVNZLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDUCxTQUFTQyxTQUFTLEVBQUVELFNBQVNJLElBQUksRUFBRUksSUFBSSxDQUFDO29CQUFFQyxNQUFNVjtnQkFBWTtnQkFDaEdYLFFBQVFDLEdBQUcsQ0FBQ1csU0FBU0MsU0FBUyxFQUFFRCxTQUFTSSxJQUFJO2dCQUM3Q2hCLFFBQVFDLEdBQUcsQ0FBQztZQUNoQixPQUFPO2dCQUNIRCxRQUFRc0IsS0FBSyxDQUFDO1lBQ2xCO1FBQ0osRUFBRSxPQUFPQSxPQUFPO1lBQ1p0QixRQUFRc0IsS0FBSyxDQUFDLHVFQUF5RUE7UUFDM0Y7SUFDSjtJQUVBLHFCQUNRLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXVDOzs7Ozs7MEJBQ3JELDhEQUFDRTtnQkFBR0YsV0FBVTswQkFBNEI7Ozs7OzswQkFDMUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0c7d0JBQU1DLFNBQVE7d0JBQVdKLFdBQVU7a0NBQWtDOzs7Ozs7a0NBR3RFLDhEQUFDbEMsdURBQUtBO3dCQUNGdUMsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSE4sV0FBVTt3QkFDVCxHQUFHNUIsU0FBUyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDMkI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRzt3QkFBTUMsU0FBUTt3QkFBTUosV0FBVTtrQ0FBa0M7Ozs7OztrQ0FHakUsOERBQUNqQyw2REFBUUE7d0JBQ0x3QyxNQUFNO3dCQUNORCxJQUFHO3dCQUNITixXQUFVO3dCQUNULEdBQUc1QixTQUFTLE1BQU07Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNKLHlEQUFNQTtnQkFBQ3dDLFNBQVNuQyxhQUFhQztnQkFBVzBCLFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFLcEY7R0E3RE0vQjs7UUFDaUNQLG9EQUFPQTs7O0tBRHhDTztBQStETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGF1dGgpL29uYm9hcmRpbmcvcGFnZS50c3g/OGU0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCJAL2NvbnN0YW50cy9nbG9iYWxcIjtcclxuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gXCJAL2NvbnN0YW50cy9jb250cmFjdEFCSVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RleHRhcmVhJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgb2JqZWN0ZklkOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmlvOiBzdHJpbmc7XHJcbiAgICAgICAgaW1hZ2U6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBidG5UaXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRm9ybVZhbHVlcyB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgYmlvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHVzZXIsIGJ0blRpdGxlIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08Rm9ybVZhbHVlcz4oKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxGb3JtVmFsdWVzPiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWRkcmVzcyA9IGFjY291bnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3VzZXJuYW1lOiB2YWx1ZXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgX3VzZXJBZGRyZXNzOiB1c2VyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBfYmlvOiB2YWx1ZXMuYmlvXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdGVyVXNlcih1c2VyRGF0YS5fdXNlcm5hbWUsIHVzZXJEYXRhLl9iaW8pLnNlbmQoeyBmcm9tOiB1c2VyQWRkcmVzcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhLl91c2VybmFtZSwgdXNlckRhdGEuX2JpbylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVdGlsaXNhdGV1ciBlbnJlZ2lzdHLDqSBhdmVjIHN1Y2PDqHMgc3VyIGxhIGJsb2NrY2hhaW4hJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZXRhTWFzayBuXFwnZXN0IHBhcyBpbnN0YWxsw6knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZSBsXFwndXRpbGlzYXRldXIgc3VyIGxhIGJsb2NrY2hhaW46JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1saWdodC0yXCI+SW5zY3JpdmV6LXZvdXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZsZXggdGV4dC14bCB0ZXh0LWxpZ2h0LTJcIj5SZWpvaWduZXogZGVzIG1pbGxpZXJzIGQndXRpbGlzYXRldXJzIHN1ciBsZSByw6lzZWF1IEV0aGVyZXVtPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZS1zZW1pYm9sZCB0ZXh0LWxpZ2h0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LTIgYmctZGFyay0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCd1c2VybmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaW9cIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Utc2VtaWJvbGQgdGV4dC1saWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saWdodC0yIGJnLWRhcmstMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignYmlvJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmV6LXZvdXNcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJXZWIzIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJJbnB1dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiUGFnZSIsInVzZXIiLCJidG5UaXRsZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiZW5hYmxlIiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJ1c2VyQWRkcmVzcyIsInVzZXJEYXRhIiwiX3VzZXJuYW1lIiwidXNlcm5hbWUiLCJfdXNlckFkZHJlc3MiLCJfYmlvIiwiYmlvIiwibWV0aG9kcyIsInJlZ2lzdGVyVXNlciIsInNlbmQiLCJmcm9tIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsImlkIiwicm93cyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(auth)/onboarding/page.tsx\n"));

/***/ })

});