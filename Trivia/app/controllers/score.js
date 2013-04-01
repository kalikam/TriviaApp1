
var todos = Alloy.Collections.todo;
       var dataArray = [];        

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

              sendit.open('POST', 'http://nxgninnovations.com/playground/show_score.php');  

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


function close()
{
	$.addView.open();
	
}

