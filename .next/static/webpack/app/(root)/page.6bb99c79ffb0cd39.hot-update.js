"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./app/(root)/page.tsx":
/*!*****************************!*\
  !*** ./app/(root)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { register, handleSubmit, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const onSubmit = async (values)=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                // Appeler la fonction createPost du smart contrat\n                await contract.methods.createPost(values.content).send({\n                    from: userAddress\n                });\n                // Réinitialiser le formulaire\n                reset();\n                console.log(\"Post ajout\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'ajout du post sur la blockchain :\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head-text text-left\",\n                children: \"Accueil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        children: \"Contenu du Post:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 5,\n                        id: \"post\",\n                        className: \"text-black bg-light-2 h-40 w-full\",\n                        ...register(\"content\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"gap-10 bg-primary-500 w-full\",\n                        children: \"Ajouter un Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border shadow p-5 text-xl text-gray-700 font-semibold\",\n                        children: \"A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-1 rounded-b-lg border shadow flex flex-row flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold\",\n                                children: \"Like\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold\",\n                                children: \"Share\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Tv3ax+IYeS+IUhXACHCvYwCyM94=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQjtBQUMrQjtBQUNqQztBQUM2QjtBQUNIO0FBTWxELE1BQU1LLE9BQWlCOztJQUNuQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Asd0RBQU9BO0lBQ2pELE1BQU1RLFdBQXNDLE9BQU9DO1FBQy9DLElBQUk7WUFDQSxJQUFJQyxPQUFPQyxRQUFRLEVBQUU7Z0JBQ2pCLE1BQU1DLE9BQU8sSUFBSVgsNENBQUlBLENBQUNTLE9BQU9DLFFBQVE7Z0JBQ3JDLE1BQU1ELE9BQU9DLFFBQVEsQ0FBQ0UsTUFBTTtnQkFDNUIsTUFBTUMsV0FBVyxJQUFJRixLQUFLRyxHQUFHLENBQUNDLFFBQVEsQ0FBQ2IsOERBQVdBLEVBQUVELDhEQUFlQTtnQkFDbkUsTUFBTWUsV0FBVyxNQUFNTCxLQUFLRyxHQUFHLENBQUNHLFdBQVc7Z0JBQzNDLE1BQU1DLGNBQWNGLFFBQVEsQ0FBQyxFQUFFO2dCQUUvQixrREFBa0Q7Z0JBQ2xELE1BQU1ILFNBQVNNLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDWixPQUFPYSxPQUFPLEVBQUVDLElBQUksQ0FBQztvQkFBRUMsTUFBTUw7Z0JBQVk7Z0JBRTNFLDhCQUE4QjtnQkFDOUJaO2dCQUVBa0IsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0hELFFBQVFFLEtBQUssQ0FBQztZQUNsQjtRQUNKLEVBQUUsT0FBT0EsT0FBTztZQUNaRixRQUFRRSxLQUFLLENBQUMsc0RBQXVEQTtRQUN6RTtJQUNKO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBc0I7Ozs7OzswQkFFcEMsOERBQUNDO2dCQUFLdEIsVUFBVUYsYUFBYUU7O2tDQUN6Qiw4REFBQ3VCO3dCQUFNQyxTQUFRO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBU0MsTUFBTTt3QkFDTkMsSUFBRzt3QkFDSE4sV0FBVTt3QkFDVCxHQUFHeEIsU0FBUyxVQUFVOzs7Ozs7a0NBRWpDLDhEQUFDK0I7d0JBQU9DLE1BQUs7d0JBQVNSLFdBQVU7a0NBQStCOzs7Ozs7Ozs7Ozs7MEJBRW5FLDhEQUFDUztnQkFBSVQsV0FBVTs7a0NBRVgsOERBQUNTO3dCQUFJVCxXQUFVO2tDQUFpRTs7Ozs7O2tDQUdoRiw4REFBQ1M7d0JBQUlULFdBQVU7OzBDQUNYLDhEQUFDUztnQ0FBSVQsV0FBVTswQ0FBMEU7Ozs7OzswQ0FDekYsOERBQUNTO2dDQUNHVCxXQUFVOzBDQUErRjs7Ozs7OzBDQUU3Ryw4REFBQ1M7Z0NBQ0dULFdBQVU7MENBQXFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12SDtHQXhETXpCOztRQUN3Q0osb0RBQU9BOzs7S0FEL0NJO0FBMEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm9vdCkvcGFnZS50c3g/ZmM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiQC9jb25zdGFudHMvZ2xvYmFsXCI7XG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSBcIkAvY29uc3RhbnRzL2NvbnRyYWN0QUJJXCI7XG5cbmludGVyZmFjZSBGb3JtVmFsdWVzIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXQgfSA9IHVzZUZvcm08Rm9ybVZhbHVlcz4oKTtcbiAgICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxGb3JtVmFsdWVzPiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJBZGRyZXNzID0gYWNjb3VudHNbMF07XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbGVyIGxhIGZvbmN0aW9uIGNyZWF0ZVBvc3QgZHUgc21hcnQgY29udHJhdFxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuY3JlYXRlUG9zdCh2YWx1ZXMuY29udGVudCkuc2VuZCh7IGZyb206IHVzZXJBZGRyZXNzIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdCBham91dMOpIGF2ZWMgc3VjY8OocyBzdXIgbGEgYmxvY2tjaGFpbiEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWV0YU1hc2sgblxcJ2VzdCBwYXMgaW5zdGFsbMOpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgcG9zdCBzdXIgbGEgYmxvY2tjaGFpbiA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZC10ZXh0IHRleHQtbGVmdFwiPkFjY3VlaWw8L2gxPlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q29udGVudSBkdSBQb3N0OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYmctbGlnaHQtMiBoLTQwIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29udGVudCcpfSAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZ2FwLTEwIGJnLXByaW1hcnktNTAwIHctZnVsbFwiPkFqb3V0ZXIgdW4gUG9zdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtdC0zXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBzaGFkb3cgcC01IHRleHQteGwgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIEEgUHJldHR5IENvb2wgcGhvdG8gZnJvbSB0aGUgbW91bnRhaW5zLiBJbWFnZSBjcmVkaXQgdG8gQGRhbmllbG1pcmxlYSBvbiBVbnNwbGFzaC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMSByb3VuZGVkLWItbGcgYm9yZGVyIHNoYWRvdyBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIGhvdmVyOmJnLWdyYXktMjAwIHRleHQtY2VudGVyIHRleHQteGwgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+TGlrZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyBob3ZlcjpiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yLSB0ZXh0LWNlbnRlciB0ZXh0LXhsIHRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZFwiPlNoYXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyBob3ZlcjpiZy1ncmF5LTIwMCBib3JkZXItbC00IHRleHQtY2VudGVyIHRleHQteGwgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+Q29tbWVudFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiV2ViMyIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiSG9tZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJvblN1Ym1pdCIsInZhbHVlcyIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViMyIsImVuYWJsZSIsImNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJhY2NvdW50cyIsImdldEFjY291bnRzIiwidXNlckFkZHJlc3MiLCJtZXRob2RzIiwiY3JlYXRlUG9zdCIsImNvbnRlbnQiLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImgxIiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsInRleHRhcmVhIiwicm93cyIsImlkIiwiYnV0dG9uIiwidHlwZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/page.tsx\n"));

/***/ })

});