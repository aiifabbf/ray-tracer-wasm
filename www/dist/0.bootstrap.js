(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg sync recursive":
/*!*******************!*\
  !*** ../pkg sync ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../pkg sync recursive\";\n\n//# sourceURL=webpack:///../pkg_sync?");

/***/ }),

/***/ "../pkg/ray_tracer_wasm.js":
/*!*********************************!*\
  !*** ../pkg/ray_tracer_wasm.js ***!
  \*********************************/
/*! exports provided: init_panic_hook, color, finalScene, Bvh, PerspectiveCamera, Ray, Vec3, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbg_randomFillSync_d5bd2d655fdf256a, __wbg_getRandomValues_f5e14ab7ac8e995d, __wbg_self_1b7a39e3a92c949c, __wbg_require_604837428532a733, __wbg_crypto_968f1772287e2df0, __wbindgen_is_undefined, __wbg_getRandomValues_a3d34b4fee3c2869, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ray_tracer_wasm_bg.wasm */ \"../pkg/ray_tracer_wasm_bg.wasm\");\n/* harmony import */ var _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ray_tracer_wasm_bg.js */ \"../pkg/ray_tracer_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"init_panic_hook\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"init_panic_hook\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"color\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"finalScene\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"finalScene\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Bvh\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Bvh\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PerspectiveCamera\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Ray\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Ray\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vec3\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Vec3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_59cb74e423758ede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_558ba5917b466edd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_4bb6c2a97407129a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d5bd2d655fdf256a\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_d5bd2d655fdf256a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_f5e14ab7ac8e995d\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_f5e14ab7ac8e995d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1b7a39e3a92c949c\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_1b7a39e3a92c949c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_604837428532a733\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_604837428532a733\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_968f1772287e2df0\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_968f1772287e2df0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_a3d34b4fee3c2869\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_a3d34b4fee3c2869\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _ray_tracer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/ray_tracer_wasm.js?");

/***/ }),

/***/ "../pkg/ray_tracer_wasm_bg.js":
/*!************************************!*\
  !*** ../pkg/ray_tracer_wasm_bg.js ***!
  \************************************/
/*! exports provided: init_panic_hook, color, finalScene, Bvh, PerspectiveCamera, Ray, Vec3, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbg_randomFillSync_d5bd2d655fdf256a, __wbg_getRandomValues_f5e14ab7ac8e995d, __wbg_self_1b7a39e3a92c949c, __wbg_require_604837428532a733, __wbg_crypto_968f1772287e2df0, __wbindgen_is_undefined, __wbg_getRandomValues_a3d34b4fee3c2869, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_panic_hook\", function() { return init_panic_hook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finalScene\", function() { return finalScene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bvh\", function() { return Bvh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PerspectiveCamera\", function() { return PerspectiveCamera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ray\", function() { return Ray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vec3\", function() { return Vec3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_d5bd2d655fdf256a\", function() { return __wbg_randomFillSync_d5bd2d655fdf256a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_f5e14ab7ac8e995d\", function() { return __wbg_getRandomValues_f5e14ab7ac8e995d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1b7a39e3a92c949c\", function() { return __wbg_self_1b7a39e3a92c949c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_604837428532a733\", function() { return __wbg_require_604837428532a733; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_968f1772287e2df0\", function() { return __wbg_crypto_968f1772287e2df0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_a3d34b4fee3c2869\", function() { return __wbg_getRandomValues_a3d34b4fee3c2869; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ray_tracer_wasm_bg.wasm */ \"../pkg/ray_tracer_wasm_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction init_panic_hook() {\n    _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"init_panic_hook\"]();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n* @param {Ray} ray\n* @param {Bvh} world\n* @param {number} depth\n* @returns {Vec3}\n*/\nfunction color(ray, world, depth) {\n    _assertClass(ray, Ray);\n    _assertClass(world, Bvh);\n    var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"color\"](ray.ptr, world.ptr, depth);\n    return Vec3.__wrap(ret);\n}\n\n/**\n* @returns {Bvh}\n*/\nfunction finalScene() {\n    var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"finalScene\"]();\n    return Bvh.__wrap(ret);\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Bvh {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Bvh.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_bvh_free\"](ptr);\n    }\n}\n/**\n*/\nclass PerspectiveCamera {\n\n    static __wrap(ptr) {\n        const obj = Object.create(PerspectiveCamera.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_perspectivecamera_free\"](ptr);\n    }\n    /**\n    * @param {Vec3} eye\n    * @param {Vec3} center\n    * @param {Vec3} up\n    * @param {number} fov\n    * @param {number} aspect\n    * @param {number} focusDistance\n    * @param {number} lensRadius\n    * @returns {PerspectiveCamera}\n    */\n    static new(eye, center, up, fov, aspect, focusDistance, lensRadius) {\n        _assertClass(eye, Vec3);\n        var ptr0 = eye.ptr;\n        eye.ptr = 0;\n        _assertClass(center, Vec3);\n        var ptr1 = center.ptr;\n        center.ptr = 0;\n        _assertClass(up, Vec3);\n        var ptr2 = up.ptr;\n        up.ptr = 0;\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perspectivecamera_new\"](ptr0, ptr1, ptr2, fov, aspect, focusDistance, lensRadius);\n        return PerspectiveCamera.__wrap(ret);\n    }\n    /**\n    * @param {number} u\n    * @param {number} v\n    * @returns {Ray}\n    */\n    ray(u, v) {\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"perspectivecamera_ray\"](this.ptr, u, v);\n        return Ray.__wrap(ret);\n    }\n}\n/**\n*/\nclass Ray {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Ray.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_ray_free\"](ptr);\n    }\n    /**\n    * @param {Vec3} origin\n    * @param {Vec3} direction\n    * @returns {Ray}\n    */\n    static new(origin, direction) {\n        _assertClass(origin, Vec3);\n        var ptr0 = origin.ptr;\n        origin.ptr = 0;\n        _assertClass(direction, Vec3);\n        var ptr1 = direction.ptr;\n        direction.ptr = 0;\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"ray_new\"](ptr0, ptr1);\n        return Ray.__wrap(ret);\n    }\n}\n/**\n*/\nclass Vec3 {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec3.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_vec3_free\"](ptr);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} z\n    * @returns {Vec3}\n    */\n    static new(x, y, z) {\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"vec3_new\"](x, y, z);\n        return Vec3.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    x() {\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"vec3_x\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    y() {\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"vec3_y\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    z() {\n        var ret = _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"vec3_z\"](this.ptr);\n        return ret;\n    }\n}\n\nconst __wbg_new_59cb74e423758ede = function() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _ray_tracer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_randomFillSync_d5bd2d655fdf256a = function(arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_getRandomValues_f5e14ab7ac8e995d = function(arg0, arg1, arg2) {\n    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_self_1b7a39e3a92c949c = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_require_604837428532a733 = function(arg0, arg1) {\n    var ret = __webpack_require__(\"../pkg sync recursive\")(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbg_crypto_968f1772287e2df0 = function(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_getRandomValues_a3d34b4fee3c2869 = function(arg0) {\n    var ret = getObject(arg0).getRandomValues;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/ray_tracer_wasm_bg.js?");

