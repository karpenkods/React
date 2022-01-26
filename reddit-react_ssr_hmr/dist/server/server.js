/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Post_1 = __webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ./shared/NotFoundPage */ \"./src/shared/NotFoundPage/index.ts\");\r\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\" },\r\n                        react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\" },\r\n                        react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/posts\" },\r\n                        react_1.default.createElement(CardList_1.CardList, null)),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/:id\" },\r\n                        react_1.default.createElement(CardList_1.CardList, null),\r\n                        react_1.default.createElement(Post_1.Post, null)),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"*\" },\r\n                        react_1.default.createElement(NotFoundPage_1.NotFoundPage, null)))))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch((0, actions_1.meRequestAsync)());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading,\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar indexHtmlTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit-ReactJS</title>\\n  <link rel=\\\"shortcut icon\\\" href=\\\"https://i.redd.it/snoovatar/avatars/d80b552d-3f97-423c-b7d2-1b4180dcde4f.png\\\" type=\\\"image/x-icon\\\">\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n window.__token__ = '\" + token + \"'\\n  </script>\\n</head>\\n<body>\\n  <div id=\\\"react__root\\\">\" + content + \"</div>\\n  <div id=\\\"modal__root\\\"></div>\\n  <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\nexports.default = indexHtmlTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nvar indexHtmlTemplate_1 = __importDefault(__webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = (0, express_1.default)();\r\nvar PORT = process.env.PORT || 3000;\r\nvar AppElement = (0, react_1.createElement)(App_1.App);\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '_kEo1mgJa10hhLYCdR90pw', password: 'T7bL562g3V8-dsMY906OMhebpnzGkA' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexHtmlTemplate_1.default)((0, server_1.renderToString)(AppElement), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.get('*', function (req, res) {\r\n    res.send((0, indexHtmlTemplate_1.default)((0, server_1.renderToString)(AppElement)));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"Server started on http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardList/Card/card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\r\nfunction Card(props) {\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { title: props.title, author: props.author }),\r\n        react_1.default.createElement(Preview_1.Preview, { img: props.img }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ComplainButton/ComplainButton.tsx":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ComplainButton/ComplainButton.tsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ComplainButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar complainbutton_css_1 = __importDefault(__webpack_require__(/*! ./complainbutton.css */ \"./src/shared/CardList/Card/Controls/Actions/ComplainButton/complainbutton.css\"));\r\nfunction ComplainButton(props) {\r\n    return (react_1.default.createElement(\"button\", { className: complainbutton_css_1.default.complainButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.complain }),\r\n        react_1.default.createElement(\"span\", null, props.text)));\r\n}\r\nexports.ComplainButton = ComplainButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ComplainButton/ComplainButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ComplainButton/complainbutton.css":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ComplainButton/complainbutton.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"complainbutton__shareButton--39uVc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ComplainButton/complainbutton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ComplainButton/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ComplainButton/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ComplainButton */ \"./src/shared/CardList/Card/Controls/Actions/ComplainButton/ComplainButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ComplainButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),\r\n        react_1.default.createElement(\"span\", { className: sharebutton_css_1.default.shareNumber }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/sharebutton.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/sharebutton.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--22rc9\",\n\t\"shareNumber\": \"sharebutton__shareNumber--3KWJ-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"react\");\r\nvar react_3 = __webpack_require__(/*! react */ \"react\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.css\"));\r\nfunction CommentsButton(props) {\r\n    var _a = (0, react_3.useState)(false), isAnswerOpen = _a[0], setIsAnswerOpen = _a[1];\r\n    var _b = (0, react_3.useState)(props.author + \", ...\"), value = _b[0], setValue = _b[1];\r\n    var divRef = (0, react_2.useRef)(null);\r\n    var inputRef = (0, react_2.useRef)(null);\r\n    function handleSubmit(event) {\r\n        event === null || event === void 0 ? void 0 : event.preventDefault();\r\n    }\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, [isAnswerOpen]);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node &&\r\n                !((_a = divRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                setIsAnswerOpen(false);\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () {\r\n            document.removeEventListener(\"click\", handleClick);\r\n        };\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: commentsbutton_css_1.default.container, ref: divRef },\r\n        react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton, onClick: function () { return setIsAnswerOpen(true); } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.answer }),\r\n            react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber },\r\n                \" \",\r\n                props.text,\r\n                \" \")),\r\n        isAnswerOpen && (react_1.default.createElement(\"form\", { className: commentsbutton_css_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: commentsbutton_css_1.default.input, ref: inputRef, value: value, onChange: handleChange }),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentsbutton_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")))));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"commentsbutton__container--1dq__\",\n\t\"commentsButton\": \"commentsbutton__commentsButton---ATq-\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--23hwt\",\n\t\"form\": \"commentsbutton__form--2cWmc\",\n\t\"input\": \"commentsbutton__input--1RXo8\",\n\t\"button\": \"commentsbutton__button--3MAjZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardList/Card/Controls/controls.css\"));\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, \"666\"),\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.down },\r\n                react_1.default.createElement(\"svg\", { className: controls_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"button\", { className: controls_css_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.commentsNumber }, \"42\")),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.css\"));\r\nfunction KarmaCounter() {\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, \"234\"),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--PoEVK\",\n\t\"karmaValue\": \"karmacounter__karmaValue--2xpfq\",\n\t\"down\": \"karmacounter__down--3dPRJ\",\n\t\"up\": \"karmacounter__up--ta1wu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.css":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1-dWi\",\n\t\"actions\": \"controls__actions--ahe_O\",\n\t\"karmaCounter\": \"controls__karmaCounter--SvsM3\",\n\t\"karmaValue\": \"controls__karmaValue--GdJKQ\",\n\t\"commentsButton\": \"controls__commentsButton--290Nn\",\n\t\"commentsNumber\": \"controls__commentsNumber--352UI\",\n\t\"shareButton\": \"controls__shareButton--2becu\",\n\t\"saveButton\": \"controls__saveButton--z-wT4\",\n\t\"up\": \"controls__up--1nV0P\",\n\t\"down\": \"controls__down--2mx9d\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardList/Card/Menu/menu.css\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/index.ts\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(icons_1.MenuIcon, null)) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: \"555\" }),\r\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar CommentsIcon_1 = __webpack_require__(/*! ../../../../icons/CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ../../../../icons/ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ../../../../icons/SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\");\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.commentsShare },\r\n            react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, id: \"comments\", onClick: function () { return console.log(postId); } },\r\n                react_1.default.createElement(CommentsIcon_1.CommentsIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n            react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n            react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, id: \"share\", onClick: function () { return console.log(postId); } },\r\n                react_1.default.createElement(ShareIcon_1.ShareIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider })),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, id: \"block\", onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.save },\r\n            react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, id: \"save\", onClick: function () { return console.log(postId); } },\r\n                react_1.default.createElement(SaveIcon_1.SaveIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider })),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, id: \"warning\", onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--369x4\",\n\t\"menuItem\": \"menuitemslist__menuItem--21Jbd\",\n\t\"divider\": \"menuitemslist__divider--XUwph\",\n\t\"commentsShare\": \"menuitemslist__commentsShare--29CuR\",\n\t\"save\": \"menuitemslist__save--1SR1k\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/menu.css":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/menu.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--Kvuaj\",\n\t\"menuButton\": \"menu__menuButton--WhNZf\",\n\t\"dropdown\": \"menu__dropdown--po3RG\",\n\t\"closeButton\": \"menu__closeButton--J_Dx0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardList/Card/Preview/preview.css\"));\r\nfunction Preview(props) {\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: \"https://pic.rutube.ru/video/6f/3b/6f3b4cd30540e76465389128f8903798.jpg\", alt: \"img\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/preview.css":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/preview.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--2tbAa\",\n\t\"previewImg\": \"preview__previewImg--33yAl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/CreatedAt/CreatedAt.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/CreatedAt/CreatedAt.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CreatedAt = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar createdat_css_1 = __importDefault(__webpack_require__(/*! ./createdat.css */ \"./src/shared/CardList/Card/TextContent/CreatedAt/createdat.css\"));\r\nfunction CreatedAt(props) {\r\n    return (react_1.default.createElement(\"span\", { className: createdat_css_1.default.createdAt },\r\n        react_1.default.createElement(\"span\", { className: createdat_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n        props.text));\r\n}\r\nexports.CreatedAt = CreatedAt;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/CreatedAt/CreatedAt.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/CreatedAt/createdat.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/CreatedAt/createdat.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/CreatedAt/createdat.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/CreatedAt/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/CreatedAt/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardList/Card/TextContent/CreatedAt/CreatedAt.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/CreatedAt/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CreatedAt_1 = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardList/Card/TextContent/CreatedAt/index.ts\");\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardList/Card/TextContent/Title/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ./User */ \"./src/shared/CardList/Card/TextContent/User/index.ts\");\r\nfunction TextContent(props) {\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(User_1.User, { author: props.author }),\r\n            react_1.default.createElement(CreatedAt_1.CreatedAt, { text: \"4 часа назад\" })),\r\n        react_1.default.createElement(Title_1.Title, { title: props.title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/Title.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/Title.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardList/Card/TextContent/Title/title.css\"));\r\nfunction Title(props) {\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/1\", className: title_css_1.default.postLink }, props.title)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/title.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/title.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--8v9jP\",\n\t\"postLink\": \"title__postLink--2v4wW\",\n\t\"textContent\": \"title__textContent--1Jgwu\",\n\t\"userLink\": \"title__userLink--2xfrY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/User/User.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/User/User.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.User = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar user_css_1 = __importDefault(__webpack_require__(/*! ./user.css */ \"./src/shared/CardList/Card/TextContent/User/user.css\"));\r\nfunction User(props) {\r\n    return (react_1.default.createElement(\"div\", { className: user_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { className: user_css_1.default.avatar, src: \"https://i.imgur.com/0G2IJDr.png\", alt: \"avatar\" }),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: user_css_1.default.username }, props.author)));\r\n}\r\nexports.User = User;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/User/User.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/User/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/User/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./User */ \"./src/shared/CardList/Card/TextContent/User/User.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/User/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/User/user.css":
/*!************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/User/user.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"user__userBox--xib1L\",\n\t\"avatarBox\": \"user__avatarBox--2mdbl\",\n\t\"avatarImage\": \"user__avatarImage--2Frou\",\n\t\"username\": \"user__username--1hKHy\",\n\t\"userLink\": \"user__userLink--2AkGj\",\n\t\"avatar\": \"user__avatar--2hoQ0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/User/user.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textcontent.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/textcontent.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2_NpO\",\n\t\"metaData\": \"textcontent__metaData--KoG5L\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--3K2Y-\",\n\t\"userLink\": \"textcontent__userLink--1VRAZ\",\n\t\"avatar\": \"textcontent__avatar--1OzfI\",\n\t\"userName\": \"textcontent__userName--2UOFN\",\n\t\"createdAt\": \"textcontent__createdAt--3cP0I\",\n\t\"title\": \"textcontent__title--3rPFb\",\n\t\"postLink\": \"textcontent__postLink--3e0Gj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/card.css":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/card.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--1msO-\",\n\t\"textContent\": \"card__textContent--Nbh4J\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardList/Card/Card.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\r\nvar nanoid_1 = __webpack_require__(/*! nanoid */ \"nanoid\");\r\nfunction CardList() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\r\n    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];\r\n    var _c = (0, react_1.useState)(\"\"), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var _d = (0, react_1.useState)(\"\"), nextAfter = _d[0], setNextAfter = _d[1];\r\n    var _e = (0, react_1.useState)(0), flag = _e[0], setFlag = _e[1];\r\n    var _f = (0, react_1.useState)(false), isMoreBtnActive = _f[0], setIsMoreBtnActive = _f[1];\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    function load() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, after, children_1, error_1;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        if (flag === 3) {\r\n                            setLoading(false);\r\n                            setIsMoreBtnActive(true);\r\n                            setFlag(0);\r\n                            return [2 /*return*/];\r\n                        }\r\n                        setLoading(true);\r\n                        setErrorLoading(\"\");\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/best/\", {\r\n                                headers: { Authorization: \"bearer \" + token },\r\n                                params: {\r\n                                    after: nextAfter,\r\n                                },\r\n                            })];\r\n                    case 2:\r\n                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\r\n                        setFlag(function (prevNumber) { return prevNumber + 1; });\r\n                        setNextAfter(after);\r\n                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _b.sent();\r\n                        setErrorLoading(String(error_1));\r\n                        return [3 /*break*/, 4];\r\n                    case 4:\r\n                        setLoading(false);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting)\r\n                load();\r\n        }, {\r\n            rootMargin: \"100px\",\r\n        });\r\n        if (bottomOfList.current)\r\n            observer.observe(bottomOfList.current);\r\n        return function () {\r\n            if (bottomOfList.current)\r\n                observer.unobserve(bottomOfList.current);\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token]);\r\n    function handleMoreClick() {\r\n        setIsMoreBtnActive(false);\r\n        load();\r\n    }\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardsList },\r\n        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: (0, nanoid_1.nanoid)(), title: post.data.title, author: post.data.author, img: \"https://cdn.dribbble.com/users/1325623/screenshots/15987513/media/13cbbc7435daa0663c9714ef4a15643f.png?compress=1&resize=400x300\" })); }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\"),\r\n        isMoreBtnActive && (react_1.default.createElement(\"button\", { className: cardlist_css_1.default.more, onClick: handleMoreClick }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\")),\r\n        errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, errorLoading))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.css":
/*!******************************************!*\
  !*** ./src/shared/CardList/cardlist.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardlist__cardsList--1bRI1\",\n\t\"more\": \"cardlist__more--_NCCB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.css?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/CommentForm/Comments/index.ts\");\r\nfunction CommentForm(_a) {\r\n    var value = _a.value, onChange = _a.onChange, innerRef = _a.innerRef, touched = _a.touched, errors = _a.errors;\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(formik_1.Form, { className: commentform_css_1.default.form },\r\n            react_1.default.createElement(formik_1.Field, { component: \"textarea\", name: \"comment\", innerRef: innerRef, rows: 4, className: commentform_css_1.default.input, value: value, onChange: onChange }),\r\n            touched.comment && errors.comment && react_1.default.createElement(\"div\", null, errors.comment),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Comments_1.Comments, { name: \"Михаил Рогов\", created: \"1 час назад\", league: \"Лига юристов\", comment: \"Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.\" },\r\n                react_1.default.createElement(Comments_1.Comments, { name: \"Вика Салмина\", created: \"1 час назад\", league: \"Лига социологов\", comment: \"Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении.\" },\r\n                    react_1.default.createElement(Comments_1.Comments, { name: \"Зураб Желев\", created: \"1 час назад\", league: \"Лига политологов\", comment: \"А также диаграммы связей неоднозначны и будут функционально разнесены на независимые элементы. Следует отметить, что начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения.\" }))))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/Comments/Comments.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CommentForm/Comments/Comments.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ComplainButton_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/ComplainButton */ \"./src/shared/CardList/Card/Controls/Actions/ComplainButton/index.ts\");\r\nvar ShareButton_1 = __webpack_require__(/*! ../../CardList/Card/Controls/Actions/ShareButton */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ../../CardList/Card/Controls/CommentsButton */ \"./src/shared/CardList/Card/Controls/CommentsButton/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ../../CardList/Card/Controls/KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nvar CreatedAt_1 = __webpack_require__(/*! ../../CardList/Card/TextContent/CreatedAt */ \"./src/shared/CardList/Card/TextContent/CreatedAt/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardList/Card/TextContent/User */ \"./src/shared/CardList/Card/TextContent/User/index.ts\");\r\nvar comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/CommentForm/Comments/comments.css\"));\r\nfunction Comments(props) {\r\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.karmaContainer },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.karmaBorder })),\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.rightContainer },\r\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.rightUp },\r\n                react_1.default.createElement(User_1.User, { author: props.name }),\r\n                react_1.default.createElement(CreatedAt_1.CreatedAt, { text: props.created }),\r\n                react_1.default.createElement(\"p\", { className: comments_css_1.default.rightLeague }, props.league)),\r\n            react_1.default.createElement(\"p\", { className: comments_css_1.default.rightText }, props.comment),\r\n            react_1.default.createElement(\"div\", { className: comments_css_1.default.rightButtons },\r\n                react_1.default.createElement(CommentsButton_1.CommentsButton, { text: \"Ответить\", author: props.name }),\r\n                react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n                react_1.default.createElement(ComplainButton_1.ComplainButton, { text: \"Пожаловаться\" })),\r\n            props.children)));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/Comments/comments.css":
