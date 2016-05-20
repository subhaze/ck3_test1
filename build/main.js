System.register("nest/nested", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function nested() {
        console.log('nested');
    }
    exports_1("nested", nested);
    return {
        setters:[],
        execute: function() {
            console.log("I'm a side effect, because I was imported somewhere (nest/nested.js)");
        }
    }
});
System.register("other", ["nest/nested"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var something;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            exports_2("something", something = 'something');
        }
    }
});
System.register("moar", ["other"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var _other;
    function moar() {
        console.log('moar');
    }
    exports_3("moar", moar);
    function other() {
        console.log(_other.something);
    }
    exports_3("other", other);
    return {
        setters:[
            function (_other_1) {
                _other = _other_1;
            }],
        execute: function() {
        }
    }
});
System.register("main", ["moar"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var moar_1;
    return {
        setters:[
            function (moar_1_1) {
                moar_1 = moar_1_1;
            }],
        execute: function() {
            moar_1.moar();
            moar_1.other();
        }
    }
});
