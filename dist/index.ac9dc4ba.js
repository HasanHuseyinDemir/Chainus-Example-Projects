// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === "function" &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== "undefined" &&
    typeof module.require === "function" &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === "function" &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, "root", {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    iZQ9B: [
      function (require, module, exports) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        module.bundle.HMR_BUNDLE_ID = "16df5292ac9dc4ba";
        ("use strict");
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData[moduleName],
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData[moduleName] = undefined;
        }
        module.bundle.Module = Module;
        module.bundle.hotData = {};
        var checkedAssets /*: {|[string]: boolean|} */,
          assetsToDispose /*: Array<[ParcelRequire, string]> */,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf("http") === 0
              ? location.hostname
              : "localhost")
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        }
        // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== "undefined"
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == "https:" &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? "wss"
              : "ws";
          var ws;
          try {
            ws = new WebSocket(
              protocol + "://" + hostname + (port ? ":" + port : "") + "/",
            );
          } catch (err) {
            if (err.message) console.error(err.message);
            ws = {};
          }
          // Web extension context
          var extCtx =
            typeof browser === "undefined"
              ? typeof chrome === "undefined"
                ? null
                : chrome
              : browser;
          // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes("test.js");
          }
          // $FlowFixMe
          ws.onmessage = async function (event /*: {data: string, ...} */) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            assetsToDispose = [];
            var data /*: HMRMessage */ = JSON.parse(event.data);
            if (data.type === "update") {
              // Remove error overlay if there is one
              if (typeof document !== "undefined") removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH,
              );
              // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === "css" ||
                  (asset.type === "js" &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle,
                    ))
                );
              });
              if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== "undefined" &&
                  typeof CustomEvent !== "undefined"
                )
                  window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {}; /*: {|[string]: boolean|} */
                for (let i = 0; i < assetsToDispose.length; i++) {
                  let id = assetsToDispose[i][1];
                  if (!processedAssets[id]) {
                    hmrDispose(assetsToDispose[i][0], id);
                    processedAssets[id] = true;
                  }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for (let i = 0; i < assetsToAccept.length; i++) {
                  let id = assetsToAccept[i][1];
                  if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                  }
                }
              } else fullReload();
            }
            if (data.type === "error") {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  "\uD83D\uDEA8 [parcel]: " +
                    ansiDiagnostic.message +
                    "\n" +
                    stack +
                    "\n\n" +
                    ansiDiagnostic.hints.join("\n"),
                );
              }
              if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          ws.onerror = function (e) {
            if (e.message) console.error(e.message);
          };
          ws.onclose = function () {
            console.warn(
              "[parcel] \uD83D\uDEA8 Connection to the HMR server was lost",
            );
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log("[parcel] \u2728 Error resolved");
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                    frame.location,
                  )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                    frame.location
                  }</a>
