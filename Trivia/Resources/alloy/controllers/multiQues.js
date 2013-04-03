function Controller() {
    function loaddata() {
        $.correct.backgroundImage = "/tick_gray_64.png";
        $.wrong.backgroundImage = "/gray_x.png";
        var m = 1, dataReq = Titanium.Network.createHTTPClient();
        dataReq.open("POST", "http://nxgninnovations.com/playground/fetch.php");
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
        quest += 1;
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
        alert(demo);
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
            alert("right");
            $.correct.backgroundImage = "/tick.png";
            total = parseInt(total) + 10;
            mul_q = parseInt(mul_q) + 1;
            var upScore = Titanium.Network.createHTTPClient();
            upScore.open("POST", "http://nxgninnovations.com/playground/update_score.php");
            var params = {
                id: demo,
                user1: user_name
            };
            upScore.send(params);
            upScore.onload = function() {
                var json = JSON.parse(this.responseText), p = json.status;
                p == 1 ? loaddata() : alert("marks not add");
            };
        } else {
            alert("Wrong ans");
            $.wrong.backgroundImage = "/red_x.png";
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
    loaddata ? $.__views.movie.addEventListener("load", loaddata) : __defers["$.__views.movie!load!loaddata"] = !0;
    $.__views.addView = Ti.UI.createView({
        id: "addView"
    });
    $.__views.movie.add($.__views.addView);
    closeWindow ? $.__views.addView.addEventListener("click", closeWindow) : __defers["$.__views.addView!click!closeWindow"] = !0;
    $.__views.addImage = Ti.UI.createImageView({
        top: "1dp",
        width: "60dp",
        height: "40dp",
        left: "0dp",
        color: "#fff",
        backgroundColor: "transparent",
        image: "/Android_BackButton_1.png",
        touchEnabled: !1,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.ques = Ti.UI.createLabel({
        color: "#000",
        top: "80dp",
        width: "280dp",
        height: "40dp",
        left: "30dp",
        id: "ques",
        text: "Question"
    });
    $.__views.movie.add($.__views.ques);
    $.__views.__alloyId4 = Ti.UI.createView({
        id: "__alloyId4"
    });
    $.__views.movie.add($.__views.__alloyId4);
    $.__views.a = Ti.UI.createLabel({
        color: "#000",
        top: "120dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "a"
    });
    $.__views.__alloyId4.add($.__views.a);
    $.__views.addA = Ti.UI.createButton({
        top: "130dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addA"
    });
    $.__views.__alloyId4.add($.__views.addA);
    check1 ? $.__views.addA.addEventListener("click", check1) : __defers["$.__views.addA!click!check1"] = !0;
    $.__views.b = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "b"
    });
    $.__views.__alloyId4.add($.__views.b);
    $.__views.addB = Ti.UI.createButton({
        top: "160dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addB"
    });
    $.__views.__alloyId4.add($.__views.addB);
    check2 ? $.__views.addB.addEventListener("click", check2) : __defers["$.__views.addB!click!check2"] = !0;
    $.__views.c = Ti.UI.createLabel({
        color: "#000",
        top: "180dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "c"
    });
    $.__views.__alloyId4.add($.__views.c);
    $.__views.addC = Ti.UI.createButton({
        top: "190dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addC"
    });
    $.__views.__alloyId4.add($.__views.addC);
    check3 ? $.__views.addC.addEventListener("click", check3) : __defers["$.__views.addC!click!check3"] = !0;
    $.__views.d = Ti.UI.createLabel({
        color: "#000",
        top: "210dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "d"
    });
    $.__views.__alloyId4.add($.__views.d);
    $.__views.addD = Ti.UI.createButton({
        top: "220dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addD"
    });
    $.__views.__alloyId4.add($.__views.addD);
    check4 ? $.__views.addD.addEventListener("click", check4) : __defers["$.__views.addD!click!check4"] = !0;
    $.__views.hint = Ti.UI.createLabel({
        color: "#000",
        top: "300dp",
        width: "80dp",
        height: "40dp",
        left: "53dp",
        title: "Confirm",
        id: "hint"
    });
    $.__views.__alloyId4.add($.__views.hint);
    $.__views.next = Ti.UI.createButton({
        top: "0dp",
        width: "80dp",
        height: "40dp",
        right: "20dp",
        title: "Next",
        id: "next"
    });
    $.__views.__alloyId4.add($.__views.next);
    loaddata ? $.__views.next.addEventListener("click", loaddata) : __defers["$.__views.next!click!loaddata"] = !0;
    $.__views.confirm = Ti.UI.createButton({
        top: "300dp",
        width: "80dp",
        height: "40dp",
        left: "50dp",
        title: "Confirm",
        id: "confirm"
    });
    $.__views.__alloyId4.add($.__views.confirm);
    confirm_ans ? $.__views.confirm.addEventListener("click", confirm_ans) : __defers["$.__views.confirm!click!confirm_ans"] = !0;
    $.__views.cancle = Ti.UI.createButton({
        top: "300dp",
        width: "80dp",
        height: "40dp",
        left: "190dp",
        title: "Cancel",
        id: "cancle"
    });
    $.__views.__alloyId4.add($.__views.cancle);
    $.__views.correct = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "50dp",
        image: "/tick.png",
        id: "correct"
    });
    $.__views.__alloyId4.add($.__views.correct);
    $.__views.wrong = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "190dp",
        image: "/red_x.png",
        id: "wrong"
    });
    $.__views.__alloyId4.add($.__views.wrong);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, total = 0, quest = 1, selection = 0, ans1, ans2, ans3, ans4, hint, answer, mul_q, numid1, m = 1;
    __defers["$.__views.movie!load!loaddata"] && $.__views.movie.addEventListener("load", loaddata);
    __defers["$.__views.addView!click!closeWindow"] && $.__views.addView.addEventListener("click", closeWindow);
    __defers["$.__views.addA!click!check1"] && $.__views.addA.addEventListener("click", check1);
    __defers["$.__views.addB!click!check2"] && $.__views.addB.addEventListener("click", check2);
    __defers["$.__views.addC!click!check3"] && $.__views.addC.addEventListener("click", check3);
    __defers["$.__views.addD!click!check4"] && $.__views.addD.addEventListener("click", check4);
    __defers["$.__views.next!click!loaddata"] && $.__views.next.addEventListener("click", loaddata);
    __defers["$.__views.confirm!click!confirm_ans"] && $.__views.confirm.addEventListener("click", confirm_ans);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;