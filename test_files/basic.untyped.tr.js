goog.module('sickle_test.basic.untyped');/**
 * @param {?} arg1
 * @return {?}
 */
function func(arg1) {
    return [3];
}
class Foo {
    /**
     * @param {?} ctorArg
     */
    constructor(ctorArg) {
        this.ctorArg = ctorArg;
        this.field = 'hello';
    }
    static _sickle_typeAnnotationsHelper() {
        /** @type {?} */
        Foo.prototype.field;
        /** @type {?} */
        Foo.prototype.ctorArg;
    }
}
// These two declarations should not have a @type annotation,
// regardless of untyped.
(function () {
    // With a type annotation:
    let { a, b } = { a: null, b: null };
})();
(function () {
    // Without a type annotation:
    let { a, b } = { a: null, b: null };
})();