/***/ }),

/***/ "../pkg/ray_tracer_wasm_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/ray_tracer_wasm_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, __wbg_vec3_free, vec3_new, vec3_x, vec3_y, vec3_z, __wbg_ray_free, ray_new, __wbg_perspectivecamera_free, perspectivecamera_new, perspectivecamera_ray, __wbg_bvh_free, color, finalScene, init_panic_hook, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./ray_tracer_wasm_bg.js */ \"../pkg/ray_tracer_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/ray_tracer_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg */ \"../pkg/ray_tracer_wasm.js\");\n\n\n_pkg__WEBPACK_IMPORTED_MODULE_0__[\"init_panic_hook\"]();\n\nlet world = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"finalScene\"]();\n\nlet eye = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"].new(555 / 2 + 200, 555 / 2, - 600);\nlet center = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"].new(555 / 2, 555 / 2, 0);\nlet up = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"].new(0, 1, 0);\n\nfunction toRadians(degree) {\n    return degree * 2 * Math.PI / 360;\n}\n\nlet canvas = document.querySelector(\"canvas\");\nlet context = canvas.getContext(\"2d\");\nlet width = canvas.width;\nlet height = canvas.height;\nlet buffer = context.createImageData(width, height);\n\nlet camera = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"].new(eye, center, up, toRadians(40), width / height, 10, 0);\n\nlet round = 0;\nlet y = height - 1;\n\nlet subpixel = document.querySelector(\"#subpixel\");\nlet subPixelSamplingCount = parseInt(subpixel.value);\n\nsubpixel.addEventListener(\"change\", e => {\n    subPixelSamplingCount = parseInt(e.target.value);\n});\n\nlet paused = true;\nlet toggle = document.querySelector(\"#toggle\");\n\ntoggle.addEventListener(\"click\", e => {\n    paused = !paused;\n    if (!paused) {\n        toggle.innerHTML = \"pause\";\n        onDraw();\n    } else {\n        toggle.innerHTML = \"start\";\n    }\n});\n\nlet clear = document.querySelector(\"#clear\");\n\nclear.addEventListener(\"click\", e => {\n    round = 0;\n    y = height - 1;\n\n    for (let i = 0; i < buffer.data.length; i++) {\n        buffer.data[i] = 0;\n    }\n\n    context.clearRect(0, 0, width, height);\n});\n\nfunction onDraw() {\n    if (paused) {\n        return;\n    }\n\n    for (let x = 0; x < width; x++) {\n        let r = 0;\n        let g = 0;\n        let b = 0;\n\n        for (let sub = 0; sub < subPixelSamplingCount; sub++) {\n            let u = (x + Math.random()) / width;\n            let v = (y + Math.random()) / height;\n            let ray = camera.ray(u, v);\n            let color = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"color\"](ray, world, 20);\n            ray.free();\n\n            r += color.x();\n            g += color.y();\n            b += color.z();\n            color.free();\n        }\n\n        r = r / subPixelSamplingCount;\n        g = g / subPixelSamplingCount;\n        b = b / subPixelSamplingCount;\n        let pixel = [r, g, b];\n\n        let row = height - 1 - y;\n        let column = x;\n\n        for (let i = 0; i < 3; i++) {\n            let rgb = Math.min(pixel[i] * 255, 255);\n            let old = buffer.data[row * width * 4 + column * 4 + i];\n            buffer.data[row * width * 4 + column * 4 + i] = (old * round + rgb) / (round + 1);\n        }\n\n        buffer.data[row * width * 4 + column * 4 + 3] = 255;\n    }\n\n    context.putImageData(buffer, 0, 0);\n\n    y -= 1;\n    if (y < 0) {\n        y = height - 1;\n        round += 1;\n        console.log(\"start round\" + round);\n    }\n\n    requestAnimationFrame(onDraw);\n}\n\nonDraw();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);