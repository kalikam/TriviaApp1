function Controller() {
    function loaddata() {
        allow = 1;
        var question;
        cur_q += 1;
        back_q = cur_q;
        permit = 1;
        cur_q > 10 && Alloy.createController("score").getView().open();
        $.correct.backgroundImage = "/tick_gray_64.png";
        $.wrong.backgroundImage = "/gray_x.png";
        var p = 2, dataReq = Titanium.Network.createHTTPClient();
        dataReq.open("POST", "http://nxgninnovations.com/playground/trivia/fetch.php");
        var params = {
            catid: p
        };
        dataReq.send(params);
        dataReq.onload = function() {
            var json = JSON.parse(this.responseText);
            q = json.question;
            hint = json.hint;
            quest_id = json.qid;
            cqu_id = quest_id;
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
            $.hint.visible = !1;
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
        if (permit == 1) {
            $.addB.backgroundImage = "/radioButtonIcon(1).gif";
            $.addD.backgroundImage = "/radioButtonIcon(1).gif";
            $.addC.backgroundImage = "/radioButtonIcon(1).gif";
            $.addA.backgroundImage = "/radioButtonSelectIcon.gif";
            selection = 1;
        }
    }
    function check2() {
        if (permit == 1) {
            $.addA.backgroundImage = "/radioButtonIcon(1).gif";
            $.addC.backgroundImage = "/radioButtonIcon(1).gif";
            $.addD.backgroundImage = "/radioButtonIcon(1).gif";
            $.addB.backgroundImage = "/radioButtonSelectIcon.gif";
            selection = 2;
        }
    }
    function check3() {
        if (permit == 1) {
            $.addA.backgroundImage = "/radioButtonIcon(1).gif";
            $.addB.backgroundImage = "/radioButtonIcon(1).gif";
            $.addD.backgroundImage = "/radioButtonIcon(1).gif";
            $.addC.backgroundImage = "/radioButtonSelectIcon.gif";
            selection = 3;
        }
    }
    function check4() {
        if (permit == 1) {
            $.addA.backgroundImage = "/radioButtonIcon(1).gif";
            $.addB.backgroundImage = "/radioButtonIcon(1).gif";
            $.addC.backgroundImage = "/radioButtonIcon(1).gif";
            $.addD.backgroundImage = "/radioButtonSelectIcon.gif";
            selection = 4;
        }
    }
    function confirm_ans() {
        if (permit == 1) {
            switch (selection) {
              case 1:
                a1 = ans1;
                break;
              case 2:
                a1 = ans2;
                break;
              case 3:
                a1 = ans3;
                break;
              case 4:
                a1 = ans4;
            }
            if (a1 == hint) {
                ans_s = 1;
                $.correct.backgroundImage = "/tick.png";
                total = parseInt(total) + 10;
                setTimeout(function(e) {
                    allow == 1 ? loaddata() : next();
                }, 2000);
                if (parseInt(cur_q) > 10) {
                    var upScore = Titanium.Network.createHTTPClient();
                    upScore.open("POST", "http://nxgninnovations.com/playground/trivia/add_score.php");
                    var params = {
                        user: user_name,
                        total: total,
                        cat: p
                    };
                    upScore.send(params);
                    upScore.onload = function() {
                        var json = JSON.parse(this.responseText), q = json.msg, p = json.status;
                        p == 1 && Alloy.createController("score").getView().open();
                    };
                }
            } else {
                $.wrong.backgroundImage = "/red_x.png";
                $.hint.visible = !0;
                setTimeout(function(e) {
                    loaddata();
                }, 2000);
                ans_s = 2;
            }
            var history = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 1000
            });
            history.open("POST", "http://nxgninnovations.com/playground/trivia/update_history.php");
            var params = {
                user: user_name,
                seq: cur_q,
                quest_id: quest_id,
                state: ans_s,
                ans: a1,
                opt: "2"
            };
            alert(params);
            history.send(params);
            history.onload = function() {
                var json = JSON.parse(this.responseText);
            };
        }
    }
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
    function skip() {
        back_q == cur_q ? skip_q() : next();
    }
    function next() {
        $.correct.backgroundImage = "/tick_gray_64.png";
        $.wrong.backgroundImage = "/gray_x.png";
        alert(cur_q);
        alert(next_q);
        if (next_q == cur_q) {
            allow = 1;
            var history = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 1000
            });
            history.open("POST", "http://nxgninnovations.com/playground/trivia/fetch1.php");
            var params = {
                catid: s,
                question: cqu_id
            };
            history.send(params);
            history.onload = function() {
                var json = JSON.parse(this.responseText);
                q = json.question;
                hint = json.hint;
                quest_id = json.qid;
                state = json.state;
                answer = json.answer;
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
                $.hint.visible = !1;
                ans1 = json.a;
                ans2 = json.b;
                ans3 = json.c;
                ans4 = json.d;
                if (state == 1) {
                    answer == ans1 && check1();
                    answer == ans2 && check2();
                    answer == ans3 && check3();
                    answer == ans4 && check4();
                    $.correct.backgroundImage = "/tick.png";
                } else if (state == 2) {
                    answer == ans1 && check1();
                    answer == ans2 && check2();
                    answer == ans3 && check3();
                    answer == ans4 && check4();
                    $.wrong.backgroundImage = "/red_x.png";
                    $.hint.visible = !0;
                }
            };
            back_q = next_q - 1;
        } else {
            var history1 = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 1000
            });
            history1.open("POST", "http://nxgninnovations.com/playground/trivia/back.php");
            var params = {
                user: user_name,
                seq: back_q
            };
            alert(params);
            history1.send(params);
            history1.onload = function() {
                var json = JSON.parse(this.responseText);
                setTimeout(function(e) {
                    loaddata();
                }, 2000);
            };
            back_q = next_q;
            next_q += 1;
            alert(next_q);
        }
    }
    function back() {
        allow = 0;
        var state, answer;
        $.correct.backgroundImage = "/tick_gray_64.png";
        $.wrong.backgroundImage = "/gray_x.png";
        next_q = back_q;
        back_q -= 1;
        alert("next-".next_q);
        if (back_q > 0) {
            var history = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 1000
            });
            history.open("POST", "http://nxgninnovations.com/playground/trivia/back.php");
            var params = {
                user: user_name,
                seq: back_q
            };
            history.send(params);
            history.onload = function() {
                var json = JSON.parse(this.responseText);
                q = json.question;
                hint = json.hint;
                quest_id = json.qid;
                state = json.state;
                answer = json.answer;
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
                $.hint.visible = !1;
                ans1 = json.a;
                ans2 = json.b;
                ans3 = json.c;
                ans4 = json.d;
                if (state == 1) {
                    answer == ans1 && check1();
                    answer == ans2 && check2();
                    answer == ans3 && check3();
                    answer == ans4 && check4();
                    $.correct.backgroundImage = "/tick.png";
                } else if (state == 2) {
                    answer == ans1 && check1();
                    answer == ans2 && check2();
                    answer == ans3 && check3();
                    answer == ans4 && check4();
                    $.wrong.backgroundImage = "/red_x.png";
                    $.hint.visible = !0;
                }
            };
        }
    }
    function skip_q() {
        var history1 = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1000
        });
        history1.open("POST", "http://nxgninnovations.com/playground/trivia/update_history.php");
        var params = {
            user: user_name,
            seq: cur_q,
            quest_id: quest_id,
            state: "0",
            ans: "0"
        };
        history1.send(params);
        history1.onload = function() {
            var json = JSON.parse(this.responseText);
            setTimeout(function(e) {
                loaddata();
            }, 2000);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "black",
        height: "10dp",
        id: "tabGroup"
    });
    $.__views.movie = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "movie"
    });
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
    $.__views.__alloyId6 = Ti.UI.createView({
        id: "__alloyId6"
    });
    $.__views.movie.add($.__views.__alloyId6);
    $.__views.a = Ti.UI.createLabel({
        color: "#000",
        top: "120dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "a"
    });
    $.__views.__alloyId6.add($.__views.a);
    $.__views.addA = Ti.UI.createButton({
        top: "130dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addA"
    });
    $.__views.__alloyId6.add($.__views.addA);
    check1 ? $.__views.addA.addEventListener("click", check1) : __defers["$.__views.addA!click!check1"] = !0;
    $.__views.b = Ti.UI.createLabel({
        color: "#000",
        top: "150dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "b"
    });
    $.__views.__alloyId6.add($.__views.b);
    $.__views.addB = Ti.UI.createButton({
        top: "160dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addB"
    });
    $.__views.__alloyId6.add($.__views.addB);
    check2 ? $.__views.addB.addEventListener("click", check2) : __defers["$.__views.addB!click!check2"] = !0;
    $.__views.c = Ti.UI.createLabel({
        color: "#000",
        top: "180dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "c"
    });
    $.__views.__alloyId6.add($.__views.c);
    $.__views.addC = Ti.UI.createButton({
        top: "190dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addC"
    });
    $.__views.__alloyId6.add($.__views.addC);
    check3 ? $.__views.addC.addEventListener("click", check3) : __defers["$.__views.addC!click!check3"] = !0;
    $.__views.d = Ti.UI.createLabel({
        color: "#000",
        top: "210dp",
        width: "400dp",
        height: "40dp",
        left: "70dp",
        id: "d"
    });
    $.__views.__alloyId6.add($.__views.d);
    $.__views.addD = Ti.UI.createButton({
        top: "220dp",
        width: "20dp",
        height: "20dp",
        left: "30dp",
        id: "addD"
    });
    $.__views.__alloyId6.add($.__views.addD);
    check4 ? $.__views.addD.addEventListener("click", check4) : __defers["$.__views.addD!click!check4"] = !0;
    $.__views.hint = Ti.UI.createLabel({
        color: "#000",
        top: "360dp",
        width: "80dp",
        height: "40dp",
        left: "140dp",
        title: "Confirm",
        id: "hint"
    });
    $.__views.__alloyId6.add($.__views.hint);
    $.__views.confirm = Ti.UI.createButton({
        top: "300dp",
        width: "150dp",
        height: "40dp",
        align: "center",
        title: "Confirm",
        id: "confirm"
    });
    $.__views.__alloyId6.add($.__views.confirm);
    confirm_ans ? $.__views.confirm.addEventListener("click", confirm_ans) : __defers["$.__views.confirm!click!confirm_ans"] = !0;
    $.__views.correct = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "50dp",
        id: "correct"
    });
    $.__views.__alloyId6.add($.__views.correct);
    $.__views.wrong = Ti.UI.createLabel({
        color: "#000",
        top: "350dp",
        width: "80dp",
        height: "40dp",
        left: "190dp",
        id: "wrong"
    });
    $.__views.__alloyId6.add($.__views.wrong);
    $.__views.next = Ti.UI.createButton({
        top: "5dp",
        width: "80dp",
        height: "40dp",
        right: "20dp",
        title: "Next",
        id: "next"
    });
    $.__views.__alloyId6.add($.__views.next);
    next ? $.__views.next.addEventListener("click", next) : __defers["$.__views.next!click!next"] = !0;
    $.__views.back = Ti.UI.createButton({
        top: "5dp",
        width: "80dp",
        height: "40dp",
        left: "20dp",
        title: "Back",
        id: "back"
    });
    $.__views.__alloyId6.add($.__views.back);
    back ? $.__views.back.addEventListener("click", back) : __defers["$.__views.back!click!back"] = !0;
    $.__views.skip = Ti.UI.createButton({
        top: "380dp",
        width: "80dp",
        height: "40dp",
        right: "20dp",
        title: "Skip",
        id: "skip"
    });
    $.__views.__alloyId6.add($.__views.skip);
    skip ? $.__views.skip.addEventListener("click", skip) : __defers["$.__views.skip!click!skip"] = !0;
    $.__views.tab1 = Ti.UI.createTab({
        title: "Category",
        height: "10dp",
        window: $.__views.movie,
        id: "tab1"
    });
    $.__views.tabGroup.addTab($.__views.tab1);
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
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
    $.__views.score.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Score List",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.tab3 = Ti.UI.createTab({
        title: "Multiplayer",
        window: $.__views.score,
        id: "tab3"
    });
    $.__views.tabGroup.addTab($.__views.tab3);
    $.__views.score = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "score"
    });
    show ? $.__views.score.addEventListener("focus", show) : __defers["$.__views.score!focus!show"] = !0;
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
    $.__views.score.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Score List",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.score.add($.__views.tableView);
    $.__views.tab2 = Ti.UI.createTab({
        title: "High Score",
        height: "10dp",
        window: $.__views.score,
        id: "tab2"
    });
    $.__views.tabGroup.addTab($.__views.tab2);
    $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.myGlobalVar = "cur_q";
    Ti.App.myGlobalVar = "quest_id";
    Ti.App.myGlobalVar = "cqu_id";
    Ti.App.myGlobalVar = "ans_s";
    Ti.App.myGlobalVar = "a1";
    Ti.App.myGlobalVar = "allow";
    ans_s = 3;
    var todos = Alloy.Collections.todo, total = 0, selection = 1;
    att_q = 0;
    allow = 0;
    temp = 0;
    var a1, ans1, ans2, ans3, ans4, hint, hint1, p = 2;
    cur_q = 0;
    next_q = 0;
    __defers["$.__views.movie!focus!loaddata"] && $.__views.movie.addEventListener("focus", loaddata);
    __defers["$.__views.addA!click!check1"] && $.__views.addA.addEventListener("click", check1);
    __defers["$.__views.addB!click!check2"] && $.__views.addB.addEventListener("click", check2);
    __defers["$.__views.addC!click!check3"] && $.__views.addC.addEventListener("click", check3);
    __defers["$.__views.addD!click!check4"] && $.__views.addD.addEventListener("click", check4);
    __defers["$.__views.confirm!click!confirm_ans"] && $.__views.confirm.addEventListener("click", confirm_ans);
    __defers["$.__views.next!click!next"] && $.__views.next.addEventListener("click", next);
    __defers["$.__views.back!click!back"] && $.__views.back.addEventListener("click", back);
    __defers["$.__views.skip!click!skip"] && $.__views.skip.addEventListener("click", skip);
    __defers["$.__views.score!focus!show"] && $.__views.score.addEventListener("focus", show);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;