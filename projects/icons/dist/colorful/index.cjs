"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef12(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef12;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_development();
    }
  }
});

// ../../node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "../../node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx12 = jsxWithValidationDynamic;
        var jsxs12 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx12;
        exports.jsxs = jsxs12;
      })();
    }
  }
});

// ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/react/jsx-runtime.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  }
});

// src/icons/dist/colorful/index.ts
var colorful_exports = {};
__export(colorful_exports, {
  SVGBar: () => Bar_default,
  SVGBoxplot: () => Boxplot_default,
  SVGEvent: () => Event_default,
  SVGGraph: () => Graph_default,
  SVGLine: () => Line_default,
  SVGLineBar: () => LineBar_default,
  SVGLineStack: () => LineStack_default,
  SVGLines: () => Lines_default,
  SVGNetwork: () => Network_default,
  SVGPie: () => Pie_default,
  SVGProcess: () => Process_default
});
module.exports = __toCommonJS(colorful_exports);

// src/icons/dist/colorful/Bar.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SvgBar = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "linearGradient",
          {
            id: "bar_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "91.259%",
            y2: "12.247%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "linearGradient",
          {
            id: "bar_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "9.334%",
            y2: "88.281%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "filter",
          {
            id: "bar_svg__d",
            width: "295%",
            height: "400%",
            x: "-97.5%",
            y: "-150%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "filter",
          {
            id: "bar_svg__g",
            width: "177.8%",
            height: "200%",
            x: "-38.9%",
            y: "-35.7%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { id: "bar_svg__c", width: 32, height: 28, x: 3.239, y: 3.868, rx: 4 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            id: "bar_svg__f",
            d: "M13.84 24.868h-3.6v-9.8h3.6v9.8m7.2 0h-3.6v-14h3.6v14m7.2 0h-3.6v-5.6h3.6v5.6Z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { transform: "translate(.76 2.132)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              fill: "url(#bar_svg__a)",
              stroke: "url(#bar_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 4,
              transform: "rotate(16 19.24 17.868)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", { id: "bar_svg__e", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", { xlinkHref: "#bar_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              stroke: "url(#bar_svg__b)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "rect",
            {
              width: 27.692,
              height: 18,
              x: 5.393,
              y: 8.868,
              fill: "#ACAEFF",
              filter: "url(#bar_svg__d)",
              mask: "url(#bar_svg__e)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { mask: "url(#bar_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", { xlinkHref: "#bar_svg__f", fill: "#000", filter: "url(#bar_svg__g)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", { xlinkHref: "#bar_svg__f", fill: "#FFF" })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef = (0, import_react.forwardRef)(SvgBar);
var Bar_default = ForwardRef;

// src/icons/dist/colorful/Boxplot.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var SvgBoxplot = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "filter",
          {
            id: "boxplot_svg__d",
            width: "295%",
            height: "400%",
            x: "-97.5%",
            y: "-150%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "filter",
          {
            id: "boxplot_svg__g",
            width: "357.8%",
            height: "187.4%",
            x: "-128.9%",
            y: "-31.2%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "filter",
          {
            id: "boxplot_svg__i",
            width: "357.8%",
            height: "182.4%",
            x: "-128.9%",
            y: "-29.4%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "linearGradient",
          {
            id: "boxplot_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "91.259%",
            y2: "12.247%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "linearGradient",
          {
            id: "boxplot_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "9.334%",
            y2: "88.281%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            id: "boxplot_svg__f",
            d: "M27.214 7.868v1.538h-1.9v1.523h1.925v8.864h-1.925v2.554h1.9v1.54H21.81v-1.54h1.963v-2.554h-1.91v-8.864h1.91V9.406H21.81V7.868h5.405Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            id: "boxplot_svg__h",
            d: "M14.78 16.125h1.86v7.46h-1.86v2.647h-1.57v-2.647h-1.97v-7.46h1.97V9.868h1.572v6.257Zm-3.54-6.257h5.429v1.545h-5.43V9.868Zm0 15.454h5.429v1.546h-5.43v-1.546Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "rect",
          {
            id: "boxplot_svg__c",
            width: 32,
            height: 28,
            x: 3.239,
            y: 3.868,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { transform: "translate(.76 2.132)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              fill: "url(#boxplot_svg__a)",
              stroke: "url(#boxplot_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 4,
              transform: "rotate(16 19.24 17.868)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mask", { id: "boxplot_svg__e", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("use", { xlinkHref: "#boxplot_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              stroke: "url(#boxplot_svg__b)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "rect",
            {
              width: 27.692,
              height: 18,
              x: 5.393,
              y: 8.868,
              fill: "#ACAEFF",
              filter: "url(#boxplot_svg__d)",
              mask: "url(#boxplot_svg__e)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fillRule: "nonzero", mask: "url(#boxplot_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "use",
              {
                xlinkHref: "#boxplot_svg__f",
                fill: "#000",
                filter: "url(#boxplot_svg__g)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("use", { xlinkHref: "#boxplot_svg__f", fill: "#FFF" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fillRule: "nonzero", mask: "url(#boxplot_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "use",
              {
                xlinkHref: "#boxplot_svg__h",
                fill: "#000",
                filter: "url(#boxplot_svg__i)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("use", { xlinkHref: "#boxplot_svg__h", fill: "#FFF" })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef2 = (0, import_react2.forwardRef)(SvgBoxplot);
var Boxplot_default = ForwardRef2;

// src/icons/dist/colorful/Event.tsx
var import_react3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var SvgEvent = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "filter",
          {
            id: "event_svg__e",
            width: "324.4%",
            height: "356.8%",
            x: "-112.2%",
            y: "-128.4%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "filter",
          {
            id: "event_svg__h",
            width: "281.2%",
            height: "390%",
            x: "-90.6%",
            y: "-105%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "filter",
          {
            id: "event_svg__j",
            width: "172.5%",
            height: "307.1%",
            x: "-36.2%",
            y: "-75%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feMorphology", { in: "SourceAlpha", radius: 1, result: "shadowInner" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feOffset", { dy: 2, in: "shadowInner", result: "shadowInner" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feComposite",
                {
                  in: "shadowOffsetOuter1",
                  in2: "shadowInner",
                  operator: "out",
                  result: "shadowOffsetOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "filter",
          {
            id: "event_svg__l",
            width: "281.2%",
            height: "390%",
            x: "-90.6%",
            y: "-105%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "linearGradient",
          {
            id: "event_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "96.465%",
            y2: "7.482%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "0%", stopColor: "#B0B5ED" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "100%", stopColor: "#F2EFFF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "linearGradient",
          {
            id: "event_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "4.202%",
            y2: "93.112%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF", stopOpacity: 0.673 }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "100%", stopColor: "#6370EA", stopOpacity: 0.413 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "linearGradient",
          {
            id: "event_svg__d",
            x1: "93.823%",
            x2: "9.004%",
            y1: "3.731%",
            y2: "93.556%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { id: "event_svg__g", d: "M7.352 9.62h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { id: "event_svg__i", d: "M26.352 17.62h-20m5-3v2.858m11 .142v4" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { id: "event_svg__k", d: "M18.352 20.62h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "rect",
          {
            id: "event_svg__c",
            width: 30,
            height: 28,
            x: 1.352,
            y: 3.352,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { transform: "translate(1.648 2.38)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "path",
            {
              fill: "url(#event_svg__a)",
              stroke: "url(#event_svg__b)",
              strokeWidth: 0.5,
              d: "M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z",
              transform: "rotate(16 18.352 17.613)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("mask", { id: "event_svg__f", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("use", { xlinkHref: "#event_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "rect",
            {
              width: 29.5,
              height: 27.5,
              x: 1.602,
              y: 3.602,
              stroke: "url(#event_svg__d)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "rect",
            {
              width: 24.06,
              height: 21.027,
              x: 4.513,
              y: 7.357,
              fill: "#ACAEFF",
              filter: "url(#event_svg__e)",
              mask: "url(#event_svg__f)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { mask: "url(#event_svg__f)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "use",
              {
                xlinkHref: "#event_svg__g",
                fill: "#000",
                filter: "url(#event_svg__h)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "use",
              {
                xlinkHref: "#event_svg__g",
                fill: "#FFF",
                stroke: "#52BCBA",
                strokeWidth: 0.5
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { mask: "url(#event_svg__f)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "use",
              {
                xlinkHref: "#event_svg__i",
                fill: "#000",
                filter: "url(#event_svg__j)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("use", { xlinkHref: "#event_svg__i", stroke: "#FFF", strokeWidth: 0.5 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { mask: "url(#event_svg__f)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "use",
              {
                xlinkHref: "#event_svg__k",
                fill: "#000",
                filter: "url(#event_svg__l)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "use",
              {
                xlinkHref: "#event_svg__k",
                fill: "#FFF",
                stroke: "#52BCBA",
                strokeWidth: 0.5
              }
            )
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef3 = (0, import_react3.forwardRef)(SvgEvent);
var Event_default = ForwardRef3;

// src/icons/dist/colorful/Graph.tsx
var import_react4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var SvgGraph = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "filter",
          {
            id: "graph_svg__d",
            width: "295%",
            height: "400%",
            x: "-97.5%",
            y: "-150%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "filter",
          {
            id: "graph_svg__g",
            width: "281.2%",
            height: "390%",
            x: "-90.6%",
            y: "-105%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "filter",
          {
            id: "graph_svg__i",
            width: "212%",
            height: "462.5%",
            x: "-54%",
            y: "-131.2%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feMorphology", { in: "SourceAlpha", radius: 1, result: "shadowInner" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: 2, in: "shadowInner", result: "shadowInner" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feComposite",
                {
                  in: "shadowOffsetOuter1",
                  in2: "shadowInner",
                  operator: "out",
                  result: "shadowOffsetOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "filter",
          {
            id: "graph_svg__k",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "filter",
          {
            id: "graph_svg__m",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "graph_svg__f", d: "M9.261 10.845h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "graph_svg__h", d: "M25.26 19.845v-2h-12v2m0-4v1.858" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "graph_svg__j", d: "M9.261 19.845h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "graph_svg__l", d: "M21.261 19.845h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "linearGradient",
          {
            id: "graph_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "91.259%",
            y2: "12.247%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "linearGradient",
          {
            id: "graph_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "9.334%",
            y2: "88.281%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            id: "graph_svg__c",
            width: 32,
            height: 28,
            x: 3.239,
            y: 3.868,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: "translate(.76 2.132)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              fill: "url(#graph_svg__a)",
              stroke: "url(#graph_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 4,
              transform: "rotate(16 19.24 17.868)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("mask", { id: "graph_svg__e", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("use", { xlinkHref: "#graph_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              stroke: "url(#graph_svg__b)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "rect",
            {
              width: 27.692,
              height: 18,
              x: 5.393,
              y: 8.868,
              fill: "#ACAEFF",
              filter: "url(#graph_svg__d)",
              mask: "url(#graph_svg__e)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { mask: "url(#graph_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "use",
              {
                xlinkHref: "#graph_svg__f",
                fill: "#000",
                filter: "url(#graph_svg__g)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "use",
              {
                xlinkHref: "#graph_svg__f",
                fill: "#52BCBA",
                stroke: "#FFF",
                strokeWidth: 0.5
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { mask: "url(#graph_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "use",
              {
                xlinkHref: "#graph_svg__h",
                fill: "#000",
                filter: "url(#graph_svg__i)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("use", { xlinkHref: "#graph_svg__h", stroke: "#FFF", strokeWidth: 0.5 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { mask: "url(#graph_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "use",
              {
                xlinkHref: "#graph_svg__j",
                fill: "#000",
                filter: "url(#graph_svg__k)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("use", { xlinkHref: "#graph_svg__j", fill: "#FFF" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { mask: "url(#graph_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "use",
              {
                xlinkHref: "#graph_svg__l",
                fill: "#000",
                filter: "url(#graph_svg__m)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("use", { xlinkHref: "#graph_svg__l", fill: "#FFF" })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef4 = (0, import_react4.forwardRef)(SvgGraph);
var Graph_default = ForwardRef4;

// src/icons/dist/colorful/LineBar.tsx
var import_react5 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var SvgLineBar = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "filter",
          {
            id: "line-bar_svg__d",
            width: "295%",
            height: "400%",
            x: "-97.5%",
            y: "-150%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "filter",
          {
            id: "line-bar_svg__g",
            width: "177.8%",
            height: "200%",
            x: "-38.9%",
            y: "-35.7%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "filter",
          {
            id: "line-bar_svg__i",
            width: "174.2%",
            height: "194.3%",
            x: "-37.1%",
            y: "-33.7%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "linearGradient",
          {
            id: "line-bar_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "91.259%",
            y2: "12.247%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "linearGradient",
          {
            id: "line-bar_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "9.334%",
            y2: "88.281%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "path",
          {
            id: "line-bar_svg__f",
            d: "M13.464 24.859h-3.6v-9.8h3.6v9.8m7.2 0h-3.6v-14h3.6v14m7.2 0h-3.6v-5.6h3.6v5.6Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "path",
          {
            id: "line-bar_svg__h",
            d: "m27.57 12.542-2.118-1.536-3.964 5.381-4.134-.907-8.65 8.6 1.978 1.768 7.435-7.515 4.298.944z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "rect",
          {
            id: "line-bar_svg__c",
            width: 32,
            height: 28,
            x: 3.239,
            y: 3.868,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(.76 2.132)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              fill: "url(#line-bar_svg__a)",
              stroke: "url(#line-bar_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 4,
              transform: "rotate(16 19.24 17.868)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("mask", { id: "line-bar_svg__e", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("use", { xlinkHref: "#line-bar_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              stroke: "url(#line-bar_svg__b)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "rect",
            {
              width: 27.692,
              height: 18,
              x: 5.393,
              y: 8.868,
              fill: "#ACAEFF",
              filter: "url(#line-bar_svg__d)",
              mask: "url(#line-bar_svg__e)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { mask: "url(#line-bar_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "use",
              {
                xlinkHref: "#line-bar_svg__f",
                fill: "#000",
                filter: "url(#line-bar_svg__g)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("use", { xlinkHref: "#line-bar_svg__f", fill: "#FFF" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "g",
            {
              fillRule: "nonzero",
              mask: "url(#line-bar_svg__e)",
              transform: "rotate(7 18.137 18.427)",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "use",
                  {
                    xlinkHref: "#line-bar_svg__h",
                    fill: "#000",
                    filter: "url(#line-bar_svg__i)"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("use", { xlinkHref: "#line-bar_svg__h", fill: "#FFF" })
              ]
            }
          )
        ] })
      ] })
    ]
  })
);
var ForwardRef5 = (0, import_react5.forwardRef)(SvgLineBar);
var LineBar_default = ForwardRef5;

// src/icons/dist/colorful/LineStack.tsx
var import_react6 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var SvgLineStack = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "linearGradient",
          {
            id: "line-stack_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "96.465%",
            y2: "7.482%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "0%", stopColor: "#B0B5ED" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "100%", stopColor: "#F2EFFF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "linearGradient",
          {
            id: "line-stack_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "4.202%",
            y2: "93.112%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF", stopOpacity: 0.673 }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "100%", stopColor: "#6370EA", stopOpacity: 0.413 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "linearGradient",
          {
            id: "line-stack_svg__d",
            x1: "93.823%",
            x2: "9.004%",
            y1: "3.731%",
            y2: "93.556%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "filter",
          {
            id: "line-stack_svg__e",
            width: "324.4%",
            height: "356.8%",
            x: "-112.2%",
            y: "-128.4%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "filter",
          {
            id: "line-stack_svg__h",
            width: "177.8%",
            height: "206.9%",
            x: "-38.9%",
            y: "-38.2%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "rect",
          {
            id: "line-stack_svg__c",
            width: 30,
            height: 28,
            x: 1.352,
            y: 3.352,
            rx: 4
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            id: "line-stack_svg__g",
            d: "M12.217 7.218 18 9.166v3.925H0V9.9l4.357.542 7.86-3.225ZM18 0v7.871l-5.825-1.962-7.987 3.277L0 8.664V1.021l6.137.634L12.6 0H18Z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { transform: "translate(1.648 2.38)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "path",
            {
              fill: "url(#line-stack_svg__a)",
              stroke: "url(#line-stack_svg__b)",
              strokeWidth: 0.5,
              d: "M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z",
              transform: "rotate(16 18.352 17.613)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("mask", { id: "line-stack_svg__f", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("use", { xlinkHref: "#line-stack_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "rect",
            {
              width: 29.5,
              height: 27.5,
              x: 1.602,
              y: 3.602,
              stroke: "url(#line-stack_svg__d)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "rect",
            {
              width: 24.06,
              height: 21.027,
              x: 4.513,
              y: 7.357,
              fill: "#ACAEFF",
              filter: "url(#line-stack_svg__e)",
              mask: "url(#line-stack_svg__f)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("g", { fillRule: "nonzero", mask: "url(#line-stack_svg__f)", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { transform: "translate(7.352 10.62)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "use",
              {
                xlinkHref: "#line-stack_svg__g",
                fill: "#000",
                filter: "url(#line-stack_svg__h)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("use", { xlinkHref: "#line-stack_svg__g", fill: "#FFF" })
          ] }) })
        ] })
      ] })
    ]
  })
);
var ForwardRef6 = (0, import_react6.forwardRef)(SvgLineStack);
var LineStack_default = ForwardRef6;

// src/icons/dist/colorful/Line.tsx
var import_react7 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var SvgLine = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "linearGradient",
          {
            id: "line_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "96.465%",
            y2: "7.482%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "0%", stopColor: "#B0B5ED" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "100%", stopColor: "#F2EFFF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "linearGradient",
          {
            id: "line_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "4.202%",
            y2: "93.112%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF", stopOpacity: 0.673 }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "100%", stopColor: "#6370EA", stopOpacity: 0.413 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "linearGradient",
          {
            id: "line_svg__d",
            x1: "93.823%",
            x2: "9.004%",
            y1: "3.731%",
            y2: "93.556%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "filter",
          {
            id: "line_svg__e",
            width: "324.4%",
            height: "356.8%",
            x: "-112.2%",
            y: "-128.4%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "filter",
          {
            id: "line_svg__h",
            width: "207.4%",
            height: "265.4%",
            x: "-51.1%",
            y: "-29.7%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.75,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "rect",
          {
            id: "line_svg__c",
            width: 30,
            height: 28,
            x: 1.352,
            y: 3.352,
            rx: 4
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "path",
          {
            id: "line_svg__g",
            d: "m10.755 23.486-.87-.776.223-.276 4.756-5.64 4.343.948 3.928-5.316.92.664-4.533 5.903-4.355-.952-4.145 5.103z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { transform: "translate(1.648 2.38)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              fill: "url(#line_svg__a)",
              stroke: "url(#line_svg__b)",
              strokeWidth: 0.5,
              d: "M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z",
              transform: "rotate(16 18.352 17.613)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("mask", { id: "line_svg__f", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("use", { xlinkHref: "#line_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "rect",
            {
              width: 29.5,
              height: 27.5,
              x: 1.602,
              y: 3.602,
              stroke: "url(#line_svg__d)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "rect",
            {
              width: 24.06,
              height: 21.027,
              x: 4.513,
              y: 7.357,
              fill: "#ACAEFF",
              filter: "url(#line_svg__e)",
              mask: "url(#line_svg__f)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { fillRule: "nonzero", mask: "url(#line_svg__f)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "use",
              {
                xlinkHref: "#line_svg__g",
                fill: "#000",
                filter: "url(#line_svg__h)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "use",
              {
                xlinkHref: "#line_svg__g",
                fill: "#FFF",
                stroke: "#FFF",
                strokeWidth: 1.5
              }
            )
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef7 = (0, import_react7.forwardRef)(SvgLine);
var Line_default = ForwardRef7;

// src/icons/dist/colorful/Lines.tsx
var import_react8 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var SvgLines = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "linearGradient",
          {
            id: "lines_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "96.465%",
            y2: "7.482%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "0%", stopColor: "#B0B5ED" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "100%", stopColor: "#F2EFFF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "linearGradient",
          {
            id: "lines_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "4.202%",
            y2: "93.112%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF", stopOpacity: 0.673 }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "100%", stopColor: "#6370EA", stopOpacity: 0.413 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "linearGradient",
          {
            id: "lines_svg__d",
            x1: "93.823%",
            x2: "9.004%",
            y1: "3.731%",
            y2: "93.556%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: "lines_svg__e",
            width: "324.4%",
            height: "356.8%",
            x: "-112.2%",
            y: "-128.4%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "filter",
          {
            id: "lines_svg__h",
            width: "218.4%",
            height: "200.5%",
            x: "-59.9%",
            y: "-37.7%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.75,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "rect",
          {
            id: "lines_svg__c",
            width: 30,
            height: 28,
            x: 1.352,
            y: 3.352,
            rx: 4
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "path",
          {
            id: "lines_svg__g",
            d: "M.848 10.776 0 10.019l.218-.269 4.626-5.495 4.226.925L12.89 0l.895.648L9.377 6.4 5.14 5.47l-4.032 4.973-.259.333Zm.548 4.449 3.096-3.093 4.811 1.961 3.524-2.483.66.913-4.278 2.781-4.308-1.988-2.708 2.705-.797-.796Z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("g", { transform: "translate(1.648 2.38)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "url(#lines_svg__a)",
              stroke: "url(#lines_svg__b)",
              strokeWidth: 0.5,
              d: "M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z",
              transform: "rotate(16 18.352 17.613)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("mask", { id: "lines_svg__f", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("use", { xlinkHref: "#lines_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "rect",
            {
              width: 29.5,
              height: 27.5,
              x: 1.602,
              y: 3.602,
              stroke: "url(#lines_svg__d)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "rect",
            {
              width: 24.06,
              height: 21.027,
              x: 4.513,
              y: 7.357,
              fill: "#ACAEFF",
              filter: "url(#lines_svg__e)",
              mask: "url(#lines_svg__f)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("g", { fillRule: "nonzero", mask: "url(#lines_svg__f)", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("g", { transform: "translate(8.68 9.372)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "use",
              {
                xlinkHref: "#lines_svg__g",
                fill: "#000",
                filter: "url(#lines_svg__h)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "use",
              {
                xlinkHref: "#lines_svg__g",
                fill: "#FFF",
                stroke: "#FFF",
                strokeWidth: 1.5
              }
            )
          ] }) })
        ] })
      ] })
    ]
  })
);
var ForwardRef8 = (0, import_react8.forwardRef)(SvgLines);
var Lines_default = ForwardRef8;

// src/icons/dist/colorful/Network.tsx
var import_react9 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var SvgNetwork = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "filter",
          {
            id: "network_svg__d",
            width: "295%",
            height: "400%",
            x: "-97.5%",
            y: "-150%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "filter",
          {
            id: "network_svg__g",
            width: "245%",
            height: "390%",
            x: "-72.5%",
            y: "-105%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feMorphology",
                {
                  in: "SourceAlpha",
                  operator: "dilate",
                  radius: 0.25,
                  result: "shadowSpreadOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feOffset", { dy: 2, in: "shadowSpreadOuter1", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feComposite",
                {
                  in: "shadowBlurOuter1",
                  in2: "SourceAlpha",
                  operator: "out",
                  result: "shadowBlurOuter1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "filter",
          {
            id: "network_svg__i",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "filter",
          {
            id: "network_svg__k",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "filter",
          {
            id: "network_svg__m",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "filter",
          {
            id: "network_svg__o",
            width: "275%",
            height: "380%",
            x: "-87.5%",
            y: "-100%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { id: "network_svg__f", d: "M4.5 8.5h10v5h-10z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { id: "network_svg__h", d: "M0 0h8v5H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { id: "network_svg__j", d: "M12 0h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { id: "network_svg__l", d: "M0 17h8v5H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { id: "network_svg__n", d: "M12 17h8v5h-8z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "linearGradient",
          {
            id: "network_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "91.259%",
            y2: "12.247%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "linearGradient",
          {
            id: "network_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "9.334%",
            y2: "88.281%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "rect",
          {
            id: "network_svg__c",
            width: 32,
            height: 28,
            x: 3.239,
            y: 3.868,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(.76 2.132)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              fill: "url(#network_svg__a)",
              stroke: "url(#network_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 4,
              transform: "rotate(16 19.24 17.868)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("mask", { id: "network_svg__e", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("use", { xlinkHref: "#network_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "rect",
            {
              width: 31.5,
              height: 27.5,
              x: 3.489,
              y: 4.118,
              stroke: "url(#network_svg__b)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "rect",
            {
              width: 27.692,
              height: 18,
              x: 5.393,
              y: 8.868,
              fill: "#ACAEFF",
              filter: "url(#network_svg__d)",
              mask: "url(#network_svg__e)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { mask: "url(#network_svg__e)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(9.24 6.868)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__f",
                  fill: "#000",
                  filter: "url(#network_svg__g)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__f",
                  fill: "#52BCBA",
                  stroke: "#FFF",
                  strokeWidth: 0.5
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(9.24 6.868)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__h",
                  fill: "#000",
                  filter: "url(#network_svg__i)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("use", { xlinkHref: "#network_svg__h", fill: "#FFF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(9.24 6.868)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__j",
                  fill: "#000",
                  filter: "url(#network_svg__k)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("use", { xlinkHref: "#network_svg__j", fill: "#FFF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "path",
              {
                stroke: "#FFF",
                strokeLinecap: "square",
                strokeWidth: 0.5,
                d: "M18.717 13.467v1.9"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "path",
              {
                stroke: "#FFF",
                strokeWidth: 0.5,
                d: "M25.24 11.868v1.523h-12v-1.523m12 13v-2h-12v2"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "path",
              {
                stroke: "#FFF",
                strokeLinecap: "square",
                strokeWidth: 0.5,
                d: "M18.717 21.01v1.858"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(9.24 6.868)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__l",
                  fill: "#000",
                  filter: "url(#network_svg__m)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("use", { xlinkHref: "#network_svg__l", fill: "#FFF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { transform: "translate(9.24 6.868)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "use",
                {
                  xlinkHref: "#network_svg__n",
                  fill: "#000",
                  filter: "url(#network_svg__o)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("use", { xlinkHref: "#network_svg__n", fill: "#FFF" })
            ] })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef9 = (0, import_react9.forwardRef)(SvgNetwork);
var Network_default = ForwardRef9;

// src/icons/dist/colorful/Pie.tsx
var import_react10 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var SvgPie = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "linearGradient",
          {
            id: "pie_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "103.889%",
            y2: ".69%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("stop", { offset: "0%", stopColor: "#727CDD" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("stop", { offset: "100%", stopColor: "#EBE6FF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "linearGradient",
          {
            id: "pie_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "-3.115%",
            y2: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "filter",
          {
            id: "pie_svg__c",
            width: "126.5%",
            height: "126.5%",
            x: "-13.2%",
            y: "-13.2%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 1 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "filter",
          {
            id: "pie_svg__e",
            width: "177.8%",
            height: "177.8%",
            x: "-38.9%",
            y: "-27.8%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "path",
          {
            id: "pie_svg__d",
            d: "M8.03.67v9.3h9.3C16.996 14.453 13.249 18 8.698 18A8.68 8.68 0 0 1 0 9.302C0 4.75 3.547 1.004 8.03.67ZM9.368 0C13.986.27 17.733 4.016 18 8.632H9.368Z"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("g", { transform: "translate(4 3)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "rect",
            {
              width: 10.5,
              height: 10.5,
              x: 19.25,
              y: 0.25,
              fill: "url(#pie_svg__a)",
              stroke: "url(#pie_svg__b)",
              strokeWidth: 0.5,
              opacity: 0.625,
              rx: 5.25
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "rect",
            {
              width: 30.6,
              height: 30.6,
              x: -0.3,
              y: 2.7,
              fill: "url(#pie_svg__a)",
              stroke: "url(#pie_svg__b)",
              strokeWidth: 0.6,
              rx: 15.3
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "rect",
            {
              width: 22.667,
              height: 22.667,
              x: 3.667,
              y: 6.667,
              fill: "#ACAFFA",
              filter: "url(#pie_svg__c)",
              rx: 11.333
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("g", { fillRule: "nonzero", transform: "translate(6 9)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("use", { xlinkHref: "#pie_svg__d", fill: "#000", filter: "url(#pie_svg__e)" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("use", { xlinkHref: "#pie_svg__d", fill: "#FFF" })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef10 = (0, import_react10.forwardRef)(SvgPie);
var Pie_default = ForwardRef10;

// src/icons/dist/colorful/Process.tsx
var import_react11 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var SvgProcess = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
  "svg",
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    ref
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "linearGradient",
          {
            id: "process_svg__a",
            x1: "9.438%",
            x2: "81.731%",
            y1: "96.465%",
            y2: "7.482%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "0%", stopColor: "#B0B5ED" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "100%", stopColor: "#F2EFFF" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "linearGradient",
          {
            id: "process_svg__b",
            x1: "93.823%",
            x2: "9.004%",
            y1: "4.202%",
            y2: "93.112%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF", stopOpacity: 0.673 }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "100%", stopColor: "#6370EA", stopOpacity: 0.413 })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "linearGradient",
          {
            id: "process_svg__d",
            x1: "93.823%",
            x2: "9.004%",
            y1: "3.731%",
            y2: "93.556%",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "0%", stopColor: "#D2D8FF" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("stop", { offset: "100%", stopColor: "#6370EA" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "filter",
          {
            id: "process_svg__e",
            width: "324.4%",
            height: "356.8%",
            x: "-112.2%",
            y: "-128.4%",
            filterUnits: "objectBoundingBox",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 9 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "filter",
          {
            id: "process_svg__h",
            width: "275%",
            height: "275%",
            x: "-87.5%",
            y: "-62.5%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "filter",
          {
            id: "process_svg__j",
            width: "275%",
            height: "275%",
            x: "-87.5%",
            y: "-62.5%",
            filterUnits: "objectBoundingBox",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("feOffset", { dy: 2, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "feGaussianBlur",
                {
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  stdDeviation: 2
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "feColorMatrix",
                {
                  in: "shadowBlurOuter1",
                  values: "0 0 0 0 0.278431373 0 0 0 0 0.298039216 0 0 0 0 0.745098039 0 0 0 0.5 0"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "path",
          {
            id: "process_svg__g",
            d: "M3.965 0H.105l3.783 4.099L0 8h3.948L8 4.145z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "path",
          {
            id: "process_svg__i",
            d: "M14.965 0h-3.86l3.783 4.099L11 8h3.948L19 4.145z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "rect",
          {
            id: "process_svg__c",
            width: 30,
            height: 28,
            x: 1.352,
            y: 3.352,
            rx: 4
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M0 0h40v40H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { transform: "translate(1.648 2.38)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "path",
            {
              fill: "url(#process_svg__a)",
              stroke: "url(#process_svg__b)",
              strokeWidth: 0.5,
              d: "M29.43 3.865a3.73 3.73 0 0 1 2.65 1.094 3.73 3.73 0 0 1 1.1 2.65l-.012 19.99a3.748 3.748 0 0 1-1.101 2.651 3.748 3.748 0 0 1-2.65 1.102l-22.143.01a3.73 3.73 0 0 1-2.651-1.094 3.736 3.736 0 0 1-1.1-2.65l.013-19.99a3.748 3.748 0 0 1 1.101-2.652 3.748 3.748 0 0 1 2.65-1.101Z",
              transform: "rotate(16 18.352 17.613)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("mask", { id: "process_svg__f", fill: "#fff", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("use", { xlinkHref: "#process_svg__c" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "rect",
            {
              width: 29.5,
              height: 27.5,
              x: 1.602,
              y: 3.602,
              stroke: "url(#process_svg__d)",
              strokeWidth: 0.5,
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "rect",
            {
              width: 24.06,
              height: 21.027,
              x: 4.513,
              y: 7.357,
              fill: "#ACAEFF",
              filter: "url(#process_svg__e)",
              mask: "url(#process_svg__f)",
              rx: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { mask: "url(#process_svg__f)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { transform: "translate(6.852 13.35)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "use",
                {
                  xlinkHref: "#process_svg__g",
                  fill: "#000",
                  filter: "url(#process_svg__h)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("use", { xlinkHref: "#process_svg__g", fill: "#FFF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { transform: "translate(6.852 13.35)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "use",
                {
                  xlinkHref: "#process_svg__i",
                  fill: "#000",
                  filter: "url(#process_svg__j)"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("use", { xlinkHref: "#process_svg__i", fill: "#FFF" })
            ] })
          ] })
        ] })
      ] })
    ]
  })
);
var ForwardRef11 = (0, import_react11.forwardRef)(SvgProcess);
var Process_default = ForwardRef11;
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.cjs.map
