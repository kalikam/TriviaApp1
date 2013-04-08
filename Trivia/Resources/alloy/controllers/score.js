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
    function close() {
        $.addView.open();
    }
    function home() {
        Alloy.createController("home").getView().open();
    }
    function get_score() {
        var c, scr = Titanium.Network.createHTTPClient();
        scr.open("POST", "http://nxgninnovations.com/playground/trivia/current_game_status.php");
        var params = {
            user: user_name
        };
        scr.send(params);
        scr.onload = function() {
            var json = JSON.parse(this.responseText);
            $.cans.text = json.correct;
            $.uncans.text = json.uncorrect;
            $.sk.text = json.skip;
            c = $.cans.text;
            var per = Titanium.Network.createHTTPClient();
            per.open("POST", "http://nxgninnovations.com/playground/trivia/performance.php");
            var params = {
                user: user_name,
                score: c
            };
            per.send(params);
            per.onload = function() {
                var json = JSON.parse(this.responseText);
                $.msg.text = json.msg;
            };
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    $.addTopLevelView($.__views.score);
    get_score ? $.__views.score.addEventListener("focus", get_score) : __defers["$.__views.score!focus!get_score"] = !0;
    $.__views.Home = Ti.UI.createButton({
        title: "New Game",
        top: "240dp",
        align: "center",
        width: "280dp",
        height: "40dp",
        id: "Home"
    });
    $.__views.score.add($.__views.Home);
    home ? $.__views.Home.addEventListener("click", home) : __defers["$.__views.Home!click!home"] = !0;
    $.__views.correct = Ti.UI.createLabel({
        color: "#000",
        top: "10dp",
        left: "40dp",
        width: "80dp",
        height: "40dp",
        text: "Correct :",
        id: "correct"
    });
    $.__views.score.add($.__views.correct);
    $.__views.uncorrect = Ti.UI.createLabel({
        color: "#000",
        top: "50dp",
        left: "40dp",
        width: "80dp",
        height: "40dp",
        text: "UnCorrect :",
        id: "uncorrect"
    });
    $.__views.score.add($.__views.uncorrect);
    $.__views.skip = Ti.UI.createLabel({
        color: "#000",
        top: "100dp",
        left: "40dp",
        width: "80dp",
        height: "40dp",
        text: "Skip :",
        id: "skip"
    });
    $.__views.score.add($.__views.skip);
    $.__views.cans = Ti.UI.createLabel({
        color: "#000",
        top: "10dp",
        left: "150",
        width: "80dp",
        height: "40dp",
        id: "cans"
    });
    $.__views.score.add($.__views.cans);
    $.__views.uncans = Ti.UI.createLabel({
        color: "#000",
        top: "50dp",
        left: "150",
        width: "80dp",
        height: "40dp",
        id: "uncans"
    });
    $.__views.score.add($.__views.uncans);
    $.__views.sk = Ti.UI.createLabel({
        color: "#000",
        top: "100dp",
        left: "150",
        width: "80dp",
        height: "40dp",
        id: "sk"
    });
    $.__views.score.add($.__views.sk);
    $.__views.message = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        left: "40",
        width: "80dp",
        height: "40dp",
        text: "Message :",
        id: "message"
    });
    $.__views.score.add($.__views.message);
    $.__views.msg = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        left: "150",
        width: "80dp",
        height: "40dp",
        id: "msg"
    });
    $.__views.score.add($.__views.msg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, dataArray = [];
    __defers["$.__views.score!focus!get_score"] && $.__views.score.addEventListener("focus", get_score);
    __defers["$.__views.Home!click!home"] && $.__views.Home.addEventListener("click", home);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;