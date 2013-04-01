/**
 * @author sony
 */

var todos = Alloy.Collections.todo;


function movie()
{   
	 var m=1;
	 att_q=1;
	 Alloy.createController("movi").getView().open();
	 total = 0;
}
function politics()
{
	Alloy.createController("pol").getView().open();
	var p=2;
    att_q=1;
	alert(p);
	total = 0;
}

function sports()
{
	//Alloy.createController("score").getView().open();
 Alloy.createController("sport").getView().open();
	var s=3;
	att_q=1;
	alert(s);
	total = 0;
}
