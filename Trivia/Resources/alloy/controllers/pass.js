function Controller() {
    function req_pass() {
        var todos = Alloy.Collections.todo, loginReq = Titanium.Network.createHTTPClient();
        if ($.email.value != "" && $.userid.value != "") {
            loginReq.open("POST", "http://nxgninnovations.com/playground/trivia/forgetpwd.php");
            var params = {
                email: $.email.value,
                username: $.userid.value
            };
            alert(params);
            loginReq.send(params);
            loginReq.onload = function() {
                var json = JSON.parse(this.responseText), json1 = json.msg;
                alert(json1);
            };
        } else alert("E-mail/Userid are required");
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    function closeWindow() {
        Alloy.createController("index").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: !1,
        navBarHidden: !0,
        exitOnClose: !0,
        id: "todoWin",
        title: "Todo"
    });
    $.addTopLevelView($.__views.todoWin);
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
    $.__views.todoWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Password Recovery",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    $.__views.todoWin.add($.__views.__alloyId5);
    $.__views.userid = Ti.UI.createTextField({
        color: "#336699",
        top: "60dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "userid",
        hintText: "userid"
    });
    $.__views.__alloyId5.add($.__views.userid);
    $.__views.email = Ti.UI.createTextField({
        color: "#336699",
        top: "120dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "email",
        hintText: "Enter E-mail"
    });
    $.__views.__alloyId5.add($.__views.email);
    $.__views.submit = Ti.UI.createButton({
        top: "190dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        title: "Submitt",
        id: "submit"
    });
    $.__views.__alloyId5.add($.__views.submit);
    req_pass ? $.__views.submit.addEventListener("click", req_pass) : __defers["$.__views.submit!click!req_pass"] = !0;
    $.__views.cancel = Ti.UI.createButton({
        top: "250dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        title: "Back",
        id: "cancel"
    });
    $.__views.__alloyId5.add($.__views.cancel);
    closeWindow ? $.__views.cancel.addEventListener("click", closeWindow) : __defers["$.__views.cancel!click!closeWindow"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.submit!click!req_pass"] && $.__views.submit.addEventListener("click", req_pass);
    __defers["$.__views.cancel!click!closeWindow"] && $.__views.cancel.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;