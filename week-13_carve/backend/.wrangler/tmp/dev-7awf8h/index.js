function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .wrangler/tmp/bundle-5Z17g4/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-5Z17g4/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
    init_cloudflare();
    globalThis.clearImmediate = clearImmediateFallback;
  }
});

// node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/runtime/_internal/utils.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/runtime/mock/noop.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate;
var init_immediate = __esm({
  "node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Immediate = class {
      _onImmediate;
      _timeout;
      constructor(callback, args) {
        this._onImmediate = callback;
        if ("setTimeout" in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args);
        } else {
          callback(...args);
        }
      }
      ref() {
        this._timeout?.ref();
        return this;
      }
      unref() {
        this._timeout?.unref();
        return this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        if ("clearTimeout" in globalThis) {
          clearTimeout(this._timeout);
        }
      }
    };
    __name(Immediate, "Immediate");
  }
});

// node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
var init_set_immediate = __esm({
  "node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_immediate();
    __name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
    __name(setImmediateFallback, "setImmediateFallback");
    setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
    __name(clearImmediateFallback, "clearImmediateFallback");
  }
});

// node_modules/unenv/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
  "node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_set_immediate();
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
    init_cloudflare();
    globalThis.setImmediate = setImmediateFallback;
  }
});

// node_modules/unenv/runtime/mock/proxy.mjs
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
var fn, proxy_default;
var init_proxy = __esm({
  "node_modules/unenv/runtime/mock/proxy.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    fn = /* @__PURE__ */ __name(function() {
    }, "fn");
    __name(createMock, "createMock");
    proxy_default = createMock("mock");
  }
});

// node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, assert, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console;
var init_console = __esm({
  "node_modules/unenv/runtime/node/console/index.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_noop();
    init_utils();
    init_proxy();
    init_noop();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? notImplemented("console.createTask");
    assert = notImplemented("console.assert");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? proxy_default.__createMock__("console.Console");
  }
});

// node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole, assert2, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, cloudflare_default;
var init_cloudflare2 = __esm({
  "node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert: assert2,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler: noop_default,
      _stdout,
      _stdoutErrorHandler: noop_default,
      _times: proxy_default
    });
    cloudflare_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
    init_cloudflare2();
    globalThis.console = cloudflare_default;
  }
});

// node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes, _PerformanceEntry, PerformanceEntry, _PerformanceMark, PerformanceMark, _PerformanceMeasure, PerformanceMeasure, _PerformanceResourceTiming, PerformanceResourceTiming;
var init_entry = __esm({
  "node_modules/unenv/runtime/web/performance/_entry.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _supportedEntryTypes = [
      "event",
      // PerformanceEntry
      "mark",
      // PerformanceMark
      "measure",
      // PerformanceMeasure
      "resource"
      // PerformanceResourceTiming
    ];
    _PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || performance.now();
        this.detail = options?.detail;
      }
      get duration() {
        return performance.now() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(_PerformanceEntry, "_PerformanceEntry");
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
    _PerformanceMark = class extends _PerformanceEntry {
      entryType = "mark";
    };
    __name(_PerformanceMark, "_PerformanceMark");
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
    _PerformanceMeasure = class extends _PerformanceEntry {
      entryType = "measure";
    };
    __name(_PerformanceMeasure, "_PerformanceMeasure");
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
    };
    __name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
  }
});

// node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2;
var init_performance = __esm({
  "node_modules/unenv/runtime/web/performance/_performance.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_proxy();
    init_entry();
    _timeOrigin = Date.now();
    _Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = proxy_default.__createMock__("PerformanceNavigation");
      timing = proxy_default.__createMock__("PerformanceTiming");
      onresourcetimingbufferfull = null;
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
          return globalThis.performance.now();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== "resource" || e.entryType !== "navigation"
        );
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter(
          (e) => e.name === name && (!type || e.entryType === type)
        );
      }
      getEntriesByType(type) {
        return this._entries.filter(
          (e) => e.entryType === type
        );
      }
      mark(name, options) {
        const entry = new _PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: { start, end }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
    };
    __name(_Performance, "_Performance");
    Performance = globalThis.Performance || _Performance;
    performance2 = globalThis.performance || new Performance();
  }
});

// node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver, PerformanceObserver, _PerformanceObserverEntryList, PerformanceObserverEntryList;
var init_observer = __esm({
  "node_modules/unenv/runtime/web/performance/_observer.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_entry();
    _PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
    };
    __name(_PerformanceObserver, "_PerformanceObserver");
    __publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
    _PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
    PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
  }
});

// node_modules/unenv/runtime/web/performance/index.mjs
var init_performance2 = __esm({
  "node_modules/unenv/runtime/web/performance/index.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance();
    init_observer();
    init_entry();
  }
});

// node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
var global_this_default;
var init_global_this = __esm({
  "node_modules/unenv/runtime/polyfill/global-this.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(getGlobal, "getGlobal");
    global_this_default = getGlobal();
  }
});

// node_modules/unenv/runtime/polyfill/performance.mjs
var performance_default;
var init_performance3 = __esm({
  "node_modules/unenv/runtime/polyfill/performance.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance2();
    init_global_this();
    global_this_default.performance = global_this_default.performance || performance2;
    global_this_default.Performance = global_this_default.Performance || Performance;
    global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
    global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
    global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
    global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
    global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
    global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
    performance_default = global_this_default.performance;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
    init_performance3();
    globalThis.performance = performance_default;
  }
});

// node_modules/unenv/runtime/mock/empty.mjs
var empty_default;
var init_empty = __esm({
  "node_modules/unenv/runtime/mock/empty.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    empty_default = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true }
      })
    );
  }
});

// node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env;
var init_env = __esm({
  "node_modules/unenv/runtime/node/process/internal/env.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _envShim = /* @__PURE__ */ Object.create(null);
    _processEnv = globalThis.process?.env;
    _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
    env = new Proxy(_envShim, {
      get(_, prop) {
        const env22 = _getEnv();
        return env22[prop] ?? _envShim[prop];
      },
      has(_, prop) {
        const env22 = _getEnv();
        return prop in env22 || prop in _envShim;
      },
      set(_, prop, value) {
        const env22 = _getEnv(true);
        env22[prop] = value;
        return true;
      },
      deleteProperty(_, prop) {
        const env22 = _getEnv(true);
        delete env22[prop];
        return true;
      },
      ownKeys() {
        const env22 = _getEnv();
        return Object.keys(env22);
      }
    });
  }
});

// node_modules/unenv/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick22;
}
var hrtime, nextTick;
var init_time = __esm({
  "node_modules/unenv/runtime/node/process/internal/time.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    hrtime = Object.assign(
      /* @__PURE__ */ __name(function hrtime2(startTime) {
        const now = Date.now();
        const seconds = Math.trunc(now / 1e3);
        const nanos = now % 1e3 * 1e6;
        if (startTime) {
          let diffSeconds = seconds - startTime[0];
          let diffNanos = nanos - startTime[0];
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1;
            diffNanos = 1e9 + diffNanos;
          }
          return [diffSeconds, diffNanos];
        }
        return [seconds, nanos];
      }, "hrtime2"),
      {
        bigint: /* @__PURE__ */ __name(function bigint() {
          return BigInt(Date.now() * 1e6);
        }, "bigint")
      }
    );
    nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : _createNextTickWithTimeout();
    __name(_createNextTickWithTimeout, "_createNextTickWithTimeout");
  }
});

// node_modules/unenv/runtime/node/process/internal/process.mjs
function noop() {
  return process2;
}
var title, argv, version, versions, on, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, listeners, listenerCount, binding, _cwd, cwd, chdir, umask, getegid, geteuid, getgid, getuid, getgroups, getBuiltinModule, abort, allowedNodeEnvironmentFlags, arch, argv0, config, connected, constrainedMemory, availableMemory, cpuUsage, debugPort, dlopen, disconnect, emitWarning, eventNames, execArgv, execPath, exit, features, getActiveResourcesInfo, getMaxListeners, kill, memoryUsage, pid, platform, ppid, rawListeners, release, report, resourceUsage, setegid, seteuid, setgid, setgroups, setuid, setMaxListeners, setSourceMapsEnabled, stdout, stderr, stdin, traceDeprecation, uptime, exitCode, setUncaughtExceptionCaptureCallback, hasUncaughtExceptionCaptureCallback, sourceMapsEnabled, loadEnvFile, mainModule, permission, channel, throwDeprecation, assert3, openStdin, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _linkedBinding, domain, initgroups, moduleLoadList, reallyExit, _exiting, _events, _eventsCount, _maxListeners, process2;
var init_process = __esm({
  "node_modules/unenv/runtime/node/process/internal/process.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_empty();
    init_utils();
    init_env();
    init_time();
    init_time();
    title = "unenv";
    argv = [];
    version = "";
    versions = {
      ares: "",
      http_parser: "",
      icu: "",
      modules: "",
      node: "",
      openssl: "",
      uv: "",
      v8: "",
      zlib: ""
    };
    __name(noop, "noop");
    on = noop;
    addListener = noop;
    once = noop;
    off = noop;
    removeListener = noop;
    removeAllListeners = noop;
    emit = /* @__PURE__ */ __name(function emit2(event) {
      if (event === "message" || event === "multipleResolves") {
        return process2;
      }
      return false;
    }, "emit2");
    prependListener = noop;
    prependOnceListener = noop;
    listeners = /* @__PURE__ */ __name(function(name) {
      return [];
    }, "listeners");
    listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
    binding = /* @__PURE__ */ __name(function(name) {
      throw new Error("[unenv] process.binding is not supported");
    }, "binding");
    _cwd = "/";
    cwd = /* @__PURE__ */ __name(function cwd2() {
      return _cwd;
    }, "cwd2");
    chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
      _cwd = dir3;
    }, "chdir2");
    umask = /* @__PURE__ */ __name(function umask2() {
      return 0;
    }, "umask2");
    getegid = /* @__PURE__ */ __name(function getegid2() {
      return 1e3;
    }, "getegid2");
    geteuid = /* @__PURE__ */ __name(function geteuid2() {
      return 1e3;
    }, "geteuid2");
    getgid = /* @__PURE__ */ __name(function getgid2() {
      return 1e3;
    }, "getgid2");
    getuid = /* @__PURE__ */ __name(function getuid2() {
      return 1e3;
    }, "getuid2");
    getgroups = /* @__PURE__ */ __name(function getgroups2() {
      return [];
    }, "getgroups2");
    getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
    abort = notImplemented("process.abort");
    allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
    arch = "";
    argv0 = "";
    config = empty_default;
    connected = false;
    constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
    availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
    cpuUsage = notImplemented("process.cpuUsage");
    debugPort = 0;
    dlopen = notImplemented("process.dlopen");
    disconnect = noop;
    emitWarning = noop;
    eventNames = notImplemented("process.eventNames");
    execArgv = [];
    execPath = "";
    exit = notImplemented("process.exit");
    features = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0
    });
    getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
    getMaxListeners = notImplemented(
      "process.getMaxListeners"
    );
    kill = notImplemented("process.kill");
    memoryUsage = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }),
      { rss: () => 0 }
    );
    pid = 1e3;
    platform = "";
    ppid = 1e3;
    rawListeners = notImplemented(
      "process.rawListeners"
    );
    release = /* @__PURE__ */ Object.create({
      name: "",
      lts: "",
      sourceUrl: void 0,
      headersUrl: void 0
    });
    report = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented("process.report.getReport"),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented("process.report.writeReport")
    });
    resourceUsage = notImplemented(
      "process.resourceUsage"
    );
    setegid = notImplemented("process.setegid");
    seteuid = notImplemented("process.seteuid");
    setgid = notImplemented("process.setgid");
    setgroups = notImplemented("process.setgroups");
    setuid = notImplemented("process.setuid");
    setMaxListeners = notImplemented(
      "process.setMaxListeners"
    );
    setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
    stdout = proxy_default.__createMock__("process.stdout");
    stderr = proxy_default.__createMock__("process.stderr");
    stdin = proxy_default.__createMock__("process.stdin");
    traceDeprecation = false;
    uptime = /* @__PURE__ */ __name(() => 0, "uptime");
    exitCode = 0;
    setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
    hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
    sourceMapsEnabled = false;
    loadEnvFile = notImplemented(
      "process.loadEnvFile"
    );
    mainModule = void 0;
    permission = {
      has: () => false
    };
    channel = {
      ref() {
      },
      unref() {
      }
    };
    throwDeprecation = false;
    assert3 = notImplemented("process.assert");
    openStdin = notImplemented("process.openStdin");
    _debugEnd = notImplemented("process._debugEnd");
    _debugProcess = notImplemented("process._debugProcess");
    _fatalException = notImplemented("process._fatalException");
    _getActiveHandles = notImplemented("process._getActiveHandles");
    _getActiveRequests = notImplemented("process._getActiveRequests");
    _kill = notImplemented("process._kill");
    _preload_modules = [];
    _rawDebug = notImplemented("process._rawDebug");
    _startProfilerIdleNotifier = notImplemented(
      "process._startProfilerIdleNotifier"
    );
    _stopProfilerIdleNotifier = notImplemented(
      "process.__stopProfilerIdleNotifier"
    );
    _tickCallback = notImplemented("process._tickCallback");
    _linkedBinding = notImplemented("process._linkedBinding");
    domain = proxy_default.__createMock__("process.domain");
    initgroups = notImplemented("process.initgroups");
    moduleLoadList = [];
    reallyExit = noop;
    _exiting = false;
    _events = [];
    _eventsCount = 0;
    _maxListeners = 0;
    process2 = {
      // @ts-expect-error
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      exitCode,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      throwDeprecation,
      mainModule,
      permission,
      channel,
      arch,
      argv,
      argv0,
      assert: assert3,
      binding,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      features,
      getBuiltinModule,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions
    };
  }
});

