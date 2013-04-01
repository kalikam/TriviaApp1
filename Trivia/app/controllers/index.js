var todos = Alloy.Collections.todo;
Ti.App.myGlobalVar='user_name';
Ti.App.myGlobalVar='att_q';
function goReg() 
{
  	Alloy.createController("reg").getView().open();
}

// Show task list based on selected status type
var todos = Alloy.Collections.todo;

$.todoWin.open();

function login_user()
{
	 var todos = Alloy.Collections.todo;
 
    var loginReq = Titanium.Network.createHTTPClient();  
     
     //alert($.email.value);
     //alert($.password.value);
 
        if ($.email.value != '' && $.password.value != '')  
        {  
            loginReq.open("POST","http://nxgninnovations.com/playground/login.php");  
            var params = {  
                email : $.email.value,
                password: $.password.value
                };  
            
            loginReq.send(params);  
            loginReq.onload = function()
            { 

                     var json = JSON.parse(this.responseText); 

                     var json1 = json.message; 
                    if(json.logged==true) {
                    	 
                    	user_name=json.message;
                    	alert(user_name);
                         Alloy.createController("home").getView().open();
                    } else{
                    	alert("Wrong User/Password");
                    }
                          
             
                                        
                    } //if the database is empty show an alert 

                    
                     //Emptying the data to refresh the view 

                    
                     //Insert the JSON data to the table view 

                    
        }  
        else  
        {  
            alert("Username/Password are required");  
        }  

}
