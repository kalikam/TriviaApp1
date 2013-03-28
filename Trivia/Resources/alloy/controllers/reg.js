function Controller() {
    function makeReg() {
        var todos = Alloy.Collections.todo, loginReq = Titanium.Network.createHTTPClient();
        alert($.itemEmail.value);
        if ($.itemEmail.value != "" && $.itemPwd.value != "") {
            loginReq.open("POST", "http://nxgninnovations.com/playground/registration.php");
            var params = {
                email: $.itemEmail.value,
                username: $.itemUser.value,
                password: $.itemPwd.value,
                name: $.itemName.value
            };
            loginReq.send(params);
            loginReq.onload = function() {
                var json = JSON.parse(this.responseText), json1 = json.msg;
                alert(json1);
            };
        } else alert("Username/Password are required");
    }
    function focusTextField() {
        $.itemEmail.focus();
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    function closeWindow() {
        $.addWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.addWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        barColor: "#a00",
        id: "addWin",
        title: "Add Item",
        modal: "true"
    });
    $.addTopLevelView($.__views.addWin);
    $.__views.itemName = Ti.UI.createTextField({
        top: "10dp",
        width: "290dp",
        height: "50dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemName",
        hintText: "Enter Your name!"
    });
    $.__views.addWin.add($.__views.itemName);
    closeKeyboard ? $.__views.itemName.addEventListener("return", closeKeyboard) : __defers["$.__views.itemName!return!closeKeyboard"] = !0;
    $.__views.itemEmail = Ti.UI.createTextField({
        top: "20dp",
        width: "290dp",
        height: "50dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemEmail",
        hintText: "Enter Your Email!"
    });
    $.__views.addWin.add($.__views.itemEmail);
    closeKeyboard ? $.__views.itemEmail.addEventListener("return", closeKeyboard) : __defers["$.__views.itemEmail!return!closeKeyboard"] = !0;
    $.__views.itemUser = Ti.UI.createTextField({
        top: "25dp",
        width: "290dp",
        height: "50dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemUser",
        hintText: "Enter your User-id"
    });
    $.__views.addWin.add($.__views.itemUser);
    closeKeyboard ? $.__views.itemUser.addEventListener("return", closeKeyboard) : __defers["$.__views.itemUser!return!closeKeyboard"] = !0;
    $.__views.itemPwd = Ti.UI.createTextField({
        top: "30dp",
        width: "290dp",
        height: "50dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemPwd",
        hintText: "Enter your password"
    });
    $.__views.addWin.add($.__views.itemPwd);
    closeKeyboard ? $.__views.itemPwd.addEventListener("return", closeKeyboard) : __defers["$.__views.itemPwd!return!closeKeyboard"] = !0;
    $.__views.loginBtn = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Submitt",
        id: "loginBtn"
    });
    $.__views.addWin.add($.__views.loginBtn);
    makeReg ? $.__views.loginBtn.addEventListener("click", makeReg) : __defers["$.__views.loginBtn!click!makeReg"] = !0;
    $.__views.__alloyId4 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Cancel",
        id: "__alloyId4"
    });
    $.__views.addWin.add($.__views.__alloyId4);
    closeWindow ? $.__views.__alloyId4.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId4!click!closeWindow"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.itemName!return!closeKeyboard"] && $.__views.itemName.addEventListener("return", closeKeyboard);
    __defers["$.__views.itemEmail!return!closeKeyboard"] && $.__views.itemEmail.addEventListener("return", closeKeyboard);
    __defers["$.__views.itemUser!return!closeKeyboard"] && $.__views.itemUser.addEventListener("return", closeKeyboard);
    __defers["$.__views.itemPwd!return!closeKeyboard"] && $.__views.itemPwd.addEventListener("return", closeKeyboard);
    __defers["$.__views.loginBtn!click!makeReg"] && $.__views.loginBtn.addEventListener("click", makeReg);
    __defers["$.__views.__alloyId4!click!closeWindow"] && $.__views.__alloyId4.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;