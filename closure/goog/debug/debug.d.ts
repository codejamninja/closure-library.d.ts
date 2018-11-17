declare module goog {
    function require(name: 'goog.debug'): typeof goog.debug;
}

declare module goog.debug {

    /**
     * Max length of stack to try and output
     * @type {number}
     */
    var MAX_STACK_DEPTH: number;

    /**
     * Catches onerror events fired by windows and similar objects.
     * @param {function(Object)} logFunc The function to call with the error
     *    information.
     * @param {boolean=} opt_cancel Whether to stop the error from reaching the
     *    browser.
     * @param {Object=} opt_target Object that fires onerror events.
     * @suppress {strictMissingProperties} onerror is not defined as a property
     *    on Object.
     */
    function catchErrors(logFunc: (arg0: Object) => any, opt_cancel?: boolean, opt_target?: Object): void;

    /**
     * Creates a string representing an object and all its properties.
     * @param {Object|null|undefined} obj Object to expose.
     * @param {boolean=} opt_showFn Show the functions as well as the properties,
     *     default is false.
     * @return {string} The string representation of `obj`.
     */
    function expose(obj: Object|void|void, opt_showFn?: boolean): string;

    /**
     * Creates a string representing a given primitive or object, and for an
     * object, all its properties and nested objects. NOTE: The output will include
     * Uids on all objects that were exposed. Any added Uids will be removed before
     * returning.
     * @param {*} obj Object to expose.
     * @param {boolean=} opt_showFn Also show properties that are functions (by
     *     default, functions are omitted).
     * @return {string} A string representation of `obj`.
     */
    function deepExpose(obj: any, opt_showFn?: boolean): string;

    /**
     * Recursively outputs a nested array as a string.
     * @param {Array<?>} arr The array.
     * @return {string} String representing nested array.
     */
    function exposeArray(arr: Array<any>): string;

    /**
     * Normalizes the error/exception object between browsers.
     * @param {*} err Raw error object.
     * @return {{
     *    message: (?|undefined),
     *    name: (?|undefined),
     *    lineNumber: (?|undefined),
     *    fileName: (?|undefined),
     *    stack: (?|undefined)
     * }} Normalized error object.
     * @suppress {strictMissingProperties} properties not defined on err
     */
    function normalizeErrorObject(err: any): {message: any|void; name: any|void; lineNumber: any|void; fileName: any|void; stack: any|void};

    /**
     * Converts an object to an Error using the object's toString if it's not
     * already an Error, adds a stacktrace if there isn't one, and optionally adds
     * an extra message.
     * @param {*} err The original thrown error, object, or string.
     * @param {string=} opt_message  optional additional message to add to the
     *     error.
     * @return {!Error} If err is an Error, it is enhanced and returned. Otherwise,
     *     it is converted to an Error which is enhanced and returned.
     */
    function enhanceError(err: any, opt_message?: string): Error;

    /**
     * Converts an object to an Error using the object's toString if it's not
     * already an Error, adds a stacktrace if there isn't one, and optionally adds
     * context to the Error, which is reported by the closure error reporter.
     * @param {*} err The original thrown error, object, or string.
     * @param {!Object<string, string>=} opt_context Key-value context to add to the
     *     Error.
     * @return {!Error} If err is an Error, it is enhanced and returned. Otherwise,
     *     it is converted to an Error which is enhanced and returned.
     */
    function enhanceErrorWithContext(err: any, opt_context?: {[index: string]: string}): Error;

    /**
     * Gets the current stack trace. Simple and iterative - doesn't worry about
     * catching circular references or getting the args.
     * @param {number=} opt_depth Optional maximum depth to trace back to.
     * @return {string} A string with the function names of all functions in the
     *     stack, separated by \n.
     * @suppress {es5Strict}
     */
    function getStacktraceSimple(opt_depth?: number): string;

    /**
     * Gets the current stack trace, either starting from the caller or starting
     * from a specified function that's currently on the call stack.
     * @param {?Function=} fn If provided, when collecting the stack trace all
     *     frames above the topmost call to this function, including that call,
     *     will be left out of the stack trace.
     * @return {string} Stack trace.
     * @suppress {es5Strict}
     */
    function getStacktrace(fn?: Function): string;

    /**
     * Set a custom function name resolver.
     * @param {function(Function): string} resolver Resolves functions to their
     *     names.
     */
    function setFunctionResolver(resolver: (arg0: Function) => string): void;

    /**
     * Gets a function name
     * @param {Function} fn Function to get name of.
     * @return {string} Function's name.
     */
    function getFunctionName(fn: Function): string;

    /**
     * Makes whitespace visible by replacing it with printable characters.
     * This is useful in finding diffrences between the expected and the actual
     * output strings of a testcase.
     * @param {string} string whose whitespace needs to be made visible.
     * @return {string} string whose whitespace is made visible.
     */
    function makeWhitespaceVisible(string: string): string;

    /**
     * Returns the type of a value. If a constructor is passed, and a suitable
     * string cannot be found, 'unknown type name' will be returned.
     *
     * <p>Forked rather than moved from {@link goog.asserts.getType_}
     * to avoid adding a dependency to goog.asserts.
     * @param {*} value A constructor, object, or primitive.
     * @return {string} The best display name for the value, or 'unknown type name'.
     */
    function runtimeType(value: any): string;

    /**
     * Freezes the given object, but only in debug mode (and in browsers that
     * support it).  Note that this is a shallow freeze, so for deeply nested
     * objects it must be called at every level to ensure deep immutability.
     * @param {T} arg
     * @return {T}
     * @template T
     */
    function freeze<T>(arg: T): T;
}
