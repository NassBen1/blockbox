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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/global */ \"(app-pages-browser)/./constants/global.ts\");\n/* harmony import */ var _constants_contractABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/contractABI */ \"(app-pages-browser)/./constants/contractABI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { register, handleSubmit, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [posts, setPosts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const getAllPosts = async ()=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                // Appeler la fonction getAllPosts du smart contrat\n                const result = await contract.methods.getAllPosts().call();\n                // Mettre à jour l'état des posts dans le composant\n                const newPosts = result.postIds.map((postId, index)=>({\n                        postId,\n                        content: result.contents[index],\n                        author: result.authors[index],\n                        likeCount: result.likeCounts[index]\n                    }));\n                setPosts(newPosts);\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des posts depuis la blockchain :\", error);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Appeler la fonction getAllPosts au chargement du composant\n        getAllPosts();\n    }, []);\n    const onSubmit = async (values)=>{\n        try {\n            if (window.ethereum) {\n                const web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                const contract = new web3.eth.Contract(_constants_contractABI__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _constants_global__WEBPACK_IMPORTED_MODULE_3__.contractAddress);\n                const accounts = await web3.eth.getAccounts();\n                const userAddress = accounts[0];\n                // Appeler la fonction createPost du smart contrat\n                await contract.methods.createPost(values.content).send({\n                    from: userAddress\n                });\n                getAllPosts();\n                // Réinitialiser le formulaire\n                reset();\n                console.log(\"Post ajout\\xe9 avec succ\\xe8s sur la blockchain!\");\n            } else {\n                console.error(\"MetaMask n'est pas install\\xe9\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'ajout du post sur la blockchain :\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head-text text-left\",\n                children: \"Accueil\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"content\",\n                        children: \"Contenu du Post:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 5,\n                        id: \"post\",\n                        className: \"text-black bg-light-2 h-40 w-full\",\n                        ...register(\"content\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"gap-10 bg-primary-500 w-full\",\n                        children: \"Ajouter un Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-dark-2 mt-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-dark-2 border shadow p-5 text-xl text-light-2 font-semibold\",\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-primary-500 p-1 rounded-b-lg border shadow flex flex-row flex-wrap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, post.postId, true, {\n                    fileName: \"C:\\\\Users\\\\benna\\\\Desktop\\\\blockbox_blockchain\\\\app\\\\(root)\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(Home, \"9qQ3+dMsvocfuJcovIdLNKV4HPs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBa0VTLEtBQUs1QixPQUFPOzs7Ozs7c0NBQzdGLDhEQUFDNkI7NEJBQUlWLFdBQVU7Ozs7Ozs7bUJBRlRTLEtBQUs5QixNQUFNOzs7Ozs7O0FBU3JDO0dBckZNckI7O1FBQ3dDSixvREFBT0E7OztLQUQvQ0k7QUF1Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb290KS9wYWdlLnRzeD9mYzdmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIkAvY29uc3RhbnRzL2dsb2JhbFwiO1xuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gXCJAL2NvbnN0YW50cy9jb250cmFjdEFCSVwiO1xuXG5cblxuaW50ZXJmYWNlIFBvc3Qge1xuICAgIHBvc3RJZDogbnVtYmVyO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBsaWtlQ291bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENvbnRyYWN0UmVzcG9uc2Uge1xuICAgIHBvc3RJZHM6IG51bWJlcltdO1xuICAgIGNvbnRlbnRzOiBzdHJpbmdbXTtcbiAgICBhdXRob3JzOiBzdHJpbmdbXTtcbiAgICBsaWtlQ291bnRzOiBudW1iZXJbXTtcbn1cblxuaW50ZXJmYWNlIEZvcm1WYWx1ZXMge1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPigpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gUmVhY3QudXNlU3RhdGU8UG9zdFtdPihbXSk7XG5cbiAgICBjb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbGVyIGxhIGZvbmN0aW9uIGdldEFsbFBvc3RzIGR1IHNtYXJ0IGNvbnRyYXRcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IENvbnRyYWN0UmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldEFsbFBvc3RzKCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkZXMgcG9zdHMgZGFucyBsZSBjb21wb3NhbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0czogUG9zdFtdID0gcmVzdWx0LnBvc3RJZHMubWFwKChwb3N0SWQsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5jb250ZW50c1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogcmVzdWx0LmF1dGhvcnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IHJlc3VsdC5saWtlQ291bnRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhuZXdQb3N0cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01ldGFNYXNrIG5cXCdlc3QgcGFzIGluc3RhbGzDqScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIHBvc3RzIGRlcHVpcyBsYSBibG9ja2NoYWluIDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gQXBwZWxlciBsYSBmb25jdGlvbiBnZXRBbGxQb3N0cyBhdSBjaGFyZ2VtZW50IGR1IGNvbXBvc2FudFxuICAgICAgICBnZXRBbGxQb3N0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZvcm1WYWx1ZXM+ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckFkZHJlc3MgPSBhY2NvdW50c1swXTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVsZXIgbGEgZm9uY3Rpb24gY3JlYXRlUG9zdCBkdSBzbWFydCBjb250cmF0XG4gICAgICAgICAgICAgICAgYXdhaXQgY29udHJhY3QubWV0aG9kcy5jcmVhdGVQb3N0KHZhbHVlcy5jb250ZW50KS5zZW5kKHsgZnJvbTogdXNlckFkZHJlc3MgfSk7XG5cbiAgICAgICAgICAgICAgICBnZXRBbGxQb3N0cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdCBham91dMOpIGF2ZWMgc3VjY8OocyBzdXIgbGEgYmxvY2tjaGFpbiEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWV0YU1hc2sgblxcJ2VzdCBwYXMgaW5zdGFsbMOpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgcG9zdCBzdXIgbGEgYmxvY2tjaGFpbiA6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZC10ZXh0IHRleHQtbGVmdFwiPkFjY3VlaWw8L2gxPlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q29udGVudSBkdSBQb3N0OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9ezV9IGlkPVwicG9zdFwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYmctbGlnaHQtMiBoLTQwIHctZnVsbFwiIHsuLi5yZWdpc3RlcignY29udGVudCcpfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImdhcC0xMCBiZy1wcmltYXJ5LTUwMCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgQWpvdXRlciB1biBQb3N0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIHsvKiBBZmZpY2hlciBsYSBsaXN0ZSBkZXMgcG9zdHMgKi99XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QucG9zdElkfSBjbGFzc05hbWU9XCJiZy1kYXJrLTIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmstMiBib3JkZXIgc2hhZG93IHAtNSB0ZXh0LXhsIHRleHQtbGlnaHQtMiBmb250LXNlbWlib2xkXCI+e3Bvc3QuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LTUwMCBwLTEgcm91bmRlZC1iLWxnIGJvcmRlciBzaGFkb3cgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJXZWIzIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJIb21lIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsImdldEFsbFBvc3RzIiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzIiwiZW5hYmxlIiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsInJlc3VsdCIsIm1ldGhvZHMiLCJjYWxsIiwibmV3UG9zdHMiLCJwb3N0SWRzIiwibWFwIiwicG9zdElkIiwiaW5kZXgiLCJjb250ZW50IiwiY29udGVudHMiLCJhdXRob3IiLCJhdXRob3JzIiwibGlrZUNvdW50IiwibGlrZUNvdW50cyIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidmFsdWVzIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsInVzZXJBZGRyZXNzIiwiY3JlYXRlUG9zdCIsInNlbmQiLCJmcm9tIiwibG9nIiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwidGV4dGFyZWEiLCJyb3dzIiwiaWQiLCJidXR0b24iLCJ0eXBlIiwicG9zdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/page.tsx\n"));

/***/ })

});