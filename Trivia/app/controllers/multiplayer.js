var todos = Alloy.Collections.todo;
Ti.App.myGlobalVar='numid1';
function show()
{
	var user=user_name;

 var sendit = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 

              sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/frnd_req.php');  

               
               var params = {  
                user : user };
                sendit.send(params); 
                    
      


              //Function to be called upon a successful response 

              sendit.onload = function(){ 

                     var json = JSON.parse(this.responseText); 

                     var json = json.test; 
                     //if the database is empty show an alert 

                     if(json.length == 0){ 

                            $.tableView.headerTitle = "The database row is empty"; 

                     }                      

                     //Emptying the data to refresh the view 

                     dataArray = [];                      

                     //Insert the JSON data to the table view 

                     for( var i=0; i<json.length; i++){ 

                           var row = Ti.UI.createTableViewRow();  
                            var view1 = Ti.UI.createView({
                                         left : "0%",
                                         width :'auto',
                                         height:'auto',
                                         backgroundColor : "black"
                                        });
                            var label1 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].name
                            	
                            });
                            view1.add(label1);
                            var view2 = Ti.UI.createView({
                                         width :'auto',
                                         height:'auto',
                                
                                 backgroundColor : "red"
                               });      
                            var cat = Ti.UI.createButton({
                            	title:"Play",
                            	width:"60dp",
                            	height:"40dp",
                            	color:'white',
                            	numid1:json[i].gameid
                                                        	
                            });   
                            cat.addEventListener('click', function(e){
     
     
     var play = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });   
              
        play.open('POST', 'http://nxgninnovations.com/playground/trivia/frnd_req_update.php');       
     
      var params = {  
                numid : e.source.numid1 };
                play.send(params); 
                    
                    play.onload=function()
                {
                	
                     var json = JSON.parse(this.responseText); 
                    
                     var res=json.msg;
                                         	
                     	Alloy.createController("multiQues").getView().open();
 
                    }   
        
});
                              view2.add(cat);
                               row.add(view1);
                               row.add(view2);

                         dataArray.push(row);                 
                      
                     };                      

                     $.tableView.setData(dataArray);                            
                     

               }; 

	




}
function show3()
{
	var user=user_name;

 var sendit = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 

              sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/frnd_request1.php');  

               
               var params = {  
                user : user };
                sendit.send(params); 
                    
      


              //Function to be called upon a successful response 

              sendit.onload = function(){ 

                     var json = JSON.parse(this.responseText); 

                     var json = json.test; 
                     //if the database is empty show an alert 

                     if(json.length == 0){ 

                            $.tableView1.headerTitle = "The database row is empty"; 

                     }                      

                     //Emptying the data to refresh the view 

                     dataArray = [];                      

                     //Insert the JSON data to the table view 

                     for( var i=0; i<json.length; i++){ 

                           var row = Ti.UI.createTableViewRow();  
                            var view1 = Ti.UI.createView({
                                         left : "0%",
                                         width : "50%",
                                         
                                         backgroundColor : "black"
                                        });
                            var label1 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].name
                            	
                            });
                            view1.add(label1);
                            var view2 = Ti.UI.createView({
                                left : "50%",
                                width : "50%",
                                
                                 backgroundColor : "red"
                               });      
                            if(json[i].status == 0)
                            {
                                var label2 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:'Pending'
                            	
                                 });
                                view2.add(label2);
                            }   
                            else if(json[i].status == 1)
                            { var cat = Ti.UI.createButton({
                            	title:"Play",
                            	width:"60dp",
                            	height:"40dp",
                            	color:'white',
                            	numid1:json[i].gameid
                            	
                                                        	
                            });   
                            cat.addEventListener('click', function(e){
                            	
                            	demo = e.source.numid1;
     
                            Alloy.createController("multiQues").getView().open();
 
                      
        
});
                          view2.add(cat);
                            }
                               row.add(view1);
                               row.add(view2);

                         dataArray.push(row);                 
                      
                     };                      

                     $.tableView1.setData(dataArray);                            
                     

               }; 
}

function show4()
{ var user = user_name;
	
	var sendit = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 

              sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/multiscore.php');  

               
               var params = {  
                user : user };
                sendit.send(params); 
                    
      


              //Function to be called upon a successful response 

              sendit.onload = function(){ 

                     var json = JSON.parse(this.responseText); 

                     var json = json.test; 
                     //if the database is empty show an alert 

                     if(json.length == 0){ 

                            $.tableView2.headerTitle = "The database row is empty"; 

                     }                      

                     //Emptying the data to refresh the view 

                     dataArray = [];                      

                     //Insert the JSON data to the table view 

                     for( var i=0; i<json.length; i++){ 

                           var row = Ti.UI.createTableViewRow();  
                            var view1 = Ti.UI.createView({
                                         left : "0%",
                                         width : "25%",
                                         
                                         backgroundColor : "black"
                                        });
                            var label1 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].user1
                            	
                            });
                            view1.add(label1);
                          var view2 = Ti.UI.createView({
                                         left : "25%",
                                         width : "25%",
                                         
                                         backgroundColor : "black"
                                        });
                            var label2 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].score1
                            	
                            });
                                    view2.add(label2);
                              var view3 = Ti.UI.createView({
                                         left : "50%",
                                         width : "25%",
                                         
                                         backgroundColor : "black"
                                        });
                            var label3 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].user2
                            	
                            });
                                 view3.add(label3);
                              var view4 = Ti.UI.createView({
                                         left : "75%",
                                         width : "25%",
                                         
                                         backgroundColor : "black"
                                        });
                            var label4 = Ti.UI.createLabel({
                            	color:'white',
                            	
                            	text:json[i].score2
                            	
                            });
                               view4.add(label4);
                               row.add(view1);
                               row.add(view2);
                               row.add(view3);
                               row.add(view4);


                         dataArray.push(row);                 
                      
                     };
                     
                     
                                           

                     $.tableView2.setData(dataArray);                            
                     

               }; 

	
}


function send_req()
{
	
	
  var sendfrom=user_name;
  var reqto=$.textF.value;
  //alert(reqfrom);
  alert(reqto);   
  var sendit = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 

              sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/send_req.php');  

               
               var params = {  
                sendfrom : sendfrom, sendto:reqto };
                sendit.send(params); 
                    
      


              //Function to be called upon a successful response 

              sendit.onload = function(){ 

                     var json = JSON.parse(this.responseText); 

	
                         var json1 = json.msg;  
                         //alert(json1);

                        }
                  



}

