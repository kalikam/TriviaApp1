function makeReg() {
       // Create a new model for the todo collection
     
  	 var todos = Alloy.Collections.todo;
 
     var loginReq = Titanium.Network.createHTTPClient();  
     
    
  
 
        if ($.itemEmail.value != '' && $.itemPwd.value != '')  
        {  
            loginReq.open("POST","http://nxgninnovations.com/playground/trivia/registration.php");  
            var params = {  
                email : $.itemEmail.value,
                username : $.itemUser.value,
                password: $.itemPwd.value,
                name : $.itemName.value
                };  
            
            loginReq.send(params);  
            loginReq.onload = function()
            { 

                     var json = JSON.parse(this.responseText); 

                     var json1 = json.msg; 
                     
                    Alloy.createController("index").getView().open();
                                        
                    } //if the database is empty show an alert 

                    
                     //Emptying the data to refresh the view 

                    
                     //Insert the JSON data to the table view 

                    
        }  
        else  
        {  
            alert("Username/Password are required");  
        }  

 }  
    
    function focusTextField() {
    $.itemEmail.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
    $.addWin.close();
};
