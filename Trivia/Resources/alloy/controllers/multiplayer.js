function Controller() {
    function show() {
        var user = user_name, sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/trivia/frnd_req.php");
        var params = {
            user: user
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText), json = json.test;
            json.length == 0 && ($.tableView.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; i < json.length; i++) {
                var row = Ti.UI.createTableViewRow(), view1 = Ti.UI.createView({
                    left: "0%",
                    width: "auto",
                    height: "auto",
                    backgroundColor: "black"
                }), label1 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].name
                });
                view1.add(label1);
                var view2 = Ti.UI.createView({
                    width: "auto",
                    height: "auto",
                    backgroundColor: "red"
                }), cat = Ti.UI.createButton({
                    title: "Play",
                    width: "60dp",
                    height: "40dp",
                    color: "white",
                    numid1: json[i].gameid
                });
                cat.addEventListener("click", function(e) {
                    var play = Ti.Network.createHTTPClient({
                        onerror: function(e) {
                            Ti.API.debug(e.error);
                            alert(e.error);
                            alert("There was an error during the connection");
                        },
                        timeout: 1000
                    });
                    play.open("POST", "http://nxgninnovations.com/playground/trivia/frnd_req_update.php");
                    var params = {
                        numid: e.source.numid1
                    };
                    play.send(params);
                    play.onload = function() {
                        var json = JSON.parse(this.responseText), res = json.msg;
                        Alloy.createController("multiQues").getView().open();
                    };
                });
                view2.add(cat);
                row.add(view1);
                row.add(view2);
                dataArray.push(row);
            }
            $.tableView.setData(dataArray);
        };
    }
    function show3() {
        var user = user_name, sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/trivia/frnd_request1.php");
        var params = {
            user: user
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText), json = json.test;
            json.length == 0 && ($.tableView1.headerTitle = "The database row is empty");
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
                });
                if (json[i].status == 0) {
                    var label2 = Ti.UI.createLabel({
                        color: "white",
                        text: "Pending"
                    });
                    view2.add(label2);
                } else if (json[i].status == 1) {
                    var cat = Ti.UI.createButton({
                        title: "Play",
                        width: "60dp",
                        height: "40dp",
                        color: "white",
                        numid1: json[i].gameid
                    });
                    cat.addEventListener("click", function(e) {
                        demo = e.source.numid1;
                        Alloy.createController("multiQues").getView().open();
                    });
                    view2.add(cat);
                }
                row.add(view1);
                row.add(view2);
                dataArray.push(row);
            }
            $.tableView1.setData(dataArray);
        };
    }
    function show4() {
        var user = user_name, sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/trivia/multiscore.php");
        var params = {
            user: user
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText), json = json.test;
            json.length == 0 && ($.tableView2.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; i < json.length; i++) {
                var row = Ti.UI.createTableViewRow(), view1 = Ti.UI.createView({
                    left: "0%",
                    width: "25%",
                    backgroundColor: "black"
                }), label1 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].user1
                });
                view1.add(label1);
                var view2 = Ti.UI.createView({
                    left: "25%",
                    width: "25%",
                    backgroundColor: "black"
                }), label2 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].score1
                });
                view2.add(label2);
                var view3 = Ti.UI.createView({
                    left: "50%",
                    width: "25%",
                    backgroundColor: "black"
                }), label3 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].user2
                });
                view3.add(label3);
                var view4 = Ti.UI.createView({
                    left: "75%",
                    width: "25%",
                    backgroundColor: "black"
                }), label4 = Ti.UI.createLabel({
                    color: "white",
                    text: json[i].score2
                });
                view4.add(label4);
                row.add(view1);
                row.add(view2);
                row.add(view3);
                row.add(view4);
                dataArray.push(row);
            }
            $.tableView2.setData(dataArray);
        };
    }
    function send_req() {
        var sendfrom = user_name, reqto = $.textF.value;
        alert(reqto);
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        sendit.open("POST", "http://nxgninnovations.com/playground/trivia/send_req.php");
        var params = {
            sendfrom: sendfrom,
            sendto: reqto
        };
        sendit.send(params);
        sendit.onload = function() {
            var json = JSON.parse(this.responseText), json1 = json.msg;
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    show ? $.__views.score.addEventListener("focus", show) : __defers["$.__views.score!focus!show"] = !0;
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.tab1 = Ti.UI.createTab({
        title: "Request to play",
        height: "10dp",
        window: $.__views.score,
        id: "tab1"
    });
    $.__views.tabGroup.addTab($.__views.tab1);
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    $.__views.tableView1 = Ti.UI.createTableView({
        id: "tableView1"
    });
    $.__views.score.add($.__views.tableView1);
    $.__views.textF = Ti.UI.createTextField({
        top: "150dp",
        align: "center",
        width: "180dp",
        height: "40dp",
        id: "textF",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.score.add($.__views.textF);
    $.__views.invite = Ti.UI.createButton({
        top: "190dp",
        align: "center",
        width: "180dp",
        height: "40dp",
        title: "Invite Friend",
        id: "invite"
    });
    $.__views.score.add($.__views.invite);
    send_req ? $.__views.invite.addEventListener("click", send_req) : __defers["$.__views.invite!click!send_req"] = !0;
    $.__views.tab2 = Ti.UI.createTab({
        title: "Send Request",
        height: "10dp",
        window: $.__views.score,
        id: "tab2"
    });
    $.__views.tabGroup.addTab($.__views.tab2);
    show3 ? $.__views.tab2.addEventListener("click", show3) : __defers["$.__views.tab2!click!show3"] = !0;
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    $.__views.tableView2 = Ti.UI.createTableView({
        id: "tableView2"
    });
    $.__views.score.add($.__views.tableView2);
    $.__views.tab3 = Ti.UI.createTab({
        title: "Multiplayer",
        window: $.__views.score,
        id: "tab3"
    });
    $.__views.tabGroup.addTab($.__views.tab3);
    show4 ? $.__views.tab3.addEventListener("click", show4) : __defers["$.__views.tab3!click!show4"] = !0;
    $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    Ti.App.myGlobalVar = "numid1";
    __defers["$.__views.score!focus!show"] && $.__views.score.addEventListener("focus", show);
    __defers["$.__views.invite!click!send_req"] && $.__views.invite.addEventListener("click", send_req);
    __defers["$.__views.tab2!click!show3"] && $.__views.tab2.addEventListener("click", show3);
    __defers["$.__views.tab3!click!show4"] && $.__views.tab3.addEventListener("click", show4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;