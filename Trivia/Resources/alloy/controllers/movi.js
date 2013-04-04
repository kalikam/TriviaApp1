function Controller() {
    function loaddata() {
        att_q > 5 && Alloy.createController("score").getView().open();
        $.correct.backgroundImage = "/tick_gray_64.png";
        $.wrong.backgroundImage = "/gray_x.png";
        var m = 1, dataReq = Titanium.Network.createHTTPClient();
        dataReq.open("POST", "http://nxgninnovations.com/playground/trivia/fetch.php");
        var params = {
            id: m
        };
        dataReq.send(params);
        dataReq.onload = function() {
            var json = JSON.parse(this.responseText), q = json.question;
            hint = json.hint;
            $.addB.backgroundImage = "/radioButtonIcon(1).gif";
            $.addD.backgroundImage = "/radioButtonIcon(1).gif";
            $.addC.backgroundImage = "/radioButtonIcon(1).gif";
            $.addA.backgroundImage = "/radioButtonIcon(1).gif";
            $.ques.text = q;
            $.a.text = json.a;
            $.b.text = json.b;
            $.c.text = json.c;
            $.d.text = json.d;
            $.hint.text = hint;
            ans1 = json.a;
            ans2 = json.b;
            ans3 = json.c;
            ans4 = json.d;
        };
    }
    function closeWindow() {
        $.movie.close();
    }
    function check1() {
        $.addB.backgroundImage = "/radioButtonIcon(1).gif";
        $.addD.backgroundImage = "/radioButtonIcon(1).gif";
        $.addC.backgroundImage = "/radioButtonIcon(1).gif";
        $.addA.backgroundImage = "/radioButtonSelectIcon.gif";
        selection = 1;
    }
    function check2() {
        $.addA.backgroundImage = "/radioButtonIcon(1).gif";
        $.addC.backgroundImage = "/radioButtonIcon(1).gif";
        $.addD.backgroundImage = "/radioButtonIcon(1).gif";
        $.addB.backgroundImage = "/radioButtonSelectIcon.gif";
        selection = 2;
    }
    function check3() {
        $.addA.backgroundImage = "/radioButtonIcon(1).gif";
        $.addB.backgroundImage = "/radioButtonIcon(1).gif";
        $.addD.backgroundImage = "/radioButtonIcon(1).gif";
        $.addC.backgroundImage = "/radioButtonSelectIcon.gif";
        selection = 3;
    }
    function check4() {
        $.addA.backgroundImage = "/radioButtonIcon(1).gif";
        $.addB.backgroundImage = "/radioButtonIcon(1).gif";
        $.addC.backgroundImage = "/radioButtonIcon(1).gif";
        $.addD.backgroundImage = "/radioButtonSelectIcon.gif";
        selection = 4;
    }
    function confirm_ans() {
        att_q += 1;
        switch (selection) {
          case 1:
            answer = ans1;
            break;
          case 2:
            answer = ans2;
            break;
          case 3:
            answer = ans3;
            break;
          case 4:
            answer = ans4;
        }
        if (answer == hint) {
            $.correct.backgroundImage = "/tick.png";
            total = parseInt(total) + 10;
            setTimeout(function(e) {
                loaddata();
            }, 2000);
            if (parseInt(att_q) > 5) {
                var upScore = Titanium.Network.createHTTPClient();
                upScore.open("POST", "http://nxgninnovations.com/playground/trivia/add_score.php");
                var params = {
                    user: user_name,
                    total: total,
                    cat: m
                };
                upScore.send(params);
                upScore.onload = function() {
                    var json = JSON.parse(this.responseText), q = json.msg, p = json.status;
                    p == 1 && Alloy.createController("score").getView().open();
                };
            }
        } else {
            $.wrong.backgroundImage = "/red_x.png";
            setTimeout(function(e) {
                loaddata();
            }, 2000);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.movie = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "movie"
    });
    $.addTopLevelView($.__views.movie);
    loaddata ? $.__views.movie.addEventListener("focus", loaddata) : __defers["$.__views.movie!focus!loaddata"] = !0;
    $.__views.ques = Ti.UI.createLabel({
        color: "#000",
        top: "50dp",
        width: "280dp",
        height: "40dp",
        left: "30dp",
        id: "ques",
        text: "Question"
    });
    $.__views.movie.add($.__views.ques);
    $.__views.__alloyId3 = Ti.UI.createView({
        id: "__alloyId3"
    });
    $.__views.movie.add($.__views.__alloyId3);
    $.__views.a = Ti.UI.createLabel({
        color: "#000",
        top: "120dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "a"
    });
    $.__views.__alloyId3.add($.__views.a);
    $.__views.addA = Ti.UI.createButton({
        top: "130dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addA"
    });
    $.__views.__alloyId3.add($.__views.addA);
    check1 ? $.__views.addA.addEventListener("click", check1) : __defers["$.__views.addA!click!check1"] = !0;
    $.__views.b = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "b"
    });
    $.__views.__alloyId3.add($.__views.b);
    $.__views.addB = Ti.UI.createButton({
        top: "160dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addB"
    });
    $.__views.__alloyId3.add($.__views.addB);
    check2 ? $.__views.addB.addEventListener("click", check2) : __defers["$.__views.addB!click!check2"] = !0;
    $.__views.c = Ti.UI.createLabel({
        color: "#000",
        top: "180dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "c"
    });
    $.__views.__alloyId3.add($.__views.c);
    $.__views.addC = Ti.UI.createButton({
        top: "190dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addC"
    });
    $.__views.__alloyId3.add($.__views.addC);
    check3 ? $.__views.addC.addEventListener("click", check3) : __defers["$.__views.addC!click!check3"] = !0;
    $.__views.d = Ti.UI.createLabel({
        color: "#000",
        top: "210dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "d"
    });
    $.__views.__alloyId3.add($.__views.d);
    $.__views.addD = Ti.UI.createButton({
        top: "220dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addD"
    });
    $.__views.__alloyId3.add($.__views.addD);
    check4 ? $.__views.addD.addEventListener("click", check4) : __defers["$.__views.addD!click!check4"] = !0;
    $.__views.hint = Ti.UI.createLabel({
        color: "#000",
        top: "300dp",
        width: "80dp",
        height: "40dp",
        align: "center",
        title: "Confirm",
        id: "hint"
    });
    $.__views.__alloyId3.add($.__views.hint);
    $.__views.confirm = Ti.UI.createButton({
        top: "300dp",
        width: "150dp",
        height: "40dp",
        align: "center",
        title: "Confirm",
        id: "confirm"
    });
    $.__views.__alloyId3.add($.__views.confirm);
    confirm_ans ? $.__views.confirm.addEventListener("click", confirm_ans) : __defers["$.__views.confirm!click!confirm_ans"] = !0;
    $.__views.correct = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "50dp",
        id: "correct"
    });
    $.__views.__alloyId3.add($.__views.correct);
    $.__views.wrong = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "190dp",
        id: "wrong"
    });
    $.__views.__alloyId3.add($.__views.wrong);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, total = 0, selection = 1, att_q = 1, ans1, ans2, ans3, ans4, hint, answer, m = 1;
    __defers["$.__views.movie!focus!loaddata"] && $.__views.movie.addEventListener("focus", loaddata);
    __defers["$.__views.addA!click!check1"] && $.__views.addA.addEventListener("click", check1);
    __defers["$.__views.addB!click!check2"] && $.__views.addB.addEventListener("click", check2);
    __defers["$.__views.addC!click!check3"] && $.__views.addC.addEventListener("click", check3);
    __defers["$.__views.addD!click!check4"] && $.__views.addD.addEventListener("click", check4);
    __defers["$.__views.confirm!click!confirm_ans"] && $.__views.confirm.addEventListener("click", confirm_ans);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;