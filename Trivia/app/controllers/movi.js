Ti.App.myGlobalVar = 'cur_q';
Ti.App.myGlobalVar = 'quest_id';
quest_id = 0;
var todos = Alloy.Collections.todo;
var total = 0;
var selection = 1;
att_q = 0;
temp = 0;
var a1, ans1, ans2, ans3, ans4, hint, hint1;
var m = 1;
cur_q = 0;
next_q = 0;

function loaddata() {
	var question;
	cur_q = cur_q + 1;
	back_q = cur_q;
	alert(back_q);
	permit = 1;
	if (cur_q > 9) {
		Alloy.createController("score").getView().open();
	}

	$.correct.backgroundImage = '/tick_gray_64.png';
	$.wrong.backgroundImage = '/gray_x.png';

	var m = 1;

	var dataReq = Titanium.Network.createHTTPClient();

	dataReq.open("POST", "http://nxgninnovations.com/playground/trivia/fetch.php");

	var params = {
		catid : m
	};

	dataReq.send(params);

	dataReq.onload = function() {

		var json = JSON.parse(this.responseText);
        alert(json);
		q = json.question;
		hint = json.hint;
		quest_id = json.qid;
		//alert(user_name);
		//alert(q);
		//alert(att_q);
        alert(question);
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

		$.hint.visible = false;
		ans1 = json.a;
		ans2 = json.b;
		ans3 = json.c;
		ans4 = json.d;

	}
	
			setTimeout(function(e) {

					var history = Ti.Network.createHTTPClient({

		onerror : function(e) {

			Ti.API.debug(e.error);

			alert(e.error);

			alert('There was an error during the connection');

		},

		timeout : 1000,

	});


history.open('POST', 'http://nxgninnovations.com/playground/trivia/history.php');

    alert(question);
	
	var params = { 
		user : user_name,
		seq : cur_q,
     	quest_id : quest_id,
	};

 alert(params);
	history.send(params);
	
	history.onload = function() {
	var json = JSON.parse(this.responseText);

	 }

			}, 10000);


	
};

function closeWindow() {
	$.movie.close();
};

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
	var ans_state;

	if (permit == 1) {

		switch(selection) {
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
				break;
		}

		if (a1 == hint) {
			ans_state = 1;

			$.correct.backgroundImage = '/tick.png';

			total = parseInt(total) + 10;

			// alert(att_q);
			setTimeout(function(e) {

				if (back_q == cur_q) {
					loaddata();
				} else {
					next();

				}
			}, 2000);

			if (parseInt(cur_q) > 9) {

				var upScore = Titanium.Network.createHTTPClient();

				upScore.open("POST", "http://nxgninnovations.com/playground/trivia/add_score.php");

				var params = {
					user : user_name,
					total : total,
					cat : m
				};

				upScore.send(params);

				upScore.onload = function() {
					var json = JSON.parse(this.responseText);

					var q = json.msg;
					var p = json.status;

					if (p == 1) {

						Alloy.createController("score").getView().open();

					}

				}
			} else {

			}
		} else {
			//alert("Wrong ans");
			$.wrong.backgroundImage = '/red_x.png';
			$.hint.visible = true;
			setTimeout(function(e) {

				loaddata();
			}, 2000);
			ans_state = 2;

		}
		var history = Ti.Network.createHTTPClient({

			onerror : function(e) {

				Ti.API.debug(e.error);

				alert(e.error);

				alert('There was an error during the connection');

			},

			timeout : 1000,

		});

		history.open('POST', 'http://nxgninnovations.com/playground/trivia/update_history.php');

		var params = {
			user : user_name,
			seq : cur_q,
			quest_id : quest_id,
			state : ans_state,
			ans : a1,
			opt : '2'
		};
		history.send(params);
		
		history.onload = function() 
		{
			var json = JSON.parse(this.responseText);

	   }
	}
}

