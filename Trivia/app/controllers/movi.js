var todos = Alloy.Collections.todo;


function loaddata()
{
	var m=1;
    
    var dataReq = Titanium.Network.createHTTPClient();    	

      dataReq.open("POST","http://nxgninnovations.com/playground/fetch.php");
         
        var params = {  
                id : m };
                
               
                dataReq.send(params);  

                dataReq.onload=function()
                {
                	
                     var json = JSON.parse(this.responseText); 
                    
                    var q=json.question;
                     var a=json.a;
                     var b=json.b;
                     var c=json.c;
                      var d=json.d;  
                     var hint=json.hint;
                     
                     $.ques.text=q;
                     $.a.text=a;
                     $.b.text=b;
                     $.c.text=c;
                     $.d.text=d;
                     $.hint.text=hint;
                    }


                 };




function confirm()
{
   var ans=	$.ans.value;
     
   var ans1=$.hint.text;   
  // alert(ans1);
  // alert(ans);

      if(ans==ans1)
      {
      	
      	alert("Ans is Right");
      	loaddata();
      }
      else{
      	alert("Wrong Ans");
      	loaddata();
      }



}
 


function closeWindow() {
    $.movie.close();
};
