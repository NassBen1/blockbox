"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/web3-providers-ws";
exports.ids = ["vendor-chunks/web3-providers-ws"];
exports.modules = {

/***/ "(ssr)/./node_modules/web3-providers-ws/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/web3-providers-ws/lib/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebSocketProvider: () => (/* binding */ WebSocketProvider),\n/* harmony export */   \"default\": () => (/* binding */ WebSocketProvider)\n/* harmony export */ });\n/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-ws */ \"(ssr)/./node_modules/isomorphic-ws/node.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-utils */ \"(ssr)/./node_modules/web3-utils/lib/esm/index.js\");\n/* harmony import */ var web3_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3-errors */ \"(ssr)/./node_modules/web3-errors/lib/esm/index.js\");\n/*\nThis file is part of web3.js.\n\nweb3.js is free software: you can redistribute it and/or modify\nit under the terms of the GNU Lesser General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nweb3.js is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Lesser General Public License for more details.\n\nYou should have received a copy of the GNU Lesser General Public License\nalong with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/ \n\n\n/**\n * Use WebSocketProvider to connect to a Node using a WebSocket connection, i.e. over the `ws` or `wss` protocol.\n *\n * @example\n * ```ts\n * const provider = new WebSocketProvider(\n * \t\t`ws://localhost:8545`,\n * \t\t{\n * \t\t\theaders: {\n * \t\t\t\t// to provide the API key if the Node requires the key to be inside the `headers` for example:\n * \t\t\t\t'x-api-key': '<Api key>',\n * \t\t\t},\n * \t\t},\n * \t\t{\n * \t\t\tdelay: 500,\n * \t\t\tautoReconnect: true,\n * \t\t\tmaxAttempts: 10,\n * \t\t},\n * \t);\n * ```\n *\n * The second and the third parameters are both optional. And you can for example, the second parameter could be an empty object or undefined.\n *  * @example\n * ```ts\n * const provider = new WebSocketProvider(\n * \t\t`ws://localhost:8545`,\n * \t\t{},\n * \t\t{\n * \t\t\tdelay: 500,\n * \t\t\tautoReconnect: true,\n * \t\t\tmaxAttempts: 10,\n * \t\t},\n * \t);\n * ```\n */ class WebSocketProvider extends web3_utils__WEBPACK_IMPORTED_MODULE_1__.SocketProvider {\n    /**\n     * This is a class used for Web Socket connections. It extends the abstract class SocketProvider {@link SocketProvider} that extends the EIP-1193 provider {@link EIP1193Provider}.\n     * @param socketPath - The path to the Web Socket.\n     * @param socketOptions - The options for the Web Socket client.\n     * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}\n     */ // this constructor is to specify the type for `socketOptions` for a better intellisense.\n    // eslint-disable-next-line no-useless-constructor\n    constructor(socketPath, socketOptions, reconnectOptions){\n        super(socketPath, socketOptions, reconnectOptions);\n    }\n    // eslint-disable-next-line class-methods-use-this\n    _validateProviderPath(providerUrl) {\n        return typeof providerUrl === \"string\" ? /^ws(s)?:\\/\\//i.test(providerUrl) : false;\n    }\n    getStatus() {\n        if (this._socketConnection && !(0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.isNullish)(this._socketConnection)) {\n            switch(this._socketConnection.readyState){\n                case this._socketConnection.CONNECTING:\n                    {\n                        return \"connecting\";\n                    }\n                case this._socketConnection.OPEN:\n                    {\n                        return \"connected\";\n                    }\n                default:\n                    {\n                        return \"disconnected\";\n                    }\n            }\n        }\n        return \"disconnected\";\n    }\n    _openSocketConnection() {\n        this._socketConnection = new isomorphic_ws__WEBPACK_IMPORTED_MODULE_0__(this._socketPath, undefined, this._socketOptions && Object.keys(this._socketOptions).length === 0 ? undefined : this._socketOptions);\n    }\n    _closeSocketConnection(code, data) {\n        var _a;\n        (_a = this._socketConnection) === null || _a === void 0 ? void 0 : _a.close(code, data);\n    }\n    _sendToSocket(payload) {\n        var _a;\n        if (this.getStatus() === \"disconnected\") {\n            throw new web3_errors__WEBPACK_IMPORTED_MODULE_2__.ConnectionNotOpenError();\n        }\n        (_a = this._socketConnection) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(payload));\n    }\n    _parseResponses(event) {\n        return this.chunkResponseParser.parseResponse(event.data);\n    }\n    _addSocketListeners() {\n        var _a, _b, _c, _d;\n        (_a = this._socketConnection) === null || _a === void 0 ? void 0 : _a.addEventListener(\"open\", this._onOpenHandler);\n        (_b = this._socketConnection) === null || _b === void 0 ? void 0 : _b.addEventListener(\"message\", this._onMessageHandler);\n        (_c = this._socketConnection) === null || _c === void 0 ? void 0 : _c.addEventListener(\"close\", (e)=>this._onCloseHandler(e));\n        (_d = this._socketConnection) === null || _d === void 0 ? void 0 : _d.addEventListener(\"error\", this._onErrorHandler);\n    }\n    _removeSocketListeners() {\n        var _a, _b, _c;\n        (_a = this._socketConnection) === null || _a === void 0 ? void 0 : _a.removeEventListener(\"message\", this._onMessageHandler);\n        (_b = this._socketConnection) === null || _b === void 0 ? void 0 : _b.removeEventListener(\"open\", this._onOpenHandler);\n        (_c = this._socketConnection) === null || _c === void 0 ? void 0 : _c.removeEventListener(\"close\", this._onCloseHandler);\n    // note: we intentionally keep the error event listener to be able to emit it in case an error happens when closing the connection\n    }\n    _onCloseEvent(event) {\n        var _a;\n        if (this._reconnectOptions.autoReconnect && (![\n            1000,\n            1001\n        ].includes(event.code) || !event.wasClean)) {\n            this._reconnect();\n            return;\n        }\n        this._clearQueues(event);\n        this._removeSocketListeners();\n        this._onDisconnect(event.code, event.reason);\n        // disconnect was successful and can safely remove error listener\n        (_a = this._socketConnection) === null || _a === void 0 ? void 0 : _a.removeEventListener(\"error\", this._onErrorHandler);\n    }\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2ViMy1wcm92aWRlcnMtd3MvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxHQUNzQztBQUNpQjtBQUNGO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0NDLEdBQ2MsTUFBTUksMEJBQTBCRixzREFBY0E7SUFDekQ7Ozs7O0tBS0MsR0FDRCx5RkFBeUY7SUFDekYsa0RBQWtEO0lBQ2xERyxZQUFZQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUU7UUFDckQsS0FBSyxDQUFDRixZQUFZQyxlQUFlQztJQUNyQztJQUNBLGtEQUFrRDtJQUNsREMsc0JBQXNCQyxXQUFXLEVBQUU7UUFDL0IsT0FBTyxPQUFPQSxnQkFBZ0IsV0FBVyxnQkFBZ0JDLElBQUksQ0FBQ0QsZUFBZTtJQUNqRjtJQUNBRSxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUNDLGlCQUFpQixJQUFJLENBQUNaLHFEQUFTQSxDQUFDLElBQUksQ0FBQ1ksaUJBQWlCLEdBQUc7WUFDOUQsT0FBUSxJQUFJLENBQUNBLGlCQUFpQixDQUFDQyxVQUFVO2dCQUNyQyxLQUFLLElBQUksQ0FBQ0QsaUJBQWlCLENBQUNFLFVBQVU7b0JBQUU7d0JBQ3BDLE9BQU87b0JBQ1g7Z0JBQ0EsS0FBSyxJQUFJLENBQUNGLGlCQUFpQixDQUFDRyxJQUFJO29CQUFFO3dCQUM5QixPQUFPO29CQUNYO2dCQUNBO29CQUFTO3dCQUNMLE9BQU87b0JBQ1g7WUFDSjtRQUNKO1FBQ0EsT0FBTztJQUNYO0lBQ0FDLHdCQUF3QjtRQUNwQixJQUFJLENBQUNKLGlCQUFpQixHQUFHLElBQUliLDBDQUFTQSxDQUFDLElBQUksQ0FBQ2tCLFdBQVcsRUFBRUMsV0FBVyxJQUFJLENBQUNDLGNBQWMsSUFBSUMsT0FBT0MsSUFBSSxDQUFDLElBQUksQ0FBQ0YsY0FBYyxFQUFFRyxNQUFNLEtBQUssSUFDaklK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Q0FBQyxTQUFTLElBQUksQ0FBQ0YsZUFBZTtJQUMzSDtBQUNKO0FBQzZCLENBQzdCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrYm94Ly4vbm9kZV9tb2R1bGVzL3dlYjMtcHJvdmlkZXJzLXdzL2xpYi9lc20vaW5kZXguanM/ODY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxud2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG5pdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbnRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4oYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG53ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG5idXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbllvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnaXNvbW9ycGhpYy13cyc7XG5pbXBvcnQgeyBpc051bGxpc2gsIFNvY2tldFByb3ZpZGVyIH0gZnJvbSAnd2ViMy11dGlscyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uTm90T3BlbkVycm9yIH0gZnJvbSAnd2ViMy1lcnJvcnMnO1xuLyoqXG4gKiBVc2UgV2ViU29ja2V0UHJvdmlkZXIgdG8gY29ubmVjdCB0byBhIE5vZGUgdXNpbmcgYSBXZWJTb2NrZXQgY29ubmVjdGlvbiwgaS5lLiBvdmVyIHRoZSBgd3NgIG9yIGB3c3NgIHByb3RvY29sLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViU29ja2V0UHJvdmlkZXIoXG4gKiBcdFx0YHdzOi8vbG9jYWxob3N0Ojg1NDVgLFxuICogXHRcdHtcbiAqIFx0XHRcdGhlYWRlcnM6IHtcbiAqIFx0XHRcdFx0Ly8gdG8gcHJvdmlkZSB0aGUgQVBJIGtleSBpZiB0aGUgTm9kZSByZXF1aXJlcyB0aGUga2V5IHRvIGJlIGluc2lkZSB0aGUgYGhlYWRlcnNgIGZvciBleGFtcGxlOlxuICogXHRcdFx0XHQneC1hcGkta2V5JzogJzxBcGkga2V5PicsXG4gKiBcdFx0XHR9LFxuICogXHRcdH0sXG4gKiBcdFx0e1xuICogXHRcdFx0ZGVsYXk6IDUwMCxcbiAqIFx0XHRcdGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gKiBcdFx0XHRtYXhBdHRlbXB0czogMTAsXG4gKiBcdFx0fSxcbiAqIFx0KTtcbiAqIGBgYFxuICpcbiAqIFRoZSBzZWNvbmQgYW5kIHRoZSB0aGlyZCBwYXJhbWV0ZXJzIGFyZSBib3RoIG9wdGlvbmFsLiBBbmQgeW91IGNhbiBmb3IgZXhhbXBsZSwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgY291bGQgYmUgYW4gZW1wdHkgb2JqZWN0IG9yIHVuZGVmaW5lZC5cbiAqICAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViU29ja2V0UHJvdmlkZXIoXG4gKiBcdFx0YHdzOi8vbG9jYWxob3N0Ojg1NDVgLFxuICogXHRcdHt9LFxuICogXHRcdHtcbiAqIFx0XHRcdGRlbGF5OiA1MDAsXG4gKiBcdFx0XHRhdXRvUmVjb25uZWN0OiB0cnVlLFxuICogXHRcdFx0bWF4QXR0ZW1wdHM6IDEwLFxuICogXHRcdH0sXG4gKiBcdCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU29ja2V0UHJvdmlkZXIgZXh0ZW5kcyBTb2NrZXRQcm92aWRlciB7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIGNsYXNzIHVzZWQgZm9yIFdlYiBTb2NrZXQgY29ubmVjdGlvbnMuIEl0IGV4dGVuZHMgdGhlIGFic3RyYWN0IGNsYXNzIFNvY2tldFByb3ZpZGVyIHtAbGluayBTb2NrZXRQcm92aWRlcn0gdGhhdCBleHRlbmRzIHRoZSBFSVAtMTE5MyBwcm92aWRlciB7QGxpbmsgRUlQMTE5M1Byb3ZpZGVyfS5cbiAgICAgKiBAcGFyYW0gc29ja2V0UGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBXZWIgU29ja2V0LlxuICAgICAqIEBwYXJhbSBzb2NrZXRPcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBXZWIgU29ja2V0IGNsaWVudC5cbiAgICAgKiBAcGFyYW0gcmVjb25uZWN0T3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc29ja2V0IHJlY29ubmVjdGlvbiB7QGxpbmsgUmVjb25uZWN0T3B0aW9uc31cbiAgICAgKi9cbiAgICAvLyB0aGlzIGNvbnN0cnVjdG9yIGlzIHRvIHNwZWNpZnkgdGhlIHR5cGUgZm9yIGBzb2NrZXRPcHRpb25zYCBmb3IgYSBiZXR0ZXIgaW50ZWxsaXNlbnNlLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3Ioc29ja2V0UGF0aCwgc29ja2V0T3B0aW9ucywgcmVjb25uZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihzb2NrZXRQYXRoLCBzb2NrZXRPcHRpb25zLCByZWNvbm5lY3RPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBfdmFsaWRhdGVQcm92aWRlclBhdGgocHJvdmlkZXJVcmwpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm92aWRlclVybCA9PT0gJ3N0cmluZycgPyAvXndzKHMpPzpcXC9cXC8vaS50ZXN0KHByb3ZpZGVyVXJsKSA6IGZhbHNlO1xuICAgIH1cbiAgICBnZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb2NrZXRDb25uZWN0aW9uICYmICFpc051bGxpc2godGhpcy5fc29ja2V0Q29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc29ja2V0Q29ubmVjdGlvbi5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9zb2NrZXRDb25uZWN0aW9uLkNPTk5FQ1RJTkc6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb25uZWN0aW5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9zb2NrZXRDb25uZWN0aW9uLk9QRU46IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb25uZWN0ZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGlzY29ubmVjdGVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdkaXNjb25uZWN0ZWQnO1xuICAgIH1cbiAgICBfb3BlblNvY2tldENvbm5lY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3NvY2tldENvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHRoaXMuX3NvY2tldFBhdGgsIHVuZGVmaW5lZCwgdGhpcy5fc29ja2V0T3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLl9zb2NrZXRPcHRpb25zKS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHRoaXMuX3NvY2tldE9wdGlvbnMpO1xuICAgIH1cbiAgICBfY2xvc2VTb2NrZXRDb25uZWN0aW9uKGNvZGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9zb2NrZXRDb25uZWN0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvc2UoY29kZSwgZGF0YSk7XG4gICAgfVxuICAgIF9zZW5kVG9Tb2NrZXQocGF5bG9hZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLmdldFN0YXR1cygpID09PSAnZGlzY29ubmVjdGVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbm5lY3Rpb25Ob3RPcGVuRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLl9zb2NrZXRDb25uZWN0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG4gICAgfVxuICAgIF9wYXJzZVJlc3BvbnNlcyhldmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaHVua1Jlc3BvbnNlUGFyc2VyLnBhcnNlUmVzcG9uc2UoZXZlbnQuZGF0YSk7XG4gICAgfVxuICAgIF9hZGRTb2NrZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgKF9hID0gdGhpcy5fc29ja2V0Q29ubmVjdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9vbk9wZW5IYW5kbGVyKTtcbiAgICAgICAgKF9iID0gdGhpcy5fc29ja2V0Q29ubmVjdGlvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbk1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgKF9jID0gdGhpcy5fc29ja2V0Q29ubmVjdGlvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgZSA9PiB0aGlzLl9vbkNsb3NlSGFuZGxlcihlKSk7XG4gICAgICAgIChfZCA9IHRoaXMuX3NvY2tldENvbm5lY3Rpb24pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX29uRXJyb3JIYW5kbGVyKTtcbiAgICB9XG4gICAgX3JlbW92ZVNvY2tldExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIChfYSA9IHRoaXMuX3NvY2tldENvbm5lY3Rpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25NZXNzYWdlSGFuZGxlcik7XG4gICAgICAgIChfYiA9IHRoaXMuX3NvY2tldENvbm5lY3Rpb24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5fb25PcGVuSGFuZGxlcik7XG4gICAgICAgIChfYyA9IHRoaXMuX3NvY2tldENvbm5lY3Rpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX29uQ2xvc2VIYW5kbGVyKTtcbiAgICAgICAgLy8gbm90ZTogd2UgaW50ZW50aW9uYWxseSBrZWVwIHRoZSBlcnJvciBldmVudCBsaXN0ZW5lciB0byBiZSBhYmxlIHRvIGVtaXQgaXQgaW4gY2FzZSBhbiBlcnJvciBoYXBwZW5zIHdoZW4gY2xvc2luZyB0aGUgY29ubmVjdGlvblxuICAgIH1cbiAgICBfb25DbG9zZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdE9wdGlvbnMuYXV0b1JlY29ubmVjdCAmJlxuICAgICAgICAgICAgKCFbMTAwMCwgMTAwMV0uaW5jbHVkZXMoZXZlbnQuY29kZSkgfHwgIWV2ZW50Lndhc0NsZWFuKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYXJRdWV1ZXMoZXZlbnQpO1xuICAgICAgICB0aGlzLl9yZW1vdmVTb2NrZXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fb25EaXNjb25uZWN0KGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbik7XG4gICAgICAgIC8vIGRpc2Nvbm5lY3Qgd2FzIHN1Y2Nlc3NmdWwgYW5kIGNhbiBzYWZlbHkgcmVtb3ZlIGVycm9yIGxpc3RlbmVyXG4gICAgICAgIChfYSA9IHRoaXMuX3NvY2tldENvbm5lY3Rpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX29uRXJyb3JIYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgeyBXZWJTb2NrZXRQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIldlYlNvY2tldCIsImlzTnVsbGlzaCIsIlNvY2tldFByb3ZpZGVyIiwiQ29ubmVjdGlvbk5vdE9wZW5FcnJvciIsIldlYlNvY2tldFByb3ZpZGVyIiwiY29uc3RydWN0b3IiLCJzb2NrZXRQYXRoIiwic29ja2V0T3B0aW9ucyIsInJlY29ubmVjdE9wdGlvbnMiLCJfdmFsaWRhdGVQcm92aWRlclBhdGgiLCJwcm92aWRlclVybCIsInRlc3QiLCJnZXRTdGF0dXMiLCJfc29ja2V0Q29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJDT05ORUNUSU5HIiwiT1BFTiIsIl9vcGVuU29ja2V0Q29ubmVjdGlvbiIsIl9zb2NrZXRQYXRoIiwidW5kZWZpbmVkIiwiX3NvY2tldE9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiX2Nsb3NlU29ja2V0Q29ubmVjdGlvbiIsImNvZGUiLCJkYXRhIiwiX2EiLCJjbG9zZSIsIl9zZW5kVG9Tb2NrZXQiLCJwYXlsb2FkIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfcGFyc2VSZXNwb25zZXMiLCJldmVudCIsImNodW5rUmVzcG9uc2VQYXJzZXIiLCJwYXJzZVJlc3BvbnNlIiwiX2FkZFNvY2tldExpc3RlbmVycyIsIl9iIiwiX2MiLCJfZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25PcGVuSGFuZGxlciIsIl9vbk1lc3NhZ2VIYW5kbGVyIiwiZSIsIl9vbkNsb3NlSGFuZGxlciIsIl9vbkVycm9ySGFuZGxlciIsIl9yZW1vdmVTb2NrZXRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX29uQ2xvc2VFdmVudCIsIl9yZWNvbm5lY3RPcHRpb25zIiwiYXV0b1JlY29ubmVjdCIsImluY2x1ZGVzIiwid2FzQ2xlYW4iLCJfcmVjb25uZWN0IiwiX2NsZWFyUXVldWVzIiwiX29uRGlzY29ubmVjdCIsInJlYXNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/web3-providers-ws/lib/esm/index.js\n");

/***/ })

};
;