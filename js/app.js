$(function(){

    var toggleInfo = function(){
        $('.title > h1').toggle();
        $('.title > h3').toggle();
    };

    $('#basecamp').hover(function(){
        toggleInfo();
        $('.bc').toggle();
    });

    $('#highrise').hover(function(){
        toggleInfo();
        $('.hr').toggle();
    });

    $('#campfire').hover(function(){
        toggleInfo();
        $('.cf').toggle();
    });

    var d, today, days;
   
    d = new Date();
    today = d.getDay();
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    $('#day').append("<span>Happy " + days[today] + ".</span>"); 
});