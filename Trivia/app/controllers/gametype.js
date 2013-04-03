/**
 * @author sony
 */
var todos = Alloy.Collections.todo;
function single()
{
  Alloy.createController("home").getView().open();
	
}

function multi()
{
  Alloy.createController("multiplayer").getView().open();
	
}
