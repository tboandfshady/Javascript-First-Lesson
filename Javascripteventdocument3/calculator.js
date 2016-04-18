     //EVENT LISTENER FOR BUTTON ON CLICK
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myfirst,false);
    
//TAKE INPUT FROM BOTH TEXT BOXES
    function myfirst(){
        var userinput1 = document.getElementById("input1").value;
        var userinput2 = document.getElementById("input2").value;
        //ADDS INPUT 1 AND 2 TOGETHER (*parseInt converts string to numbers)
        var total = parseInt(userinput1) + parseInt(userinput2);
        
        //display output 
           document.getElementById("demo").innerHTML = total;
        
    }
