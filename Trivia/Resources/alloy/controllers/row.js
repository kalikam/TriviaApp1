function Controller() {
    function toggleStatus(e) {
        var todo = todos.get(id);
        todo.set({
            done: todo.get("done") ? 0 : 1,
            date_completed: moment().unix()
        }).save();
    }
    function deleteTask(e) {
        e.cancelBubble = !0;
        var todo = todos.get(id);
        todo.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: !1,
        id: "row"
    });
    $.addTopLevelView($.__views.row);
    $.__views.check = Ti.UI.createImageView({
        image: "/tick_gray_64.png",
        left: 0,
        height: "50dp",
        width: "50dp",
        id: "check"
    });
    $.__views.row.add($.__views.check);
    toggleStatus ? $.__views.check.addEventListener("click", toggleStatus) : __defers["$.__views.check!click!toggleStatus"] = !0;
    $.__views.task = Ti.UI.createLabel({
        color: "#000",
        left: "50dp",
        right: "50dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp"
        },
        id: "task",
        text: typeof $model.__transform.item != "undefined" ? $model.__transform.item : $model.get("item")
    });
    $.__views.row.add($.__views.task);
    $.__views.remove = Ti.UI.createImageView({
        image: "/red_x.png",
        right: 0,
        height: "50dp",
        width: "50dp",
        id: "remove"
    });
    $.__views.row.add($.__views.remove);
    deleteTask ? $.__views.remove.addEventListener("click", deleteTask) : __defers["$.__views.remove!click!deleteTask"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment"), todos = Alloy.Collections.todo, id;
    if ($model) {
        id = $model.id;
        if ($model.get("done")) {
            $.row.backgroundColor = "#eee";
            $.check.backgroundColor = "#eee";
            $.task.color = "#ccc";
            $.check.image = "/tick_64.png";
        } else {
            $.row.backgroundColor = "#fff";
            $.check.backgroundColor = "#fff";
            $.task.color = "#000";
            $.check.image = "/tick_gray_64.png";
        }
    }
    __defers["$.__views.check!click!toggleStatus"] && $.__views.check.addEventListener("click", toggleStatus);
    __defers["$.__views.remove!click!deleteTask"] && $.__views.remove.addEventListener("click", deleteTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;