/*!******************************************************!*\
  !*** ./src/shared/CommentForm/Comments/comments.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"comments__container--aAzry\",\n\t\"karmaContainer\": \"comments__karmaContainer--JPUSG\",\n\t\"karmaBorder\": \"comments__karmaBorder--RVAAc\",\n\t\"rightUp\": \"comments__rightUp--3D3zs\",\n\t\"rightLeague\": \"comments__rightLeague--1vDKT\",\n\t\"rightText\": \"comments__rightText--1yU3S\",\n\t\"rightButtons\": \"comments__rightButtons--E5Sla\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/CommentForm/Comments/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentForm/Comments/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/CommentForm/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nfunction CommentFormContainer(_a) {\r\n    var userName = _a.userName;\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!!userName && !!ref.current) {\r\n            dispatch((0, reducer_1.updateComment)(userName + \", \"));\r\n            ref.current.focus();\r\n        }\r\n    }, [userName]);\r\n    function handleChange(setFieldValue) {\r\n        return function (event) {\r\n            dispatch((0, reducer_1.updateComment)(event.target.value));\r\n            setFieldValue(\"comment\", event.target.value);\r\n        };\r\n    }\r\n    function handleSubmit(values, actions) {\r\n        alert(JSON.stringify(values, null, 2));\r\n        actions.setSubmitting(false);\r\n    }\r\n    var initialValues = { comment: value };\r\n    var validate = function (values) {\r\n        var errors = {};\r\n        if (values.comment.length <= 3) {\r\n            errors.comment = \"Поле должнобыть более 3-х символов.\";\r\n        }\r\n        return errors;\r\n    };\r\n    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validate: validate, onSubmit: handleSubmit }, function (_a) {\r\n        var errors = _a.errors, touched = _a.touched, setFieldValue = _a.setFieldValue;\r\n        return (react_1.default.createElement(CommentForm_1.CommentForm, { innerRef: ref, value: value, onChange: handleChange(setFieldValue), errors: errors, touched: touched }));\r\n    }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar isMounted_1 = __webpack_require__(/*! ../../utils/react/isMounted */ \"./src/utils/react/isMounted.tsx\");\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    var isMounted = (0, isMounted_1.useIsMounted)()[0];\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () {\r\n        if (isMounted) {\r\n            isDropdownOpen ? onOpen() : onClose();\r\n        }\r\n    }, [isDropdownOpen]);\r\n    var node = typeof document !== \"undefined\"\r\n        ? document === null || document === void 0 ? void 0 : document.querySelector(\"#dropdown_root\")\r\n        : null;\r\n    if (!node)\r\n        return null;\r\n    var handleOpen = function () {\r\n        if (isOpen == undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen &&\r\n            react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n                react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.tsx\");\r\nfunction SearchBlock() {\r\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=_kEo1mgJa10hhLYCdR90pw&response_type=code&\\nstate=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement(\"img\", { src: \"https://i.redd.it/snoovatar/avatars/d80b552d-3f97-423c-b7d2-1b4180dcde4f.png\", alt: \"user avatar\", className: userblock_css_1.default.avatarImage })) : (react_1.default.createElement(icons_1.IconAnon, null))),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || \"Аноним\")))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sort block\");\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\");\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar CommentIcon_1 = __webpack_require__(/*! ../icons/CommentIcon */ \"./src/shared/icons/CommentIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ../icons/ComplainIcon */ \"./src/shared/icons/ComplainIcon.tsx\");\r\nvar HideIcon_1 = __webpack_require__(/*! ../icons/HideIcon */ \"./src/shared/icons/HideIcon.tsx\");\r\nvar MenuIcon_1 = __webpack_require__(/*! ../icons/MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ../icons/SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ../icons/ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\");\r\nvar AnswerIcon_1 = __webpack_require__(/*! ../icons/AnswerIcon */ \"./src/shared/icons/AnswerIcon.tsx\");\r\nexports.EIcons = {\r\n    comment: react_1.default.createElement(CommentIcon_1.CommentIcon, null),\r\n    complain: react_1.default.createElement(ComplainIcon_1.ComplainIcon, null),\r\n    hide: react_1.default.createElement(HideIcon_1.HideIcon, null),\r\n    menu: react_1.default.createElement(MenuIcon_1.MenuIcon, null),\r\n    save: react_1.default.createElement(SaveIcon_1.SaveIcon, null),\r\n    share: react_1.default.createElement(ShareIcon_1.ShareIcon, null),\r\n    answer: react_1.default.createElement(AnswerIcon_1.AnswerIcon, null)\r\n};\r\nfunction Icon(props) {\r\n    var name = props.name, _a = props.size, size = _a === void 0 ? 14 : _a;\r\n    var classes = (0, classnames_1.default)(icon_css_1.default.inline, icon_css_1.default[\"s\" + size]);\r\n    return (react_1.default.createElement(\"div\", { className: classes }, name));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"inline\": \"icon__inline--EUYtt\",\n\t\"s14\": \"icon__s14--m4nyp\",\n\t\"s16\": \"icon__s16--NYdak\",\n\t\"s20\": \"icon__s20--1h1Sg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/token/actions */ \"./src/store/token/actions.ts\");\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        dispatch((0, actions_1.saveToken)());\r\n    }, []);\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/NotFoundPage/NotFoundPage.tsx":
