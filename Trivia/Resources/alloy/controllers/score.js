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
        headerTitle: "Top 10 marks",
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.Home = Ti.UI.createButton({
        top: "120dp",
        align: "center",
        width: "80dp",
        height: "40dp",
        title: "Home",
        id: "Home"
    });
    $.__views.score.add($.__views.Home);
    close ? $.__views.Home.addEventListener("click", close) : __defers["$.__views.Home!click!close"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, dataArray = [];
    __defers["$.__views.score!focus!show"] && $.__views.score.addEventListener("focus", show);
    __defers["$.__views.Home!click!close"] && $.__views.Home.addEventListener("click", close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;