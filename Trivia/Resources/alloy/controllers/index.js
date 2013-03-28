function Controller() {
    function goReg() {
        Alloy.createController("reg").getView().open();
    }
    function login_user() {
        var todos = Alloy.Collections.todo, loginReq = Titanium.Network.createHTTPClient();
        if ($.email.value != "" && $.password.value != "") {
            loginReq.open("POST", "http://nxgninnovations.com/playground/login.php");
            var params = {
                email: $.email.value,
                password: $.password.value
            };
            loginReq.send(params);
            loginReq.onload = function() {
                var json = JSON.parse(this.responseText), json1 = json.message;
                json.logged == 1 ? Alloy.createController("home").getView().open() : alert("Wrong User/Password");
            };
        } else alert("Username/Password are required");
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
        text: "Login Here",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.todoWin.add($.__views.__alloyId2);
    $.__views.email = Ti.UI.createTextField({
        color: "#336699",
        top: "60dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "email",
        hintText: "Email"
    });
    $.__views.__alloyId2.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        color: "#336699",
        top: "120dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.__alloyId2.add($.__views.password);
    $.__views.Login = Ti.UI.createButton({
        title: "Login",
        top: "190dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "Login"
    });
    $.__views.__alloyId2.add($.__views.Login);
    login_user ? $.__views.Login.addEventListener("click", login_user) : __defers["$.__views.Login!click!login_user"] = !0;
    $.__views.addReg = Ti.UI.createView({
        top: "250dp",
        align: "center",
        width: "124dp",
        height: "50dp",
        id: "addReg"
    });
    $.__views.todoWin.add($.__views.addReg);
    goReg ? $.__views.addReg.addEventListener("click", goReg) : __defers["$.__views.addReg!click!goReg"] = !0;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#900",
        text: "Register Here",
        top: "30",
        id: "__alloyId3"
    });
    $.__views.addReg.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo, todos = Alloy.Collections.todo;
    $.todoWin.open();
    __defers["$.__views.Login!click!login_user"] && $.__views.Login.addEventListener("click", login_user);
    __defers["$.__views.addReg!click!goReg"] && $.__views.addReg.addEventListener("click", goReg);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;