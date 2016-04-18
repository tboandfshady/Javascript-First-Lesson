//EVENT LISTENER - program to wait for a click event to occur to the "button1" button
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',myfirst,false);
    
    function myfirst(){
        
        //ALERT
        alert("Sunshine!");
        
    //USER INPUT ONE - storing the users input to the local veriable named "input1" 
    var userinput1 =
    document.getElementById("input1").value;
    //OUTPUT ONE - wiritng the local variable back to the html dom where element has a id of demo
    document.getElementById("demo").innerHTML = 
        userinput1;
    }