function Controller() {
    function loaddata() {
        var m = 2, dataReq = Titanium.Network.createHTTPClient();
        dataReq.open("POST", "http://nxgninnovations.com/playground/fetch.php");
        var params = {
            id: m
        };
        dataReq.send(params);
        dataReq.onload = function() {
            var json = JSON.parse(this.responseText), q = json.question, a = json.a, b = json.b, c = json.c, d = json.d, hint = json.hint;
            $.ques.text = q;
            $.a.text = a;
            $.b.text = b;
            $.c.text = c;
            $.d.text = d;
            $.hint.text = hint;
        };
    }
    function confirm() {
        var ans = $.ans.value, ans1 = $.hint.text;
        if (ans == ans1) {
            alert("Ans is Right");
            loaddata();
        } else {
            alert("Wrong Ans");
            loaddata();
        }
    }
    function closeWindow() {
        $.poly.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.poly = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "poly"
    });
    $.addTopLevelView($.__views.poly);
    loaddata ? $.__views.poly.addEventListener("load", loaddata) : __defers["$.__views.poly!load!loaddata"] = !0;
    $.__views.addView = Ti.UI.createView({
        id: "addView"
    });
    $.__views.poly.add($.__views.addView);
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
        left: "20dp",
        id: "ques",
        text: "Question"
    });
    $.__views.poly.add($.__views.ques);
    $.__views.a = Ti.UI.createLabel({
        color: "#000",
        top: "120dp",
        width: "400dp",
        height: "40dp",
        left: "20dp",
        id: "a",
        text: "A"
    });
    $.__views.poly.add($.__views.a);
    $.__views.b = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        width: "400dp",
        height: "40dp",
        left: "20dp",
        id: "b",
        text: "B"
    });
    $.__views.poly.add($.__views.b);
    $.__views.c = Ti.UI.createLabel({
        color: "#000",
        top: "180dp",
        width: "400dp",
        height: "40dp",
        left: "20dp",
        id: "c",
        text: "C"
    });
    $.__views.poly.add($.__views.c);
    $.__views.d = Ti.UI.createLabel({
        color: "#000",
        top: "210dp",
        width: "400dp",
        height: "40dp",
        left: "20dp",
        id: "d",
        text: "D"
    });
    $.__views.poly.add($.__views.d);
    $.__views.hint = Ti.UI.createLabel({
        color: "#000",
        id: "hint"
    });
    $.__views.poly.add($.__views.hint);
    $.__views.next = Ti.UI.createButton({
        top: "0dp",
        width: "80dp",
        height: "40dp",
        right: "20dp",
        title: "Next",
        id: "next"
    });
    $.__views.poly.add($.__views.next);
    loaddata ? $.__views.next.addEventListener("click", loaddata) : __defers["$.__views.next!click!loaddata"] = !0;
    $.__views.ans = Ti.UI.createTextField({
        top: "250dp",
        width: "200dp",
        height: "40dp",
        align: "center",
        title: "Next",
        id: "ans",
        hintText: "Answer"
    });
    $.__views.poly.add($.__views.ans);
    $.__views.confirm = Ti.UI.createButton({
        top: "300dp",
        width: "80dp",
        height: "40dp",
        left: "50dp",
        title: "Confirm",
        id: "confirm"
    });
    $.__views.poly.add($.__views.confirm);
    confirm ? $.__views.confirm.addEventListener("click", confirm) : __defers["$.__views.confirm!click!confirm"] = !0;
    $.__views.cancle = Ti.UI.createButton({
        top: "300dp",
        width: "80dp",
        height: "40dp",
        left: "190dp",
        title: "Cancel",
        id: "cancle"
    });
    $.__views.poly.add($.__views.cancle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    __defers["$.__views.poly!load!loaddata"] && $.__views.poly.addEventListener("load", loaddata);
    __defers["$.__views.addView!click!closeWindow"] && $.__views.addView.addEventListener("click", closeWindow);
    __defers["$.__views.next!click!loaddata"] && $.__views.next.addEventListener("click", loaddata);
    __defers["$.__views.confirm!click!confirm"] && $.__views.confirm.addEventListener("click", confirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;