function Controller() {
    function test() {
        var user1 = user_name, user2 = $.sendto.value, sendit1 = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            }
        });
        sendit1.open("POST", "http://nxgninnovations.com/playground/trivia/send_req.php");
        var params1 = {
            sendfrom: user1,
            sendto: user2,
            status: "0"
        };
        sendit1.send(params1);
        sendit1.onload = function() {
            var json = JSON.parse(this.responseText), json1 = json.msg;
        };
    }
    function show1() {
        var user1 = user_name, conn = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        alert(user1);
        conn.open("POST", "http://nxgninnovations.com/playground/trivia/frnd_req.php");
        var params1 = {
            user: user1
        };
        alert(params1);
        conn.send(params1);
        conn.send();
        conn.onload = function() {
            var json = JSON.parse(this.responseText);
            alert(json);
            alert(json.length);
            json.length == 0 && ($.tableView12.headerTitle = "No Request");
            dataArray1 = [];
            for (var i = 0; i < json.length; i++) {
                var row1 = Ti.UI.createTableViewRow(), view1 = Ti.UI.createView({
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
                }), cat = Titanium.UI.createButton({
                    width: "100%",
                    top: topValue,
                    numId: json[i].gameid
                });
                cat.addEventListener("click", function(e) {
                    alert(e.source.numId);
                });
                view2.add(cat);
                row1.add(view1);
                row1.add(view2);
                dataArray1.push(row1);
            }
            $.tableView12.setData(dataArray1);
        };
    }
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
        total = 0;
    }
    function sports() {
        Alloy.createController("sport").getView().open();
        var s = 3;
        att_q = 1;
        total = 0;
    }
    function show() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/trivia/show_score.php");
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "black",
        height: "10dp",
        id: "tabGroup"
    });
    $.__views.addView = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "addView"
    });
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
        width: "120dp",
        height: "40dp",
        align: "center",
        id: "Movie"
    });
    $.__views.addView.add($.__views.Movie);
    movie ? $.__views.Movie.addEventListener("click", movie) : __defers["$.__views.Movie!click!movie"] = !0;
    $.__views.Politics = Ti.UI.createButton({
        title: "Politics",
        top: "120dp",
        width: "120dp",
        height: "40dp",
        align: "center",
        id: "Politics"
    });
    $.__views.addView.add($.__views.Politics);
    politics ? $.__views.Politics.addEventListener("click", politics) : __defers["$.__views.Politics!click!politics"] = !0;
    $.__views.Sports = Ti.UI.createButton({
        title: "Sports",
        top: "180dp",
        width: "120dp",
        height: "40dp",
        align: "center",
        id: "Sports"
    });
    $.__views.addView.add($.__views.Sports);
    sports ? $.__views.Sports.addEventListener("click", sports) : __defers["$.__views.Sports!click!sports"] = !0;
    $.__views.tab1 = Ti.UI.createTab({
        title: "Category",
        height: "10dp",
        window: $.__views.addView,
        id: "tab1"
    });
    $.__views.tabGroup.addTab($.__views.tab1);
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    show ? $.__views.score.addEventListener("focus", show) : __defers["$.__views.score!focus!show"] = !0;
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
    $.__views.score.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Score List",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.tab3 = Ti.UI.createTab({
        title: "Multiplayer",
        window: $.__views.score,
        id: "tab3"
    });
    $.__views.tabGroup.addTab($.__views.tab3);
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
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
    $.__views.score.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Score List",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.tab2 = Ti.UI.createTab({
        title: "High Score",
        height: "10dp",
        window: $.__views.score,
        id: "tab2"
    });
    $.__views.tabGroup.addTab($.__views.tab2);
    $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, dataArray = [], dataArray1 = [];
    __defers["$.__views.Movie!click!movie"] && $.__views.Movie.addEventListener("click", movie);
    __defers["$.__views.Politics!click!politics"] && $.__views.Politics.addEventListener("click", politics);
    __defers["$.__views.Sports!click!sports"] && $.__views.Sports.addEventListener("click", sports);
    __defers["$.__views.score!focus!show"] && $.__views.score.addEventListener("focus", show);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;