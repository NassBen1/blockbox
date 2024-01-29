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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { register, handleSubmit, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [posts, setPosts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const getAllPosts = async ()=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                // Appeler la fonction getAllPosts du smart contrat\n                const result = await contract.methods.getAllPosts().call();\n                // Ajoutez des logs pour afficher la réponse du contrat\n                console.log(\"Contrat Response:\", result);\n                // Vérifier si les données attendues sont présentes dans la réponse\n                if (result && result.postIds && result.contents && result.authors && result.likeCounts) {\n                    // Mettre à jour l'état des posts dans le composant\n                    const newPosts = result.postIds.map((postId, index)=>({\n                            postId: Number(postId),\n                            content: result.contents[index],\n                            author: result.authors[index],\n                            likeCount: Number(result.likeCounts[index])\n                        }));\n                    setPosts(newPosts);\n                    console.log(posts);\n                } else {\n                    console.error(\"Donn\\xe9es manquantes dans la r\\xe9ponse du contrat.\");\n                }\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des posts depuis la blockchain :\", error);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Appeler la fonction getAllPosts au chargement du composant\n        getAllPosts();\n    }, []);\n    const onSubmit = async (values)=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                // Appeler la fonction createPost du smart contrat\n                await contract.methods.createPost(values.content).send({\n                    from: userAddress\n                });\n                getAllPosts();\n                // Réinitialiser le formulaire\n                reset();\n                console.log(\"Post ajout\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'ajout du post sur la blockchain :\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head-text text-left\",\n                children: \"Accueil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        children: \"Contenu du Post:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 5,\n                        id: \"post\",\n                        className: \"text-black bg-light-2 h-40 w-full\",\n                        ...register(\"content\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"gap-10 bg-primary-500 w-full\",\n                        children: \"Ajouter un Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-dark-2 mt-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-dark-2 border shadow p-5 text-xl text-light-2 font-semibold\",\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-primary-500 p-1 rounded-b-lg border shadow flex flex-row flex-wrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 text-center text-xl text-black font-semibold\",\n                                    children: \"Like\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 border-l-4 border-r- text-center text-xl text-black font-semibold\",\n                                    children: \"Share\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 border-l-4 text-center text-xl text-black font-semibold\",\n                                    children: \"Comment\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, post.postId, true, {\n                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(Home, \"9qQ3+dMsvocfuJcovIdLNKV4HPs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7Ozs7OztrQ0FDekIsOERBQUNDO3dCQUFTQyxNQUFNO3dCQUFHQyxJQUFHO3dCQUFPTixXQUFVO3dCQUFxQyxHQUFHMUMsU0FBUyxVQUFVOzs7Ozs7a0NBQ2xHLDhEQUFDaUQ7d0JBQU9DLE1BQUs7d0JBQVNSLFdBQVU7a0NBQStCOzs7Ozs7Ozs7Ozs7WUFNbEV2QyxNQUFNcUIsR0FBRyxDQUFDLENBQUMyQixxQkFDUiw4REFBQ0M7b0JBQXNCVixXQUFVOztzQ0FDN0IsOERBQUNVOzRCQUFJVixXQUFVO3NDQUFrRVMsS0FBS3ZCLE9BQU87Ozs7OztzQ0FDN0YsOERBQUN3Qjs0QkFBSVYsV0FBVTs7OENBRVAsOERBQUNVO29DQUFJVixXQUFVOzhDQUFzRTs7Ozs7OzhDQUNyRiw4REFBQ1U7b0NBQ0dWLFdBQVU7OENBQTJGOzs7Ozs7OENBRXpHLDhEQUFDVTtvQ0FDR1YsV0FBVTs4Q0FBaUY7Ozs7Ozs7Ozs7Ozs7bUJBVGpHUyxLQUFLMUIsTUFBTTs7Ozs7OztBQWdCckM7R0FyR00xQjs7UUFDd0NKLG9EQUFPQTs7O0tBRC9DSTtBQXVHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvb3QpL3BhZ2UudHN4P2ZjN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiQC9jb25zdGFudHMvZ2xvYmFsXCI7XG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSBcIkAvY29uc3RhbnRzL2NvbnRyYWN0QUJJXCI7XG5cblxuXG5pbnRlcmZhY2UgUG9zdCB7XG4gICAgcG9zdElkOiBudW1iZXI7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGxpa2VDb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ29udHJhY3RSZXNwb25zZSB7XG4gICAgcG9zdElkczogbnVtYmVyW107XG4gICAgY29udGVudHM6IHN0cmluZ1tdO1xuICAgIGF1dGhvcnM6IHN0cmluZ1tdO1xuICAgIGxpa2VDb3VudHM6IG51bWJlcltdO1xufVxuXG5pbnRlcmZhY2UgRm9ybVZhbHVlcyB7XG4gICAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0IH0gPSB1c2VGb3JtPEZvcm1WYWx1ZXM+KCk7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSBSZWFjdC51c2VTdGF0ZTxQb3N0W10+KFtdKTtcblxuICAgIGNvbnN0IGdldEFsbFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVsZXIgbGEgZm9uY3Rpb24gZ2V0QWxsUG9zdHMgZHUgc21hcnQgY29udHJhdFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQ29udHJhY3RSZXNwb25zZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0QWxsUG9zdHMoKS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gQWpvdXRleiBkZXMgbG9ncyBwb3VyIGFmZmljaGVyIGxhIHLDqXBvbnNlIGR1IGNvbnRyYXRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhdCBSZXNwb25zZTonLCByZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxlcyBkb25uw6llcyBhdHRlbmR1ZXMgc29udCBwcsOpc2VudGVzIGRhbnMgbGEgcsOpcG9uc2VcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5wb3N0SWRzICYmIHJlc3VsdC5jb250ZW50cyAmJiByZXN1bHQuYXV0aG9ycyAmJiByZXN1bHQubGlrZUNvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsJ8OpdGF0IGRlcyBwb3N0cyBkYW5zIGxlIGNvbXBvc2FudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0czogUG9zdFtdID0gcmVzdWx0LnBvc3RJZHMubWFwKChwb3N0SWQsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSwgIC8vIENvbnZlcnNpb24gZHUgYmlnaW50IGVuIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzdWx0LmNvbnRlbnRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogcmVzdWx0LmF1dGhvcnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvdW50OiBOdW1iZXIocmVzdWx0Lmxpa2VDb3VudHNbaW5kZXhdKSxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKG5ld1Bvc3RzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdHMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRG9ubsOpZXMgbWFucXVhbnRlcyBkYW5zIGxhIHLDqXBvbnNlIGR1IGNvbnRyYXQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZXRhTWFzayBuXFwnZXN0IHBhcyBpbnN0YWxsw6knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBwb3N0cyBkZXB1aXMgbGEgYmxvY2tjaGFpbiA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gQXBwZWxlciBsYSBmb25jdGlvbiBnZXRBbGxQb3N0cyBhdSBjaGFyZ2VtZW50IGR1IGNvbXBvc2FudFxuICAgICAgICBnZXRBbGxQb3N0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZvcm1WYWx1ZXM+ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckFkZHJlc3MgPSBhY2NvdW50c1swXTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVsZXIgbGEgZm9uY3Rpb24gY3JlYXRlUG9zdCBkdSBzbWFydCBjb250cmF0XG4gICAgICAgICAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5jcmVhdGVQb3N0KHZhbHVlcy5jb250ZW50KS5zZW5kKHsgZnJvbTogdXNlckFkZHJlc3MgfSk7XG5cbiAgICAgICAgICAgICAgICBnZXRBbGxQb3N0cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdCBham91dMOpIGF2ZWMgc3VjY8OocyBzdXIgbGEgYmxvY2tjaGFpbiEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWV0YU1hc2sgblxcJ2VzdCBwYXMgaW5zdGFsbMOpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgcG9zdCBzdXIgbGEgYmxvY2tjaGFpbiA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZC10ZXh0IHRleHQtbGVmdFwiPkFjY3VlaWw8L2gxPlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q29udGVudSBkdSBQb3N0OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9ezV9IGlkPVwicG9zdFwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYmctbGlnaHQtMiBoLTQwIHctZnVsbFwiIHsuLi5yZWdpc3RlcignY29udGVudCcpfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImdhcC0xMCBiZy1wcmltYXJ5LTUwMCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgQWpvdXRlciB1biBQb3N0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIHsvKiBBZmZpY2hlciBsYSBsaXN0ZSBkZXMgcG9zdHMgKi99XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QucG9zdElkfSBjbGFzc05hbWU9XCJiZy1kYXJrLTIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmstMiBib3JkZXIgc2hhZG93IHAtNSB0ZXh0LXhsIHRleHQtbGlnaHQtMiBmb250LXNlbWlib2xkXCI+e3Bvc3QuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LTUwMCBwLTEgcm91bmRlZC1iLWxnIGJvcmRlciBzaGFkb3cgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgaG92ZXI6YmctbGlnaHQtMiB0ZXh0LWNlbnRlciB0ZXh0LXhsIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZFwiPkxpa2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zIGhvdmVyOmJnLWxpZ2h0LTIgYm9yZGVyLWwtNCBib3JkZXItci0gdGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGRcIj5TaGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgaG92ZXI6YmctbGlnaHQtMiBib3JkZXItbC00IHRleHQtY2VudGVyIHRleHQteGwgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+Q29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJXZWIzIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJIb21lIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsImdldEFsbFBvc3RzIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiZW5hYmxlIiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsInBvc3RJZHMiLCJjb250ZW50cyIsImF1dGhvcnMiLCJsaWtlQ291bnRzIiwibmV3UG9zdHMiLCJtYXAiLCJwb3N0SWQiLCJpbmRleCIsIk51bWJlciIsImNvbnRlbnQiLCJhdXRob3IiLCJsaWtlQ291bnQiLCJlcnJvciIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidmFsdWVzIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsInVzZXJBZGRyZXNzIiwiY3JlYXRlUG9zdCIsInNlbmQiLCJmcm9tIiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwidGV4dGFyZWEiLCJyb3dzIiwiaWQiLCJidXR0b24iLCJ0eXBlIiwicG9zdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/page.tsx\n"));

/***/ })

});