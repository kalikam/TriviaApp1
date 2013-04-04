function Controller() {
    function single() {
        Alloy.createController("home").getView().open();
    }
    function multi() {
        Alloy.createController("multiplayer").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.typeWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "typeWin",
        title: "Select Game Type"
    });
    $.addTopLevelView($.__views.typeWin);
    $.__views.button11 = Ti.UI.createButton({
        top: "60dp",
        width: "120dp",
        height: "40dp",
        align: "center",
        title: "Single Player",
        id: "button11"
    });
    $.__views.typeWin.add($.__views.button11);
    single ? $.__views.button11.addEventListener("click", single) : __defers["$.__views.button11!click!single"] = !0;
    $.__views.button21 = Ti.UI.createButton({
        top: "120dp",
        width: "120dp",
        height: "40dp",
        align: "center",
        title: "Multi Player",
        id: "button21"
    });
    $.__views.typeWin.add($.__views.button21);
    multi ? $.__views.button21.addEventListener("click", multi) : __defers["$.__views.button21!click!multi"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    __defers["$.__views.button11!click!single"] && $.__views.button11.addEventListener("click", single);
    __defers["$.__views.button21!click!multi"] && $.__views.button21.addEventListener("click", multi);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;