${frame.code}`;
                }, "")
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints
            .map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>")
            .join("")}
        </div>
        ${
          diagnostic.documentation
            ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>`
            : ""
        }
      </div>
    `;
          }
          errorHTML += "</div>";
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ("reload" in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var href = link.getAttribute("href");
          if (!href) return;
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            "href", // $FlowFixMe
            href.split("?")[0] + "?" + Date.now(),
          );
          // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href /*: string */ = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === "localhost"
                  ? new RegExp(
                      "^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" +
                        getPort(),
                    ).test(href)
                  : href.indexOf(hostname + ":" + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === "js") {
            if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule")
                return import(asset.url + "?t=" + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension fix
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3 &&
                        typeof ServiceWorkerGlobalScope != "undefined" &&
                        global instanceof ServiceWorkerGlobalScope
                      ) {
                        extCtx.runtime.reload();
                        return;
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle /*: ParcelRequire */, asset /*:  HMRAsset */) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === "css") reloadCSS();
          else if (asset.type === "js") {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            } else if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            }
            // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id];
            // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/,
        ) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/,
        ) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToDispose.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length)) {
            assetsToAccept.push([bundle, id]);
            return true;
          }
        }
        function hmrDispose(bundle /*: ParcelRequire */, id /*: string */) {
          var cached = bundle.cache[id];
          bundle.hotData[id] = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData[id]);
            });
          delete bundle.cache[id];
        }
        function hmrAccept(bundle /*: ParcelRequire */, id /*: string */) {
          // Execute the module.
          bundle(id);
          // Run the accept callbacks in the new version of the module.
          var cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length) {
                assetsToAlsoAccept.forEach(function (a) {
                  hmrDispose(a[0], a[1]);
                });
                // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
              }
            });
        }
      },
      {},
    ],
    aR1JP: [
      function (require, module, exports) {
        var _chainus = require("chainus");
        var _counter = require("./Components/counter");
        var _thanks = require("./Components/thanks");
        function Main() {
          return (0, _chainus.html)` <div>
    <h2>Hello Everyone!</h2>
    <Counter />
    <Thanks><i>Chainus</i></Thanks>
  </div>`;
        }
        (0, _chainus.Mount)("#app", Main);
      },
      {
        chainus: "lWR5h",
        "./Components/counter": "8E6Hw",
        "./Components/thanks": "6zq6U",
      },
    ],
    lWR5h: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "html", () => html);
        parcelHelpers.export(exports, "Mount", () => Mount);
        parcelHelpers.export(exports, "onConnect", () => onConnect);
        parcelHelpers.export(exports, "onRemove", () => onRemove);
        parcelHelpers.export(exports, "Components", () => Components);
        parcelHelpers.export(exports, "setLazy", () => setLazy);
        parcelHelpers.export(exports, "setComponent", () => setComponent);
        parcelHelpers.export(exports, "createStore", () => createStore);
        parcelHelpers.export(exports, "createElement", () => createElement);
        parcelHelpers.export(exports, "async", () => async);
        parcelHelpers.export(exports, "createId", () => createId);
        parcelHelpers.export(exports, "state", () => state);
        let A = {
            w: !0,
            rF: {},
            i: -1,
            oc: 0,
            od: 0,
            open: 0,
          },
          t = {
            f: "function",
            s: "string",
            b: "boolean",
            n: "number",
            o: "object",
            u: "undefined",
            sa: "setAttribute",
            ga: "getAttribute",
            apc: "appendChild",
            fE: "forEach",
            lc: "toLowerCase",
            h: "#!?S?!#",
            t: "<a_></a_>",
            rA: "replaceAll",
            U: void 0,
            nV: "nodeValue",
          },
          j = {
            apc(e, s) {
              e[t.apc](s);
            },
            rpw(e, s) {
              e.replaceWith(s);
            },
            ctN: (e) => document.createTextNode(e),
            frg: () => document.createDocumentFragment(),
            dce: (e) => document.createElement(e),
            nm: () => new Map(),
            wm: () => new WeakMap(),
            qs: (e, s) => e.querySelector(s),
            qsA: (e, s) => e.querySelectorAll(s),
            tcC(e) {
              e.textContent = "";
            },
            ra(e, s) {
              e.removeAttribute(s);
            },
            hop: (e, s) => e.hasOwnProperty(s),
            iA: (e) => Array.isArray(e),
            S: () => Symbol(),
            i: () => ((A.i += 1), `_${A.i}_`),
            tN: (e) => e.tagName[t.lc](),
          },
          D = j.nm(),
          [mS, hS, dS, CDs, SGS] = [j.S(), j.S(), j.S(), j.S(), j.S()],
          [CM, Elements] = [j.nm(), j.nm()],
          is = (e, s) => typeof e == t[s],
          isTN = (e) => e && 3 === e.nodeType,
          sC = (e, s) => {
            is(e, "s") && is(s, "f")
              ? CM.set(e[t.lc](), s)
              : error({
                  i: 2,
                  ty: "Component Setting",
                  w: "Please use a string value as the name in the first parameter when specifying a component, and provide a function that creates the element.",
                });
          },
          isD = (e) =>
            e instanceof Element ||
            e instanceof HTMLElement ||
            e instanceof DocumentFragment,
          L = (e) => (s, n) => {
            s[mS] ||
              (s[mS] = HD({
                lf: {
                  oC: null,
                  oD: null,
                },
              }));
            let r = e ? "oC" : "oD";
            (A[e ? "oc" : "od"] = 1), is(n, "f") && (s[mS](hS).lf[r] = n);
          },
          ctw = (e) =>
            document.createTreeWalker(
              e,
              NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
              null,
              !1,
            ),
          createElement = (e) =>
            document.createRange().createContextualFragment(e),
          Mount = (e, s, n) => {
            let r = is(s, "f") ? s(n) : s,
              i = (e) => {
                j.tcC(e), j.apc(e, r);
              };
            is(e, "s")
              ? j.qsA(document, e)[t.fE]((e) => {
                  i(e);
                })
              : isD(e)
                ? i(e)
                : error();
          };
        function on(e, s, n) {
          let r = {};
          dA(e, r), e.addEventListener(s.substring(2), () => n(e, r));
        }
        function dA(e, s) {
          SP(e, CDs, 1)[t.fE]((e) => Object.assign(s, e[CDs](hS)));
        }
        function nM(e) {
          let s = e,
            n = s.split("/>").length - 1,
            r = 0;
          for (; n > r; ) {
            let i = s.search("/>") - 1,
              o = 0,
              l = "";
            for (; i - o >= -1; ) {
              if ("<" == s.charAt(i - o)) {
                let a = (l = l.split("").reverse().join("")).split(" ")[0],
                  c = `<${a} ${l.replace(a, "") || ""}></${a}>`;
                (s = s.slice(0, i - o) + c + s.slice(i + 3, s.length)),
                  r++,
                  (i = ""),
                  (o = 0),
                  (l = "");
              } else l += s.charAt(i - o);
              o++;
            }
          }
          return s;
        }
        function HD(e) {
          let s = {
            ...e,
          };
          return (e, n) =>
            (function e(n, r) {
              if (A.open || n === hS) return r && (s = r), s;
              error({
                ty: "Access",
                i: 2,
                w: "Unable to access data",
              });
            })(e, n);
        }
        function rP(e) {
          let s = e[t.rA]("<>", "<div>")[t.rA]("</>", "</div>");
          return (s = s.includes("/>") ? nM(s) : s)[t.rA](/\{\.\#\!\}/g, t.t);
        }
        function iE(e, s) {
          let n = [...s],
            r = e.reduce((e, s, r) => {
              let i = s,
                o = n[r];
              return (
                o !== t.U &&
                  (is(o, "s") || is(o, "n")
                    ? ((i += o), (n[r] = t.U))
                    : (i += "{.#!}")),
                e + i
              );
            }, "");
          n = n.filter((e) => e != t.U);
          let i = createElement(rP(r)).firstElementChild;
          return kY(i, n, i), i;
        }
        function html(e, ...s) {
          return iE(e, [...s]);
        }
        function sub(e, s) {
          if (e[mS]) {
            let n = s ? "oC" : "oD";
            e[mS] && is(e[mS](hS).lf[n], "f") && e[mS](hS).lf[n]();
          }
        }
        function SP(e, s, n) {
          let r = e,
            i = [];
          for (; r && r !== document.body && r.parentNode; ) {
            if (r[s]) {
              if (!n) return r;
              i.push(r);
            }
            r = r.parentNode;
          }
          return n ? i : null;
        }
        HTMLElement.prototype.ref = function (e) {
          let s = j.qsA(this, `[ref='${e}']`);
          return s[t.fE]((e) => j.ra(e, "ref")), s;
        };
        let cFg = (e) => {
          let s = j.frg();
          for (; e.childNodes.length; ) j.apc(content, e.firstChild);
          return s;
        };
        function async(e, s) {
          return async function (n) {
            if (!A.rF[e])
              try {
                let r = await require(e);
                (A.rF[e] = {}), Object.assign(A.rF[e], r);
              } catch (i) {
                error({
                  ty: "Promise",
                  w: "Cannot reach the asynchronous module\nURL : '" + e + "'",
                  t: "Enter a valid URL",
                  i: 2,
                });
                return;
              }
            let o = A.rF[e][s || "default"];
            return is(o, "f") ? o(n) : o;
          };
        }
        function sAp(e, s, n, r, i) {
          let o = e,
            l = n,
            a = CM.get(j.tN(e)),
            c = ["onwait", "onload", "get", "onfail", "name"],
            [f, u] = [j.frg(), j.frg()],
            [p, h, g, m, b] = [{}, {}, {}, {}, {}];
          for (; e.childNodes.length; ) j.apc(u, e.firstChild);
          j.qsA(u, "slot[name]:not([name=''])")[t.fE]((e) => {
            let s = e[t.ga]("name");
            p[s] = cFg(e);
          }),
            j.apc(f, u),
            (p.default = f),
            dA(e, m);
          let C = e.attributes;
          Array.from(C).length &&
            Array.from(C)[t.fE]((e) => {
              let n;
              if ("$" == e.name[0]) {
                e.value == t.t ? ((n = s[l]), l++) : (n = e.value),
                  (g[e.name.substring(1)] = n);
                return;
              }
              e.value == t.t
                ? ((n = s[l]), i && c[e.name] && (b[e.name] = n), l++)
                : (n = e.value),
                (h[e.name] = n);
            }),
            r(l);
          let w;
          !(async function () {
            let s = {
                props: h,
                data: m,
                binds: g,
                slots: p,
                slot: p.default,
              },
              n = {},
              r;
            if (i) {
              Object.keys(h)[t.fE]((e) => {
                c.includes(e) && ((n[e] = h[e]), delete h[e]);
              });
              let l = n[c[0]],
                f;
              l &&
                (is(l, "s")
                  ? (f = j.ctN(l))
                  : is(l, "f")
                    ? (f = l(s))
                    : isD(l) && (f = l),
                j.rpw(o, f),
                (w = f));
              try {
                is(n.get, "s")
                  ? (r = await async(n.get, n.name || "default")(s))
                  : is(n.get, "f") && (r = await n.get(s));
              } catch (u) {
                console.error(u), n[c[3]] && j.rpw(o, n[c[3]]());
                return;
              }
            } else r = is(a, "f") ? a(s) : a;
            if (!r) {
              j.rpw(w || o, n[c[3]]());
              return;
            }
            if (
              (j.qs(r, "slot") && j.rpw(j.qs(r, "slot"), p.default),
              j.qsA(r, "[slot]")[t.fE]((e) => {
                j.tcC(e), j.apc(e, p[e[t.ga]("slot")]), j.ra(e, "slot");
              }),
              j.qs(r, "slot"))
            )
              for (; j.qs(r, "slot"); ) j.rpw(j.qs(r, "slot"), p.default);
            Object.keys(g).length &&
              Object.keys(g)[t.fE]((e) => {
                let s = r;
                if ("on" == e.substring(0, 2)) {
                  on(s, e, g[e]), s.removeAttribute(e);
                  return;
                }
                s[e.sa](e, g[e]);
              }),
              w ? j.rpw(w, r) : j.rpw(e, r),
              n[c[1]] && n[c[1]](r);
          })();
        }
        function error(e) {
          if (A.w) {
            let s = ["#5f5", "#ff5", "#f52", "#f31"];
            console.warn(
              `%cCHAINUS : ${e.ty} ${
                0 == e.i || void 0 == e.i
                  ? "Info"
                  : 1 == e.i
                    ? "Warning"
                    : (e.i > 2 ? "Important " : "") + "Error!"
              } `,
              `background-color: ${
                s[e.i]
              };color:black ; font-weight: bolder;font-size:14px ; padding: 4px ;${
                e.i > 1 ? "text-transform:uppercase;" : ""
              }`,
            ),
              console.log("%c" + e.w, `color:${s[e.i]};font-weight:bolder`),
              e.t && console.log("%c" + e.t, "color:white");
          }
        }
        let cC = [],
          lC = () => cC[cC.length - 1],
          sdb = {
            m: j.S(),
            t: {
              w: !1,
              wLs: j.nm(),
            },
            rec() {
              sdb.t.w || (sdb.t.w = 1), cC.push(j.nm());
            },
            stop() {
              let e = [
                ...Array.from(cC.pop(), ([e, s]) => ({
                  s: e,
                  o: s,
                })),
              ];
              return cC.length || (sdb.t.w = 0), e;
            },
            init(e, s) {
              (e[dS] = HD(s)), (e[sdb.m] = !0);
            },
            is: (e) => is(e[dS], "f"),
            push(e, s) {
              let n = sdb;
              n.is(e)
                ? j.iA(s)
                  ? e[dS](hS, [...e[dS](hS), ...s])
                  : j.iA(e[dS](hS))
                    ? e[dS](hS, [...e[dS](hS), s])
                    : e[dS](hS, [s])
                : j.iA(s)
                  ? n.init(e, [...s])
                  : n.init(e, [s]);
            },
            sub(e) {
              sdb.is(e) &&
                e[dS](hS)[t.fE]((e) => {
                  if ((e.pre && this.prp(e), D.has(e.s))) {
                    if (!j.iA(D.get(e.s)[e.v])) {
                      D.get(e.s)[e.v] = [e];
                      return;
                    }
                  } else {
                    D.set(e.s, {}), (D.get(e.s)[e.v] = [e]);
                    return;
                  }
                  D.get(e.s)[e.v].length
                    ? D.get(e.s)[e.v].push(e)
                    : (D.set(e.s, {}), (D.get(e.s)[e.v] = [e]));
                });
            },
            unsub(e) {
              sdb.is(e) &&
                e[dS](hS)[t.fE]((s) => {
                  s.pre = !0;
                  let n = D.get(s.s);
                  (n[s.v] = n[s.v].filter((s) => s.e != e)),
                    n[s.v].length || delete n[s.v],
                    Object.keys(n).length || D.delete(s.s);
                });
            },
            prep(e, s, n) {
              n.length &&
                (sdb.init(e, []),
                n[t.fE]((n) => {
                  n.o[t.fE]((r) => {
                    sdb.push(e, {
                      ...s,
                      s: n.s,
                      v: r,
                      e,
                    });
                  });
                }));
            },
            prp(e) {
              if ("s" == e.m) {
                e.c(e.e);
                return;
              }
              let s = e.c(e);
              if (s !== t.U) {
                if ("a" == e.m) e.e[t.ga](e.a) != s && e.e[t.sa](e.a, s);
                else if ("e" == e.m) {
                  if (isTN(e.e) || isD(s))
                    isTN(e.e) && !isD(s)
                      ? e.e[t.nV] != s && (e.e[t.nV] = s)
                      : isTN(e.e) && isTN(s)
                        ? e.e[t.nV] != s[t.nV] && (e.e[t.nV] = s[t.nV])
                        : isTN(e.e) && isD(s)
                          ? (j.rpw(e.e, s), (e.e = s))
                          : isD(e.e) &&
                            isD(s) &&
                            !e.e.isEqualNode(s) &&
                            (j.rpw(e.e, s), (e.e = s));
                  else {
                    let n = j.ctN(s);
                    j.rpw(e.e, n), (e.e = n);
                  }
                }
              }
            },
            proc(e, s) {
              D.get(e) &&
                D.get(e)[s] &&
                D.get(e)[s][t.fE]((e) => {
                  sdb.prp(e);
                });
            },
          };
        function S(e) {
          let s = j.iA(e),
            n = j.i(),
            r = e
              ? s
                ? [...e]
                : {
                    ...e,
                  }
              : {};
          return (
            Object.entries(r)[t.fE](([e, s]) => {
              is(s, "o") && (r[e] = S(s));
            }),
            (r = new Proxy(r, {
              get(e, s) {
                if (s == SGS) return n;
                if (!is(e[s], "o") && sdb.t.w) {
                  var r, i;
                  let o = lC(),
                    l;
                  o.get(n)
                    ? ((r = o.get(n)), (i = s), r.includes(i) || r.push(i))
                    : o.set(n, [s]);
                }
                return e[s];
              },
              set(e, r, i) {
                if (e[r] === e.U && is(i, "o")) return (e[r] = S(i)), e[r];
                if (is(e[r], "o") && is(i, "o"))
                  return delete e[r], (e[r] = S(i)), e[r];
                let o = e[r] !== i;
                return (s || o) && ((e[r] = i), sdb.proc(n, r)), 1;
              },
              deleteProperty: (e, r) => (
                s ? (e.splice(r, 1), sdb.proc(n, "length")) : delete e[r], 1
              ),
            }))
          );
        }
        function state(e) {
          let s = e,
            n = j.i(),
            r;
          function i() {
            if (sdb.t.w) {
              var e, r;
              let i = lC(),
                o;
              i.get(n)
                ? ((e = i.get(n)), (r = "*"), e.includes(r) || e.push(r))
                : i.set(n, ["*"]);
            }
            return s;
          }
          return (
            (i.callback = function (e) {
              is(e, "f")
                ? (r = e)
                : error({
                    ty: "State Callback Set",
                    i: 1,
                    w: "Please provide a valid function for the callback to be executed on state changes.",
                  });
            }),
            [
              i,
              function e(i) {
                return i !== s && ((s = i), sdb.proc(n, "*"), r && r()), s;
              },
            ]
          );
        }
        function kY(e, s) {
          let n = j.qsA(e, "*"),
            r = 0,
            i = (e) => (r = e);
          [e, ...n][t.fE]((n) => {
            if ("async" == j.tN(n)) sAp(n, s, r, i, !0);
            else if ("element" == j.tN(n)) {
              let o = Elements,
                l = (e) => n.attributes.getNamedItem(e);
              l("set")
                ? (o.set(l("set").value, cFg(n)), n.remove())
                : l("get") && o.get(l("get").value)
                  ? j.rpw(n, o.get(l("get").value))
                  : n.remove();
            } else if (CM.has(j.tN(n))) {
              sAp(n, s, r, i);
              return;
            } else
              "a_" == j.tN(n)
                ? (rT(n, s[r], "replace", e), r++)
                : Array.from(n.attributes)[t.fE]((i) => {
                    let o = i.name;
                    if (i.value == t.t) {
                      if ("data" == o)
                        is(s[r], "o")
                          ? ((n[CDs] = HD(s[r])), j.ra(n, o))
                          : error({
                              i: 3,
                              ty: "Data Provider Set",
                              w: "The data provider specified for the element must be an object.",
                            });
                      else if ("onsee" == o)
                        is(s[r], "f")
                          ? setLazy(n, {
                              callback: s[r],
                              threshold: n[t.ga]("threshold") || 0,
                            })
                          : error({
                              w: 2,
                              ty: "Intersection Callback Set",
                              w: "You should define a callback function for Lazyload or any intersection event.",
                            }),
                          j.ra(n, o);
                      else if ("on" == o.substring(0, 2))
                        "onconnect" == o || "onremove" == o
                          ? "onconnect" == o
                            ? L(1)(n, s[r])
                            : L()(n, s[r])
                          : on(n, o, s[r]),
                          j.ra(n, o);
                      else if ("use" == o)
                        is(s[r], "f") && (s[r](n), j.ra(n, o));
                      else if ("sync" == o) {
                        sdb.rec(), s[r](n);
                        let l = sdb.stop(),
                          a = {
                            c: s[r],
                            e: n,
                            m: "s",
                            parent: e,
                            CC: 0,
                            data: {},
                          };
                        dA(a.data), sdb.prep(n, a, l, e), j.ra(n, o);
                      } else if (is(s[r], "f")) {
                        sdb.rec();
                        let c = s[r],
                          f = {
                            m: "a",
                            a: o,
                            c: c,
                            e: n,
                            parent: e,
                            CC: 0,
                            data: {},
                          };
                        dA(n, f.data);
                        let u = c(f);
                        n[t.sa](o, u || ""), sdb.prep(n, f, sdb.stop(), e);
                      } else n[t.sa](o, s[r]);
                      r++;
                    }
                  });
          });
        }
        function rT(e, s, n, r) {
          let i = j.frg();
          if (isD(s)) j.apc(i, s);
          else if (j.iA(s))
            s[t.fE]((e) => {
              if (!is(e, "u") && null != e) {
                let s;
                is(e, "s") || is(e, "n")
                  ? ((s = j.dce("p")).textContent = e)
                  : isD(e)
                    ? (s = e)
                    : j.iA(e) &&
                      ((s = j.frg()), j.apc(i, s), rT(s, e, t.apc, r)),
                  j.apc(i, s);
              }
            });
          else if (is(s, "f")) {
            if ("AsyncFunction" === s[Symbol.toStringTag]) {
              let o = j.dce("span");
              j.apc(
                i,
                o,
              )(async function () {
                var e = await s();
                isD(e) ? j.rpw(o, e) : j.rpw(o, j.ctN(e));
              })();
            } else {
              sdb.rec();
              let l = {
                parent: r,
                c: s,
                m: "e",
                e: null,
                s: null,
                CC: 0,
                data: {},
              };
              dA(e, l.data);
              let a = s(l),
                c,
                f;
              c = isD(a) ? a : j.ctN(a !== t.U ? a : "");
              let u = sdb.stop();
              j.iA(u) && u.length
                ? ((f = c), (l.e = f), sdb.prep(f, l, u))
                : ((f = j.frg()), j.apc(f, c)),
                j.apc(i, f);
            }
          } else is(s, "o");
          "replace" == n
            ? j.rpw(e, i)
            : (n == t.apc || n === t.U) && j.apc(e, i);
        }
        function setLazy(e, s) {
          let n = new IntersectionObserver(
            (r) => {
              r[t.fE]((r) => {
                r.isIntersecting &&
                  (s.callback(e),
                  (is(s.once, "u") || s.once) && (n.disconnect(), (n = null)));
              });
            },
            {
              threshold: s.threshold || 0,
              ...s,
            },
          );
          n.observe(e);
        }
        function pr(e) {
          e[dS] &&
            e[dS](hS)[t.fE]((e) => {
              if (1 == e.CC) {
                e.CC = 0;
                return;
              }
              sdb.prp(e);
            });
        }
        function d(e) {
          e[dS] &&
            e[dS](hS)[t.fE]((e) => {
              0 == e.CC && (e.CC = 1);
            });
        }
        let ob = new MutationObserver((e) => {
          for (let s of e)
            if ("childList" === s.type) {
              let n = Array.from(s.addedNodes),
                r = Array.from(s.removedNodes);
              n[t.fE]((e) => {
                let s = ctw(e);
                for (
                  A.oc &&
                    (sub(e, 1),
                    isD(e) &&
                      j.qsA(e, "*")[t.fE]((e) => {
                        sub(e, 1);
                      })),
                    sdb.sub(e),
                    pr(e);
                  s.nextNode();

                ) {
                  let n = s.currentNode;
                  sdb.sub(n), pr(n);
                }
              }),
                r[t.fE]((e) => {
                  let s = ctw(e);
                  for (
                    A.od &&
                      (sub(e),
                      isD(e) &&
                        j.qsA(e, "*")[t.fE]((e) => {
                          sub(e);
                        })),
                      sdb.unsub(e),
                      d(e);
                    s.nextNode();

                  )
                    sdb.unsub(s.currentNode), d(s.currentNode);
                });
            }
        });
        ob.observe(document, {
          childList: !0,
          subtree: !0,
        });
        let onRemove = L(),
          onConnect = L(1),
          Components = CM,
          setComponent = sC,
          createStore = S,
          createId = j.i;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    gkKU3: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, "__esModule", {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === "default" ||
              key === "__esModule" ||
              Object.prototype.hasOwnProperty.call(dest, key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    "8E6Hw": [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Counter", () => Counter);
        var _chainus = require("chainus");
        function Counter() {
          const [x, setX] = (0, _chainus.state)(0);
          function increase() {
            setX(x() + 1);
          }
          function decrease() {
            setX(x() - 1);
          }
          return (0, _chainus.html)`
    <div>
      <p>Count: ${x}</p>
      <button onclick="${increase}">Increase</button>
      <button onclick="${decrease}">Decrease</button>
    </div>
  `;
        }
        (0, _chainus.setComponent)("counter", Counter);
      },
      {
        chainus: "lWR5h",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "6zq6U": [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Thanks", () => Thanks);
        var _chainus = require("chainus");
        function Thanks() {
          return (0, _chainus.html)`<h3>Thank You for using <slot />!</h3>`;
        }
        (0, _chainus.setComponent)("thanks", Thanks);
      },
      {
        chainus: "lWR5h",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
  },
  ["iZQ9B", "aR1JP"],
  "aR1JP",
  "parcelRequirebaba",
);

//# sourceMappingURL=index.ac9dc4ba.js.map
s.map
