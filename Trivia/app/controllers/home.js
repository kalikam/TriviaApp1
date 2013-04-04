/**
 * @author sony
 */

var todos = Alloy.Collections.todo;
function test()
{
  var user1 = user_name;
  var user2 = $.sendto.value;
	
  var sendit1 = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     } 


              });                      

              //Here you have to change it for your local ip 

              sendit1.open('POST', 'http://nxgninnovations.com/playground/trivia/send_req.php');  

              var params1 = { sendfrom : user1, sendto : user2, status : '0'};
                
              sendit1.send(params1);  

              sendit1.onload = function()
              { 

                     var json = JSON.parse(this.responseText); 

                     var json1 = json.msg;
                     
                    // alert(json1);
                     //if the database is empty show an alert 

              }                      
};

var dataArray = [];        
var dataArray1 = [];        

function show1()
{
 
 var user1 = user_name;
 var conn = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 
              alert(user1);

              conn.open('POST', 'http://nxgninnovations.com/playground/trivia/frnd_req.php');  


              var params1 = { user : user1};
             alert(params1);
             conn.send(params1);  

              conn.send(); 

              //Function to be called upon a successful response 

              conn.onload = function(){ 

                     var json = JSON.parse(this.responseText); 
 
                     alert(json);
                     alert(json.length);
                     //if the database is empty show an alert 

                     if(json.length == 0){ 

                            $.tableView12.headerTitle = "No Request"; 

                     }                      

                     //Emptying the data to refresh the view 

                     dataArray1 = [];                      

                     //Insert the JSON data to the table view 

                     for( var i=0; i<json.length; i++){ 

                           var row1 = Ti.UI.createTableViewRow();  
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
                             var cat = Titanium.UI.createButton({
                                        width:'100%',
                                        top:topValue,
                                        numId:json[i].gameid,
                                  });
   
                           cat.addEventListener('click', function (e) { alert( e.source.numId);	});   
                              view2.add(cat);
                               row1.add(view1);
                               row1.add(view2);

                         dataArray1.push(row1);                 
                      
                     };                      

                     $.tableView12.setData(dataArray1);                            
                     

               }; 
}


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
	//alert(p);
	total = 0;
}

function sports()
{
	//Alloy.createController("score").getView().open();
 Alloy.createController("sport").getView().open();
	var s=3;
	att_q=1;
	//alert(s);
	total = 0;
}
function show()
{
	
 var sendit = Ti.Network.createHTTPClient({ 

                     onerror: function(e){ 

                           Ti.API.debug(e.error); 

                           alert(e.error);
                                                     
                           alert('There was an error during the connection'); 

                     }, 

                  timeout:1000, 

              });                      

              //Here you have to change it for your local ip 

              sendit.open('POST', 'http://nxgninnovations.com/playground/trivia/show_score.php');  
              
          
              sendit.send(); 

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
                            var label2 = Ti.UI.createLabel({
                            	color:'white',
                            	text:json[i].marks
                                                        	
                            });   
                              view2.add(label2);
                               row.add(view1);
                               row.add(view2);

                         dataArray.push(row);                 
                      
                     };                      

                     $.tableView.setData(dataArray);                            
                     

               }; 

	




}