function show() {

	var sendit = Ti.Network.createHTTPClient({

		onerror : function(e) {

			Ti.API.debug(e.error);

			alert(e.error);

			alert('There was an error during the connection');

		},

		timeout : 1000,

	});

	//Here you have to change it for your local ip

	sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/show_score.php');

	sendit.send();

	//Function to be called upon a successful response

	sendit.onload = function() {

		var json = JSON.parse(this.responseText);

		var json = json.test;

		//if the database is empty show an alert

		if (json.length == 0) {

			$.tableView.headerTitle = "The database row is empty";

		}

		//Emptying the data to refresh the view

		dataArray = [];

		//Insert the JSON data to the table view

		for (var i = 0; i < json.length; i++) {

			var row = Ti.UI.createTableViewRow();
			var view1 = Ti.UI.createView({
				left : "0%",
				width : "50%",

				backgroundColor : "black"
			});
			var label1 = Ti.UI.createLabel({
				color : 'white',

				text : json[i].name

			});
			view1.add(label1);
			var view2 = Ti.UI.createView({
				left : "50%",
				width : "50%",

				backgroundColor : "red"
			});
			var label2 = Ti.UI.createLabel({
				color : 'white',
				text : json[i].marks

			});
			view2.add(label2);
			row.add(view1);
			row.add(view2);

			dataArray.push(row);

		};

		$.tableView.setData(dataArray);

	};

}

function skip() {

	if (back_q == cur_q) {
		loaddata();
	} else {
		next();
	}
}

function next() {
	$.correct.backgroundImage = '/tick_gray_64.png';
	$.wrong.backgroundImage = '/gray_x.png';
		if (next_q <= cur_q) {
		var history = Ti.Network.createHTTPClient({

			onerror : function(e) {

				Ti.API.debug(e.error);

				alert(e.error);

				alert('There was an error during the connection');

			},

			timeout : 1000,

		});

		history.open('POST', 'http://nxgninnovations.com/playground/trivia/back.php');

		var params = {
			user : user_name,
			seq : next_q
		};
		history.send(params);

		// alert(params);

		history.onload = function() {
			var json = JSON.parse(this.responseText);

			q = json.question;
			hint = json.hint;
			quest_id = json.qid;
			state = json.state;
			answer = json.answer;

			//alert(user_name);
			//alert(q);
			//alert(att_q);

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

			$.hint.visible = false;
			ans1 = json.a;
			ans2 = json.b;
			ans3 = json.c;
			ans4 = json.d;

			if (state == 1) {
				if (answer == ans1) {
					check1();
				}
				if (answer == ans2) {
					check2();
				}
				if (answer == ans3) {
					check3();
				}
				if (answer == ans4) {
					check4();
				}
				$.correct.backgroundImage = '/tick.png';
			} else if (state == 2) {
				if (answer == ans1) {
					check1();
				}
				if (answer == ans2) {
					check2();
				}
				if (answer == ans3) {
					check3();
				}
				if (answer == ans4) {
					check4();
				}
				$.wrong.backgroundImage = '/red_x.png';
				$.hint.visible = true;
			}
		}
	}
	back_q = next_q;
next_q = next_q + 1;	
}

function back() {
	var state;
	var answer;
	$.correct.backgroundImage = '/tick_gray_64.png';
	$.wrong.backgroundImage = '/gray_x.png';
	next_q = back_q;
	back_q = back_q - 1;
	alert(back_q);
	if (back_q > 0) {
		var history = Ti.Network.createHTTPClient({

			onerror : function(e) {

				Ti.API.debug(e.error);

				alert(e.error);

				alert('There was an error during the connection');

			},

			timeout : 1000,

		});

		history.open('POST', 'http://nxgninnovations.com/playground/trivia/back.php');

		var params = {
			user : user_name,
			seq : back_q
		};
		history.send(params);

		// alert(params);

		history.onload = function() {
			var json = JSON.parse(this.responseText);

			alert(json);
			q = json.question;
			hint = json.hint;
			quest_id = json.qid;
			state = json.state;
			answer = json.answer;

			//alert(user_name);
			//alert(q);
			//alert(att_q);

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

			$.hint.visible = false;
			ans1 = json.a;
			ans2 = json.b;
			ans3 = json.c;
			ans4 = json.d;
			
		
			if (state == 1) {
				if (answer == ans1) 
				{ check1();
				alert("sweety");
				}
				if (answer == ans2) {
					check2();
					alert("sweety");
				}
				if (answer == ans3) {
					check3();
					alert("sweety");
				}
				if (answer == ans4) {
					alert("sweety");
					check4();
				}
				$.correct.backgroundImage = '/tick.png';
			} else if (state == 2) {
				if (answer == ans1) {
				   alert("sweety");
					check1();
				}
				if (answer == ans2) {
					alert("sweety");
					check2();
				}
				if (answer == ans3) {
					check3();
				alert("sweety");
				}
				if (answer == ans4) {
					alert("sweety");
					check4();
				}
				$.wrong.backgroundImage = '/red_x.png';
				$.hint.visible = true;
			}
		}
	}
} 