/*!**************************************************!*\
  !*** ./src/shared/NotFoundPage/NotFoundPage.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar notfoundpage_css_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.css */ \"./src/shared/NotFoundPage/notfoundpage.css\"));\r\nfunction NotFoundPage() {\r\n    return react_1.default.createElement(\"div\", { className: notfoundpage_css_1.default.container }, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\");\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFoundPage/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/NotFoundPage/index.ts":
/*!******************************************!*\
  !*** ./src/shared/NotFoundPage/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/NotFoundPage/NotFoundPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFoundPage/index.ts?");

/***/ }),

/***/ "./src/shared/NotFoundPage/notfoundpage.css":
/*!**************************************************!*\
  !*** ./src/shared/NotFoundPage/notfoundpage.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"notfoundpage__container--1F3tp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/NotFoundPage/notfoundpage.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Post() {\r\n    var ref = (0, react_1.useRef)(null);\r\n    var history = (0, react_router_dom_1.useHistory)();\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node &&\r\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                history.push('/posts');\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () {\r\n            document.removeEventListener(\"click\", handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector(\"#modal__root\");\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421 \\u0434\\u0440\\u0443\\u0433\\u043E\\u0439 \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u044B \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438.\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"\\u0420\\u0430\\u0432\\u043D\\u044B\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u043E\\u043C \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u0437\\u0432\\u043E\\u043B\\u044F\\u0435\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u044F\\u0442\\u044C \\u0432\\u0430\\u0436\\u043D\\u044B\\u0435 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u044F \\u043F\\u043E \\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0435 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B \\u043E\\u0431\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u043A\\u0430\\u0434\\u0440\\u043E\\u0432, \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0435\\u0439 \\u043D\\u0430\\u0441\\u0443\\u0449\\u043D\\u044B\\u043C \\u043F\\u043E\\u0442\\u0440\\u0435\\u0431\\u043D\\u043E\\u0441\\u0442\\u044F\\u043C. \\u0417\\u043D\\u0430\\u0447\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u044D\\u0442\\u0438\\u0445 \\u043F\\u0440\\u043E\\u0431\\u043B\\u0435\\u043C \\u043D\\u0430\\u0441\\u0442\\u043E\\u043B\\u044C\\u043A\\u043E \\u043E\\u0447\\u0435\\u0432\\u0438\\u0434\\u043D\\u0430, \\u0447\\u0442\\u043E \\u0441\\u043E\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E-\\u044D\\u043A\\u043E\\u043D\\u043E\\u043C\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0435 \\u0440\\u0430\\u0437\\u0432\\u0438\\u0442\\u0438\\u0435 \\u0442\\u0440\\u0435\\u0431\\u0443\\u0435\\u0442 \\u043E\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u0438\\u044F \\u0438 \\u0443\\u0442\\u043E\\u0447\\u043D\\u0435\\u043D\\u0438\\u044F \\u043D\\u043E\\u0432\\u044B\\u0445 \\u043F\\u0440\\u0435\\u0434\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0439. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u043D\\u043E\\u0435 \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E-\\u043F\\u0440\\u043E\\u043F\\u043E\\u0433\\u0430\\u043D\\u0434\\u0438\\u0441\\u0442\\u0441\\u043A\\u043E\\u0435 \\u043E\\u0431\\u0435\\u0441\\u043F\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 \\u043D\\u0430\\u0448\\u0435\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u043A\\u0438 \\u0432\\u043B\\u0435\\u0447\\u0451\\u0442 \\u0437\\u0430 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u043D\\u044B\\u0439 \\u043F\\u0440\\u043E\\u0446\\u0435\\u0441\\u0441 \\u0432\\u043D\\u0435\\u0434\\u0440\\u0435\\u043D\\u0438\\u044F \\u043C\\u043E\\u0434\\u0435\\u0440\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u0445 \\u0443\\u0441\\u043B\\u043E\\u0432\\u0438\\u0439 \\u0430\\u043A\\u0442\\u0438\\u0432\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u0420\\u0430\\u0437\\u043D\\u043E\\u043E\\u0431\\u0440\\u0430\\u0437\\u043D\\u044B\\u0439 \\u0438 \\u0431\\u043E\\u0433\\u0430\\u0442\\u044B\\u0439 \\u043E\\u043F\\u044B\\u0442 \\u0440\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439 \\u0442\\u0440\\u0435\\u0431\\u0443\\u0435\\u0442 \\u043E\\u0442 \\u043D\\u0430\\u0441 \\u0430\\u043D\\u0430\\u043B\\u0438\\u0437\\u0430 \\u043D\\u043E\\u0432\\u044B\\u0445 \\u043F\\u0440\\u0438\\u043D\\u0446\\u0438\\u043F\\u043E\\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043C\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E-\\u0442\\u0435\\u0445\\u043D\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u0438 \\u043A\\u0430\\u0434\\u0440\\u043E\\u0432\\u043E\\u0439 \\u0431\\u0430\\u0437\\u044B. \\u0420\\u0430\\u0432\\u043D\\u044B\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u043E\\u043C \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u0438\\u0433\\u0440\\u0430\\u0435\\u0442 \\u0432\\u0430\\u0436\\u043D\\u0443\\u044E \\u0440\\u043E\\u043B\\u044C \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438 \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0439 \\u043F\\u0440\\u043E\\u0433\\u0440\\u0435\\u0441\\u0441\\u0438\\u0432\\u043D\\u043E\\u0433\\u043E \\u0440\\u0430\\u0437\\u0432\\u0438\\u0442\\u0438\\u044F. \\u0418\\u0434\\u0435\\u0439\\u043D\\u044B\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F \\u0432\\u044B\\u0441\\u0448\\u0435\\u0433\\u043E \\u043F\\u043E\\u0440\\u044F\\u0434\\u043A\\u0430, \\u0430 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u043F\\u043E\\u043D\\u0438\\u043C\\u0430\\u043D\\u0438\\u0435 \\u0441\\u0443\\u0449\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0440\\u0435\\u0441\\u0443\\u0440\\u0441\\u043E\\u0441\\u0431\\u0435\\u0440\\u0435\\u0433\\u0430\\u044E\\u0449\\u0438\\u0445 \\u0442\\u0435\\u0445\\u043D\\u043E\\u043B\\u043E\\u0433\\u0438\\u0439 \\u043F\\u043E\\u0437\\u0432\\u043E\\u043B\\u044F\\u0435\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u044F\\u0442\\u044C \\u0432\\u0430\\u0436\\u043D\\u044B\\u0435 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u044F \\u043F\\u043E \\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u0439 \\u0444\\u0438\\u043D\\u0430\\u043D\\u0441\\u043E\\u0432\\u044B\\u0445 \\u0438 \\u0430\\u0434\\u043C\\u0438\\u043D\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u0438\\u0432\\u043D\\u044B\\u0445 \\u0443\\u0441\\u043B\\u043E\\u0432\\u0438\\u0439. \\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438, \\u0432 \\u043E\\u0441\\u043E\\u0431\\u0435\\u043D\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0436\\u0435 \\u043A\\u043E\\u043D\\u0441\\u0443\\u043B\\u044C\\u0442\\u0430\\u0446\\u0438\\u044F \\u0441 \\u0448\\u0438\\u0440\\u043E\\u043A\\u0438\\u043C \\u0430\\u043A\\u0442\\u0438\\u0432\\u043E\\u043C \\u0438\\u0433\\u0440\\u0430\\u0435\\u0442 \\u0432\\u0430\\u0436\\u043D\\u0443\\u044E \\u0440\\u043E\\u043B\\u044C \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438 \\u0443\\u043A\\u0440\\u0435\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F \\u0434\\u0435\\u043C\\u043E\\u043A\\u0440\\u0430\\u0442\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u041F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u0430\\u044F \\u043F\\u0440\\u0430\\u043A\\u0442\\u0438\\u043A\\u0430 \\u043F\\u043E\\u043A\\u0430\\u0437\\u044B\\u0432\\u0430\\u0435\\u0442, \\u0447\\u0442\\u043E \\u043A\\u043E\\u043D\\u0441\\u0443\\u043B\\u044C\\u0442\\u0430\\u0446\\u0438\\u044F \\u0441 \\u0448\\u0438\\u0440\\u043E\\u043A\\u0438\\u043C \\u0430\\u043A\\u0442\\u0438\\u0432\\u043E\\u043C \\u0441\\u043F\\u043E\\u0441\\u043E\\u0431\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u043F\\u043E\\u0434\\u0433\\u043E\\u0442\\u043E\\u0432\\u043A\\u0435 \\u0438 \\u0440\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u0445 \\u0443\\u0441\\u043B\\u043E\\u0432\\u0438\\u0439 \\u0430\\u043A\\u0442\\u0438\\u0432\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438. \\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438, \\u0432 \\u043E\\u0441\\u043E\\u0431\\u0435\\u043D\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0436\\u0435 \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u043D\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043D\\u043E\\u0432\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0443\\u0442\\u044C \\u043E\\u0431\\u0435\\u0441\\u043F\\u0435\\u0447\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0430\\u043A\\u0442\\u0443\\u0430\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u044C \\u043D\\u0430\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0439 \\u043F\\u0440\\u043E\\u0433\\u0440\\u0435\\u0441\\u0441\\u0438\\u0432\\u043D\\u043E\\u0433\\u043E \\u0440\\u0430\\u0437\\u0432\\u0438\\u0442\\u0438\\u044F. \\u0420\\u0430\\u0432\\u043D\\u044B\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u043E\\u043C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u043D\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043D\\u043E\\u0432\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0443\\u0442\\u044C \\u0438\\u0433\\u0440\\u0430\\u0435\\u0442 \\u0432\\u0430\\u0436\\u043D\\u0443\\u044E \\u0440\\u043E\\u043B\\u044C \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u0445 \\u0443\\u0441\\u043B\\u043E\\u0432\\u0438\\u0439 \\u0430\\u043A\\u0442\\u0438\\u0432\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438. \\u0418\\u0434\\u0435\\u0439\\u043D\\u044B\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F \\u0432\\u044B\\u0441\\u0448\\u0435\\u0433\\u043E \\u043F\\u043E\\u0440\\u044F\\u0434\\u043A\\u0430, \\u0430 \\u0442\\u0430\\u043A\\u0436\\u0435 \\u043A\\u043E\\u043D\\u0441\\u0443\\u043B\\u044C\\u0442\\u0430\\u0446\\u0438\\u044F \\u0441 \\u0448\\u0438\\u0440\\u043E\\u043A\\u0438\\u043C \\u0430\\u043A\\u0442\\u0438\\u0432\\u043E\\u043C \\u043F\\u043E\\u0437\\u0432\\u043E\\u043B\\u044F\\u0435\\u0442 \\u043E\\u0446\\u0435\\u043D\\u0438\\u0442\\u044C \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u0435\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u043D\\u044B\\u0439 \\u044D\\u043A\\u0441\\u043F\\u0435\\u0440\\u0438\\u043C\\u0435\\u043D\\u0442 \\u043F\\u0440\\u043E\\u0433\\u0440\\u0435\\u0441\\u0441\\u0430 \\u043F\\u0440\\u043E\\u0444\\u0435\\u0441\\u0441\\u0438\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430. \\u0422\\u0430\\u043A\\u0438\\u043C \\u043E\\u0431\\u0440\\u0430\\u0437\\u043E\\u043C \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u043D\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043D\\u043E\\u0432\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0443\\u0442\\u044C \\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u043A\\u0438 \\u0432\\u043B\\u0435\\u0447\\u0451\\u0442 \\u0437\\u0430 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u043D\\u044B\\u0439 \\u043F\\u0440\\u043E\\u0446\\u0435\\u0441\\u0441 \\u0432\\u043D\\u0435\\u0434\\u0440\\u0435\\u043D\\u0438\\u044F \\u043C\\u043E\\u0434\\u0435\\u0440\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B \\u043E\\u0431\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u043A\\u0430\\u0434\\u0440\\u043E\\u0432, \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0435\\u0439 \\u043D\\u0430\\u0441\\u0443\\u0449\\u043D\\u044B\\u043C \\u043F\\u043E\\u0442\\u0440\\u0435\\u0431\\u043D\\u043E\\u0441\\u0442\\u044F\\u043C.\")),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null)), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"grayF4\"] = \"grayF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c));\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/icons/AnswerIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/AnswerIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnswerIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnswerIcon(props) {\r\n    return (React.createElement(\"svg\", { className: props.className, width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.AnswerIcon = AnswerIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnswerIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon(props) {\r\n    return (React.createElement(\"svg\", { className: props.className, width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentsIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/CommentsIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ComplainIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/ComplainIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ComplainIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ComplainIcon(props) {\r\n    return (React.createElement(\"svg\", { className: props.className, width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.ComplainIcon = ComplainIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ComplainIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HideIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction HideIcon(props) {\r\n    return (React.createElement(\"svg\", { className: props.className, width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.HideIcon = HideIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/iconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/iconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/iconAnon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./iconAnon */ \"./src/shared/icons/iconAnon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = \"ME_REQUESTS\";\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = \"ME_REQUEST_SUCCESS\";\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = \"ME_REQUEST_ERROR\";\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.meRequest)());\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n            headers: { Authorization: \"bearer \" + getState().token },\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n        })\r\n            .catch(function (err) {\r\n            console.log(err);\r\n            dispatch((0, exports.meRequestError)(String(err)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\r\nvar initialState = {\r\n    commentText: \"Привет, SkillBox!\",\r\n    token: \"\",\r\n    me: {\r\n        loading: false,\r\n        error: \"\",\r\n        data: {},\r\n    },\r\n};\r\nvar UPDATE_COMMENT = \"UPDATE_COMMENT\";\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar SET_TOKEN = \"SET_TOKEN\";\r\nvar setToken = function (token) { return ({\r\n    type: SET_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.setToken = setToken;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        case actions_2.SAVE_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.saveTokenAction = exports.SAVE_TOKEN = void 0;\r\nexports.SAVE_TOKEN = \"SAVE_TOKEN\";\r\nvar saveTokenAction = function (token) { return ({\r\n    type: exports.SAVE_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.saveTokenAction = saveTokenAction;\r\nvar saveToken = function () { return function (dispatch) {\r\n    dispatch((0, exports.saveTokenAction)(window.__token__));\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/utils/react/isMounted.tsx":
/*!***************************************!*\
  !*** ./src/utils/react/isMounted.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsMounted = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction useIsMounted() {\r\n    var _a = react_1.default.useState(false), isMounted = _a[0], setIsMounted = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsMounted(true);\r\n    }, []);\r\n    return [isMounted];\r\n}\r\nexports.useIsMounted = useIsMounted;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/isMounted.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nanoid\");\n\n//# sourceURL=webpack:///external_%22nanoid%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });