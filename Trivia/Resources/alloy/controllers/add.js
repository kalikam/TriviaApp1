function Controller() {
    function addItem() {
        var todos = Alloy.Collections.todo, task = Alloy.createModel("Todo", {
            item: $.itemField.value,
            done: 0
        });
        todos.add(task);
        task.save();
        todos.fetch();
        closeWindow();
    }
    function focusTextField() {
        $.itemField.focus();
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
        id: "addWin",
        title: "Add Item",
        modal: "true"
    });
    $.addTopLevelView($.__views.addWin);
    focusTextField ? $.__views.addWin.addEventListener("open", focusTextField) : __defers["$.__views.addWin!open!focusTextField"] = !0;
    $.__views.itemField = Ti.UI.createTextField({
        id: "itemField",
        hintText: "What do you need to do?"
    });
    $.__views.addWin.add($.__views.itemField);
    closeKeyboard ? $.__views.itemField.addEventListener("return", closeKeyboard) : __defers["$.__views.itemField!return!closeKeyboard"] = !0;
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Add Item",
        id: "__alloyId0"
    });
    $.__views.addWin.add($.__views.__alloyId0);
    addItem ? $.__views.__alloyId0.addEventListener("click", addItem) : __defers["$.__views.__alloyId0!click!addItem"] = !0;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Cancel",
        id: "__alloyId1"
    });
    $.__views.addWin.add($.__views.__alloyId1);
    closeWindow ? $.__views.__alloyId1.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId1!click!closeWindow"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.addWin!open!focusTextField"] && $.__views.addWin.addEventListener("open", focusTextField);
    __defers["$.__views.itemField!return!closeKeyboard"] && $.__views.itemField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId0!click!addItem"] && $.__views.__alloyId0.addEventListener("click", addItem);
    __defers["$.__views.__alloyId1!click!closeWindow"] && $.__views.__alloyId1.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;