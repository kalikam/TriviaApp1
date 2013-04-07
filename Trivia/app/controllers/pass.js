function req_pass() {
       // Create a new model for the todo collection
     
  	 var todos = Alloy.Collections.todo;
 
     var loginReq = Titanium.Network.createHTTPClient();  
     
     
  
 
        if ($.email.value != '' && $.userid.value != '')  
        {  
            loginReq.open("POST","http://nxgninnovations.com/playground/trivia/forgetpwd.php");  
            var params = {  
                email : $.email.value,
                username : $.userid.value,
                 };  
            alert(params);
            loginReq.send(params);  
            loginReq.onload = function()
            { 

                     var json = JSON.parse(this.responseText); 

                     var json1 = json.msg; 
                     alert(json1);
                                        
                    } 
                    
                    }  
        else  
        {  
            alert("E-mail/Userid are required");  
        }  

 }  
    

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
Alloy.createController("index").getView().open();


};
