"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\nconst { chains, publicClient, webSocketPublicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.zora,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.sepolia,\n    ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === \"true\" ? [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli\n    ] : []\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"buymeacrypto\",\n    projectId: \"18c4fce12d591123893a43169198ebbe\",\n    chains\n});\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient,\n    webSocketPublicClient\n});\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        config: wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.lightTheme)({\n                accentColor: \"#828282\",\n                accentColorForeground: \"white\",\n                fontStack: \"system\",\n                overlayBlur: \"small\"\n            }),\n            modalSize: \"compact\",\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/muaadhm/frontend/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/muaadhm/frontend/pages/_app.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/muaadhm/frontend/pages/_app.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1k7QUFNWDtBQUVtQztBQVM3QztBQUNrQztBQUV4RCxNQUFNLEVBQUVjLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsRUFBRSxHQUFHYixzREFBZUEsQ0FDckU7SUFDRUssaURBQU9BO0lBQ1BFLGlEQUFPQTtJQUNQRCxrREFBUUE7SUFDUkgsa0RBQVFBO0lBQ1JLLDhDQUFJQTtJQUNKSixnREFBTUE7SUFDTkssaURBQU9BO09BQ0hLLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsMkJBQTJCLEtBQUssU0FBUztRQUFDWixnREFBTUE7S0FBQyxHQUFHLEVBQUU7Q0FDdkUsRUFDRDtJQUFDTSxzRUFBY0E7Q0FBRztBQUdwQixNQUFNLEVBQUVPLFVBQVUsRUFBRSxHQUFHcEIseUVBQWlCQSxDQUFDO0lBQ3ZDcUIsU0FBUztJQUNUQyxXQUFXO0lBQ1hSO0FBQ0Y7QUFFQSxNQUFNUyxjQUFjbkIsbURBQVlBLENBQUM7SUFDL0JvQixhQUFhO0lBQ2JKO0lBQ0FMO0lBQ0FDO0FBQ0Y7QUFFQSxTQUFTUyxNQUFNLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDO0lBQ2IscUJBQ0UsOERBQUN0Qiw4Q0FBV0E7UUFBQ3VCLFFBQVFMO2tCQUNuQiw0RUFBQ3RCLHNFQUFrQkE7WUFDakI0QixPQUFPM0Isa0VBQVVBLENBQUM7Z0JBQ2hCNEIsYUFBYTtnQkFDYkMsdUJBQXVCO2dCQUN2QkMsV0FBVztnQkFDWEMsYUFBYTtZQUNmO1lBQ0FDLFdBQVU7WUFDVnBCLFFBQVFBO3NCQUNSLDRFQUFDWTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0tBaEJTRjtBQWtCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWUsXG4gIGxpZ2h0VGhlbWUsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZywgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7XG4gIGFyYml0cnVtLFxuICBnb2VybGksXG4gIG1haW5uZXQsXG4gIG9wdGltaXNtLFxuICBwb2x5Z29uLFxuICB6b3JhLFxuICBzZXBvbGlhLFxufSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5cbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQsIHdlYlNvY2tldFB1YmxpY0NsaWVudCB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbXG4gICAgbWFpbm5ldCxcbiAgICBwb2x5Z29uLFxuICAgIG9wdGltaXNtLFxuICAgIGFyYml0cnVtLFxuICAgIHpvcmEsXG4gICAgZ29lcmxpLFxuICAgIHNlcG9saWEsXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyA9PT0gXCJ0cnVlXCIgPyBbZ29lcmxpXSA6IFtdKSxcbiAgXSxcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogXCJidXltZWFjcnlwdG9cIixcbiAgcHJvamVjdElkOiBcIjE4YzRmY2UxMmQ1OTExMjM4OTNhNDMxNjkxOThlYmJlXCIsXG4gIGNoYWlucyxcbn0pO1xuXG5jb25zdCB3YWdtaUNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwdWJsaWNDbGllbnQsXG4gIHdlYlNvY2tldFB1YmxpY0NsaWVudCxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlclxuICAgICAgICB0aGVtZT17bGlnaHRUaGVtZSh7XG4gICAgICAgICAgYWNjZW50Q29sb3I6IFwiIzgyODI4MlwiLFxuICAgICAgICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGZvbnRTdGFjazogXCJzeXN0ZW1cIixcbiAgICAgICAgICBvdmVybGF5Qmx1cjogXCJzbWFsbFwiLFxuICAgICAgICB9KX1cbiAgICAgICAgbW9kYWxTaXplPVwiY29tcGFjdFwiXG4gICAgICAgIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJsaWdodFRoZW1lIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ29uZmlnIiwiV2FnbWlDb25maWciLCJhcmJpdHJ1bSIsImdvZXJsaSIsIm1haW5uZXQiLCJvcHRpbWlzbSIsInBvbHlnb24iLCJ6b3JhIiwic2Vwb2xpYSIsInB1YmxpY1Byb3ZpZGVyIiwiY2hhaW5zIiwicHVibGljQ2xpZW50Iiwid2ViU29ja2V0UHVibGljQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwicHJvamVjdElkIiwid2FnbWlDb25maWciLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIiwidGhlbWUiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsImZvbnRTdGFjayIsIm92ZXJsYXlCbHVyIiwibW9kYWxTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});