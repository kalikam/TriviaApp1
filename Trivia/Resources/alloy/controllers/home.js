function Controller() {
    function movie() {
        var m = 1;
        att_q = 1;
        Alloy.createController("movi").getView().open();
        total = 0;
    }
    function politics() {
        Alloy.createController("pol").getView().open();
        var p = 2;
        att_q = 1;
        alert(p);
        total = 0;
    }
    function sports() {
        Alloy.createController("sport").getView().open();
        var s = 3;
        att_q = 1;
        alert(s);
        total = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.addView = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "addView"
    });
    $.addTopLevelView($.__views.addView);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "42dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#000",
                offset: 0
            }, {
                color: "#ccc",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.addView.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Select Category",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.Movie = Ti.UI.createButton({
        title: "Movies",
        top: "60dp",
        width: "60dp",
        height: "40dp",
        left: "5dp",
        id: "Movie"
    });
    $.__views.addView.add($.__views.Movie);
    movie ? $.__views.Movie.addEventListener("click", movie) : __defers["$.__views.Movie!click!movie"] = !0;
    $.__views.Politics = Ti.UI.createButton({
        title: "Politics",
        top: "120dp",
        width: "60dp",
        height: "40dp",
        left: "5dp",
        id: "Politics"
    });
    $.__views.addView.add($.__views.Politics);
    politics ? $.__views.Politics.addEventListener("click", politics) : __defers["$.__views.Politics!click!politics"] = !0;
    $.__views.Sports = Ti.UI.createButton({
        title: "Sports",
        top: "180dp",
        width: "60dp",
        height: "40dp",
        left: "5dp",
        id: "Sports"
    });
    $.__views.addView.add($.__views.Sports);
    sports ? $.__views.Sports.addEventListener("click", sports) : __defers["$.__views.Sports!click!sports"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    __defers["$.__views.Movie!click!movie"] && $.__views.Movie.addEventListener("click", movie);
    __defers["$.__views.Politics!click!politics"] && $.__views.Politics.addEventListener("click", politics);
    __defers["$.__views.Sports!click!sports"] && $.__views.Sports.addEventListener("click", sports);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;