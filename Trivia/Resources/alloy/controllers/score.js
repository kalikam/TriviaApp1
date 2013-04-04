function Controller() {
    function show() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/show_score.php");
        sendit.send();
        sendit.onload = function() {
            var json = JSON.parse(this.responseText), json = json.test;
            json.length == 0 && ($.tableView.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; i < json.length; i++) {
                var row = Ti.UI.createTableViewRow(), view1 = Ti.UI.createView({
                    left: "0%",
                    width: "50%",
                    backgroundColor: "black"
                }), label1 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].name
                });
                view1.add(label1);
                var view2 = Ti.UI.createView({
                    left: "50%",
                    width: "50%",
                    backgroundColor: "red"
                }), label2 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].marks
                });
                view2.add(label2);
                row.add(view1);
                row.add(view2);
                dataArray.push(row);
            }
            $.tableView.setData(dataArray);
        };
    }
    function close() {
        $.addView.open();
    }
    function home() {
        Alloy.createController("home").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    $.addTopLevelView($.__views.score);
    show ? $.__views.score.addEventListener("focus", show) : __defers["$.__views.score!focus!show"] = !0;
    $.__views.tableView = Ti.UI.createTableView({
        headerTitle: "Top 5 marks",
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.Home = Ti.UI.createButton({
        title: "Home",
        top: "180dp",
        align: "center",
        width: "80dp",
        height: "40dp",
        id: "Home"
    });
    $.__views.score.add($.__views.Home);
    home ? $.__views.Home.addEventListener("click", home) : __defers["$.__views.Home!click!home"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, dataArray = [];
    __defers["$.__views.score!focus!show"] && $.__views.score.addEventListener("focus", show);
    __defers["$.__views.Home!click!home"] && $.__views.Home.addEventListener("click", home);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;