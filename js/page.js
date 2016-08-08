$(function(){
   
    //Display the icon's class name inside the tag with the id of "class-name" if the user clicks on an icon.
        
    $("#icons").on("click",function(event){
        // type class name inside the div
        $("#class-name").html("<code>Class: "+ event.target.className + "</code>");
        // change the background color of the selected icon to make it active icon
        $(event.target).css("background-color","#ebeeeb");
        // remove the backgroind color of the icons that don't match the selected icon
        $("#icons tr td").not(event.target).css("background-color","#fff");
    });
    
    
});