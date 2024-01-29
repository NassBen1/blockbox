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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { register, handleSubmit, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [posts, setPosts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const getAllPosts = async ()=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                // Appeler la fonction getAllPosts du smart contrat\n                const result = await contract.methods.getAllPosts().call();\n                // Ajoutez des logs pour afficher la réponse du contrat\n                console.log(\"Contrat Response:\", result);\n                // Vérifier si les données attendues sont présentes dans la réponse\n                // Mettre à jour l'état des posts dans le composant\n                const newPosts = result.postIds.map((postId, index)=>({\n                        postId: Number(postId),\n                        content: result.contents[index],\n                        author: result.authors[index],\n                        likeCount: Number(result.likeCounts[index])\n                    }));\n                console.log(newPosts);\n                setPosts(newPosts);\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des posts depuis la blockchain :\", error);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Appeler la fonction getAllPosts au chargement du composant\n        getAllPosts();\n    }, []);\n    const onSubmit = async (values)=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                // Appeler la fonction createPost du smart contrat\n                await contract.methods.createPost(values.content).send({\n                    from: userAddress\n                });\n                getAllPosts();\n                // Réinitialiser le formulaire\n                reset();\n                console.log(\"Post ajout\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'ajout du post sur la blockchain :\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head-text text-left\",\n                children: \"Accueil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        children: \"Contenu du Post:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 5,\n                        id: \"post\",\n                        className: \"text-black bg-light-2 h-40 w-full\",\n                        ...register(\"content\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"gap-10 bg-primary-500 w-full\",\n                        children: \"Ajouter un Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-dark-2 mt-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-dark-2 border shadow p-5 text-xl text-light-2 font-semibold\",\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-primary-500 p-1 rounded-b-lg border shadow flex flex-row flex-wrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 text-center text-xl text-black font-semibold\",\n                                    children: \"Like\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 border-l-4 border-r- text-center text-xl text-black font-semibold\",\n                                    children: \"Share\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/3 hover:bg-light-2 border-l-4 text-center text-xl text-black font-semibold\",\n                                    children: \"Comment\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, post.postId, true, {\n                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(Home, \"9qQ3+dMsvocfuJcovIdLNKV4HPs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUErQjs7Ozs7Ozs7Ozs7O1lBTWxFdkMsTUFBTWtCLEdBQUcsQ0FBQyxDQUFDOEIscUJBQ1IsOERBQUNDO29CQUFzQlYsV0FBVTs7c0NBQzdCLDhEQUFDVTs0QkFBSVYsV0FBVTtzQ0FBa0VTLEtBQUsxQixPQUFPOzs7Ozs7c0NBQzdGLDhEQUFDMkI7NEJBQUlWLFdBQVU7OzhDQUVQLDhEQUFDVTtvQ0FBSVYsV0FBVTs4Q0FBc0U7Ozs7Ozs4Q0FDckYsOERBQUNVO29DQUNHVixXQUFVOzhDQUEyRjs7Ozs7OzhDQUV6Ryw4REFBQ1U7b0NBQ0dWLFdBQVU7OENBQWlGOzs7Ozs7Ozs7Ozs7O21CQVRqR1MsS0FBSzdCLE1BQU07Ozs7Ozs7QUFnQnJDO0dBbEdNdkI7O1FBQ3dDSixvREFBT0E7OztLQUQvQ0k7QUFvR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb290KS9wYWdlLnRzeD9mYzdmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIkAvY29uc3RhbnRzL2dsb2JhbFwiO1xuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gXCJAL2NvbnN0YW50cy9jb250cmFjdEFCSVwiO1xuXG5cblxuaW50ZXJmYWNlIFBvc3Qge1xuICAgIHBvc3RJZDogbnVtYmVyO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBsaWtlQ291bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENvbnRyYWN0UmVzcG9uc2Uge1xuICAgIHBvc3RJZHM6IG51bWJlcltdO1xuICAgIGNvbnRlbnRzOiBzdHJpbmdbXTtcbiAgICBhdXRob3JzOiBzdHJpbmdbXTtcbiAgICBsaWtlQ291bnRzOiBudW1iZXJbXTtcbn1cblxuaW50ZXJmYWNlIEZvcm1WYWx1ZXMge1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPigpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gUmVhY3QudXNlU3RhdGU8UG9zdFtdPihbXSk7XG5cbiAgICBjb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbGVyIGxhIGZvbmN0aW9uIGdldEFsbFBvc3RzIGR1IHNtYXJ0IGNvbnRyYXRcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IENvbnRyYWN0UmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEFsbFBvc3RzKCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXogZGVzIGxvZ3MgcG91ciBhZmZpY2hlciBsYSByw6lwb25zZSBkdSBjb250cmF0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXQgUmVzcG9uc2U6JywgcmVzdWx0KTtcblxuICAgICAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZXMgZG9ubsOpZXMgYXR0ZW5kdWVzIHNvbnQgcHLDqXNlbnRlcyBkYW5zIGxhIHLDqXBvbnNlXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkZXMgcG9zdHMgZGFucyBsZSBjb21wb3NhbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zdHM6IFBvc3RbXSA9IHJlc3VsdC5wb3N0SWRzLm1hcCgocG9zdElkLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZDogTnVtYmVyKHBvc3RJZCksICAvLyBDb252ZXJzaW9uIGR1IGJpZ2ludCBlbiBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5jb250ZW50c1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHJlc3VsdC5hdXRob3JzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VDb3VudDogTnVtYmVyKHJlc3VsdC5saWtlQ291bnRzW2luZGV4XSksXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UG9zdHMpXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKG5ld1Bvc3RzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01ldGFNYXNrIG5cXCdlc3QgcGFzIGluc3RhbGzDqScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIHBvc3RzIGRlcHVpcyBsYSBibG9ja2NoYWluIDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBBcHBlbGVyIGxhIGZvbmN0aW9uIGdldEFsbFBvc3RzIGF1IGNoYXJnZW1lbnQgZHUgY29tcG9zYW50XG4gICAgICAgIGdldEFsbFBvc3RzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8Rm9ybVZhbHVlcz4gPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWRkcmVzcyA9IGFjY291bnRzWzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZWxlciBsYSBmb25jdGlvbiBjcmVhdGVQb3N0IGR1IHNtYXJ0IGNvbnRyYXRcbiAgICAgICAgICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLmNyZWF0ZVBvc3QodmFsdWVzLmNvbnRlbnQpLnNlbmQoeyBmcm9tOiB1c2VyQWRkcmVzcyB9KTtcblxuICAgICAgICAgICAgICAgIGdldEFsbFBvc3RzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSw6lpbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3N0IGFqb3V0w6kgYXZlYyBzdWNjw6hzIHN1ciBsYSBibG9ja2NoYWluIScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZXRhTWFzayBuXFwnZXN0IHBhcyBpbnN0YWxsw6knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBkdSBwb3N0IHN1ciBsYSBibG9ja2NoYWluIDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkLXRleHQgdGV4dC1sZWZ0XCI+QWNjdWVpbDwvaDE+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIj5Db250ZW51IGR1IFBvc3Q6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz17NX0gaWQ9XCJwb3N0XCIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBiZy1saWdodC0yIGgtNDAgdy1mdWxsXCIgey4uLnJlZ2lzdGVyKCdjb250ZW50Jyl9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZ2FwLTEwIGJnLXByaW1hcnktNTAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICBBam91dGVyIHVuIFBvc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgey8qIEFmZmljaGVyIGxhIGxpc3RlIGRlcyBwb3N0cyAqL31cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5wb3N0SWR9IGNsYXNzTmFtZT1cImJnLWRhcmstMiBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFyay0yIGJvcmRlciBzaGFkb3cgcC01IHRleHQteGwgdGV4dC1saWdodC0yIGZvbnQtc2VtaWJvbGRcIj57cG9zdC5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnktNTAwIHAtMSByb3VuZGVkLWItbGcgYm9yZGVyIHNoYWRvdyBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBob3ZlcjpiZy1saWdodC0yIHRleHQtY2VudGVyIHRleHQteGwgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+TGlrZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgaG92ZXI6YmctbGlnaHQtMiBib3JkZXItbC00IGJvcmRlci1yLSB0ZXh0LWNlbnRlciB0ZXh0LXhsIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZFwiPlNoYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyBob3ZlcjpiZy1saWdodC0yIGJvcmRlci1sLTQgdGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGRcIj5Db21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIldlYjMiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsIkhvbWUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwicG9zdHMiLCJzZXRQb3N0cyIsInVzZVN0YXRlIiwiZ2V0QWxsUG9zdHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjMiLCJlbmFibGUiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwicmVzdWx0IiwibWV0aG9kcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwibmV3UG9zdHMiLCJwb3N0SWRzIiwibWFwIiwicG9zdElkIiwiaW5kZXgiLCJOdW1iZXIiLCJjb250ZW50IiwiY29udGVudHMiLCJhdXRob3IiLCJhdXRob3JzIiwibGlrZUNvdW50IiwibGlrZUNvdW50cyIsImVycm9yIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJhY2NvdW50cyIsImdldEFjY291bnRzIiwidXNlckFkZHJlc3MiLCJjcmVhdGVQb3N0Iiwic2VuZCIsImZyb20iLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJ0ZXh0YXJlYSIsInJvd3MiLCJpZCIsImJ1dHRvbiIsInR5cGUiLCJwb3N0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/page.tsx\n"));

/***/ })

});