// node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess, getBuiltinModule2, workerdProcess, env2, nextTick2, _process, cloudflare_default2;
var init_cloudflare3 = __esm({
  "node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_process();
    unpatchedGlobalThisProcess = globalThis["process"];
    getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule2("node:process");
    ({ env: env2, nextTick: nextTick2 } = workerdProcess);
    _process = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd,
      _debugProcess,
      // TODO: implemented yet in unenv
      //_events,
      _eventsCount,
      // TODO: implemented yet in unenv
      //_exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      // TODO: implemented yet in unenv
      //_linkedBinding,
      // TODO: implemented yet in unenv
      //_maxListeners,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert3,
      availableMemory,
      binding,
      chdir,
      config,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      // TODO: implemented yet in unenv
      //domain,
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exit,
      exitCode,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime,
      // TODO: implemented yet in unenv
      //initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      // TODO: implemented yet in unenv
      //moduleLoadList,
      off,
      on,
      once,
      // TODO: implemented yet in unenv
      //openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      // TODO: implemented yet in unenv
      //reallyExit,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      setUncaughtExceptionCaptureCallback,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      umask,
      uptime,
      version,
      versions,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env2,
      getBuiltinModule: getBuiltinModule2,
      nextTick: nextTick2
    };
    cloudflare_default2 = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
    init_cloudflare3();
    globalThis.process = cloudflare_default2;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "../../node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    var ca = Object.create;
    var ur = Object.defineProperty;
    var pa = Object.getOwnPropertyDescriptor;
    var da = Object.getOwnPropertyNames;
    var ma = Object.getPrototypeOf;
    var fa = Object.prototype.hasOwnProperty;
    var Se = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "Se");
    var Le = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Le");
    var cr = /* @__PURE__ */ __name((e, t) => {
      for (var r in t)
        ur(e, r, { get: t[r], enumerable: true });
    }, "cr");
    var ri = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of da(t))
          !fa.call(e, i) && i !== r && ur(e, i, { get: () => t[i], enumerable: !(n = pa(t, i)) || n.enumerable });
      return e;
    }, "ri");
    var qe = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? ca(ma(e)) : {}, ri(t || !e || !e.__esModule ? ur(r, "default", { value: e, enumerable: true }) : r, e)), "qe");
    var ga = /* @__PURE__ */ __name((e) => ri(ur({}, "__esModule", { value: true }), e), "ga");
    var y;
    var c = Se(() => {
      "use strict";
      y = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var b;
    var p = Se(() => {
      "use strict";
      b = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var d = Se(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var m = Se(() => {
      "use strict";
    });
    var xi = Le((Ye) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      var ai = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "ai"), ha = ai((e) => {
        "use strict";
        e.byteLength = l, e.toByteArray = g, e.fromByteArray = S;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o)
          t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(A) {
          var R = A.length;
          if (R % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var M = A.indexOf("=");
          M === -1 && (M = R);
          var F = M === R ? 0 : 4 - M % 4;
          return [M, F];
        }
        __name(a, "a");
        function l(A) {
          var R = a(A), M = R[0], F = R[1];
          return (M + F) * 3 / 4 - F;
        }
        __name(l, "l");
        function u(A, R, M) {
          return (R + M) * 3 / 4 - M;
        }
        __name(u, "u");
        function g(A) {
          var R, M = a(A), F = M[0], q = M[1], D = new n(u(A, F, q)), I = 0, ae = q > 0 ? F - 4 : F, G;
          for (G = 0; G < ae; G += 4)
            R = r[A.charCodeAt(G)] << 18 | r[A.charCodeAt(G + 1)] << 12 | r[A.charCodeAt(G + 2)] << 6 | r[A.charCodeAt(G + 3)], D[I++] = R >> 16 & 255, D[I++] = R >> 8 & 255, D[I++] = R & 255;
          return q === 2 && (R = r[A.charCodeAt(G)] << 2 | r[A.charCodeAt(G + 1)] >> 4, D[I++] = R & 255), q === 1 && (R = r[A.charCodeAt(G)] << 10 | r[A.charCodeAt(G + 1)] << 4 | r[A.charCodeAt(G + 2)] >> 2, D[I++] = R >> 8 & 255, D[I++] = R & 255), D;
        }
        __name(g, "g");
        function h(A) {
          return t[A >> 18 & 63] + t[A >> 12 & 63] + t[A >> 6 & 63] + t[A & 63];
        }
        __name(h, "h");
        function v(A, R, M) {
          for (var F, q = [], D = R; D < M; D += 3)
            F = (A[D] << 16 & 16711680) + (A[D + 1] << 8 & 65280) + (A[D + 2] & 255), q.push(h(F));
          return q.join("");
        }
        __name(v, "v");
        function S(A) {
          for (var R, M = A.length, F = M % 3, q = [], D = 16383, I = 0, ae = M - F; I < ae; I += D)
            q.push(v(A, I, I + D > ae ? ae : I + D));
          return F === 1 ? (R = A[M - 1], q.push(t[R >> 2] + t[R << 4 & 63] + "==")) : F === 2 && (R = (A[M - 2] << 8) + A[M - 1], q.push(t[R >> 10] + t[R >> 4 & 63] + t[R << 2 & 63] + "=")), q.join("");
        }
        __name(S, "S");
      }), ya = ai((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, l = o * 8 - i - 1, u = (1 << l) - 1, g = u >> 1, h = -7, v = n ? o - 1 : 0, S = n ? -1 : 1, A = t[r + v];
          for (v += S, s = A & (1 << -h) - 1, A >>= -h, h += l; h > 0; s = s * 256 + t[r + v], v += S, h -= 8)
            ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += S, h -= 8)
            ;
          if (s === 0)
            s = 1 - g;
          else {
            if (s === u)
              return a ? NaN : (A ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (A ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, l, u, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = i ? 0 : s - 1, R = i ? 1 : -1, M = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + v >= 1 ? r += S / u : r += S * Math.pow(2, 1 - v), r * u >= 2 && (a++, u /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * u - 1) * Math.pow(2, o), a = a + v) : (l = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + A] = l & 255, A += R, l /= 256, o -= 8)
            ;
          for (a = a << o | l, g += o; g > 0; t[n + A] = a & 255, A += R, a /= 256, g -= 8)
            ;
          t[n + A - R] |= M * 128;
        };
      }), en = ha(), Ke = ya(), ni = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      Ye.Buffer = T;
      Ye.SlowBuffer = va;
      Ye.INSPECT_MAX_BYTES = 50;
      var pr = 2147483647;
      Ye.kMaxLength = pr;
      T.TYPED_ARRAY_SUPPORT = wa();
      !T.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function wa() {
        try {
          let e = new Uint8Array(1), t = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(wa, "wa");
      Object.defineProperty(T.prototype, "parent", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(T.prototype, "offset", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(e) {
        if (e > pr)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T.prototype), t;
      }
      __name(xe, "xe");
      function T(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return nn(e);
        }
        return li(e, t, r);
      }
      __name(T, "T");
      T.poolSize = 8192;
      function li(e, t, r) {
        if (typeof e == "string")
          return ba(e, t);
        if (ArrayBuffer.isView(e))
          return xa(e);
        if (e == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (de(e, ArrayBuffer) || e && de(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (de(e, SharedArrayBuffer) || e && de(e.buffer, SharedArrayBuffer)))
          return ci(e, t, r);
        if (typeof e == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e)
          return T.from(n, t, r);
        let i = Pa(e);
        if (i)
          return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
          return T.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      __name(li, "li");
      T.from = function(e, t, r) {
        return li(e, t, r);
      };
      Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T, Uint8Array);
      function ui(e) {
        if (typeof e != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      __name(ui, "ui");
      function Ea(e, t, r) {
        return ui(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      __name(Ea, "Ea");
      T.alloc = function(e, t, r) {
        return Ea(e, t, r);
      };
      function nn(e) {
        return ui(e), xe(e < 0 ? 0 : on2(e) | 0);
      }
      __name(nn, "nn");
      T.allocUnsafe = function(e) {
        return nn(e);
      };
      T.allocUnsafeSlow = function(e) {
        return nn(e);
      };
      function ba(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
        let r = pi(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      __name(ba, "ba");
      function tn(e) {
        let t = e.length < 0 ? 0 : on2(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1)
          r[n] = e[n] & 255;
        return r;
      }
      __name(tn, "tn");
      function xa(e) {
        if (de(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return ci(t.buffer, t.byteOffset, t.byteLength);
        }
        return tn(e);
      }
      __name(xa, "xa");
      function ci(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n;
      }
      __name(ci, "ci");
      function Pa(e) {
        if (T.isBuffer(e)) {
          let t = on2(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0)
          return typeof e.length != "number" || an(e.length) ? xe(0) : tn(e);
        if (e.type === "Buffer" && Array.isArray(e.data))
          return tn(e.data);
      }
      __name(Pa, "Pa");
      function on2(e) {
        if (e >= pr)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + pr.toString(16) + " bytes");
        return e | 0;
      }
      __name(on2, "on");
      function va(e) {
        return +e != e && (e = 0), T.alloc(+e);
      }
      __name(va, "va");
      T.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T.prototype;
      };
      T.compare = function(e, t) {
        if (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), de(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
          return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i)
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T.concat = function(e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
          return T.alloc(0);
        let r;
        if (t === void 0)
          for (t = 0, r = 0; r < e.length; ++r)
            t += e[r].length;
        let n = T.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (de(o, Uint8Array))
            i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T.isBuffer(o))
            o.copy(n, i);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function pi(e, t) {
        if (T.isBuffer(e))
          return e.length;
        if (ArrayBuffer.isView(e) || de(e, ArrayBuffer))
          return e.byteLength;
        if (typeof e != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0)
          return 0;
        let i = false;
        for (; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return rn(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return bi(e).length;
            default:
              if (i)
                return n ? -1 : rn(e).length;
              t = ("" + t).toLowerCase(), i = true;
          }
      }
      __name(pi, "pi");
      T.byteLength = pi;
      function Ta(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return Na(this, t, r);
            case "utf8":
            case "utf-8":
              return mi(this, t, r);
            case "ascii":
              return Da(this, t, r);
            case "latin1":
            case "binary":
              return Ma(this, t, r);
            case "base64":
              return Oa(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Fa(this, t, r);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = true;
          }
      }
      __name(Ta, "Ta");
      T.prototype._isBuffer = true;
      function Be(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      __name(Be, "Be");
      T.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
          Be(this, t, t + 1);
        return this;
      };
      T.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          Be(this, t, t + 3), Be(this, t + 1, t + 2);
        return this;
      };
      T.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          Be(this, t, t + 7), Be(this, t + 1, t + 6), Be(this, t + 2, t + 5), Be(this, t + 3, t + 4);
        return this;
      };
      T.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? mi(this, 0, e) : Ta.apply(this, arguments);
      };
      T.prototype.toLocaleString = T.prototype.toString;
      T.prototype.equals = function(e) {
        if (!T.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T.compare(this, e) === 0;
      };
      T.prototype.inspect = function() {
        let e = "", t = Ye.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      ni && (T.prototype[ni] = T.prototype.inspect);
      T.prototype.compare = function(e, t, r, n, i) {
        if (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
          throw new RangeError("out of range index");
        if (n >= i && t >= r)
          return 0;
        if (n >= i)
          return -1;
        if (t >= r)
          return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
          return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), l = this.slice(n, i), u = e.slice(t, r);
        for (let g = 0; g < a; ++g)
          if (l[g] !== u[g]) {
            o = l[g], s = u[g];
            break;
          }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function di(e, t, r, n, i) {
        if (e.length === 0)
          return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, an(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i)
            return -1;
          r = e.length - 1;
        } else if (r < 0)
          if (i)
            r = 0;
          else
            return -1;
        if (typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t))
          return t.length === 0 ? -1 : ii(e, t, r, n, i);
        if (typeof t == "number")
          return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ii(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(di, "di");
      function ii(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2)
            return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        __name(l, "l");
        let u;
        if (i) {
          let g = -1;
          for (u = r; u < s; u++)
            if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
              if (g === -1 && (g = u), u - g + 1 === a)
                return g * o;
            } else
              g !== -1 && (u -= u - g), g = -1;
        } else
          for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
            let g = true;
            for (let h = 0; h < a; h++)
              if (l(e, u + h) !== l(t, h)) {
                g = false;
                break;
              }
            if (g)
              return u;
          }
        return -1;
      }
      __name(ii, "ii");
      T.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T.prototype.indexOf = function(e, t, r) {
        return di(this, e, t, r, true);
      };
      T.prototype.lastIndexOf = function(e, t, r) {
        return di(this, e, t, r, false);
      };
      function Ca(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (an(a))
            return s;
          e[r + s] = a;
        }
        return s;
      }
      __name(Ca, "Ca");
      function Aa(e, t, r, n) {
        return dr(rn(t, e.length - r), e, r, n);
      }
      __name(Aa, "Aa");
      function Ra(e, t, r, n) {
        return dr(Ba(t), e, r, n);
      }
      __name(Ra, "Ra");
      function Sa(e, t, r, n) {
        return dr(bi(t), e, r, n);
      }
      __name(Sa, "Sa");
      function Ia(e, t, r, n) {
        return dr(Ua(t, e.length - r), e, r, n);
      }
      __name(Ia, "Ia");
      T.prototype.write = function(e, t, r, n) {
        if (t === void 0)
          n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string")
          n = t, r = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; )
          switch (n) {
            case "hex":
              return Ca(this, e, t, r);
            case "utf8":
            case "utf-8":
              return Aa(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
              return Ra(this, e, t, r);
            case "base64":
              return Sa(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ia(this, e, t, r);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = true;
          }
      };
      T.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Oa(e, t, r) {
        return t === 0 && r === e.length ? en.fromByteArray(e) : en.fromByteArray(e.slice(t, r));
      }
      __name(Oa, "Oa");
      function mi(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let l, u, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h));
                break;
              case 3:
                l = e[i + 1], u = e[i + 2], (l & 192) === 128 && (u & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | u & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                l = e[i + 1], u = e[i + 2], g = e[i + 3], (l & 192) === 128 && (u & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return ka(n);
      }
      __name(mi, "mi");
      var oi = 4096;
      function ka(e) {
        let t = e.length;
        if (t <= oi)
          return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; )
          r += String.fromCharCode.apply(String, e.slice(n, n += oi));
        return r;
      }
      __name(ka, "ka");
      function Da(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i] & 127);
        return n;
      }
      __name(Da, "Da");
      function Ma(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i]);
        return n;
      }
      __name(Ma, "Ma");
      function Na(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o)
          i += $a[e[o]];
        return i;
      }
      __name(Na, "Na");
      function Fa(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      __name(Fa, "Fa");
      T.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T.prototype), n;
      };
      function H(e, t, r) {
        if (e % 1 !== 0 || e < 0)
          throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      __name(H, "H");
      T.prototype.readUintLE = T.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return n;
      };
      T.prototype.readUintBE = T.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); )
          n += this[e + --t] * i;
        return n;
      };
      T.prototype.readUint8 = T.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e];
      };
      T.prototype.readUint16LE = T.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T.prototype.readUint16BE = T.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T.prototype.readUint32LE = T.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T.prototype.readUint32BE = T.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T.prototype.readBigUInt64LE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Pt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T.prototype.readBigUInt64BE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Pt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); )
          o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T.prototype.readBigInt64LE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Pt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T.prototype.readBigInt64BE = Ie(function(e) {
        e = e >>> 0, ze(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Pt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), Ke.read(this, e, true, 23, 4);
      };
      T.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), Ke.read(this, e, false, 23, 4);
      };
      T.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), Ke.read(this, e, true, 52, 8);
      };
      T.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), Ke.read(this, e, false, 52, 8);
      };
      function re(e, t, r, n, i, o) {
        if (!T.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length)
          throw new RangeError("Index out of range");
      }
      __name(re, "re");
      T.prototype.writeUintLE = T.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          re(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); )
          this[t + o] = e / i & 255;
        return t + r;
      };
      T.prototype.writeUintBE = T.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          re(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          this[t + i] = e / o & 255;
        return t + r;
      };
      T.prototype.writeUint8 = T.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function fi(e, t, r, n, i) {
        Ei(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      __name(fi, "fi");
      function gi(e, t, r, n, i) {
        Ei(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      __name(gi, "gi");
      T.prototype.writeBigUInt64LE = Ie(function(e, t = 0) {
        return fi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeBigUInt64BE = Ie(function(e, t = 0) {
        return gi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          re(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); )
          e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          re(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T.prototype.writeBigInt64LE = Ie(function(e, t = 0) {
        return fi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T.prototype.writeBigInt64BE = Ie(function(e, t = 0) {
        return gi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function hi(e, t, r, n, i, o) {
        if (r + n > e.length)
          throw new RangeError("Index out of range");
        if (r < 0)
          throw new RangeError("Index out of range");
      }
      __name(hi, "hi");
      function yi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || hi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), Ke.write(e, t, r, n, 23, 4), r + 4;
      }
      __name(yi, "yi");
      T.prototype.writeFloatLE = function(e, t, r) {
        return yi(this, e, t, true, r);
      };
      T.prototype.writeFloatBE = function(e, t, r) {
        return yi(this, e, t, false, r);
      };
      function wi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || hi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), Ke.write(e, t, r, n, 52, 8), r + 8;
      }
      __name(wi, "wi");
      T.prototype.writeDoubleLE = function(e, t, r) {
        return wi(this, e, t, true, r);
      };
      T.prototype.writeDoubleBE = function(e, t, r) {
        return wi(this, e, t, false, r);
      };
      T.prototype.copy = function(e, t, r, n) {
        if (!T.isBuffer(e))
          throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("Index out of range");
        if (n < 0)
          throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else
          typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= t)
          return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number")
          for (i = t; i < r; ++i)
            this[i] = e;
        else {
          let o = T.isBuffer(e) ? e : T.from(e, n), s = o.length;
          if (s === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i)
            this[i + t] = o[i % s];
        }
        return this;
      };
      var We = {};
      function sn(e, t, r) {
        We[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      __name(sn, "sn");
      sn("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      sn("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      sn("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = si(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = si(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function si(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
          t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      __name(si, "si");
      function _a(e, t, r) {
        ze(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && Pt(t, e.length - (r + 1));
      }
      __name(_a, "_a");
      function Ei(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new We.ERR_OUT_OF_RANGE("value", a, e);
        }
        _a(n, i, o);
      }
      __name(Ei, "Ei");
      function ze(e, t) {
        if (typeof e != "number")
          throw new We.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      __name(ze, "ze");
      function Pt(e, t, r) {
        throw Math.floor(e) !== e ? (ze(e, r), new We.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new We.ERR_BUFFER_OUT_OF_BOUNDS() : new We.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      __name(Pt, "Pt");
      var La = /[^+/0-9A-Za-z-_]/g;
      function qa(e) {
        if (e = e.split("=")[0], e = e.trim().replace(La, ""), e.length < 2)
          return "";
        for (; e.length % 4 !== 0; )
          e = e + "=";
        return e;
      }
      __name(qa, "qa");
      function rn(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0)
              break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0)
              break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0)
              break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0)
              break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return o;
      }
      __name(rn, "rn");
      function Ba(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r)
          t.push(e.charCodeAt(r) & 255);
        return t;
      }
      __name(Ba, "Ba");
      function Ua(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      __name(Ua, "Ua");
      function bi(e) {
        return en.toByteArray(qa(e));
      }
      __name(bi, "bi");
      function dr(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      __name(dr, "dr");
      function de(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      __name(de, "de");
      function an(e) {
        return e !== e;
      }
      __name(an, "an");
      var $a = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i)
            t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Ie(e) {
        return typeof BigInt > "u" ? Va : e;
      }
      __name(Ie, "Ie");
      function Va() {
        throw new Error("BigInt not supported");
      }
      __name(Va, "Va");
    });
    var w;
    var f = Se(() => {
      "use strict";
      w = qe(xi());
    });
    function ja() {
      return false;
    }
    __name(ja, "ja");
    var Ga;
    var Ja;
    var Ci;
    var Ai = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Ga = {}, Ja = { existsSync: ja, promises: Ga }, Ci = Ja;
    });
    function Ya(...e) {
      return e.join("/");
    }
    __name(Ya, "Ya");
    function Za(...e) {
      return e.join("/");
    }
    __name(Za, "Za");
    var Ui;
    var Xa;
    var el;
    var Tt;
    var $i = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Ui = "/", Xa = { sep: Ui }, el = { resolve: Ya, posix: Xa, join: Za, sep: Ui }, Tt = el;
    });
    var hr;
    var ji = Se(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      hr = /* @__PURE__ */ __name(class {
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      }, "hr");
    });
    var Ji = Le((dm, Gi) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Gi.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Wi = Le((Tm, Hi) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      Hi.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var zi = Le((Om, Ki) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      var sl = Wi();
      Ki.exports = (e) => typeof e == "string" ? e.replace(sl(), "") : e;
    });
    var ro = Le((Vh, pl) => {
      pl.exports = { name: "@prisma/engines-version", version: "5.21.1-1.bf0e5e8a04cada8225617067eaa03d041e2bba36", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "bf0e5e8a04cada8225617067eaa03d041e2bba36" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var no = Le(() => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
    });
    var Hn = Le((_2, gs) => {
      "use strict";
      f();
      c();
      p();
      d();
      m();
      gs.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, g, h, v, S, A, R, M, F, q, D, I = [];
          for (l = 0; l < i; l++)
            I.push(l + 1), I.push(t.charCodeAt(s + l));
          for (var ae = I.length - 1; a < o - 3; )
            for (M = r.charCodeAt(s + (u = a)), F = r.charCodeAt(s + (g = a + 1)), q = r.charCodeAt(s + (h = a + 2)), D = r.charCodeAt(s + (v = a + 3)), S = a += 4, l = 0; l < ae; l += 2)
              A = I[l], R = I[l + 1], u = e(A, u, g, M, R), g = e(u, g, h, F, R), h = e(g, h, v, q, R), S = e(h, v, S, D, R), I[l] = S, v = h, h = g, g = u, u = A;
          for (; a < o; )
            for (M = r.charCodeAt(s + (u = a)), S = ++a, l = 0; l < ae; l += 2)
              A = I[l], I[l] = S = e(A, u, S, M, I[l + 1]), u = A;
          return S;
        };
      }();
    });
    var Zc = {};
    cr(Zc, { Debug: () => dn, Decimal: () => we, Extensions: () => ln, MetricsClient: () => et, NotFoundError: () => ve, PrismaClientInitializationError: () => J, PrismaClientKnownRequestError: () => W, PrismaClientRustPanicError: () => Te, PrismaClientUnknownRequestError: () => ne, PrismaClientValidationError: () => K, Public: () => un, Sql: () => ie, defineDmmfProperty: () => Xi, empty: () => oo, getPrismaClient: () => aa, getRuntime: () => Ur, join: () => io, makeStrictEnum: () => la, makeTypedQueryFactory: () => to, objectEnumValues: () => wr, raw: () => vn, skip: () => Er, sqltag: () => Tn, warnEnvConflicts: () => void 0, warnOnce: () => St });
    module.exports = ga(Zc);
    f();
    c();
    p();
    d();
    m();
    var ln = {};
    cr(ln, { defineExtension: () => Pi, getExtensionContext: () => vi });
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Pi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Pi, "Pi");
    f();
    c();
    p();
    d();
    m();
    function vi(e) {
      return e;
    }
    __name(vi, "vi");
    var un = {};
    cr(un, { validator: () => Ti });
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Ti(...e) {
      return (t) => t;
    }
    __name(Ti, "Ti");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var cn;
    var Ri;
    var Si;
    var Ii;
    var Oi = true;
    typeof y < "u" && ({ FORCE_COLOR: cn, NODE_DISABLE_COLORS: Ri, NO_COLOR: Si, TERM: Ii } = y.env || {}, Oi = y.stdout && y.stdout.isTTY);
    var Qa = { enabled: !Ri && Si == null && Ii !== "dumb" && (cn != null && cn !== "0" || Oi) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Qa.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(V, "V");
    var Kp = V(0, 0);
    var mr = V(1, 22);
    var fr = V(2, 22);
    var zp = V(3, 23);
    var ki = V(4, 24);
    var Yp = V(7, 27);
    var Zp = V(8, 28);
    var Xp = V(9, 29);
    var ed = V(30, 39);
    var Ze = V(31, 39);
    var Di = V(32, 39);
    var Mi = V(33, 39);
    var Ni = V(34, 39);
    var td = V(35, 39);
    var Fi = V(36, 39);
    var rd = V(37, 39);
    var _i = V(90, 39);
    var nd = V(90, 39);
    var id = V(40, 49);
    var od = V(41, 49);
    var sd = V(42, 49);
    var ad = V(43, 49);
    var ld = V(44, 49);
    var ud = V(45, 49);
    var cd = V(46, 49);
    var pd = V(47, 49);
    f();
    c();
    p();
    d();
    m();
    var Ha = 100;
    var Li = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var gr = [];
    var qi = Date.now();
    var Wa = 0;
    var pn = typeof y < "u" ? y.env : {};
    globalThis.DEBUG ??= pn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= pn.DEBUG_COLORS ? pn.DEBUG_COLORS === "true" : true;
    var vt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function Ka(e) {
      let t = { color: Li[Wa++ % Li.length], enabled: vt.enabled(e), namespace: e, log: vt.log, extend: () => {
      } }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && gr.push([o, ...n]), gr.length > Ha && gr.shift(), vt.enabled(o) || i) {
          let l = n.map((g) => typeof g == "string" ? g : za(g)), u = `+${Date.now() - qi}ms`;
          qi = Date.now(), a(o, ...l, u);
        }
      }, "r");
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    __name(Ka, "Ka");
    var dn = new Proxy(Ka, { get: (e, t) => vt[t], set: (e, t, r) => vt[t] = r });
    function za(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i))
            return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint")
          return i.toString();
        return i;
      }, t);
    }
    __name(za, "za");
    function Bi() {
      gr.length = 0;
    }
    __name(Bi, "Bi");
    var ee = dn;
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Vi = "library";
    function Ct(e) {
      let t = tl();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Vi);
    }
    __name(Ct, "Ct");
    function tl() {
      let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(tl, "tl");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Ue;
    ((t) => {
      let e;
      ((I) => (I.findUnique = "findUnique", I.findUniqueOrThrow = "findUniqueOrThrow", I.findFirst = "findFirst", I.findFirstOrThrow = "findFirstOrThrow", I.findMany = "findMany", I.create = "create", I.createMany = "createMany", I.createManyAndReturn = "createManyAndReturn", I.update = "update", I.updateMany = "updateMany", I.upsert = "upsert", I.delete = "delete", I.deleteMany = "deleteMany", I.groupBy = "groupBy", I.count = "count", I.aggregate = "aggregate", I.findRaw = "findRaw", I.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Ue ||= {});
    var Rt = {};
    cr(Rt, { error: () => il, info: () => nl, log: () => rl, query: () => ol, should: () => Qi, tags: () => At, warn: () => mn });
    f();
    c();
    p();
    d();
    m();
    var At = { error: Ze("prisma:error"), warn: Mi("prisma:warn"), info: Fi("prisma:info"), query: Ni("prisma:query") };
    var Qi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
    function rl(...e) {
      console.log(...e);
    }
    __name(rl, "rl");
    function mn(e, ...t) {
      Qi.warn() && console.warn(`${At.warn} ${e}`, ...t);
    }
    __name(mn, "mn");
    function nl(e, ...t) {
      console.info(`${At.info} ${e}`, ...t);
    }
    __name(nl, "nl");
    function il(e, ...t) {
      console.error(`${At.error} ${e}`, ...t);
    }
    __name(il, "il");
    function ol(e, ...t) {
      console.log(`${At.query} ${e}`, ...t);
    }
    __name(ol, "ol");
    f();
    c();
    p();
    d();
    m();
    function Pe(e, t) {
      throw new Error(t);
    }
    __name(Pe, "Pe");
    f();
    c();
    p();
    d();
    m();
    function fn2(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(fn2, "fn");
    f();
    c();
    p();
    d();
    m();
    var gn = /* @__PURE__ */ __name((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "gn");
    f();
    c();
    p();
    d();
    m();
    function Xe(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    __name(Xe, "Xe");
    f();
    c();
    p();
    d();
    m();
    function hn(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(hn, "hn");
    f();
    c();
    p();
    d();
    m();
    function N(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(N, "N");
    f();
    c();
    p();
    d();
    m();
    var Yi = /* @__PURE__ */ new Set();
    var St = /* @__PURE__ */ __name((e, t, ...r) => {
      Yi.has(e) || (Yi.add(e), mn(t, ...r));
    }, "St");
    f();
    c();
    p();
    d();
    m();
    var W = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    }, "W");
    N(W, "PrismaClientKnownRequestError");
    var ve = /* @__PURE__ */ __name(class extends W {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    }, "ve");
    N(ve, "NotFoundError");
    f();
    c();
    p();
    d();
    m();
    var J = /* @__PURE__ */ __name(class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    }, "e");
    N(J, "PrismaClientInitializationError");
    f();
    c();
    p();
    d();
    m();
    var Te = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    }, "Te");
    N(Te, "PrismaClientRustPanicError");
    f();
    c();
    p();
    d();
    m();
    var ne = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    }, "ne");
    N(ne, "PrismaClientUnknownRequestError");
    f();
    c();
    p();
    d();
    m();
    var K = /* @__PURE__ */ __name(class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    }, "K");
    N(K, "PrismaClientValidationError");
    f();
    c();
    p();
    d();
    m();
    var et = /* @__PURE__ */ __name(class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    }, "et");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function It(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(It, "It");
    function Xi(e, t) {
      let r = It(() => al(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    __name(Xi, "Xi");
    function al(e) {
      return { datamodel: { models: yn(e.models), enums: yn(e.enums), types: yn(e.types) } };
    }
    __name(al, "al");
    function yn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(yn, "yn");
    f();
    c();
    p();
    d();
    m();
    var yr = Symbol();
    var wn = /* @__PURE__ */ new WeakMap();
    var Ce = /* @__PURE__ */ __name(class {
      constructor(t) {
        t === yr ? wn.set(this, `Prisma.${this._getName()}`) : wn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return wn.get(this);
      }
    }, "Ce");
    var Ot = /* @__PURE__ */ __name(class extends Ce {
      _getNamespace() {
        return "NullTypes";
      }
    }, "Ot");
    var kt = /* @__PURE__ */ __name(class extends Ot {
    }, "kt");
    En(kt, "DbNull");
    var Dt = /* @__PURE__ */ __name(class extends Ot {
    }, "Dt");
    En(Dt, "JsonNull");
    var Mt = /* @__PURE__ */ __name(class extends Ot {
    }, "Mt");
    En(Mt, "AnyNull");
    var wr = { classes: { DbNull: kt, JsonNull: Dt, AnyNull: Mt }, instances: { DbNull: new kt(yr), JsonNull: new Dt(yr), AnyNull: new Mt(yr) } };
    function En(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(En, "En");
    f();
    c();
    p();
    d();
    m();
    var eo = Symbol();
    var Nt = /* @__PURE__ */ __name(class {
      constructor(t) {
        if (t !== eo)
          throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Er : t;
      }
    }, "Nt");
    var Er = new Nt(eo);
    function me(e) {
      return e instanceof Nt;
    }
    __name(me, "me");
    f();
    c();
    p();
    d();
    m();
    var bn = /* @__PURE__ */ new WeakMap();
    var Ft = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        bn.set(this, { sql: t, values: r });
      }
      get sql() {
        return bn.get(this).sql;
      }
      get values() {
        return bn.get(this).values;
      }
    }, "Ft");
    function to(e) {
      return (...t) => new Ft(e, t);
    }
    __name(to, "to");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function _t(e) {
      return { ok: false, error: e, map() {
        return _t(e);
      }, flatMap() {
        return _t(e);
      } };
    }
    __name(_t, "_t");
    var xn = /* @__PURE__ */ __name(class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    }, "xn");
    var Pn = /* @__PURE__ */ __name((e) => {
      let t = new xn(), r = fe(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: fe(t, e.queryRaw.bind(e)), executeRaw: fe(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => ll(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = cl(t, e.getConnectionInfo.bind(e))), n;
    }, "Pn");
    var ll = /* @__PURE__ */ __name((e, t) => {
      let r = fe(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => ul(e, o)) };
    }, "ll");
    var ul = /* @__PURE__ */ __name((e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), commit: fe(e, t.commit.bind(t)), rollback: fe(e, t.rollback.bind(t)) }), "ul");
    function fe(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return _t({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(fe, "fe");
    function cl(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return _t({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(cl, "cl");
    var sa = qe(ro());
    var Xk = qe(no());
    ji();
    Ai();
    $i();
    f();
    c();
    p();
    d();
    m();
    var ie = /* @__PURE__ */ __name(class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    }, "e");
    function io(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new ie([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(io, "io");
    function vn(e) {
      return new ie([e], []);
    }
    __name(vn, "vn");
    var oo = vn("");
    function Tn(e, ...t) {
      return new ie(e, t);
    }
    __name(Tn, "Tn");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Lt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(Lt, "Lt");
    f();
    c();
    p();
    d();
    m();
    function te(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(te, "te");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var ge = /* @__PURE__ */ __name(class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    }, "ge");
    function $e(e) {
      let t = new ge();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name($e, "$e");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var br = { enumerable: true, configurable: true, writable: true };
    function xr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => br, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    __name(xr, "xr");
    var so = Symbol.for("nodejs.util.inspect.custom");
    function he(e, t) {
      let r = dl(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ao(Reflect.ownKeys(o), r), a = ao(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...br, ...l?.getPropertyDescriptor(s) } : br : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[so] = function() {
        let o = { ...this };
        return delete o[so], o;
      }, i;
    }
    __name(he, "he");
    function dl(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    __name(dl, "dl");
    function ao(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(ao, "ao");
    f();
    c();
    p();
    d();
    m();
    function tt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(tt, "tt");
    f();
    c();
    p();
    d();
    m();
    function Pr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Pr, "Pr");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var rt = /* @__PURE__ */ __name(class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++)
          n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    }, "rt");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function lo(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(lo, "lo");
    f();
    c();
    p();
    d();
    m();
    function nt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(nt, "nt");
    function vr(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(vr, "vr");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var it = 9e15;
    var Me = 1e9;
    var Cn = "0123456789abcdef";
    var Cr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Ar = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var An = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -it, maxE: it, crypto: false };
    var mo;
    var Ae;
    var _ = true;
    var Sr = "[DecimalError] ";
    var De = Sr + "Invalid argument: ";
    var fo = Sr + "Precision limit exceeded";
    var go = Sr + "crypto unavailable";
    var ho = "[object Decimal]";
    var X = Math.floor;
    var Q = Math.pow;
    var ml = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var fl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var gl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var yo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var pe = 1e7;
    var k = 7;
    var hl = 9007199254740991;
    var yl = Cr.length - 1;
    var Rn = Ar.length - 1;
    var C = { toStringTag: ho };
    C.absoluteValue = C.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), O(e);
    };
    C.ceil = function() {
      return O(new this.constructor(this), this.e + 1, 2);
    };
    C.clampedTo = C.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(De + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    C.comparedTo = C.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    C.cosine = C.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = wl(n, Po(n, r)), n.precision = e, n.rounding = t, O(Ae == 2 || Ae == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    C.cubeRoot = C.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero())
        return new h(g);
      for (_ = false, o = g.s * Q(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Y(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Q(r, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(g), n = U(u.plus(g).times(a), u.plus(l), s + 2, 1), Y(a.d).slice(0, s) === (r = Y(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (O(a, e + 1, 0), a.times(a).times(a).eq(g))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (O(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
            break;
          }
      return _ = true, O(n, e, h.rounding, t);
    };
    C.decimalPlaces = C.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - X(this.e / k)) * k, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    C.dividedBy = C.div = function(e) {
      return U(this, new this.constructor(e));
    };
    C.dividedToIntegerBy = C.divToInt = function(e) {
      var t = this, r = t.constructor;
      return O(U(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    C.equals = C.eq = function(e) {
      return this.cmp(e) === 0;
    };
    C.floor = function() {
      return O(new this.constructor(this), this.e + 1, 3);
    };
    C.greaterThan = C.gt = function(e) {
      return this.cmp(e) > 0;
    };
    C.greaterThanOrEqualTo = C.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    C.hyperbolicCosine = C.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Or(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = ot(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, g = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(g.minus(l.times(g))));
      return O(o, s.precision = r, s.rounding = n, true);
    };
    C.hyperbolicSine = C.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = ot(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Or(5, e)), i = ot(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, O(i, t, r, true);
    };
    C.hyperbolicTangent = C.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, U(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    C.inverseCosine = C.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? ce(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ce(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ce(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    C.inverseHyperbolicCosine = C.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, _ = false, r = r.times(r).minus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    C.inverseHyperbolicSine = C.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, _ = false, r = r.times(r).plus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln());
    };
    C.inverseHyperbolicTangent = C.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? O(new o(i), e, t, true) : (o.precision = r = n - i.e, i = U(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    C.inverseSine = C.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ce(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    C.inverseTangent = C.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, g = u.constructor, h = g.precision, v = g.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new g(u);
        if (u.abs().eq(1) && h + 4 <= Rn)
          return s = ce(g, h + 4, v).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new g(NaN);
        if (h + 4 <= Rn)
          return s = ce(g, h + 4, v).times(0.5), s.s = u.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / k + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (_ = false, t = Math.ceil(a / k), n = 1, l = u.times(u), s = new g(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), _ = true, O(s, g.precision = h, g.rounding = v, true);
    };
    C.isFinite = function() {
      return !!this.d;
    };
    C.isInteger = C.isInt = function() {
      return !!this.d && X(this.e / k) > this.d.length - 2;
    };
    C.isNaN = function() {
      return !this.s;
    };
    C.isNegative = C.isNeg = function() {
      return this.s < 0;
    };
    C.isPositive = C.isPos = function() {
      return this.s > 0;
    };
    C.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    C.lessThan = C.lt = function(e) {
      return this.cmp(e) < 0;
    };
    C.lessThanOrEqualTo = C.lte = function(e) {
      return this.cmp(e) < 1;
    };
    C.logarithm = C.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, g = u.constructor, h = g.precision, v = g.rounding, S = 5;
      if (e == null)
        e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new g(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (_ = false, a = h + S, s = ke(u, a), n = t ? Rr(g, a + 10) : ke(e, a), l = U(s, n, a, 1), qt(l.d, i = h, v))
        do
          if (a += 10, s = ke(u, a), n = t ? Rr(g, a + 10) : ke(e, a), l = U(s, n, a, 1), !o) {
            +Y(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
            break;
          }
        while (qt(l.d, i += 10, v));
      return _ = true, O(l, h, v);
    };
    C.minus = C.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h, v, S = this, A = S.constructor;
      if (e = new A(e), !S.d || !e.d)
        return !S.s || !e.s ? e = new A(NaN) : S.d ? e.s = -e.s : e = new A(e.d || S.s !== e.s ? S : NaN), e;
      if (S.s != e.s)
        return e.s = -e.s, S.plus(e);
      if (u = S.d, v = e.d, a = A.precision, l = A.rounding, !u[0] || !v[0]) {
        if (v[0])
          e.s = -e.s;
        else if (u[0])
          e = new A(S);
        else
          return new A(l === 3 ? -0 : 0);
        return _ ? O(e, a, l) : e;
      }
      if (r = X(e.e / k), g = X(S.e / k), u = u.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = u, o = -o, s = v.length) : (t = v, r = g, s = u.length), n = Math.max(Math.ceil(a / k), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
          if (u[n] != v[n]) {
            h = u[n] < v[n];
            break;
          }
        o = 0;
      }
      for (h && (t = u, u = v, v = t, e.s = -e.s), s = u.length, n = v.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = v.length; n > o; ) {
        if (u[--n] < v[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = pe - 1;
          --u[i], u[n] += pe;
        }
        u[n] -= v[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Ir(u, r), _ ? O(e, a, l) : e) : new A(l === 3 ? -0 : 0);
    };
    C.modulo = C.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? O(new n(r), n.precision, n.rounding) : (_ = false, n.modulo == 9 ? (t = U(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = U(r, e, 0, n.modulo, 1), t = t.times(e), _ = true, r.minus(t));
    };
    C.naturalExponential = C.exp = function() {
      return Sn(this);
    };
    C.naturalLogarithm = C.ln = function() {
      return ke(this);
    };
    C.negated = C.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, O(e);
    };
    C.plus = C.add = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h = this, v = h.constructor;
      if (e = new v(e), !h.d || !e.d)
        return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s)
        return e.s = -e.s, h.minus(e);
      if (u = h.d, g = e.d, a = v.precision, l = v.rounding, !u[0] || !g[0])
        return g[0] || (e = new v(h)), _ ? O(e, a, l) : e;
      if (o = X(h.e / k), n = X(e.e / k), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = g.length) : (r = g, n = o, s = u.length), o = Math.ceil(a / k), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = g.length, s - i < 0 && (i = s, r = g, g = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + g[i] + t) / pe | 0, u[i] %= pe;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Ir(u, n), _ ? O(e, a, l) : e;
    };
    C.precision = C.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(De + e);
      return r.d ? (t = wo(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    C.round = function() {
      var e = this, t = e.constructor;
      return O(new t(e), e.e + 1, t.rounding);
    };
    C.sine = C.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = bl(n, Po(n, r)), n.precision = e, n.rounding = t, O(Ae > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.squareRoot = C.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, g = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new g(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (_ = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = Y(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new g(t)) : n = new g(u.toString()), r = (l = g.precision) + 3; ; )
        if (o = n, n = o.plus(U(s, o, r + 2, 1)).times(0.5), Y(o.d).slice(0, r) === (t = Y(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (O(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (O(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return _ = true, O(n, l, g.rounding, e);
    };
    C.tangent = C.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = U(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, O(Ae == 2 || Ae == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.times = C.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, g = this, h = g.constructor, v = g.d, S = (e = new h(e)).d;
      if (e.s *= g.s, !v || !v[0] || !S || !S[0])
        return new h(!e.s || v && !v[0] && !S || S && !S[0] && !v ? NaN : !v || !S ? e.s / 0 : e.s * 0);
      for (r = X(g.e / k) + X(e.e / k), l = v.length, u = S.length, l < u && (o = v, v = S, S = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + S[n] * v[i - n - 1] + t, o[i--] = a % pe | 0, t = a / pe | 0;
        o[i] = (o[i] + t) % pe | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Ir(o, r), _ ? O(e, h.precision, h.rounding) : e;
    };
    C.toBinary = function(e, t) {
      return On(this, 2, e, t);
    };
    C.toDecimalPlaces = C.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (oe(e, 0, Me), t === void 0 ? t = n.rounding : oe(t, 0, 8), O(r, e + r.e + 1, t));
    };
    C.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ye(n, true) : (oe(e, 0, Me), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = O(new i(n), e + 1, t), r = ye(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = ye(i) : (oe(e, 0, Me), t === void 0 ? t = o.rounding : oe(t, 0, 8), n = O(new o(i), e + i.e + 1, t), r = ye(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    C.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, g, h, v, S = this, A = S.d, R = S.constructor;
      if (!A)
        return new R(S);
      if (u = r = new R(1), n = l = new R(0), t = new R(n), o = t.e = wo(A) - S.e - 1, s = o % k, t.d[0] = Q(10, s < 0 ? k + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new R(e), !a.isInt() || a.lt(u))
          throw Error(De + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (_ = false, a = new R(Y(A)), g = R.precision, R.precision = o = A.length * k * 2; h = U(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = U(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = S.s, v = U(u, n, o, 1).minus(S).abs().cmp(U(l, r, o, 1).minus(S).abs()) < 1 ? [u, n] : [l, r], R.precision = g, _ = true, v;
    };
    C.toHexadecimal = C.toHex = function(e, t) {
      return On(this, 16, e, t);
    };
    C.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : oe(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (_ = false, r = U(r, e, 0, t, 1).times(e), _ = true, O(r)) : (e.s = r.s, r = e), r;
    };
    C.toNumber = function() {
      return +this;
    };
    C.toOctal = function(e, t) {
      return On(this, 8, e, t);
    };
    C.toPower = C.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(Q(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return O(a, n, o);
      if (t = X(e.e / k), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= hl)
        return i = Eo(l, a, r, n), e.s < 0 ? new l(1).div(i) : O(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = Q(+a, u), t = r == 0 || !isFinite(r) ? X(u * (Math.log("0." + Y(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (_ = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Sn(e.times(ke(a, n + r)), n), i.d && (i = O(i, n + 5, 1), qt(i.d, n, o) && (t = n + 10, i = O(Sn(e.times(ke(a, t + r)), t), t + 5, 1), +Y(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = O(i, n + 1, 0)))), i.s = s, _ = true, l.rounding = o, O(i, n, o));
    };
    C.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ye(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, Me), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = O(new i(n), e, t), r = ye(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toSignificantDigits = C.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (oe(e, 1, Me), t === void 0 ? t = n.rounding : oe(t, 0, 8)), O(new n(r), e, t);
    };
    C.toString = function() {
      var e = this, t = e.constructor, r = ye(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    C.truncated = C.trunc = function() {
      return O(new this.constructor(this), this.e + 1, 1);
    };
    C.valueOf = C.toJSON = function() {
      var e = this, t = e.constructor, r = ye(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Y(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = k - n.length, r && (o += Oe(r)), o += n;
        s = e[t], n = s + "", r = k - n.length, r && (o += Oe(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    __name(Y, "Y");
    function oe(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(De + e);
    }
    __name(oe, "oe");
    function qt(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += k, i = 0) : (i = Math.ceil((t + 1) / k), t %= k), o = Q(10, k - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1, s;
    }
    __name(qt, "qt");
    function Tr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += Cn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(Tr, "Tr");
    function wl(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Or(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = ot(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    __name(wl, "wl");
    var U = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      __name(t, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l) {
        var u, g, h, v, S, A, R, M, F, q, D, I, ae, G, Yr, sr, xt, Zr, ue, ar, lr = n.constructor, Xr = n.s == i.s ? 1 : -1, Z = n.d, $ = i.d;
        if (!Z || !Z[0] || !$ || !$[0])
          return new lr(!n.s || !i.s || (Z ? $ && Z[0] == $[0] : !$) ? NaN : Z && Z[0] == 0 || !$ ? Xr * 0 : Xr / 0);
        for (l ? (S = 1, g = n.e - i.e) : (l = pe, S = k, g = X(n.e / S) - X(i.e / S)), ue = $.length, xt = Z.length, F = new lr(Xr), q = F.d = [], h = 0; $[h] == (Z[h] || 0); h++)
          ;
        if ($[h] > (Z[h] || 0) && g--, o == null ? (G = o = lr.precision, s = lr.rounding) : a ? G = o + (n.e - i.e) + 1 : G = o, G < 0)
          q.push(1), A = true;
        else {
          if (G = G / S + 2 | 0, h = 0, ue == 1) {
            for (v = 0, $ = $[0], G++; (h < xt || v) && G--; h++)
              Yr = v * l + (Z[h] || 0), q[h] = Yr / $ | 0, v = Yr % $ | 0;
            A = v || h < xt;
          } else {
            for (v = l / ($[0] + 1) | 0, v > 1 && ($ = e($, v, l), Z = e(Z, v, l), ue = $.length, xt = Z.length), sr = ue, D = Z.slice(0, ue), I = D.length; I < ue; )
              D[I++] = 0;
            ar = $.slice(), ar.unshift(0), Zr = $[0], $[1] >= l / 2 && ++Zr;
            do
              v = 0, u = t($, D, ue, I), u < 0 ? (ae = D[0], ue != I && (ae = ae * l + (D[1] || 0)), v = ae / Zr | 0, v > 1 ? (v >= l && (v = l - 1), R = e($, v, l), M = R.length, I = D.length, u = t(R, D, M, I), u == 1 && (v--, r(R, ue < M ? ar : $, M, l))) : (v == 0 && (u = v = 1), R = $.slice()), M = R.length, M < I && R.unshift(0), r(D, R, I, l), u == -1 && (I = D.length, u = t($, D, ue, I), u < 1 && (v++, r(D, ue < I ? ar : $, I, l))), I = D.length) : u === 0 && (v++, D = [0]), q[h++] = v, u && D[0] ? D[I++] = Z[sr] || 0 : (D = [Z[sr]], I = 1);
            while ((sr++ < xt || D[0] !== void 0) && G--);
            A = D[0] !== void 0;
          }
          q[0] || q.shift();
        }
        if (S == 1)
          F.e = g, mo = A;
        else {
          for (h = 1, v = q[0]; v >= 10; v /= 10)
            h++;
          F.e = h + g * S - 1, O(F, a ? o + F.e + 1 : o, s, A);
        }
        return F;
      };
    }();
    function O(e, t, r, n) {
      var i, o, s, a, l, u, g, h, v, S = e.constructor;
      e:
        if (t != null) {
          if (h = e.d, !h)
            return e;
          for (i = 1, a = h[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += k, s = t, g = h[v = 0], l = g / Q(10, i - s - 1) % 10 | 0;
          else if (v = Math.ceil((o + 1) / k), a = h.length, v >= a)
            if (n) {
              for (; a++ <= v; )
                h.push(0);
              g = l = 0, i = 1, o %= k, s = o - k + 1;
            } else
              break e;
          else {
            for (g = a = h[v], i = 1; a >= 10; a /= 10)
              i++;
            o %= k, s = o - k + i, l = s < 0 ? 0 : g / Q(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % Q(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / Q(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
            return h.length = 0, u ? (t -= e.e + 1, h[0] = Q(10, (k - t % k) % k), e.e = -t || 0) : h[0] = e.e = 0, e;
          if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = Q(10, k - o), h[v] = s > 0 ? (g / Q(10, i - s) % Q(10, s) | 0) * a : 0), u)
            for (; ; )
              if (v == 0) {
                for (o = 1, s = h[0]; s >= 10; s /= 10)
                  o++;
                for (s = h[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, h[0] == pe && (h[0] = 1));
                break;
              } else {
                if (h[v] += a, h[v] != pe)
                  break;
                h[v--] = 0, a = 1;
              }
          for (o = h.length; h[--o] === 0; )
            h.pop();
        }
      return _ && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(O, "O");
    function ye(e, t, r) {
      if (!e.isFinite())
        return xo(e);
      var n, i = e.e, o = Y(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Oe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Oe(-i - 1) + o, r && (n = r - s) > 0 && (o += Oe(n))) : i >= s ? (o += Oe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Oe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Oe(n))), o;
    }
    __name(ye, "ye");
    function Ir(e, t) {
      var r = e[0];
      for (t *= k; r >= 10; r /= 10)
        t++;
      return t;
    }
    __name(Ir, "Ir");
    function Rr(e, t, r) {
      if (t > yl)
        throw _ = true, r && (e.precision = r), Error(fo);
      return O(new e(Cr), t, 1, true);
    }
    __name(Rr, "Rr");
    function ce(e, t, r) {
      if (t > Rn)
        throw Error(fo);
      return O(new e(Ar), t, r, true);
    }
    __name(ce, "ce");
    function wo(e) {
      var t = e.length - 1, r = t * k + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    __name(wo, "wo");
    function Oe(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    __name(Oe, "Oe");
    function Eo(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / k + 4);
      for (_ = false; ; ) {
        if (r % 2 && (o = o.times(t), co(o.d, s) && (i = true)), r = X(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), co(t.d, s);
      }
      return _ = true, o;
    }
    __name(Eo, "Eo");
    function uo(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(uo, "uo");
    function bo(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    __name(bo, "bo");
    function Sn(e, t) {
      var r, n, i, o, s, a, l, u = 0, g = 0, h = 0, v = e.constructor, S = v.rounding, A = v.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (_ = false, l = A) : l = t, a = new v(0.03125); e.e > -2; )
        e = e.times(a), h += 5;
      for (n = Math.log(Q(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l; ; ) {
        if (o = O(o.times(e), l, 1), r = r.times(++g), a = s.plus(U(o, r, l, 1)), Y(a.d).slice(0, l) === Y(s.d).slice(0, l)) {
          for (i = h; i--; )
            s = O(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && qt(s.d, l - n, S, u))
              v.precision = l += 10, r = o = a = new v(1), g = 0, u++;
            else
              return O(s, v.precision = A, S, _ = true);
          else
            return v.precision = A, s;
        }
        s = a;
      }
    }
    __name(Sn, "Sn");
    function ke(e, t) {
      var r, n, i, o, s, a, l, u, g, h, v, S = 1, A = 10, R = e, M = R.d, F = R.constructor, q = F.rounding, D = F.precision;
      if (R.s < 0 || !M || !M[0] || !R.e && M[0] == 1 && M.length == 1)
        return new F(M && !M[0] ? -1 / 0 : R.s != 1 ? NaN : M ? 0 : R);
      if (t == null ? (_ = false, g = D) : g = t, F.precision = g += A, r = Y(M), n = r.charAt(0), Math.abs(o = R.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          R = R.times(e), r = Y(R.d), n = r.charAt(0), S++;
        o = R.e, n > 1 ? (R = new F("0." + r), o++) : R = new F(n + "." + r.slice(1));
      } else
        return u = Rr(F, g + 2, D).times(o + ""), R = ke(new F(n + "." + r.slice(1)), g - A).plus(u), F.precision = D, t == null ? O(R, D, q, _ = true) : R;
      for (h = R, l = s = R = U(R.minus(1), R.plus(1), g, 1), v = O(R.times(R), g, 1), i = 3; ; ) {
        if (s = O(s.times(v), g, 1), u = l.plus(U(s, new F(i), g, 1)), Y(u.d).slice(0, g) === Y(l.d).slice(0, g))
          if (l = l.times(2), o !== 0 && (l = l.plus(Rr(F, g + 2, D).times(o + ""))), l = U(l, new F(S), g, 1), t == null)
            if (qt(l.d, g - A, q, a))
              F.precision = g += A, u = s = R = U(h.minus(1), h.plus(1), g, 1), v = O(R.times(R), g, 1), i = a = 1;
            else
              return O(l, F.precision = D, q, _ = true);
          else
            return F.precision = D, l;
        l = u, i += 2;
      }
    }
    __name(ke, "ke");
    function xo(e) {
      return String(e.s * e.s / 0);
    }
    __name(xo, "xo");
    function In(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % k, r < 0 && (n += k), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= k; n < i; )
            e.d.push(+t.slice(n, n += k));
          t = t.slice(n), n = k - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), _ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    __name(In, "In");
    function El(e, t) {
      var r, n, i, o, s, a, l, u, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), yo.test(t))
          return In(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (fl.test(t))
        r = 16, t = t.toLowerCase();
      else if (ml.test(t))
        r = 2;
      else if (gl.test(t))
        r = 8;
      else
        throw Error(De + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Eo(n, new n(r), o, o * 2)), u = Tr(t, r, pe), g = u.length - 1, o = g; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Ir(u, g), e.d = u, _ = false, s && (e = U(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : Ve.pow(2, l))), _ = true, e);
    }
    __name(El, "El");
    function bl(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : ot(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Or(5, r)), t = ot(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    __name(bl, "bl");
    function ot(e, t, r, n, i) {
      var o, s, a, l, u = 1, g = e.precision, h = Math.ceil(g / k);
      for (_ = false, l = r.times(r), a = new e(n); ; ) {
        if (s = U(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = U(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return _ = true, s.d.length = h + 1, s;
    }
    __name(ot, "ot");
    function Or(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    __name(Or, "Or");
    function Po(e, t) {
      var r, n = t.s < 0, i = ce(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Ae = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Ae = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Ae = uo(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ae = uo(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    __name(Po, "Po");
    function On(e, t, r, n) {
      var i, o, s, a, l, u, g, h, v, S = e.constructor, A = r !== void 0;
      if (A ? (oe(r, 1, Me), n === void 0 ? n = S.rounding : oe(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite())
        g = xo(e);
      else {
        for (g = ye(e), s = g.indexOf("."), A ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S(1), v.e = g.length - s, v.d = Tr(ye(v), 10, i), v.e = v.d.length), h = Tr(g, 10, i), o = l = h.length; h[--l] == 0; )
          h.pop();
        if (!h[0])
          g = A ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = U(e, v, r, n, 0, i), h = e.d, o = e.e, u = mo), s = h[r], a = i / 2, u = u || h[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, u)
            for (; ++h[--r] > i - 1; )
              h[r] = 0, r || (++o, h.unshift(1));
          for (l = h.length; !h[l - 1]; --l)
            ;
          for (s = 0, g = ""; s < l; s++)
            g += Cn.charAt(h[s]);
          if (A) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  g += "0";
                for (h = Tr(g, i, t), l = h.length; !h[l - 1]; --l)
                  ;
                for (s = 1, g = "1."; s < l; s++)
                  g += Cn.charAt(h[s]);
              } else
                g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              g = "0" + g;
            g = "0." + g;
          } else if (++o > l)
            for (o -= l; o--; )
              g += "0";
          else
            o < l && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    __name(On, "On");
    function co(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    __name(co, "co");
    function xl(e) {
      return new this(e).abs();
    }
    __name(xl, "xl");
    function Pl(e) {
      return new this(e).acos();
    }
    __name(Pl, "Pl");
    function vl(e) {
      return new this(e).acosh();
    }
    __name(vl, "vl");
    function Tl(e, t) {
      return new this(e).plus(t);
    }
    __name(Tl, "Tl");
    function Cl(e) {
      return new this(e).asin();
    }
    __name(Cl, "Cl");
    function Al(e) {
      return new this(e).asinh();
    }
    __name(Al, "Al");
    function Rl(e) {
      return new this(e).atan();
    }
    __name(Rl, "Rl");
    function Sl(e) {
      return new this(e).atanh();
    }
    __name(Sl, "Sl");
    function Il(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ce(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ce(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(U(e, t, o, 1)), t = ce(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(U(e, t, o, 1)), r;
    }
    __name(Il, "Il");
    function Ol(e) {
      return new this(e).cbrt();
    }
    __name(Ol, "Ol");
    function kl(e) {
      return O(e = new this(e), e.e + 1, 2);
    }
    __name(kl, "kl");
    function Dl(e, t, r) {
      return new this(e).clamp(t, r);
    }
    __name(Dl, "Dl");
    function Ml(e) {
      if (!e || typeof e != "object")
        throw Error(Sr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Me, "rounding", 0, 8, "toExpNeg", -it, 0, "toExpPos", 0, it, "maxE", 0, it, "minE", -it, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = An[r]), (n = e[r]) !== void 0)
          if (X(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(De + r + ": " + n);
      if (r = "crypto", i && (this[r] = An[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(go);
          else
            this[r] = false;
        else
          throw Error(De + r + ": " + n);
      return this;
    }
    __name(Ml, "Ml");
    function Nl(e) {
      return new this(e).cos();
    }
    __name(Nl, "Nl");
    function Fl(e) {
      return new this(e).cosh();
    }
    __name(Fl, "Fl");
    function vo(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, po(o)) {
          u.s = o.s, _ ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            _ ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return In(u, o.toString());
        } else if (l !== "string")
          throw Error(De + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), yo.test(o) ? In(u, o) : El(u, o);
      }
      __name(i, "i");
      if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ml, i.clone = vo, i.isDecimal = po, i.abs = xl, i.acos = Pl, i.acosh = vl, i.add = Tl, i.asin = Cl, i.asinh = Al, i.atan = Rl, i.atanh = Sl, i.atan2 = Il, i.cbrt = Ol, i.ceil = kl, i.clamp = Dl, i.cos = Nl, i.cosh = Fl, i.div = _l, i.exp = Ll, i.floor = ql, i.hypot = Bl, i.ln = Ul, i.log = $l, i.log10 = jl, i.log2 = Vl, i.max = Gl, i.min = Jl, i.mod = Ql, i.mul = Hl, i.pow = Wl, i.random = Kl, i.round = zl, i.sign = Yl, i.sin = Zl, i.sinh = Xl, i.sqrt = eu, i.sub = tu, i.sum = ru, i.tan = nu, i.tanh = iu, i.trunc = ou, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(vo, "vo");
    function _l(e, t) {
      return new this(e).div(t);
    }
    __name(_l, "_l");
    function Ll(e) {
      return new this(e).exp();
    }
    __name(Ll, "Ll");
    function ql(e) {
      return O(e = new this(e), e.e + 1, 3);
    }
    __name(ql, "ql");
    function Bl() {
      var e, t, r = new this(0);
      for (_ = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return _ = true, new this(1 / 0);
          r = t;
        }
      return _ = true, r.sqrt();
    }
    __name(Bl, "Bl");
    function po(e) {
      return e instanceof Ve || e && e.toStringTag === ho || false;
    }
    __name(po, "po");
    function Ul(e) {
      return new this(e).ln();
    }
    __name(Ul, "Ul");
    function $l(e, t) {
      return new this(e).log(t);
    }
    __name($l, "$l");
    function Vl(e) {
      return new this(e).log(2);
    }
    __name(Vl, "Vl");
    function jl(e) {
      return new this(e).log(10);
    }
    __name(jl, "jl");
    function Gl() {
      return bo(this, arguments, "lt");
    }
    __name(Gl, "Gl");
    function Jl() {
      return bo(this, arguments, "gt");
    }
    __name(Jl, "Jl");
    function Ql(e, t) {
      return new this(e).mod(t);
    }
    __name(Ql, "Ql");
    function Hl(e, t) {
      return new this(e).mul(t);
    }
    __name(Hl, "Hl");
    function Wl(e, t) {
      return new this(e).pow(t);
    }
    __name(Wl, "Wl");
    function Kl(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : oe(e, 1, Me), n = Math.ceil(e / k), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(go);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= k, n && e && (i = Q(10, k - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= k)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < k && (r -= k - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(Kl, "Kl");
    function zl(e) {
      return O(e = new this(e), e.e + 1, this.rounding);
    }
    __name(zl, "zl");
    function Yl(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(Yl, "Yl");
    function Zl(e) {
      return new this(e).sin();
    }
    __name(Zl, "Zl");
    function Xl(e) {
      return new this(e).sinh();
    }
    __name(Xl, "Xl");
    function eu(e) {
      return new this(e).sqrt();
    }
    __name(eu, "eu");
    function tu(e, t) {
      return new this(e).sub(t);
    }
    __name(tu, "tu");
    function ru() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (_ = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return _ = true, O(r, this.precision, this.rounding);
    }
    __name(ru, "ru");
    function nu(e) {
      return new this(e).tan();
    }
    __name(nu, "nu");
    function iu(e) {
      return new this(e).tanh();
    }
    __name(iu, "iu");
    function ou(e) {
      return O(e = new this(e), e.e + 1, 1);
    }
    __name(ou, "ou");
    C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
    C[Symbol.toStringTag] = "Decimal";
    var Ve = C.constructor = vo(An);
    Cr = new Ve(Cr);
    Ar = new Ve(Ar);
    var we = Ve;
    function st(e) {
      return Ve.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(st, "st");
    f();
    c();
    p();
    d();
    m();
    var Bt = /* @__PURE__ */ __name(class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    }, "Bt");
    function at(e) {
      return e instanceof Bt;
    }
    __name(at, "at");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var kr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    }, "kr");
    f();
    c();
    p();
    d();
    m();
    var Dr = /* @__PURE__ */ __name((e) => e, "Dr");
    var Mr = { bold: Dr, red: Dr, green: Dr, dim: Dr, enabled: false };
    var To = { bold: mr, red: Ze, green: Di, dim: fr, enabled: true };
    var lt = { write(e) {
      e.writeLine(",");
    } };
    f();
    c();
    p();
    d();
    m();
    var Ee = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    }, "Ee");
    f();
    c();
    p();
    d();
    m();
    var Ne = /* @__PURE__ */ __name(class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    }, "Ne");
    var ut = /* @__PURE__ */ __name(class extends Ne {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new kr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Ee("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(lt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    }, "ut");
    f();
    c();
    p();
    d();
    m();
    var Co = ": ";
    var Nr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Co.length;
      }
      write(t) {
        let r = new Ee(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Co).write(this.value);
      }
    }, "Nr");
    f();
    c();
    p();
    d();
    m();
    var ct = /* @__PURE__ */ __name(class e extends Ne {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof ut && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r)
          return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n)
          return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new Ee("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(lt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    var z = /* @__PURE__ */ __name(class extends Ne {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Ee(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    }, "z");
    var kn = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    }, "kn");
    function pt(e) {
      return new kn(Ao(e));
    }
    __name(pt, "pt");
    function Ao(e) {
      let t = new ct();
      for (let [r, n] of Object.entries(e)) {
        let i = new Nr(r, Ro(n));
        t.addField(i);
      }
      return t;
    }
    __name(Ao, "Ao");
    function Ro(e) {
      if (typeof e == "string")
        return new z(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new z(String(e));
      if (typeof e == "bigint")
        return new z(`${e}n`);
      if (e === null)
        return new z("null");
      if (e === void 0)
        return new z("undefined");
      if (st(e))
        return new z(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e) ? new z(`Buffer.alloc(${e.byteLength})`) : new z(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = vr(e) ? e.toISOString() : "Invalid Date";
        return new z(`new Date("${t}")`);
      }
      return e instanceof Ce ? new z(`Prisma.${e._getName()}`) : at(e) ? new z(`prisma.${lo(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? au(e) : typeof e == "object" ? Ao(e) : new z(Object.prototype.toString.call(e));
    }
    __name(Ro, "Ro");
    function au(e) {
      let t = new ut();
      for (let r of e)
        t.addItem(Ro(r));
      return t;
    }
    __name(au, "au");
    function Fr(e, t) {
      let r = t === "pretty" ? To : Mr, n = e.renderAllMessages(r), i = new rt(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Fr, "Fr");
    function So(e) {
      if (e === void 0)
        return "";
      let t = pt(e);
      return new rt(0, { colors: Mr }).write(t).toString();
    }
    __name(So, "So");
    f();
    c();
    p();
    d();
    m();
    var lu = "P2037";
    function Ut({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new W(uu(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ne(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(Ut, "Ut");
    function uu(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === lu && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(uu, "uu");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Dn = /* @__PURE__ */ __name(class {
      getLocation() {
        return null;
      }
    }, "Dn");
    function Fe(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Dn();
    }
    __name(Fe, "Fe");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Io = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function dt(e = {}) {
      let t = pu(e);
      return Object.entries(t).reduce((n, [i, o]) => (Io[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(dt, "dt");
    function pu(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(pu, "pu");
    function _r(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(_r, "_r");
    function Oo(e, t) {
      let r = _r(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: dt })(e);
    }
    __name(Oo, "Oo");
    f();
    c();
    p();
    d();
    m();
    function du(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? dt({ ...r, _count: t }) : dt({ ...r, _count: { _all: true } });
    }
    __name(du, "du");
    function mu(e = {}) {
      return typeof e.select == "object" ? (t) => _r(e)(t)._count : (t) => _r(e)(t)._count._all;
    }
    __name(mu, "mu");
    function ko(e, t) {
      return t({ action: "count", unpacker: mu(e), argsMapper: du })(e);
    }
    __name(ko, "ko");
    f();
    c();
    p();
    d();
    m();
    function fu(e = {}) {
      let t = dt(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(fu, "fu");
    function gu(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(gu, "gu");
    function Do(e, t) {
      return t({ action: "groupBy", unpacker: gu(e), argsMapper: fu })(e);
    }
    __name(Do, "Do");
    function Mo(e, t, r) {
      if (t === "aggregate")
        return (n) => Oo(n, r);
      if (t === "count")
        return (n) => ko(n, r);
      if (t === "groupBy")
        return (n) => Do(n, r);
    }
    __name(Mo, "Mo");
    f();
    c();
    p();
    d();
    m();
    function No(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = gn(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Bt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...xr(Object.keys(n)) });
    }
    __name(No, "No");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Fo = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "Fo");
    var Mn = /* @__PURE__ */ __name((e, t) => Fo(t).reduce((r, n) => r && r[n], e), "Mn");
    var _o = /* @__PURE__ */ __name((e, t, r) => Fo(t).reduceRight((n, i, o, s) => Object.assign({}, Mn(e, s.slice(0, o)), { [i]: n }), r), "_o");
    function hu(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(hu, "hu");
    function yu(e, t, r) {
      return t === void 0 ? e ?? {} : _o(t, r, e || true);
    }
    __name(yu, "yu");
    function Nn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Fe(e._errorFormat), g = hu(n, i), h = yu(l, o, g), v = r({ dataPath: g, callsite: u })(h), S = wu(e, t);
        return new Proxy(v, { get(A, R) {
          if (!S.includes(R))
            return A[R];
          let F = [a[R].type, r, R], q = [g, h];
          return Nn(e, ...F, ...q);
        }, ...xr([...S, ...Object.getOwnPropertyNames(v)]) });
      };
    }
    __name(Nn, "Nn");
    function wu(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(wu, "wu");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Eu = qe(Ji());
    var bu = { red: Ze, gray: _i, dim: fr, bold: mr, underline: ki, highlightSource: (e) => e.highlight() };
    var xu = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Pu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Pu, "Pu");
    function vu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Tu(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(vu, "vu");
    function Tu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Tu, "Tu");
    function mt(e) {
      let t = e.showColors ? bu : xu, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Pu(e), vu(r, t);
    }
    __name(mt, "mt");
    function Lo(e, t, r, n) {
      return e === Ue.ModelAction.findFirstOrThrow || e === Ue.ModelAction.findUniqueOrThrow ? Cu(t, r, n) : n;
    }
    __name(Lo, "Lo");
    function Cu(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = mt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new K(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof W && o.code === "P2025" ? new ve(`No ${e} found`, t) : o;
        });
      };
    }
    __name(Cu, "Cu");
    f();
    c();
    p();
    d();
    m();
    function be(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(be, "be");
    var Au = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Ru = ["aggregate", "count", "groupBy"];
    function Fn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Su(e, t), Ou(e, t), Lt(r), te("name", () => t), te("$name", () => t), te("$parent", () => e._appliedParent)];
      return he({}, n);
    }
    __name(Fn, "Fn");
    function Su(e, t) {
      let r = be(t), n = Object.keys(Ue.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((l) => e._request(l), "s");
        s = Lo(o, t, e._clientVersion, s);
        let a = /* @__PURE__ */ __name((l) => (u) => {
          let g = Fe(e._errorFormat);
          return e._createPrismaPromise((h) => {
            let v = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: h, callsite: g };
            return s({ ...v, ...l });
          });
        }, "a");
        return Au.includes(o) ? Nn(e, t, a) : Iu(i) ? Mo(e, i, a) : a({});
      } };
    }
    __name(Su, "Su");
    function Iu(e) {
      return Ru.includes(e);
    }
    __name(Iu, "Iu");
    function Ou(e, t) {
      return $e(te("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return No(t, r);
      }));
    }
    __name(Ou, "Ou");
    f();
    c();
    p();
    d();
    m();
    function qo(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(qo, "qo");
    var _n = Symbol();
    function $t(e) {
      let t = [ku(e), te(_n, () => e), te("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Lt(r)), he(e, t);
    }
    __name($t, "$t");
    function ku(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(be), n = [...new Set(t.concat(r))];
      return $e({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = qo(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return Fn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return Fn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    __name(ku, "ku");
    function Bo(e) {
      return e[_n] ? e[_n] : e;
    }
    __name(Bo, "Bo");
    function Uo(e) {
      if (typeof e == "function")
        return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return $t(t);
    }
    __name(Uo, "Uo");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function $o({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name])
            continue;
          let u = l.needs.filter((g) => n[g]);
          u.length > 0 && a.push(tt(u));
        } else if (r) {
          if (!r[l.name])
            continue;
          let u = l.needs.filter((g) => !r[g]);
          u.length > 0 && a.push(tt(u));
        }
        Du(e, l.needs) && s.push(Mu(l, he(e, s)));
      }
      return s.length > 0 || a.length > 0 ? he(e, [...s, ...a]) : e;
    }
    __name($o, "$o");
    function Du(e, t) {
      return t.every((r) => fn2(e, r));
    }
    __name(Du, "Du");
    function Mu(e, t) {
      return $e(te(e.name, () => e.compute(t)));
    }
    __name(Mu, "Mu");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Lr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Lr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Vo({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Vo({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Lr, "Lr");
    function Vo({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || me(s))
          continue;
        let l = n.models[r].fields.find((g) => g.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = Lr({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(Vo, "Vo");
    function jo({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Lr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
        let g = be(l);
        return $o({ result: a, modelName: g, select: u.select, omit: u.select ? void 0 : { ...o?.[g], ...u.omit }, extensions: n });
      } });
    }
    __name(jo, "jo");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Go(e) {
      if (e instanceof ie)
        return Nu(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Vt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Vt(e[r]);
      return t;
    }
    __name(Go, "Go");
    function Nu(e) {
      return new ie(e.strings, e.values);
    }
    __name(Nu, "Nu");
    function Vt(e) {
      if (typeof e != "object" || e == null || e instanceof Ce || at(e))
        return e;
      if (st(e))
        return new we(e.toFixed());
      if (nt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Vt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Vt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Vt(e[r]);
        return t;
      }
      Pe(e, "Unknown value");
    }
    __name(Vt, "Vt");
    function Qo(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Go(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = zo(o, l), a.args = s, Qo(e, a, r, n + 1);
        } });
      });
    }
    __name(Qo, "Qo");
    function Ho(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Qo(e, t, s);
    }
    __name(Ho, "Ho");
    function Wo(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Ko(r, n, 0, e) : e(r);
      };
    }
    __name(Wo, "Wo");
    function Ko(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = zo(i, l), Ko(a, t, r + 1, n);
      } });
    }
    __name(Ko, "Ko");
    var Jo = /* @__PURE__ */ __name((e) => e, "Jo");
    function zo(e = Jo, t = Jo) {
      return (r) => e(t(r));
    }
    __name(zo, "zo");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function Zo(e, t, r) {
      let n = be(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Fu({ ...e, ...Yo(t.name, e, t.result.$allModels), ...Yo(t.name, e, t.result[n]) });
    }
    __name(Zo, "Zo");
    function Fu(e) {
      let t = new ge(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Xe(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Fu, "Fu");
    function Yo(e, t, r) {
      return r ? Xe(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: _u(t, o, i) })) : {};
    }
    __name(Yo, "Yo");
    function _u(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(_u, "_u");
    function Xo(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    __name(Xo, "Xo");
    function es(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    __name(es, "es");
    var qr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new ge();
        this.modelExtensionsCache = new ge();
        this.queryCallbacksCache = new ge();
        this.clientExtensions = It(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = It(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => Zo(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = be(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    }, "qr");
    var Br = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new qr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new qr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    var ts = ee("prisma:client");
    var rs = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ns({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ts("checkPlatformCaching:postinstall", e), ts("checkPlatformCaching:ciName", t), e === true && t && t in rs) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${rs[t]}-build`;
        throw console.error(n), new J(n, r);
      }
    }
    __name(ns, "ns");
    f();
    c();
    p();
    d();
    m();
    function is(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(is, "is");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Lu = "Cloudflare-Workers";
    var qu = "node";
    function os() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Lu ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === qu ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(os, "os");
    var Bu = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Ur() {
      let e = os();
      return { id: e, prettyName: Bu[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Ur, "Ur");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function ft({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw Ur().id === "workerd" ? new J(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new J(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new J("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(ft, "ft");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var $r = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    }, "$r");
    var se = /* @__PURE__ */ __name(class extends $r {
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    }, "se");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function L(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(L, "L");
    var gt = /* @__PURE__ */ __name(class extends se {
      constructor(r) {
        super("This request must be retried", L(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    }, "gt");
    N(gt, "ForcedRetryError");
    f();
    c();
    p();
    d();
    m();
    var je = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    }, "je");
    N(je, "InvalidDatasourceError");
    f();
    c();
    p();
    d();
    m();
    var Ge = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    }, "Ge");
    N(Ge, "NotImplementedYetError");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var j = /* @__PURE__ */ __name(class extends se {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    }, "j");
    var Je = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Schema needs to be uploaded", L(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    }, "Je");
    N(Je, "SchemaMissingError");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var Ln = "This request could not be understood by the server";
    var jt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || Ln, L(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    }, "jt");
    N(jt, "BadRequestError");
    f();
    c();
    p();
    d();
    m();
    var Gt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", L(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    }, "Gt");
    N(Gt, "HealthcheckTimeoutError");
    f();
    c();
    p();
    d();
    m();
    var Jt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n, L(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    }, "Jt");
    N(Jt, "EngineStartupError");
    f();
    c();
    p();
    d();
    m();
    var Qt = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Engine version is not supported", L(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    }, "Qt");
    N(Qt, "EngineVersionNotSupportedError");
    f();
    c();
    p();
    d();
    m();
    var qn = "Request timed out";
    var Ht = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = qn) {
        super(n, L(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    }, "Ht");
    N(Ht, "GatewayTimeoutError");
    f();
    c();
    p();
    d();
    m();
    var Uu = "Interactive transaction error";
    var Wt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Uu) {
        super(n, L(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    }, "Wt");
    N(Wt, "InteractiveTransactionError");
    f();
    c();
    p();
    d();
    m();
    var $u = "Request parameters are invalid";
    var Kt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = $u) {
        super(n, L(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    }, "Kt");
    N(Kt, "InvalidRequestError");
    f();
    c();
    p();
    d();
    m();
    var Bn = "Requested resource does not exist";
    var zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Bn) {
        super(n, L(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    }, "zt");
    N(zt, "NotFoundError");
    f();
    c();
    p();
    d();
    m();
    var Un = "Unknown server error";
    var ht = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || Un, L(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    }, "ht");
    N(ht, "ServerError");
    f();
    c();
    p();
    d();
    m();
    var $n = "Unauthorized, check your connection string";
    var Yt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = $n) {
        super(n, L(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    }, "Yt");
    N(Yt, "UnauthorizedError");
    f();
    c();
    p();
    d();
    m();
    var Vn = "Usage exceeded, retry again later";
    var Zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Vn) {
        super(n, L(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    }, "Zt");
    N(Zt, "UsageExceededError");
    async function Vu(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    __name(Vu, "Vu");
    async function Xt(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Vu(e);
      if (n.type === "QueryEngineError")
        throw new W(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new ht(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Je(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Qt(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Jt(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new J(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Gt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Wt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new Kt(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new Yt(r, yt($n, n));
      if (e.status === 404)
        return new zt(r, yt(Bn, n));
      if (e.status === 429)
        throw new Zt(r, yt(Vn, n));
      if (e.status === 504)
        throw new Ht(r, yt(qn, n));
      if (e.status >= 500)
        throw new ht(r, yt(Un, n));
      if (e.status >= 400)
        throw new jt(r, yt(Ln, n));
    }
    __name(Xt, "Xt");
    function yt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    __name(yt, "yt");
    f();
    c();
    p();
    d();
    m();
    function ss(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(ss, "ss");
    f();
    c();
    p();
    d();
    m();
    var Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function as(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, g;
      for (let h = 0; h < o; h = h + 3)
        g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l = (g & 4032) >> 6, u = g & 63, r += Re[s] + Re[a] + Re[l] + Re[u];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Re[s] + Re[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l = (g & 15) << 2, r += Re[s] + Re[a] + Re[l] + "="), r;
    }
    __name(as, "as");
    f();
    c();
    p();
    d();
    m();
    function ls(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
        throw new J("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(ls, "ls");
    f();
    c();
    p();
    d();
    m();
    function ju(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(ju, "ju");
    function us(e) {
      return new Date(ju(e));
    }
    __name(us, "us");
    f();
    c();
    p();
    d();
    m();
    var cs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.21.1-1.bf0e5e8a04cada8225617067eaa03d041e2bba36", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var er = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, L(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    }, "er");
    N(er, "RequestError");
    async function Qe(e, t, r = (n) => n) {
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(jn)(e, t);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new er(o, { clientVersion: n });
      }
    }
    __name(Qe, "Qe");
    function Ju(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    __name(Ju, "Ju");
    function Qu(e) {
      return { method: e.method, headers: Ju(e) };
    }
    __name(Qu, "Qu");
    function Hu(e, t) {
      return { text: () => Promise.resolve(w.Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Gn(t.headers) };
    }
    __name(Hu, "Hu");
    async function jn(e, t = {}) {
      let r = Wu("https"), n = Qu(t), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = r.request(e, n, (u) => {
          let { statusCode: g, headers: { location: h } } = u;
          g >= 301 && g <= 399 && h && (h.startsWith("http") === false ? s(jn(`${o}${h}`, t)) : s(jn(h, t))), u.on("data", (v) => i.push(v)), u.on("end", () => s(Hu(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(t.body ?? "");
      });
    }
    __name(jn, "jn");
    var Wu = typeof __require < "u" ? __require : () => {
    };
    var Gn = /* @__PURE__ */ __name(class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        return this.headers.get(t) ?? null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    }, "Gn");
    var Ku = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var ps = ee("prisma:client:dataproxyEngine");
    async function zu(e, t) {
      let r = cs["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && Ku.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), g = Yu(`<=${a}.${l}.${u}`), h = await Qe(g, { clientVersion: n });
        if (!h.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
        let v = await h.text();
        ps("length of body fetched from unpkg.com", v.length);
        let S;
        try {
          S = JSON.parse(v);
        } catch (A) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), A;
        }
        return S.version;
      }
      throw new Ge("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(zu, "zu");
    async function ds(e, t) {
      let r = await zu(e, t);
      return ps("version", r), r;
    }
    __name(ds, "ds");
    function Yu(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(Yu, "Yu");
    var ms = 3;
    var Jn = ee("prisma:client:dataproxyEngine");
    var Qn = /* @__PURE__ */ __name(class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    }, "Qn");
    var tr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.name = "DataProxyEngine";
        ls(t), this.config = t, this.env = { ...t.env, ...typeof y < "u" ? y.env : {} }, this.inlineSchema = as(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new Qn({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ds(t, this.config), Jn("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        t?.logs?.length && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: us(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
            }
          }
        }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await Qe(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || Jn("schema response status", r.status);
          let n = await Xt(r, this.clientVersion);
          if (n)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Pr(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
        return a.map((u) => "errors" in u && u.errors.length > 0 ? Ut(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await Qe(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || Jn("graphql response status", a.status), await this.handleError(await Xt(a, this.clientVersion));
          let l = await a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors)
            throw l.errors.length === 1 ? Ut(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new ne(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        } });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await Qe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Xt(l, this.clientVersion));
            let u = await l.json(), g = u.extensions;
            g && this.propagateResponseExtensions(g);
            let h = u.id, v = u["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Qe(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Xt(a, this.clientVersion));
            let u = (await a.json()).extensions;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = ft({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new je(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== "prisma+postgres:")
          throw new je(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let l = a.get("api_key");
        if (l === null || l.length < 1)
          throw new je(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, l];
      }
      metrics() {
        throw new Ge("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable)
              throw i;
            if (r >= ms)
              throw i instanceof gt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${ms} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await ss(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof Je)
          throw await this.uploadSchema(), new gt({ clientVersion: this.clientVersion, cause: t });
        if (t)
          throw t;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    }, "tr");
    function fs({ copyEngine: e = true }, t) {
      let r;
      try {
        r = ft({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
      e && n && St("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Ct(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary";
      if (o && s || s) {
        let u;
        throw u = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new K(u.join(`
`), { clientVersion: t.clientVersion });
      }
      if (o)
        return new tr(t);
      throw new K("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    __name(fs, "fs");
    f();
    c();
    p();
    d();
    m();
    function Vr({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(Vr, "Vr");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    function wt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(wt, "wt");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var bs = qe(Hn());
    f();
    c();
    p();
    d();
    m();
    function ws(e, t, r) {
      let n = Es(e), i = Zu(n), o = ec(i);
      o ? jr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(ws, "ws");
    function Es(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Es(t) : [t]);
    }
    __name(Es, "Es");
    function Zu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Xu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(Zu, "Zu");
    function Xu(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(Xu, "Xu");
    function ec(e) {
      return hn(e, (t, r) => {
        let n = hs(t), i = hs(r);
        return n !== i ? n - i : ys(t) - ys(r);
      });
    }
    __name(ec, "ec");
    function hs(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(hs, "hs");
    function ys(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(ys, "ys");
    f();
    c();
    p();
    d();
    m();
    var le = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    }, "le");
    f();
    c();
    p();
    d();
    m();
    var rr = /* @__PURE__ */ __name(class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(lt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    }, "rr");
    function jr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          tc(e, t);
          break;
        case "IncludeOnScalar":
          rc(e, t);
          break;
        case "EmptySelection":
          nc(e, t, r);
          break;
        case "UnknownSelectionField":
          ac(e, t);
          break;
        case "InvalidSelectionValue":
          lc(e, t);
          break;
        case "UnknownArgument":
          uc(e, t);
          break;
        case "UnknownInputField":
          cc(e, t);
          break;
        case "RequiredArgumentMissing":
          pc(e, t);
          break;
        case "InvalidArgumentType":
          dc(e, t);
          break;
        case "InvalidArgumentValue":
          mc(e, t);
          break;
        case "ValueTooLarge":
          fc(e, t);
          break;
        case "SomeFieldsMissing":
          gc(e, t);
          break;
        case "TooManyFieldsGiven":
          hc(e, t);
          break;
        case "Union":
          ws(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(jr, "jr");
    function tc(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(tc, "tc");
    function rc(e, t) {
      let [r, n] = nr(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new le(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${ir(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(rc, "rc");
    function nc(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          ic(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          oc(e, t);
          return;
        }
      }
      if (r?.[wt(e.outputType.name)]) {
        sc(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(nc, "nc");
    function ic(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(ic, "ic");
    function oc(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), vs(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${ir(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(oc, "oc");
    function sc(e, t) {
      let r = new rr();
      for (let i of e.outputType.fields)
        i.isRelation || r.addField(i.name, "false");
      let n = new le("omit", r).makeRequired();
      if (e.selectionPath.length === 0)
        t.arguments.addSuggestion(n);
      else {
        let [i, o] = nr(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new ct();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(sc, "sc");
    function ac(e, t) {
      let r = Ts(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            vs(n, e.outputType);
            break;
          case "include":
            yc(n, e.outputType);
            break;
          case "omit":
            wc(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(ir(n)), i.join(" ");
      });
    }
    __name(ac, "ac");
    function lc(e, t) {
      let r = Ts(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(lc, "lc");
    function uc(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Ec(n, e.arguments)), t.addErrorMessage((i) => xs(i, r, e.arguments.map((o) => o.name)));
    }
    __name(uc, "uc");
    function cc(e, t) {
      let [r, n] = nr(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Cs(o, e.inputType);
      }
      t.addErrorMessage((o) => xs(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(cc, "cc");
    function xs(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = xc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(ir(e)), n.join(" ");
    }
    __name(xs, "xs");
    function pc(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof z && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n)
        return;
      let [i, o] = nr(e.argumentPath), s = new rr(), a = n.getDeepFieldValue(i)?.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new le(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Ps).join(" | ");
          a.addSuggestion(new le(o, l).makeRequired());
        }
    }
    __name(pc, "pc");
    function Ps(e) {
      return e.kind === "list" ? `${Ps(e.elementType)}[]` : e.name;
    }
    __name(Ps, "Ps");
    function dc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Gr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(dc, "dc");
    function mc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Gr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(mc, "mc");
    function fc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof z && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(fc, "fc");
    function gc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Cs(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Gr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(ir(i)), o.join(" ");
      });
    }
    __name(gc, "gc");
    function hc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Gr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(hc, "hc");
    function vs(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    __name(vs, "vs");
    function yc(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    __name(yc, "yc");
    function wc(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    __name(wc, "wc");
    function Ec(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Ec, "Ec");
    function Ts(e, t) {
      let [r, n] = nr(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i)
        return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(Ts, "Ts");
    function Cs(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Cs, "Cs");
    function nr(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(nr, "nr");
    function ir({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(ir, "ir");
    function Gr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Gr, "Gr");
    var bc = 3;
    function xc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, bs.default)(e, i);
        o > bc || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(xc, "xc");
    function Jr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = pt(e);
      for (let h of t)
        jr(h, a, s);
      let { message: l, args: u } = Fr(a, r), g = mt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new K(g, { clientVersion: o });
    }
    __name(Jr, "Jr");
    var Pc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var As = "explicitly `undefined` values are not allowed";
    function Rs({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g }) {
      let h = new Wn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g });
      return { modelName: e, action: Pc[t], query: or(r, h) };
    }
    __name(Rs, "Rs");
    function or({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Is(r, n), selection: vc(e, t, i, n) };
    }
    __name(or, "or");
    function vc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Rc(e, n)) : Tc(n, t, r);
    }
    __name(vc, "vc");
    function Tc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Cc(n, t, e), e.isPreviewFeatureOn("omitApi") && Ac(n, r, e), n;
    }
    __name(Tc, "Tc");
    function Cc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (me(i))
          continue;
        let o = r.nestSelection(n);
        if (Kn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = or(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = or(i, o);
      }
    }
    __name(Cc, "Cc");
    function Ac(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = es(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (me(a))
          continue;
        Kn(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(Ac, "Ac");
    function Rc(e, t) {
      let r = {}, n = t.getComputedFields(), i = Xo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (me(s))
          continue;
        let a = t.nestSelection(o);
        Kn(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || me(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = or({}, a) : r[o] = true;
            continue;
          }
          r[o] = or(s, a);
        }
      }
      return r;
    }
    __name(Rc, "Rc");
    function Ss(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (nt(e)) {
        if (vr(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (at(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Sc(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
      if (Ic(e))
        return e.values;
      if (st(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ce) {
        if (e !== wr.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Oc(e))
        return e.toJSON();
      if (typeof e == "object")
        return Is(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Ss, "Ss");
    function Is(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        me(i) || (i !== void 0 ? r[n] = Ss(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: As }));
      }
      return r;
    }
    __name(Is, "Is");
    function Sc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || me(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Ss(o, i));
      }
      return r;
    }
    __name(Sc, "Sc");
    function Ic(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(Ic, "Ic");
    function Oc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(Oc, "Oc");
    function Kn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: As });
    }
    __name(Kn, "Kn");
    var Wn = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        Jr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType))
          return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[wt(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Pe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    }, "e");
    f();
    c();
    p();
    d();
    m();
    var Os = /* @__PURE__ */ __name((e) => ({ command: e }), "Os");
    f();
    c();
    p();
    d();
    m();
    f();
    c();
    p();
    d();
    m();
    var ks = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "ks");
    f();
    c();
    p();
    d();
    m();
    function Et(e) {
      try {
        return Ds(e, "fast");
      } catch {
        return Ds(e, "slow");
      }
    }
    __name(Et, "Et");
    function Ds(e, t) {
      return JSON.stringify(e.map((r) => Ns(r, t)));
    }
    __name(Ds, "Ds");
    function Ns(e, t) {
      return Array.isArray(e) ? e.map((r) => Ns(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : nt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : we.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : w.Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : kc(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Fs(e) : e;
    }
    __name(Ns, "Ns");
    function kc(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(kc, "kc");
    function Fs(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ms);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ms(e[r]);
      return t;
    }
    __name(Fs, "Fs");
    function Ms(e) {
      return typeof e == "bigint" ? e.toString() : Fs(e);
    }
    __name(Ms, "Ms");
    f();
    c();
    p();
    d();
    m();
    var Dc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var _s = Dc;
    var Mc = /^(\s*alter\s)/i;
    var Ls = ee("prisma:client");
    function zn(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Mc.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(zn, "zn");
    var Yn = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (r instanceof Ft)
        n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Et(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: Et(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = ks(r), i = { values: Et(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i?.values ? Ls(`prisma.${e}(${n}, ${i.values})`) : Ls(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Yn");
    var qs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ie(t, r);
    } };
    var Bs = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    f();
    c();
    p();
    d();
    m();
    function Zn(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= Us(r(o)) : Us(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Zn, "Zn");
    function Us(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(Us, "Us");
    f();
    c();
    p();
    d();
    m();
    var $s = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Xn = /* @__PURE__ */ __name(class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? $s;
      }
    }, "Xn");
    function Vs(e) {
      return e.includes("tracing") ? new Xn() : $s;
    }
    __name(Vs, "Vs");
    f();
    c();
    p();
    d();
    m();
    function js(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(js, "js");
    f();
    c();
    p();
    d();
    m();
    function Gs(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(Gs, "Gs");
    f();
    c();
    p();
    d();
    m();
    var Qr = /* @__PURE__ */ __name(class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    }, "Qr");
    f();
    c();
    p();
    d();
    m();
    var Hs = qe(zi());
    f();
    c();
    p();
    d();
    m();
    function Hr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(Hr, "Hr");
    f();
    c();
    p();
    d();
    m();
    function Wr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Wr) : typeof e == "object" ? Nc(e) ? Fc(e) : Xe(e, Wr) : e;
    }
    __name(Wr, "Wr");
    function Nc(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(Nc, "Nc");
    function Fc({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return w.Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new we(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pe(t, "Unknown tagged value");
      }
    }
    __name(Fc, "Fc");
    f();
    c();
    p();
    d();
    m();
    function Js(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ei(e.query.arguments)), t.push(ei(e.query.selection)), t.join("");
    }
    __name(Js, "Js");
    function ei(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ei(n)})` : r;
      }).join(" ")})`;
    }
    __name(ei, "ei");
    f();
    c();
    p();
    d();
    m();
    var _c = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function ti(e) {
      return _c[e];
    }
    __name(ti, "ti");
    f();
    c();
    p();
    d();
    m();
    var Kr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    }, "Kr");
    f();
    c();
    p();
    d();
    m();
    function He(e, t) {
      if (t === null)
        return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return w.Buffer.from(t, "base64");
        case "decimal":
          return new we(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => He("bigint", r));
        case "bytes-array":
          return t.map((r) => He("bytes", r));
        case "decimal-array":
          return t.map((r) => He("decimal", r));
        case "datetime-array":
          return t.map((r) => He("datetime", r));
        case "date-array":
          return t.map((r) => He("date", r));
        case "time-array":
          return t.map((r) => He("time", r));
        default:
          return t;
      }
    }
    __name(He, "He");
    function Qs(e) {
      let t = [], r = Lc(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++)
          o[e.columns[s]] = He(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(Qs, "Qs");
    function Lc(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++)
        t[e.columns[r]] = null;
      return t;
    }
    __name(Lc, "Lc");
    var qc = ee("prisma:client:request_handler");
    var zr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Kr({ batchLoader: Wo(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((h) => ti(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Bc(o), containsWrite: u, customDataProxyFetch: i })).map((h, v) => {
            if (h instanceof Error)
              return h;
            try {
              return this.mapQueryEngineResult(n[v], h);
            } catch (S) {
              return S;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? Ws(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ti(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Js(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (qc(t), Uc(t, i) || t instanceof ve)
          throw t;
        if (t instanceof W && $c(t)) {
          let u = Ks(t.meta);
          Jr({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = mt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new W(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new Te(l, this.client._clientVersion);
          if (t instanceof ne)
            throw new ne(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof J)
            throw new J(l, this.client._clientVersion);
          if (t instanceof Te)
            throw new Te(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Hs.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Mn(o, s), l = i === "queryRaw" ? Qs(a) : Wr(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    }, "zr");
    function Bc(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Ws(e) };
        Pe(e, "Unknown transaction kind");
      }
    }
    __name(Bc, "Bc");
    function Ws(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Ws, "Ws");
    function Uc(e, t) {
      return Hr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Uc, "Uc");
    function $c(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name($c, "$c");
    function Ks(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Ks) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Ks, "Ks");
    f();
    c();
    p();
    d();
    m();
    var zs = "5.21.1";
    var Ys = zs;
    f();
    c();
    p();
    d();
    m();
    var ra = qe(Hn());
    f();
    c();
    p();
    d();
    m();
    var B = /* @__PURE__ */ __name(class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    }, "B");
    N(B, "PrismaClientConstructorValidationError");
    var Zs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var Xs = ["pretty", "colorless", "minimal"];
    var ea = ["info", "query", "warn", "error"];
    var jc = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = bt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new B('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Vr(t).includes("driverAdapters"))
        throw new B('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ct() === "binary")
        throw new B('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new B(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Xs.includes(e)) {
          let t = bt(e, Xs);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ea.includes(r)) {
          let n = bt(r, ea);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = bt(i, o);
            throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e)
        return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new B(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new B(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object")
        throw new B('"omit" option is expected to be an object.');
      if (e === null)
        throw new B('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Jc(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0)
        throw new B(Qc(e, r));
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = bt(r, t);
          throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function na(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Zs.includes(r)) {
          let i = bt(r, Zs);
          throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        jc[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new B('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(na, "na");
    function bt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Gc(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(bt, "bt");
    function Gc(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, ra.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Gc, "Gc");
    function Jc(e, t) {
      return ta(t.models, e) ?? ta(t.types, e);
    }
    __name(Jc, "Jc");
    function ta(e, t) {
      let r = Object.keys(e).find((n) => wt(n) === t);
      if (r)
        return e[r];
    }
    __name(ta, "ta");
    function Qc(e, t) {
      let r = pt(e);
      for (let o of t)
        switch (o.kind) {
          case "UnknownModel":
            r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
            break;
          case "UnknownField":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
          case "RelationInOmit":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
            break;
          case "InvalidFieldValue":
            r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
            break;
        }
      let { message: n, args: i } = Fr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Qc, "Qc");
    f();
    c();
    p();
    d();
    m();
    function ia(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l = /* @__PURE__ */ __name((u) => {
          o || (o = true, r(u));
        }, "l");
        for (let u = 0; u < e.length; u++)
          e[u].then((g) => {
            n[u] = g, a();
          }, (g) => {
            if (!Hr(g)) {
              l(g);
              return;
            }
            g.batchRequestIdx === u ? l(g) : (i || (i = g), a());
          });
      });
    }
    __name(ia, "ia");
    var _e = ee("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Hc = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Wc = Symbol.for("prisma.client.transaction.id");
    var Kc = { id: 0, nextId() {
      return ++this.id;
    } };
    function aa(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Qr();
          this._createPrismaPromise = Zn();
          this.$extends = Uo;
          e = n?.__internal?.configOverride?.(e) ?? e, ns(e), n && na(n, e);
          let i = new hr().on("error", () => {
          });
          this._extensions = Br.empty(), this._previewFeatures = Vr(e), this._clientVersion = e.clientVersion ?? Ys, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Vs(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Tt.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Tt.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = Pn(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l)
              throw new J(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0)
              throw new J("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, g = u.debug === true;
            g && ee.enable("prisma:client");
            let h = Tt.resolve(e.dirname, e.relativePath);
            Ci.existsSync(h) || (h = e.dirname), _e("dirname", e.dirname), _e("relativePath", e.relativePath), _e("cwd", h);
            let v = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, datamodelPath: Tt.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Gs(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((S) => typeof S == "string" ? S === "query" : S.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: is(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: ft, getBatchRequestPayload: Pr, prismaGraphQLToJSError: Ut, PrismaClientUnknownRequestError: ne, PrismaClientInitializationError: J, PrismaClientKnownRequestError: W, debug: ee("prisma:client:accelerateEngine"), engineVersion: sa.version, clientVersion: e.clientVersion } }, _e("clientVersion", e.clientVersion), this._engine = fs(e, this._engineConfig), this._requestHandler = new zr(this, i), l.log)
              for (let S of l.log) {
                let A = typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
                A && this.$on(A, (R) => {
                  Rt.log(`${Rt.tags[A] ?? ""}`, R.message || R.query);
                });
              }
            this._metrics = new et(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = $t(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Bi();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = oa(n, i);
              return zn(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new K("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (zn(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new K(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Os, callsite: Fe(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...oa(n, i));
            throw new K("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql"))
              throw new K("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Kc.nextId(), s = js(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: u, isolationLevel: g, lock: s };
            return l.requestTransaction?.(h) ?? l;
          });
          return ia(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return $t(he(Bo(this), [te("_appliedParent", () => this._appliedParent._createItxClient(n)), te("_createPrismaPromise", () => Zn(n)), te(Wc, () => n.id), tt(_s)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Hc, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (u) => {
            let g = this._middlewares.get(++a);
            if (g)
              return this._tracingHelper.runInChildSpan(s.middleware, (M) => g(u, (F) => (M?.end(), l(F))));
            let { runInTransaction: h, args: v, ...S } = u, A = { ...n, ...S };
            v && (A.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === false && delete A.transaction;
            let R = await Ho(this, A);
            return A.model ? jo({ result: R, modelName: A.model, args: A.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : R;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S }) {
          try {
            n = u ? u(n) : n;
            let A = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(A, () => Rs({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ee.enabled("prisma:client") && (_e("Prisma Client call:"), _e(`prisma.${i}(${So(n)})`), _e("Generated request:"), _e(JSON.stringify(R, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: R, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S });
          } catch (A) {
            throw A.clientVersion = this._clientVersion, A;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new K("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      __name(t, "t");
      return t;
    }
    __name(aa, "aa");
    function oa(e, t) {
      return zc(e) ? [new ie(e, t), qs] : [e, Bs];
    }
    __name(oa, "oa");
    function zc(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(zc, "zc");
    f();
    c();
    p();
    d();
    m();
    var Yc = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function la(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Yc.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(la, "la");
    f();
    c();
    p();
    d();
    m();
  }
});

// ../../node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "../../node_modules/.prisma/client/edge.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.21.1",
      engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password"
    };
    exports.Prisma.PostScalarFieldEnum = {
      id: "id",
      title: "title",
      content: "content",
      published: "published",
      authorId: "authorId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Post: "Post"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/mnt/j/Code/Hkirat cohort/code_js/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "debian-openssl-3.0.x",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/mnt/j/Code/Hkirat cohort/code_js/week-13_carve/prisma/schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../week-13_carve/.env"
      },
      "relativePath": "../../../week-13_carve/prisma",
      "clientVersion": "5.21.1",
      "engineVersion": "bf0e5e8a04cada8225617067eaa03d041e2bba36",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  email    String  @unique\n  name     String?\n  password String\n  posts    Post[]\n}\n\nmodel Post {\n  id        String  @id @default(uuid())\n  title     String\n  content   String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  String\n}\n',
      "inlineSchemaHash": "c3d11b4d4da5a15df66655e594319a4e2eeeecd6d848b9eebd0305dea0d66ca3",
      "copyEngine": false
    };
    config2.dirname = "/";
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
    config2.engineWasm = void 0;
    config2.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config2);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// ../../node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "../../node_modules/@prisma/client/edge.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// ../../node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "../../node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export2(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient2,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
    };
    var version2 = "5.21.1";
    var clientVersion = version2;
    var PrismaClient2 = /* @__PURE__ */ __name(class {
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    }, "PrismaClient");
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// node_modules/unenv/runtime/node/crypto/internal/web.mjs
var web_exports = {};
__export(web_exports, {
  getRandomValues: () => getRandomValues,
  randomUUID: () => randomUUID,
  subtle: () => subtle
});
var subtle, randomUUID, getRandomValues;
var init_web = __esm({
  "node_modules/unenv/runtime/node/crypto/internal/web.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    subtle = globalThis.crypto?.subtle;
    randomUUID = /* @__PURE__ */ __name(() => {
      return globalThis.crypto?.randomUUID();
    }, "randomUUID");
    getRandomValues = /* @__PURE__ */ __name((array) => {
      return globalThis.crypto?.getRandomValues(array);
    }, "getRandomValues");
  }
});

// node_modules/unenv/runtime/node/crypto/internal/node.mjs
var node_exports = {};
__export(node_exports, {
  Certificate: () => Certificate,
  Cipher: () => Cipher,
  Cipheriv: () => Cipheriv,
  Decipher: () => Decipher,
  Decipheriv: () => Decipheriv,
  DiffieHellman: () => DiffieHellman,
  DiffieHellmanGroup: () => DiffieHellmanGroup,
  ECDH: () => ECDH,
  Hash: () => Hash,
  Hmac: () => Hmac,
  KeyObject: () => KeyObject,
  Sign: () => Sign,
  Verify: () => Verify,
  X509Certificate: () => X509Certificate,
  checkPrime: () => checkPrime,
  checkPrimeSync: () => checkPrimeSync,
  constants: () => constants,
  createCipher: () => createCipher,
  createCipheriv: () => createCipheriv,
  createDecipher: () => createDecipher,
  createDecipheriv: () => createDecipheriv,
  createDiffieHellman: () => createDiffieHellman,
  createDiffieHellmanGroup: () => createDiffieHellmanGroup,
  createECDH: () => createECDH,
  createHash: () => createHash,
  createHmac: () => createHmac,
  createPrivateKey: () => createPrivateKey,
  createPublicKey: () => createPublicKey,
  createSecretKey: () => createSecretKey,
  createSign: () => createSign,
  createVerify: () => createVerify,
  diffieHellman: () => diffieHellman,
  fips: () => fips,
  generateKey: () => generateKey,
  generateKeyPair: () => generateKeyPair,
  generateKeyPairSync: () => generateKeyPairSync,
  generateKeySync: () => generateKeySync,
  generatePrime: () => generatePrime,
  generatePrimeSync: () => generatePrimeSync,
  getCipherInfo: () => getCipherInfo,
  getCiphers: () => getCiphers,
  getCurves: () => getCurves,
  getDiffieHellman: () => getDiffieHellman,
  getFips: () => getFips,
  getHashes: () => getHashes,
  hash: () => hash,
  hkdf: () => hkdf,
  hkdfSync: () => hkdfSync,
  pbkdf2: () => pbkdf2,
  pbkdf2Sync: () => pbkdf2Sync,
  privateDecrypt: () => privateDecrypt,
  privateEncrypt: () => privateEncrypt,
  pseudoRandomBytes: () => pseudoRandomBytes,
  publicDecrypt: () => publicDecrypt,
  publicEncrypt: () => publicEncrypt,
  randomBytes: () => randomBytes,
  randomFill: () => randomFill,
  randomFillSync: () => randomFillSync,
  randomInt: () => randomInt,
  scrypt: () => scrypt,
  scryptSync: () => scryptSync,
  secureHeapUsed: () => secureHeapUsed,
  setEngine: () => setEngine,
  setFips: () => setFips,
  sign: () => sign3,
  timingSafeEqual: () => timingSafeEqual,
  verify: () => verify3,
  webcrypto: () => webcrypto
});
var MAX_RANDOM_VALUE_BYTES, webcrypto, randomBytes, fips, constants, checkPrime, checkPrimeSync, createCipher, createDecipher, pseudoRandomBytes, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, diffieHellman, generatePrime, generatePrimeSync, getCiphers, getCipherInfo, getCurves, getDiffieHellman, getHashes, hkdf, hkdfSync, pbkdf2, pbkdf2Sync, generateKeyPair, generateKeyPairSync, generateKey, generateKeySync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomFill, randomFillSync, randomInt, scrypt, scryptSync, sign3, setEngine, timingSafeEqual, getFips, setFips, verify3, secureHeapUsed, hash, Certificate, Cipher, Cipheriv, Decipher, Decipheriv, DiffieHellman, DiffieHellmanGroup, ECDH, Hash, Hmac, KeyObject, Sign, Verify, X509Certificate;
var init_node = __esm({
  "node_modules/unenv/runtime/node/crypto/internal/node.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_web();
    MAX_RANDOM_VALUE_BYTES = 65536;
    webcrypto = new Proxy(
      globalThis.crypto,
      {
        get(_, key) {
          if (key === "CryptoKey") {
            return globalThis.CryptoKey;
          }
          if (typeof globalThis.crypto[key] === "function") {
            return globalThis.crypto[key].bind(globalThis.crypto);
          }
          return globalThis.crypto[key];
        }
      }
    );
    randomBytes = /* @__PURE__ */ __name((size, cb) => {
      const bytes = Buffer.alloc(size, 0, void 0);
      for (let generated = 0; generated < size; generated += MAX_RANDOM_VALUE_BYTES) {
        getRandomValues(
          Uint8Array.prototype.slice.call(
            bytes,
            generated,
            generated + MAX_RANDOM_VALUE_BYTES
          )
        );
      }
      if (typeof cb === "function") {
        cb(null, bytes);
        return void 0;
      }
      return bytes;
    }, "randomBytes");
    fips = false;
    constants = {};
    checkPrime = notImplemented("crypto.checkPrime");
    checkPrimeSync = notImplemented(
      "crypto.checkPrimeSync"
    );
    createCipher = notImplemented("crypto.createCipher");
    createDecipher = notImplemented("crypto.createDecipher");
    pseudoRandomBytes = notImplemented("crypto.pseudoRandomBytes");
    createCipheriv = notImplemented(
      "crypto.createCipheriv"
    );
    createDecipheriv = notImplemented("crypto.createDecipheriv");
    createDiffieHellman = notImplemented("crypto.createDiffieHellman");
    createDiffieHellmanGroup = notImplemented("crypto.createDiffieHellmanGroup");
    createECDH = notImplemented("crypto.createECDH");
    createHash = notImplemented("crypto.createHash");
    createHmac = notImplemented("crypto.createHmac");
    createPrivateKey = notImplemented("crypto.createPrivateKey");
    createPublicKey = notImplemented("crypto.createPublicKey");
    createSecretKey = notImplemented("crypto.createSecretKey");
    createSign = notImplemented("crypto.createSign");
    createVerify = notImplemented(
      "crypto.createVerify"
    );
    diffieHellman = notImplemented(
      "crypto.diffieHellman"
    );
    generatePrime = notImplemented(
      "crypto.generatePrime"
    );
    generatePrimeSync = notImplemented("crypto.generatePrimeSync");
    getCiphers = notImplemented("crypto.getCiphers");
    getCipherInfo = notImplemented(
      "crypto.getCipherInfo"
    );
    getCurves = notImplemented("crypto.getCurves");
    getDiffieHellman = notImplemented("crypto.getDiffieHellman");
    getHashes = notImplemented("crypto.getHashes");
    hkdf = notImplemented("crypto.hkdf");
    hkdfSync = notImplemented("crypto.hkdfSync");
    pbkdf2 = notImplemented("crypto.pbkdf2");
    pbkdf2Sync = notImplemented("crypto.pbkdf2Sync");
    generateKeyPair = notImplemented("crypto.generateKeyPair");
    generateKeyPairSync = notImplemented("crypto.generateKeyPairSync");
    generateKey = notImplemented("crypto.generateKey");
    generateKeySync = notImplemented("crypto.generateKeySync");
    privateDecrypt = notImplemented(
      "crypto.privateDecrypt"
    );
    privateEncrypt = notImplemented(
      "crypto.privateEncrypt"
    );
    publicDecrypt = notImplemented(
      "crypto.publicDecrypt"
    );
    publicEncrypt = notImplemented(
      "crypto.publicEncrypt"
    );
    randomFill = notImplemented("crypto.randomFill");
    randomFillSync = notImplemented(
      "crypto.randomFillSync"
    );
    randomInt = notImplemented("crypto.randomInt");
    scrypt = notImplemented("crypto.scrypt");
    scryptSync = notImplemented("crypto.scryptSync");
    sign3 = notImplemented("crypto.sign");
    setEngine = notImplemented("crypto.setEngine");
    timingSafeEqual = notImplemented("crypto.timingSafeEqual");
    getFips = notImplemented("crypto.getFips");
    setFips = notImplemented("crypto.setFips");
    verify3 = notImplemented("crypto.verify");
    secureHeapUsed = notImplemented(
      "crypto.secureHeapUsed"
    );
    hash = notImplemented("crypto.hash");
    Certificate = notImplementedClass(
      "crypto.Certificate"
    );
    Cipher = notImplementedClass(
      "crypto.Cipher"
    );
    Cipheriv = notImplementedClass(
      "crypto.Cipheriv"
      // @ts-expect-error not typed yet
    );
    Decipher = notImplementedClass(
      "crypto.Decipher"
    );
    Decipheriv = notImplementedClass(
      "crypto.Decipheriv"
      // @ts-expect-error not typed yet
    );
    DiffieHellman = notImplementedClass(
      "crypto.DiffieHellman"
    );
    DiffieHellmanGroup = notImplementedClass(
      "crypto.DiffieHellmanGroup"
    );
    ECDH = notImplementedClass(
      "crypto.ECDH"
    );
    Hash = notImplementedClass(
      "crypto.Hash"
    );
    Hmac = notImplementedClass(
      "crypto.Hmac"
    );
    KeyObject = notImplementedClass(
      "crypto.KeyObject"
    );
    Sign = notImplementedClass(
      "crypto.Sign"
    );
    Verify = notImplementedClass(
      "crypto.Verify"
    );
    X509Certificate = notImplementedClass(
      "crypto.X509Certificate"
    );
  }
});

// node_modules/unenv/runtime/node/crypto/internal/constants.mjs
var constants2, constants_default;
var init_constants = __esm({
  "node_modules/unenv/runtime/node/crypto/internal/constants.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    constants2 = {
      ALPN_ENABLED: 1,
      // Node.js v18 only
      DH_CHECK_P_NOT_PRIME: 1,
      DH_CHECK_P_NOT_SAFE_PRIME: 2,
      DH_NOT_SUITABLE_GENERATOR: 8,
      DH_UNABLE_TO_CHECK_GENERATOR: 4,
      ENGINE_METHOD_ALL: 65535,
      ENGINE_METHOD_CIPHERS: 64,
      ENGINE_METHOD_DH: 4,
      ENGINE_METHOD_DIGESTS: 128,
      ENGINE_METHOD_DSA: 2,
      ENGINE_METHOD_EC: 2048,
      ENGINE_METHOD_NONE: 0,
      ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
      ENGINE_METHOD_PKEY_METHS: 512,
      ENGINE_METHOD_RAND: 8,
      ENGINE_METHOD_RSA: 1,
      OPENSSL_VERSION_NUMBER: 0,
      // explicitly set to 0 to avoid version misdetection
      POINT_CONVERSION_COMPRESSED: 2,
      POINT_CONVERSION_HYBRID: 6,
      POINT_CONVERSION_UNCOMPRESSED: 4,
      RSA_NO_PADDING: 3,
      RSA_PKCS1_OAEP_PADDING: 4,
      RSA_PKCS1_PADDING: 1,
      RSA_PKCS1_PSS_PADDING: 6,
      RSA_PSS_SALTLEN_AUTO: -2,
      RSA_PSS_SALTLEN_DIGEST: -1,
      RSA_PSS_SALTLEN_MAX_SIGN: -2,
      RSA_X931_PADDING: 5,
      SSL_OP_ALL: 2147485776,
      SSL_OP_ALLOW_NO_DHE_KEX: 1024,
      SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
      SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
      SSL_OP_CISCO_ANYCONNECT: 32768,
      SSL_OP_COOKIE_EXCHANGE: 8192,
      SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
      SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
      SSL_OP_EPHEMERAL_RSA: 0,
      // Node.js v18 only
      SSL_OP_LEGACY_SERVER_CONNECT: 4,
      SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
      // Node.js v18 only
      SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
      // Node.js v18 only
      SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_CA_DN_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NO_COMPRESSION: 131072,
      SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
      SSL_OP_NO_QUERY_MTU: 4096,
      SSL_OP_NO_RENEGOTIATION: 1073741824,
      SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
      SSL_OP_NO_SSLv2: 0,
      SSL_OP_NO_SSLv3: 33554432,
      SSL_OP_NO_TICKET: 16384,
      SSL_OP_NO_TLSv1_1: 268435456,
      SSL_OP_NO_TLSv1_2: 134217728,
      SSL_OP_NO_TLSv1_3: 536870912,
      SSL_OP_NO_TLSv1: 67108864,
      SSL_OP_PKCS1_CHECK_1: 0,
      // Node.js v18 only
      SSL_OP_PKCS1_CHECK_2: 0,
      // Node.js v18 only
      SSL_OP_PRIORITIZE_CHACHA: 2097152,
      SSL_OP_SINGLE_DH_USE: 0,
      // Node.js v18 only
      SSL_OP_SINGLE_ECDH_USE: 0,
      // Node.js v18 only
      SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
      // Node.js v18 only
      SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_D5_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_ROLLBACK_BUG: 8388608,
      TLS1_1_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_2_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_3_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      defaultCoreCipherList: "",
      // explicitly set to "" to avoid version misdetection
      get defaultCipherList() {
        return constants2.defaultCoreCipherList;
      },
      set defaultCipherList(_ignored) {
      }
    };
    constants_default = constants2;
  }
});

// node_modules/unenv/runtime/node/crypto/index.mjs
var crypto_default;
var init_crypto = __esm({
  "node_modules/unenv/runtime/node/crypto/index.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_web();
    init_node();
    init_constants();
    init_web();
    init_node();
    init_constants();
    crypto_default = {
      ...web_exports,
      ...node_exports,
      // @ts-expect-error @types/node is out of date - this is a bug in typings
      constants: constants_default
    };
  }
});

// node_modules/unenv/runtime/node/crypto/$cloudflare.mjs
var workerdCrypto, Certificate2, DiffieHellman2, DiffieHellmanGroup2, Hash2, Hmac2, KeyObject2, X509Certificate2, checkPrime2, checkPrimeSync2, createDiffieHellman2, createDiffieHellmanGroup2, createHash2, createHmac2, createPrivateKey2, createPublicKey2, createSecretKey2, generateKey2, generateKeyPair2, generateKeyPairSync2, generateKeySync2, generatePrime2, generatePrimeSync2, getCiphers2, getCurves2, getDiffieHellman2, getFips2, getHashes2, hkdf2, hkdfSync2, pbkdf22, pbkdf2Sync2, randomBytes2, randomFill2, randomFillSync2, randomInt2, randomUUID2, scrypt2, scryptSync2, secureHeapUsed2, setEngine2, setFips2, subtle2, timingSafeEqual2, getRandomValues2, webcrypto2, fips2, cloudflare_default3;
var init_cloudflare4 = __esm({
  "node_modules/unenv/runtime/node/crypto/$cloudflare.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_crypto();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate: Certificate2,
      DiffieHellman: DiffieHellman2,
      DiffieHellmanGroup: DiffieHellmanGroup2,
      Hash: Hash2,
      Hmac: Hmac2,
      KeyObject: KeyObject2,
      X509Certificate: X509Certificate2,
      checkPrime: checkPrime2,
      checkPrimeSync: checkPrimeSync2,
      createDiffieHellman: createDiffieHellman2,
      createDiffieHellmanGroup: createDiffieHellmanGroup2,
      createHash: createHash2,
      createHmac: createHmac2,
      createPrivateKey: createPrivateKey2,
      createPublicKey: createPublicKey2,
      createSecretKey: createSecretKey2,
      generateKey: generateKey2,
      generateKeyPair: generateKeyPair2,
      generateKeyPairSync: generateKeyPairSync2,
      generateKeySync: generateKeySync2,
      generatePrime: generatePrime2,
      generatePrimeSync: generatePrimeSync2,
      getCiphers: getCiphers2,
      getCurves: getCurves2,
      getDiffieHellman: getDiffieHellman2,
      getFips: getFips2,
      getHashes: getHashes2,
      hkdf: hkdf2,
      hkdfSync: hkdfSync2,
      pbkdf2: pbkdf22,
      pbkdf2Sync: pbkdf2Sync2,
      randomBytes: randomBytes2,
      randomFill: randomFill2,
      randomFillSync: randomFillSync2,
      randomInt: randomInt2,
      randomUUID: randomUUID2,
      scrypt: scrypt2,
      scryptSync: scryptSync2,
      secureHeapUsed: secureHeapUsed2,
      setEngine: setEngine2,
      setFips: setFips2,
      subtle: subtle2,
      timingSafeEqual: timingSafeEqual2
    } = workerdCrypto);
    getRandomValues2 = workerdCrypto.getRandomValues.bind(
      workerdCrypto.webcrypto
    );
    webcrypto2 = {
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues: getRandomValues2,
      randomUUID: randomUUID2,
      subtle: subtle2
    };
    fips2 = workerdCrypto.fips;
    cloudflare_default3 = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate: Certificate2,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate: X509Certificate2,
      // @ts-expect-error @types/node is out of date - this is a bug in typings
      constants: constants_default,
      createCipheriv,
      createDecipheriv,
      createECDH,
      createSign,
      createVerify,
      diffieHellman,
      getCipherInfo,
      hash,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      scrypt: scrypt2,
      scryptSync: scryptSync2,
      sign: sign3,
      verify: verify3,
      // default-only export from unenv
      createCipher,
      createDecipher,
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman: DiffieHellman2,
      DiffieHellmanGroup: DiffieHellmanGroup2,
      Hash: Hash2,
      Hmac: Hmac2,
      KeyObject: KeyObject2,
      checkPrime: checkPrime2,
      checkPrimeSync: checkPrimeSync2,
      createDiffieHellman: createDiffieHellman2,
      createDiffieHellmanGroup: createDiffieHellmanGroup2,
      createHash: createHash2,
      createHmac: createHmac2,
      createPrivateKey: createPrivateKey2,
      createPublicKey: createPublicKey2,
      createSecretKey: createSecretKey2,
      generateKey: generateKey2,
      generateKeyPair: generateKeyPair2,
      generateKeyPairSync: generateKeyPairSync2,
      generateKeySync: generateKeySync2,
      generatePrime: generatePrime2,
      generatePrimeSync: generatePrimeSync2,
      getCiphers: getCiphers2,
      getCurves: getCurves2,
      getDiffieHellman: getDiffieHellman2,
      getFips: getFips2,
      getHashes: getHashes2,
      getRandomValues: getRandomValues2,
      hkdf: hkdf2,
      hkdfSync: hkdfSync2,
      pbkdf2: pbkdf22,
      pbkdf2Sync: pbkdf2Sync2,
      randomBytes: randomBytes2,
      randomFill: randomFill2,
      randomFillSync: randomFillSync2,
      randomInt: randomInt2,
      randomUUID: randomUUID2,
      secureHeapUsed: secureHeapUsed2,
      setEngine: setEngine2,
      setFips: setFips2,
      subtle: subtle2,
      timingSafeEqual: timingSafeEqual2,
      // default-only export from workerd
      fips: fips2,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_cloudflare4();
    module.exports = cloudflare_default3;
  }
});

// node_modules/bcryptjs/dist/bcrypt.js
var require_bcrypt = __commonJS({
  "node_modules/bcryptjs/dist/bcrypt.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    (function(global2, factory) {
      if (typeof define === "function" && define["amd"])
        define([], factory);
      else if (typeof __require === "function" && typeof module === "object" && module && module["exports"])
        module["exports"] = factory();
      else
        (global2["dcodeIO"] = global2["dcodeIO"] || {})["bcrypt"] = factory();
    })(exports, function() {
      "use strict";
      var bcrypt2 = {};
      var randomFallback = null;
      function random(len) {
        if (typeof module !== "undefined" && module && module["exports"])
          try {
            return require_crypto()["randomBytes"](len);
          } catch (e) {
          }
        try {
          var a;
          (self["crypto"] || self["msCrypto"])["getRandomValues"](a = new Uint32Array(len));
          return Array.prototype.slice.call(a);
        } catch (e) {
        }
        if (!randomFallback)
          throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
        return randomFallback(len);
      }
      __name(random, "random");
      var randomAvailable = false;
      try {
        random(1);
        randomAvailable = true;
      } catch (e) {
      }
      randomFallback = null;
      bcrypt2.setRandomFallback = function(random2) {
        randomFallback = random2;
      };
      bcrypt2.genSaltSync = function(rounds, seed_length) {
        rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof rounds !== "number")
          throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
        if (rounds < 4)
          rounds = 4;
        else if (rounds > 31)
          rounds = 31;
        var salt = [];
        salt.push("$2a$");
        if (rounds < 10)
          salt.push("0");
        salt.push(rounds.toString());
        salt.push("$");
        salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
        return salt.join("");
      };
      bcrypt2.genSalt = function(rounds, seed_length, callback) {
        if (typeof seed_length === "function")
          callback = seed_length, seed_length = void 0;
        if (typeof rounds === "function")
          callback = rounds, rounds = void 0;
        if (typeof rounds === "undefined")
          rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
        else if (typeof rounds !== "number")
          throw Error("illegal arguments: " + typeof rounds);
        function _async(callback2) {
          nextTick3(function() {
            try {
              callback2(null, bcrypt2.genSaltSync(rounds));
            } catch (err) {
              callback2(err);
            }
          });
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.hashSync = function(s, salt) {
        if (typeof salt === "undefined")
          salt = GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof salt === "number")
          salt = bcrypt2.genSaltSync(salt);
        if (typeof s !== "string" || typeof salt !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof salt);
        return _hash(s, salt);
      };
      bcrypt2.hash = function(s, salt, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s === "string" && typeof salt === "number")
            bcrypt2.genSalt(salt, function(err, salt2) {
              _hash(s, salt2, callback2, progressCallback);
            });
          else if (typeof s === "string" && typeof salt === "string")
            _hash(s, salt, callback2, progressCallback);
          else
            nextTick3(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof salt)));
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      function safeStringCompare(known, unknown) {
        var right = 0, wrong = 0;
        for (var i = 0, k = known.length; i < k; ++i) {
          if (known.charCodeAt(i) === unknown.charCodeAt(i))
            ++right;
          else
            ++wrong;
        }
        if (right < 0)
          return false;
        return wrong === 0;
      }
      __name(safeStringCompare, "safeStringCompare");
      bcrypt2.compareSync = function(s, hash2) {
        if (typeof s !== "string" || typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof hash2);
        if (hash2.length !== 60)
          return false;
        return safeStringCompare(bcrypt2.hashSync(s, hash2.substr(0, hash2.length - 31)), hash2);
      };
      bcrypt2.compare = function(s, hash2, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s !== "string" || typeof hash2 !== "string") {
            nextTick3(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof hash2)));
            return;
          }
          if (hash2.length !== 60) {
            nextTick3(callback2.bind(this, null, false));
            return;
          }
          bcrypt2.hash(s, hash2.substr(0, 29), function(err, comp) {
            if (err)
              callback2(err);
            else
              callback2(null, safeStringCompare(comp, hash2));
          }, progressCallback);
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.getRounds = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        return parseInt(hash2.split("$")[2], 10);
      };
      bcrypt2.getSalt = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        if (hash2.length !== 60)
          throw Error("Illegal hash length: " + hash2.length + " != 60");
        return hash2.substring(0, 29);
      };
      var nextTick3 = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
      function stringToBytes(str) {
        var out = [], i = 0;
        utfx.encodeUTF16toUTF8(function() {
          if (i >= str.length)
            return null;
          return str.charCodeAt(i++);
        }, function(b) {
          out.push(b);
        });
        return out;
      }
      __name(stringToBytes, "stringToBytes");
      var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      var BASE64_INDEX = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        -1,
        -1,
        -1,
        -1,
        -1
      ];
      var stringFromCharCode = String.fromCharCode;
      function base64_encode(b, len) {
        var off2 = 0, rs = [], c1, c2;
        if (len <= 0 || len > b.length)
          throw Error("Illegal len: " + len);
        while (off2 < len) {
          c1 = b[off2++] & 255;
          rs.push(BASE64_CODE[c1 >> 2 & 63]);
          c1 = (c1 & 3) << 4;
          if (off2 >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off2++] & 255;
          c1 |= c2 >> 4 & 15;
          rs.push(BASE64_CODE[c1 & 63]);
          c1 = (c2 & 15) << 2;
          if (off2 >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off2++] & 255;
          c1 |= c2 >> 6 & 3;
          rs.push(BASE64_CODE[c1 & 63]);
          rs.push(BASE64_CODE[c2 & 63]);
        }
        return rs.join("");
      }
      __name(base64_encode, "base64_encode");
      function base64_decode(s, len) {
        var off2 = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
        if (len <= 0)
          throw Error("Illegal len: " + len);
        while (off2 < slen - 1 && olen < len) {
          code = s.charCodeAt(off2++);
          c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          code = s.charCodeAt(off2++);
          c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c1 == -1 || c2 == -1)
            break;
          o = c1 << 2 >>> 0;
          o |= (c2 & 48) >> 4;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off2 >= slen)
            break;
          code = s.charCodeAt(off2++);
          c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c3 == -1)
            break;
          o = (c2 & 15) << 4 >>> 0;
          o |= (c3 & 60) >> 2;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off2 >= slen)
            break;
          code = s.charCodeAt(off2++);
          c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          o = (c3 & 3) << 6 >>> 0;
          o |= c4;
          rs.push(stringFromCharCode(o));
          ++olen;
        }
        var res = [];
        for (off2 = 0; off2 < olen; off2++)
          res.push(rs[off2].charCodeAt(0));
        return res;
      }
      __name(base64_decode, "base64_decode");
      var utfx = function() {
        "use strict";
        var utfx2 = {};
        utfx2.MAX_CODEPOINT = 1114111;
        utfx2.encodeUTF8 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = /* @__PURE__ */ __name(function() {
              return null;
            }, "src");
          while (cp !== null || (cp = src()) !== null) {
            if (cp < 128)
              dst(cp & 127);
            else if (cp < 2048)
              dst(cp >> 6 & 31 | 192), dst(cp & 63 | 128);
            else if (cp < 65536)
              dst(cp >> 12 & 15 | 224), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            else
              dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            cp = null;
          }
        };
        utfx2.decodeUTF8 = function(src, dst) {
          var a, b, c, d, fail = /* @__PURE__ */ __name(function(b2) {
            b2 = b2.slice(0, b2.indexOf(null));
            var err = Error(b2.toString());
            err.name = "TruncatedError";
            err["bytes"] = b2;
            throw err;
          }, "fail");
          while ((a = src()) !== null) {
            if ((a & 128) === 0)
              dst(a);
            else if ((a & 224) === 192)
              (b = src()) === null && fail([a, b]), dst((a & 31) << 6 | b & 63);
            else if ((a & 240) === 224)
              ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 15) << 12 | (b & 63) << 6 | c & 63);
            else if ((a & 248) === 240)
              ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63);
            else
              throw RangeError("Illegal starting byte: " + a);
          }
        };
        utfx2.UTF16toUTF8 = function(src, dst) {
          var c1, c2 = null;
          while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null)
              break;
            if (c1 >= 55296 && c1 <= 57343) {
              if ((c2 = src()) !== null) {
                if (c2 >= 56320 && c2 <= 57343) {
                  dst((c1 - 55296) * 1024 + c2 - 56320 + 65536);
                  c2 = null;
                  continue;
                }
              }
            }
            dst(c1);
          }
          if (c2 !== null)
            dst(c2);
        };
        utfx2.UTF8toUTF16 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = /* @__PURE__ */ __name(function() {
              return null;
            }, "src");
          while (cp !== null || (cp = src()) !== null) {
            if (cp <= 65535)
              dst(cp);
            else
              cp -= 65536, dst((cp >> 10) + 55296), dst(cp % 1024 + 56320);
            cp = null;
          }
        };
        utfx2.encodeUTF16toUTF8 = function(src, dst) {
          utfx2.UTF16toUTF8(src, function(cp) {
            utfx2.encodeUTF8(cp, dst);
          });
        };
        utfx2.decodeUTF8toUTF16 = function(src, dst) {
          utfx2.decodeUTF8(src, function(cp) {
            utfx2.UTF8toUTF16(cp, dst);
          });
        };
        utfx2.calculateCodePoint = function(cp) {
          return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
        };
        utfx2.calculateUTF8 = function(src) {
          var cp, l = 0;
          while ((cp = src()) !== null)
            l += utfx2.calculateCodePoint(cp);
          return l;
        };
        utfx2.calculateUTF16asUTF8 = function(src) {
          var n = 0, l = 0;
          utfx2.UTF16toUTF8(src, function(cp) {
            ++n;
            l += utfx2.calculateCodePoint(cp);
          });
          return [n, l];
        };
        return utfx2;
      }();
      Date.now = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      var BCRYPT_SALT_LEN = 16;
      var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
      var BLOWFISH_NUM_ROUNDS = 16;
      var MAX_EXECUTION_TIME = 100;
      var P_ORIG = [
        608135816,
        2242054355,
        320440878,
        57701188,
        2752067618,
        698298832,
        137296536,
        3964562569,
        1160258022,
        953160567,
        3193202383,
        887688300,
        3232508343,
        3380367581,
        1065670069,
        3041331479,
        2450970073,
        2306472731
      ];
      var S_ORIG = [
        3509652390,
        2564797868,
        805139163,
        3491422135,
        3101798381,
        1780907670,
        3128725573,
        4046225305,
        614570311,
        3012652279,
        134345442,
        2240740374,
        1667834072,
        1901547113,
        2757295779,
        4103290238,
        227898511,
        1921955416,
        1904987480,
        2182433518,
        2069144605,
        3260701109,
        2620446009,
        720527379,
        3318853667,
        677414384,
        3393288472,
        3101374703,
        2390351024,
        1614419982,
        1822297739,
        2954791486,
        3608508353,
        3174124327,
        2024746970,
        1432378464,
        3864339955,
        2857741204,
        1464375394,
        1676153920,
        1439316330,
        715854006,
        3033291828,
        289532110,
        2706671279,
        2087905683,
        3018724369,
        1668267050,
        732546397,
        1947742710,
        3462151702,
        2609353502,
        2950085171,
        1814351708,
        2050118529,
        680887927,
        999245976,
        1800124847,
        3300911131,
        1713906067,
        1641548236,
        4213287313,
        1216130144,
        1575780402,
        4018429277,
        3917837745,
        3693486850,
        3949271944,
        596196993,
        3549867205,
        258830323,
        2213823033,
        772490370,
        2760122372,
        1774776394,
        2652871518,
        566650946,
        4142492826,
        1728879713,
        2882767088,
        1783734482,
        3629395816,
        2517608232,
        2874225571,
        1861159788,
        326777828,
        3124490320,
        2130389656,
        2716951837,
        967770486,
        1724537150,
        2185432712,
        2364442137,
        1164943284,
        2105845187,
        998989502,
        3765401048,
        2244026483,
        1075463327,
        1455516326,
        1322494562,
        910128902,
        469688178,
        1117454909,
        936433444,
        3490320968,
        3675253459,
        1240580251,
        122909385,
        2157517691,
        634681816,
        4142456567,
        3825094682,
        3061402683,
        2540495037,
        79693498,
        3249098678,
        1084186820,
        1583128258,
        426386531,
        1761308591,
        1047286709,
        322548459,
        995290223,
        1845252383,
        2603652396,
        3431023940,
        2942221577,
        3202600964,
        3727903485,
        1712269319,
        422464435,
        3234572375,
        1170764815,
        3523960633,
        3117677531,
        1434042557,
        442511882,
        3600875718,
        1076654713,
        1738483198,
        4213154764,
        2393238008,
        3677496056,
        1014306527,
        4251020053,
        793779912,
        2902807211,
        842905082,
        4246964064,
        1395751752,
        1040244610,
        2656851899,
        3396308128,
        445077038,
        3742853595,
        3577915638,
        679411651,
        2892444358,
        2354009459,
        1767581616,
        3150600392,
        3791627101,
        3102740896,
        284835224,
        4246832056,
        1258075500,
        768725851,
        2589189241,
        3069724005,
        3532540348,
        1274779536,
        3789419226,
        2764799539,
        1660621633,
        3471099624,
        4011903706,
        913787905,
        3497959166,
        737222580,
        2514213453,
        2928710040,
        3937242737,
        1804850592,
        3499020752,
        2949064160,
        2386320175,
        2390070455,
        2415321851,
        4061277028,
        2290661394,
        2416832540,
        1336762016,
        1754252060,
        3520065937,
        3014181293,
        791618072,
        3188594551,
        3933548030,
        2332172193,
        3852520463,
        3043980520,
        413987798,
        3465142937,
        3030929376,
        4245938359,
        2093235073,
        3534596313,
        375366246,
        2157278981,
        2479649556,
        555357303,
        3870105701,
        2008414854,
        3344188149,
        4221384143,
        3956125452,
        2067696032,
        3594591187,
        2921233993,
        2428461,
        544322398,
        577241275,
        1471733935,
        610547355,
        4027169054,
        1432588573,
        1507829418,
        2025931657,
        3646575487,
        545086370,
        48609733,
        2200306550,
        1653985193,
        298326376,
        1316178497,
        3007786442,
        2064951626,
        458293330,
        2589141269,
        3591329599,
        3164325604,
        727753846,
        2179363840,
        146436021,
        1461446943,
        4069977195,
        705550613,
        3059967265,
        3887724982,
        4281599278,
        3313849956,
        1404054877,
        2845806497,
        146425753,
        1854211946,
        1266315497,
        3048417604,
        3681880366,
        3289982499,
        290971e4,
        1235738493,
        2632868024,
        2414719590,
        3970600049,
        1771706367,
        1449415276,
        3266420449,
        422970021,
        1963543593,
        2690192192,
        3826793022,
        1062508698,
        1531092325,
        1804592342,
        2583117782,
        2714934279,
        4024971509,
        1294809318,
        4028980673,
        1289560198,
        2221992742,
        1669523910,
        35572830,
        157838143,
        1052438473,
        1016535060,
        1802137761,
        1753167236,
        1386275462,
        3080475397,
        2857371447,
        1040679964,
        2145300060,
        2390574316,
        1461121720,
        2956646967,
        4031777805,
        4028374788,
        33600511,
        2920084762,
        1018524850,
        629373528,
        3691585981,
        3515945977,
        2091462646,
        2486323059,
        586499841,
        988145025,
        935516892,
        3367335476,
        2599673255,
        2839830854,
        265290510,
        3972581182,
        2759138881,
        3795373465,
        1005194799,
        847297441,
        406762289,
        1314163512,
        1332590856,
        1866599683,
        4127851711,
        750260880,
        613907577,
        1450815602,
        3165620655,
        3734664991,
        3650291728,
        3012275730,
        3704569646,
        1427272223,
        778793252,
        1343938022,
        2676280711,
        2052605720,
        1946737175,
        3164576444,
        3914038668,
        3967478842,
        3682934266,
        1661551462,
        3294938066,
        4011595847,
        840292616,
        3712170807,
        616741398,
        312560963,
        711312465,
        1351876610,
        322626781,
        1910503582,
        271666773,
        2175563734,
        1594956187,
        70604529,
        3617834859,
        1007753275,
        1495573769,
        4069517037,
        2549218298,
        2663038764,
        504708206,
        2263041392,
        3941167025,
        2249088522,
        1514023603,
        1998579484,
        1312622330,
        694541497,
        2582060303,
        2151582166,
        1382467621,
        776784248,
        2618340202,
        3323268794,
        2497899128,
        2784771155,
        503983604,
        4076293799,
        907881277,
        423175695,
        432175456,
        1378068232,
        4145222326,
        3954048622,
        3938656102,
        3820766613,
        2793130115,
        2977904593,
        26017576,
        3274890735,
        3194772133,
        1700274565,
        1756076034,
        4006520079,
        3677328699,
        720338349,
        1533947780,
        354530856,
        688349552,
        3973924725,
        1637815568,
        332179504,
        3949051286,
        53804574,
        2852348879,
        3044236432,
        1282449977,
        3583942155,
        3416972820,
        4006381244,
        1617046695,
        2628476075,
        3002303598,
        1686838959,
        431878346,
        2686675385,
        1700445008,
        1080580658,
        1009431731,
        832498133,
        3223435511,
        2605976345,
        2271191193,
        2516031870,
        1648197032,
        4164389018,
        2548247927,
        300782431,
        375919233,
        238389289,
        3353747414,
        2531188641,
        2019080857,
        1475708069,
        455242339,
        2609103871,
        448939670,
        3451063019,
        1395535956,
        2413381860,
        1841049896,
        1491858159,
        885456874,
        4264095073,
        4001119347,
        1565136089,
        3898914787,
        1108368660,
        540939232,
        1173283510,
        2745871338,
        3681308437,
        4207628240,
        3343053890,
        4016749493,
        1699691293,
        1103962373,
        3625875870,
        2256883143,
        3830138730,
        1031889488,
        3479347698,
        1535977030,
        4236805024,
        3251091107,
        2132092099,
        1774941330,
        1199868427,
        1452454533,
        157007616,
        2904115357,
        342012276,
        595725824,
        1480756522,
        206960106,
        497939518,
        591360097,
        863170706,
        2375253569,
        3596610801,
        1814182875,
        2094937945,
        3421402208,
        1082520231,
        3463918190,
        2785509508,
        435703966,
        3908032597,
        1641649973,
        2842273706,
        3305899714,
        1510255612,
        2148256476,
        2655287854,
        3276092548,
        4258621189,
        236887753,
        3681803219,
        274041037,
        1734335097,
        3815195456,
        3317970021,
        1899903192,
        1026095262,
        4050517792,
        356393447,
        2410691914,
        3873677099,
        3682840055,
        3913112168,
        2491498743,
        4132185628,
        2489919796,
        1091903735,
        1979897079,
        3170134830,
        3567386728,
        3557303409,
        857797738,
        1136121015,
        1342202287,
        507115054,
        2535736646,
        337727348,
        3213592640,
        1301675037,
        2528481711,
        1895095763,
        1721773893,
        3216771564,
        62756741,
        2142006736,
        835421444,
        2531993523,
        1442658625,
        3659876326,
        2882144922,
        676362277,
        1392781812,
        170690266,
        3921047035,
        1759253602,
        3611846912,
        1745797284,
        664899054,
        1329594018,
        3901205900,
        3045908486,
        2062866102,
        2865634940,
        3543621612,
        3464012697,
        1080764994,
        553557557,
        3656615353,
        3996768171,
        991055499,
        499776247,
        1265440854,
        648242737,
        3940784050,
        980351604,
        3713745714,
        1749149687,
        3396870395,
        4211799374,
        3640570775,
        1161844396,
        3125318951,
        1431517754,
        545492359,
        4268468663,
        3499529547,
        1437099964,
        2702547544,
        3433638243,
        2581715763,
        2787789398,
        1060185593,
        1593081372,
        2418618748,
        4260947970,
        69676912,
        2159744348,
        86519011,
        2512459080,
        3838209314,
        1220612927,
        3339683548,
        133810670,
        1090789135,
        1078426020,
        1569222167,
        845107691,
        3583754449,
        4072456591,
        1091646820,
        628848692,
        1613405280,
        3757631651,
        526609435,
        236106946,
        48312990,
        2942717905,
        3402727701,
        1797494240,
        859738849,
        992217954,
        4005476642,
        2243076622,
        3870952857,
        3732016268,
        765654824,
        3490871365,
        2511836413,
        1685915746,
        3888969200,
        1414112111,
        2273134842,
        3281911079,
        4080962846,
        172450625,
        2569994100,
        980381355,
        4109958455,
        2819808352,
        2716589560,
        2568741196,
        3681446669,
        3329971472,
        1835478071,
        660984891,
        3704678404,
        4045999559,
        3422617507,
        3040415634,
        1762651403,
        1719377915,
        3470491036,
        2693910283,
        3642056355,
        3138596744,
        1364962596,
        2073328063,
        1983633131,
        926494387,
        3423689081,
        2150032023,
        4096667949,
        1749200295,
        3328846651,
        309677260,
        2016342300,
        1779581495,
        3079819751,
        111262694,
        1274766160,
        443224088,
        298511866,
        1025883608,
        3806446537,
        1145181785,
        168956806,
        3641502830,
        3584813610,
        1689216846,
        3666258015,
        3200248200,
        1692713982,
        2646376535,
        4042768518,
        1618508792,
        1610833997,
        3523052358,
        4130873264,
        2001055236,
        3610705100,
        2202168115,
        4028541809,
        2961195399,
        1006657119,
        2006996926,
        3186142756,
        1430667929,
        3210227297,
        1314452623,
        4074634658,
        4101304120,
        2273951170,
        1399257539,
        3367210612,
        3027628629,
        1190975929,
        2062231137,
        2333990788,
        2221543033,
        2438960610,
        1181637006,
        548689776,
        2362791313,
        3372408396,
        3104550113,
        3145860560,
        296247880,
        1970579870,
        3078560182,
        3769228297,
        1714227617,
        3291629107,
        3898220290,
        166772364,
        1251581989,
        493813264,
        448347421,
        195405023,
        2709975567,
        677966185,
        3703036547,
        1463355134,
        2715995803,
        1338867538,
        1343315457,
        2802222074,
        2684532164,
        233230375,
        2599980071,
        2000651841,
        3277868038,
        1638401717,
        4028070440,
        3237316320,
        6314154,
        819756386,
        300326615,
        590932579,
        1405279636,
        3267499572,
        3150704214,
        2428286686,
        3959192993,
        3461946742,
        1862657033,
        1266418056,
        963775037,
        2089974820,
        2263052895,
        1917689273,
        448879540,
        3550394620,
        3981727096,
        150775221,
        3627908307,
        1303187396,
        508620638,
        2975983352,
        2726630617,
        1817252668,
        1876281319,
        1457606340,
        908771278,
        3720792119,
        3617206836,
        2455994898,
        1729034894,
        1080033504,
        976866871,
        3556439503,
        2881648439,
        1522871579,
        1555064734,
        1336096578,
        3548522304,
        2579274686,
        3574697629,
        3205460757,
        3593280638,
        3338716283,
        3079412587,
        564236357,
        2993598910,
        1781952180,
        1464380207,
        3163844217,
        3332601554,
        1699332808,
        1393555694,
        1183702653,
        3581086237,
        1288719814,
        691649499,
        2847557200,
        2895455976,
        3193889540,
        2717570544,
        1781354906,
        1676643554,
        2592534050,
        3230253752,
        1126444790,
        2770207658,
        2633158820,
        2210423226,
        2615765581,
        2414155088,
        3127139286,
        673620729,
        2805611233,
        1269405062,
        4015350505,
        3341807571,
        4149409754,
        1057255273,
        2012875353,
        2162469141,
        2276492801,
        2601117357,
        993977747,
        3918593370,
        2654263191,
        753973209,
        36408145,
        2530585658,
        25011837,
        3520020182,
        2088578344,
        530523599,
        2918365339,
        1524020338,
        1518925132,
        3760827505,
        3759777254,
        1202760957,
        3985898139,
        3906192525,
        674977740,
        4174734889,
        2031300136,
        2019492241,
        3983892565,
        4153806404,
        3822280332,
        352677332,
        2297720250,
        60907813,
        90501309,
        3286998549,
        1016092578,
        2535922412,
        2839152426,
        457141659,
        509813237,
        4120667899,
        652014361,
        1966332200,
        2975202805,
        55981186,
        2327461051,
        676427537,
        3255491064,
        2882294119,
        3433927263,
        1307055953,
        942726286,
        933058658,
        2468411793,
        3933900994,
        4215176142,
        1361170020,
        2001714738,
        2830558078,
        3274259782,
        1222529897,
        1679025792,
        2729314320,
        3714953764,
        1770335741,
        151462246,
        3013232138,
        1682292957,
        1483529935,
        471910574,
        1539241949,
        458788160,
        3436315007,
        1807016891,
        3718408830,
        978976581,
        1043663428,
        3165965781,
        1927990952,
        4200891579,
        2372276910,
        3208408903,
        3533431907,
        1412390302,
        2931980059,
        4132332400,
        1947078029,
        3881505623,
        4168226417,
        2941484381,
        1077988104,
        1320477388,
        886195818,
        18198404,
        3786409e3,
        2509781533,
        112762804,
        3463356488,
        1866414978,
        891333506,
        18488651,
        661792760,
        1628790961,
        3885187036,
        3141171499,
        876946877,
        2693282273,
        1372485963,
        791857591,
        2686433993,
        3759982718,
        3167212022,
        3472953795,
        2716379847,
        445679433,
        3561995674,
        3504004811,
        3574258232,
        54117162,
        3331405415,
        2381918588,
        3769707343,
        4154350007,
        1140177722,
        4074052095,
        668550556,
        3214352940,
        367459370,
        261225585,
        2610173221,
        4209349473,
        3468074219,
        3265815641,
        314222801,
        3066103646,
        3808782860,
        282218597,
        3406013506,
        3773591054,
        379116347,
        1285071038,
        846784868,
        2669647154,
        3771962079,
        3550491691,
        2305946142,
        453669953,
        1268987020,
        3317592352,
        3279303384,
        3744833421,
        2610507566,
        3859509063,
        266596637,
        3847019092,
        517658769,
        3462560207,
        3443424879,
        370717030,
        4247526661,
        2224018117,
        4143653529,
        4112773975,
        2788324899,
        2477274417,
        1456262402,
        2901442914,
        1517677493,
        1846949527,
        2295493580,
        3734397586,
        2176403920,
        1280348187,
        1908823572,
        3871786941,
        846861322,
        1172426758,
        3287448474,
        3383383037,
        1655181056,
        3139813346,
        901632758,
        1897031941,
        2986607138,
        3066810236,
        3447102507,
        1393639104,
        373351379,
        950779232,
        625454576,
        3124240540,
        4148612726,
        2007998917,
        544563296,
        2244738638,
        2330496472,
        2058025392,
        1291430526,
        424198748,
        50039436,
        29584100,
        3605783033,
        2429876329,
        2791104160,
        1057563949,
        3255363231,
        3075367218,
        3463963227,
        1469046755,
        985887462
      ];
      var C_ORIG = [
        1332899944,
        1700884034,
        1701343084,
        1684370003,
        1668446532,
        1869963892
      ];
      function _encipher(lr, off2, P, S) {
        var n, l = lr[off2], r = lr[off2 + 1];
        l ^= P[0];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[1];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[2];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[3];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[4];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[5];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[6];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[7];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[8];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[9];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[10];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[11];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[12];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[13];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[14];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[15];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[16];
        lr[off2] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
        lr[off2 + 1] = l;
        return lr;
      }
      __name(_encipher, "_encipher");
      function _streamtoword(data, offp) {
        for (var i = 0, word = 0; i < 4; ++i)
          word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
        return { key: word, offp };
      }
      __name(_streamtoword, "_streamtoword");
      function _key(key, P, S) {
        var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
        for (i = 0; i < plen; i += 2)
          lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      __name(_key, "_key");
      function _ekskey(data, key, P, S) {
        var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
        offp = 0;
        for (i = 0; i < plen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      __name(_ekskey, "_ekskey");
      function _crypt(b, salt, rounds, callback, progressCallback) {
        var cdata = C_ORIG.slice(), clen = cdata.length, err;
        if (rounds < 4 || rounds > 31) {
          err = Error("Illegal number of rounds (4-31): " + rounds);
          if (callback) {
            nextTick3(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.length !== BCRYPT_SALT_LEN) {
          err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
          if (callback) {
            nextTick3(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        rounds = 1 << rounds >>> 0;
        var P, S, i = 0, j;
        if (Int32Array) {
          P = new Int32Array(P_ORIG);
          S = new Int32Array(S_ORIG);
        } else {
          P = P_ORIG.slice();
          S = S_ORIG.slice();
        }
        _ekskey(salt, b, P, S);
        function next() {
          if (progressCallback)
            progressCallback(i / rounds);
          if (i < rounds) {
            var start = Date.now();
            for (; i < rounds; ) {
              i = i + 1;
              _key(b, P, S);
              _key(salt, P, S);
              if (Date.now() - start > MAX_EXECUTION_TIME)
                break;
            }
          } else {
            for (i = 0; i < 64; i++)
              for (j = 0; j < clen >> 1; j++)
                _encipher(cdata, j << 1, P, S);
            var ret = [];
            for (i = 0; i < clen; i++)
              ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
            if (callback) {
              callback(null, ret);
              return;
            } else
              return ret;
          }
          if (callback)
            nextTick3(next);
        }
        __name(next, "next");
        if (typeof callback !== "undefined") {
          next();
        } else {
          var res;
          while (true)
            if (typeof (res = next()) !== "undefined")
              return res || [];
        }
      }
      __name(_crypt, "_crypt");
      function _hash(s, salt, callback, progressCallback) {
        var err;
        if (typeof s !== "string" || typeof salt !== "string") {
          err = Error("Invalid string / salt: Not a string");
          if (callback) {
            nextTick3(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var minor, offset;
        if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
          err = Error("Invalid salt version: " + salt.substring(0, 2));
          if (callback) {
            nextTick3(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.charAt(2) === "$")
          minor = String.fromCharCode(0), offset = 3;
        else {
          minor = salt.charAt(2);
          if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
              nextTick3(callback.bind(this, err));
              return;
            } else
              throw err;
          }
          offset = 4;
        }
        if (salt.charAt(offset + 2) > "$") {
          err = Error("Missing salt rounds");
          if (callback) {
            nextTick3(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
        s += minor >= "a" ? "\0" : "";
        var passwordb = stringToBytes(s), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
        function finish(bytes) {
          var res = [];
          res.push("$2");
          if (minor >= "a")
            res.push(minor);
          res.push("$");
          if (rounds < 10)
            res.push("0");
          res.push(rounds.toString());
          res.push("$");
          res.push(base64_encode(saltb, saltb.length));
          res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
          return res.join("");
        }
        __name(finish, "finish");
        if (typeof callback == "undefined")
          return finish(_crypt(passwordb, saltb, rounds));
        else {
          _crypt(passwordb, saltb, rounds, function(err2, bytes) {
            if (err2)
              callback(err2, null);
            else
              callback(null, finish(bytes));
          }, progressCallback);
        }
      }
      __name(_hash, "_hash");
      bcrypt2.encodeBase64 = base64_encode;
      bcrypt2.decodeBase64 = base64_decode;
      return bcrypt2;
    });
  }
});

// .wrangler/tmp/bundle-5Z17g4/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// .wrangler/tmp/bundle-5Z17g4/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var import_edge = __toESM(require_edge3());

// ../../node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// ../../node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var import_default_index2 = __toESM(require_default_index(), 1);

// ../../node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}
__name(compareSemVer, "compareSemVer");

// ../../node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
__name(getUserAgent, "getUserAgent");
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}
__name(getRuntimeSegment, "getRuntimeSegment");

// ../../node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
var FETCH_FAILURE_MESSAGE = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info3 = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        const cacheTags = cacheStrategy?.tags?.join(",") ?? "";
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent,
          ...cacheTags.length > 0 ? { "accelerate-cache-tags": cacheTags } : {}
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        try {
          const response = await fetcher(url, options);
          info3 = {
            cacheStatus: response.headers.get("accelerate-cache-status"),
            lastModified: new Date(response.headers.get("last-modified") ?? ""),
            region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
            requestId: response.headers.get("cf-ray") ?? "unspecified",
            signature: response.headers.get("accelerate-signature") ?? "unspecified"
          };
          machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
          return response;
        } catch (e) {
          throw new Error(FETCH_FAILURE_MESSAGE);
        }
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info: info3 };
    } else {
      return query(rest, __internalParams);
    }
  };
}
__name(makeWithCacheHeaders, "makeWithCacheHeaders");
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const apiKeyPromise = client._engine.start().then(() => client._engine.apiKey?.());
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      client: {
        $accelerate: {
          /**
           * Initiates an invalidation request for the specified cache tag values.
           *
           * A tag may only contain alphanumeric characters and underscores.
           * Each tag may contain a maximum of 64 characters.
           * A maximum of 5 tags may be invalidated per call.
           */
          invalidate: async (input) => {
            const apiKey = await apiKeyPromise;
            if (!apiKey) {
              return { requestId: "unspecified" };
            }
            let response;
            try {
              response = await fetcher(`https://accelerate.prisma-data.net/invalidate`, {
                method: "POST",
                headers: {
                  authorization: `Bearer ${apiKey}`,
                  "content-type": "application/json"
                },
                body: JSON.stringify(input)
              });
            } catch (e) {
              throw new Error(FETCH_FAILURE_MESSAGE);
            }
            if (!response?.ok) {
              const body = await response.text();
              throw new Error(`Failed to invalidate Accelerate cache. Response was ${response.status} ${response.statusText}. ${body}`);
            }
            void response.body?.cancel();
            return {
              requestId: response.headers.get("cf-ray") ?? "unspecified"
            };
          }
        }
      },
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}
__name(makeAccelerateExtension, "makeAccelerateExtension");

// ../../node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}
__name(withAccelerate, "withAccelerate");

// node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecodeURI = /* @__PURE__ */ __name((str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context2 instanceof Context) {
          context2.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context2 instanceof Context && context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context2 instanceof Context && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env3, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env3, "GET")))();
    }
    const path = this.getPath(request, { env: env3 });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env3,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res ?? this.notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var Trie = /* @__PURE__ */ __name(class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var Node2 = /* @__PURE__ */ __name(class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// node_modules/hono/dist/utils/jwt/jwa.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform2) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform2);
}, "checkUserAgentEquals");

// node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var JwtAlgorithmNotImplemented = /* @__PURE__ */ __name(class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
}, "JwtAlgorithmNotImplemented");
var JwtTokenInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
}, "JwtTokenInvalid");
var JwtTokenNotBefore = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
}, "JwtTokenNotBefore");
var JwtTokenExpired = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
}, "JwtTokenExpired");
var JwtTokenIssuedAt = /* @__PURE__ */ __name(class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
}, "JwtTokenIssuedAt");
var JwtHeaderInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
}, "JwtHeaderInvalid");
var JwtTokenSignatureMismatched = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
}, "JwtTokenSignatureMismatched");
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private") {
      throw new Error(`unexpected non private key: CryptoKey.type is ${key.type}`);
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Math.floor(Date.now() / 1e3);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/index.ts
var import_bcryptjs = __toESM(require_bcrypt());
var app = new Hono2();
app.use("/api/v1/blog", async (c, next) => {
  const authToken = c.req.header("authorization")?.split(" ")[1];
  if (authToken) {
    try {
      const decodedPayload = await verify2(authToken, c.env.JWT_SECRET);
      if (decodedPayload.id) {
        c.set("jwtPayload", { id: decodedPayload.id });
        return next();
      }
    } catch (error3) {
      c.status(401);
      return c.json({ errorMessage: "Invalid or expired token" });
    }
  }
  c.status(401);
  return c.json({ errorMessage: "Unauthorized!" });
});
app.post("/api/v1/signup", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  if (!body.email || !body.password) {
    c.status(400);
    return c.json({ errorMessage: "Email and Password are Required!" });
  }
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email }
  });
  if (existingUser) {
    return c.json({
      message: "User Already Exists. Try Signing in"
    });
  }
  const hashedPassword = await import_bcryptjs.default.hash(body.password, c.env.saltRounds);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword
    }
  });
  const token = await sign2({ id: user.id }, c.env.JWT_SECRET);
  c.status(200);
  return c.json({ token });
});
app.post("/api/v1/signin", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });
  if (user && await import_bcryptjs.default.compare(body.password, user.password)) {
    const token = await sign2({ id: user.id }, c.env.JWT_SECRET);
    c.status(200);
    return c.json({ token });
  }
  c.status(403);
  return c.json({ errorMessage: "Invalid credentials" });
});
app.get("/api/v1/blog/:id", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  if (id) {
    const blog = await prisma.post.findUnique({
      where: { id }
    });
    c.status(200);
    const content = blog?.content;
    return c.json({ content });
  }
  c.status(401);
  return c.json({ errorMessage: "Invalid id" });
});
app.put("/api/v1/blog", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const authorId = c.get("jwtPayload").id;
  if (!body.id || !authorId) {
    c.status(402);
    return c.json({ errorMessage: "Invalid Request. Author Id or/and Post ID Missing or Invalid" });
  }
  await prisma.post.update({
    where: {
      id: body.id,
      authorId
    },
    data: {
      title: body.title,
      content: body.content
    }
  });
  c.status(200);
  return c.json({ message: "Post Updated Succesfully!" });
});
app.get("/api/v1/blog/bulk", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const blogs = await prisma.post.findMany({});
  return c.json({ blogs });
});
app.post("/api/v1/blog", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const jwtPayload = c.get("jwtPayload");
  const body = await c.req.json();
  if (!body.content || !body.title) {
    c.status(400);
    return c.json({
      errorMessage: "Title and Content are required"
    });
  }
  const post = await prisma.post.create({
    data: {
      authorId: jwtPayload.id,
      title: body.title,
      content: body.content
    }
  });
  c.status(200);
  return c.json({ id: post.id });
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var drainBody = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-5Z17g4/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env3, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env3, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env3, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env3, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-5Z17g4/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env3, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env3, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env3, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env3, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env3, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env3, ctx) => {
      this.env = env3;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

bcryptjs/dist/bcrypt.js:
  (**
   * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/bcrypt.js for details
   *)
*/
//# sourceMappingURL=index.js.map