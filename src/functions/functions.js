"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagination = exports.loadAndSearch = exports.type = exports.waitForNavigation = exports.pressEnter = exports.setViewport = exports.goTo = void 0;
var goTo = function (page, url) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.clear();
                console.log("-> Going to Coto Digital...");
                return [4 /*yield*/, page.goto(url)];
            case 1:
                _a.sent();
                console.log("\t✓ Done!");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error:", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goTo = goTo;
var setViewport = function (page, width, height) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.clear();
                console.log("-> Setting the viewport...");
                return [4 /*yield*/, page.setViewport({ width: width, height: height })];
            case 1:
                _a.sent();
                console.log("\t✓ Done!");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error:", error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.setViewport = setViewport;
var pressEnter = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.clear();
                console.log("-> Pressing Enter...");
                return [4 /*yield*/, page.keyboard.press("Enter")];
            case 1:
                _a.sent();
                console.log("\t✓ Done!");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("Error:", error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.pressEnter = pressEnter;
var waitForNavigation = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.clear();
                console.log("-> Waiting for the search results...");
                return [4 /*yield*/, page.waitForNavigation({ waitUntil: "networkidle0" })];
            case 1:
                _a.sent();
                console.log("\t✓ Done!");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("Error:", error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.waitForNavigation = waitForNavigation;
var type = function (page, selector, text) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.clear();
                console.log("-> Typing...");
                return [4 /*yield*/, page.type(selector, text)];
            case 1:
                _a.sent();
                console.log("\t✓ Done!");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error("Error:", error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.type = type;
var loadAndSearch = function (page, url, inputSelector, search) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.goTo)(page, url)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, exports.setViewport)(page, 1080, 1920)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, exports.type)(page, inputSelector, search)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, exports.pressEnter)(page)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, exports.waitForNavigation)(page)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.loadAndSearch = loadAndSearch;
var getPagination = function (page, selectorPagination) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.clear();
                console.log("-> Calculating the pages to retrieve information...");
                return [4 /*yield*/, page.evaluate(function (selectorPagination) {
                        var links = document.querySelectorAll(selectorPagination);
                        if (links.length === 0)
                            return [];
                        else
                            return Array.from(links).map(function (link) { return link.href; });
                    }, selectorPagination)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getPagination = getPagination;
