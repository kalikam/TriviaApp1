/**
 * @author sony
 */

var todos = Alloy.Collections.todo;


function movie()
{   
	 
	 Alloy.createController("movi").getView().open();
}
function politics()
{
	Alloy.createController("pol").getView().open();
	var p=2;
	alert(p);
}

function sports()
{
 Alloy.createController("sport").getView().open();
	var s=3;
	alert(s);
}
