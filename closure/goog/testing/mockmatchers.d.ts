declare module goog {
    function require(name: 'goog.testing.mockmatchers'): typeof goog.testing.mockmatchers;
    function require(name: 'goog.testing.mockmatchers.ArgumentMatcher'): typeof goog.testing.mockmatchers.ArgumentMatcher;
    function require(name: 'goog.testing.mockmatchers.InstanceOf'): typeof goog.testing.mockmatchers.InstanceOf;
    function require(name: 'goog.testing.mockmatchers.TypeOf'): typeof goog.testing.mockmatchers.TypeOf;
    function require(name: 'goog.testing.mockmatchers.RegexpMatch'): typeof goog.testing.mockmatchers.RegexpMatch;
    function require(name: 'goog.testing.mockmatchers.IgnoreArgument'): typeof goog.testing.mockmatchers.IgnoreArgument;
    function require(name: 'goog.testing.mockmatchers.ObjectEquals'): typeof goog.testing.mockmatchers.ObjectEquals;
    function require(name: 'goog.testing.mockmatchers.SaveArgument'): typeof goog.testing.mockmatchers.SaveArgument;
}

declare module goog.testing.mockmatchers {

    /**
     * A simple interface for executing argument matching.  A match in this case is
     * testing to see if a supplied object fits a given criteria.  True is returned
     * if the given criteria is met.
     * @param {Function=} opt_matchFn A function that evaluates a given argument
     *     and returns true if it meets a given criteria.
     * @param {?string=} opt_matchName The name expressing intent as part of
     *      an error message for when a match fails.
     * @constructor
     */
    class ArgumentMatcher {
        constructor(opt_matchFn?: Function, opt_matchName?: string);
        
        /**
         * A function that takes a match argument and an optional MockExpectation
         * which (if provided) will get error information and returns whether or
         * not it matches.
         * @param {*} toVerify The argument that should be verified.
         * @param {?goog.testing.MockExpectation=} opt_expectation The expectation
         *     for this match.
         * @return {boolean} Whether or not a given argument passes verification.
         */
        matches(toVerify: any, opt_expectation?: goog.testing.MockExpectation): boolean;
    }

    /**
     * A matcher that verifies that an argument is an instance of a given class.
     * @param {Function} ctor The class that will be used for verification.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class InstanceOf extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(ctor: Function);
    }

    /**
     * A matcher that verifies that an argument is of a given type (e.g. "object").
     * @param {string} type The type that a given argument must have.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class TypeOf extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(type: string);
    }

    /**
     * A matcher that verifies that an argument matches a given RegExp.
     * @param {RegExp} regexp The regular expression that the argument must match.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class RegexpMatch extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(regexp: RegExp);
    }

    /**
     * A matcher that always returns true. It is useful when the user does not care
     * for some arguments.
     * For example: mockFunction('username', 'password', IgnoreArgument);
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class IgnoreArgument extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor();
    }

    /**
     * A matcher that verifies that the argument is an object that equals the given
     * expected object, using a deep comparison.
     * @param {Object} expectedObject An object to match against when
     *     verifying the argument.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     */
    class ObjectEquals extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(expectedObject: Object);
    }

    /**
     * A matcher that saves the argument that it is verifying so that your unit test
     * can perform extra tests with this argument later.  For example, if the
     * argument is a callback method, the unit test can then later call this
     * callback to test the asynchronous portion of the call.
     * @param {goog.testing.mockmatchers.ArgumentMatcher|Function=} opt_matcher
     *     Argument matcher or matching function that will be used to validate the
     *     argument.  By default, argument will always be valid.
     * @param {?string=} opt_matchName The name expressing intent as part of
     *      an error message for when a match fails.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class SaveArgument extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(opt_matcher?: goog.testing.mockmatchers.ArgumentMatcher|Function, opt_matchName?: string);
        
        /**
         * Saved argument that was verified.
         * @type {*}
         */
        arg: any;
    }

    /**
     * An instance of the IgnoreArgument matcher. Returns true for all matches.
     * @type {!goog.testing.mockmatchers.IgnoreArgument}
     */
    var ignoreArgument: goog.testing.mockmatchers.IgnoreArgument;

    /**
     * A matcher that verifies that an argument is an array.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isArray: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a array-like.  A NodeList is an
     * example of a collection that is very close to an array.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isArrayLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a date-like.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isDateLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a string.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isString: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a boolean.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isBoolean: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a number.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isNumber: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is a function.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isFunction: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is an object.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isObject: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A matcher that verifies that an argument is like a DOM node.
     * @type {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    var isNodeLike: goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * A function that checks to see if an array matches a given set of
     * expectations.  The expectations array can be a mix of ArgumentMatcher
     * implementations and values.  True will be returned if values are identical or
     * if a matcher returns a positive result.
     * @param {Array<?>} expectedArr An array of expectations which can be either
     *     values to check for equality or ArgumentMatchers.
     * @param {Array<?>} arr The array to match.
     * @param {goog.testing.MockExpectation?=} opt_expectation The expectation
     *     for this match.
     * @return {boolean} Whether or not the given array matches the expectations.
     */
    function flexibleArrayMatcher(expectedArr: Array<any>, arr: Array<any>, opt_expectation?: goog.testing.MockExpectation): boolean;
}
