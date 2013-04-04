
var todos = Alloy.Collections.todo;
var total=0;
var att_q=1;
var selection = 0;
var ans1,ans2,ans3,ans4,hint,answer,mul_q,numid1;
var m=1;

function loaddata()
{
	if(att_q>5)
	{
             	Alloy.createController("score").getView().open();
    }
	 
	$.correct.backgroundImage='/tick_gray_64.png';
	$.wrong.backgroundImage='/gray_x.png';
	
	
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
                      hint=json.hint;
                     
				
					$.addB.backgroundImage="/radioButtonIcon(1).gif";
					$.addD.backgroundImage="/radioButtonIcon(1).gif";
					$.addC.backgroundImage="/radioButtonIcon(1).gif";	
					$.addA.backgroundImage="/radioButtonIcon(1).gif";

                     $.ques.text=q;
                     $.a.text=json.a;
                     $.b.text=json.b;
                     $.c.text=json.c;
                     $.d.text=json.d;
                     $.hint.text=hint;
                    
                    
                     ans1=json.a;
                     ans2=json.b;
                     ans3=json.c;
                     ans4=json.d;
             
                    
                    }
                    

           
                 };




 


function closeWindow() {
    $.movie.close();
};


function check1()
{
	$.addB.backgroundImage="/radioButtonIcon(1).gif";
	$.addD.backgroundImage="/radioButtonIcon(1).gif";
	$.addC.backgroundImage="/radioButtonIcon(1).gif";	
	$.addA.backgroundImage="/radioButtonSelectIcon.gif";
     selection = 1;
}

function check2()
{
	$.addA.backgroundImage="/radioButtonIcon(1).gif";
	$.addC.backgroundImage="/radioButtonIcon(1).gif";
	$.addD.backgroundImage="/radioButtonIcon(1).gif";	
	$.addB.backgroundImage="/radioButtonSelectIcon.gif";
	selection = 2;	
}

function check3()
{   $.addA.backgroundImage="/radioButtonIcon(1).gif";
	$.addB.backgroundImage="/radioButtonIcon(1).gif";
	$.addD.backgroundImage="/radioButtonIcon(1).gif";	
	$.addC.backgroundImage="/radioButtonSelectIcon.gif";	
	selection = 3;
	
}

function check4()
{
    $.addA.backgroundImage="/radioButtonIcon(1).gif";
	$.addB.backgroundImage="/radioButtonIcon(1).gif";
	$.addC.backgroundImage="/radioButtonIcon(1).gif";	
	$.addD.backgroundImage="/radioButtonSelectIcon.gif";	
	selection = 4;
}


function confirm_ans()
{ 
	//alert(demo);
	att_q =  att_q + 1;
	switch(selection)
	{ case 1:
		answer = ans1;
		break;
       case 2:
		answer = ans2;
		break;
		case 3:
		answer = ans3;
		break;
		case 4:
		answer = ans4;
		break;		
	}
	
	if(answer==hint)
	
	{      
		
        	$.correct.backgroundImage='/tick.png';
	       
	       setTimeout(function(e){    
            
              loaddata();
            },2000);

	
		     total=parseInt(total)+10; 
		    
        	 	 var upScore = Titanium.Network.createHTTPClient();    	
                 upScore.open("POST","http://nxgninnovations.com/playground/update_score.php");
         
               var params = {  
                id : demo , user1 :user_name};
                
               
                upScore.send(params);  
                upScore.onload=function()
                {
                	var json = JSON.parse(this.responseText); 
                    
                     
                     var p=json.status;
                     if((p==1)&&(quest<=5))
                     {
                     	                     
                     	loaddata();
                    
                     	
                     }
                     else if(quest>5)
                     {
                     	  	Alloy.createController("multiplayer").getView().open();

                     }
                     else
                     {
                     	alert("marks not add");
                     }
                     
                      
                     }  
	   
	}
	else
	{
		//alert("Wrong ans");
		$.wrong.backgroundImage='/red_x.png';
	    	 setTimeout(function(e){    
            
              loaddata();
            },2000);

	}
	
}
