goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../wonderful_lib/types.js", ['wonderful_lib.types'], ['cljs.core']);
goog.addDependency("../wonderful_lib/ttt.js", ['wonderful_lib.ttt'], ['cljs.core', 'wonderful_lib.types']);
goog.addDependency("../wonderful_lib/core.js", ['wonderful_lib.core'], ['cljs.core', 'wonderful_lib.types']);
goog.addDependency("../wonderful_lib/dummy.js", ['wonderful_lib.dummy'], ['cljs.core']);