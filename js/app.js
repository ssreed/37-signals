$(function(){  
    $('#basecamp').hover(function(){
        $('.title > h1').toggle();
        $('.title > h3').toggle();
        $('.bc').toggle();
    });

    $('#highrise').hover(function(){
        $('.title > h1').toggle();
        $('.title > h3').toggle();
        $('.hr').toggle();
    });

    $('#campfire').hover(function(){
        $('.title > h1').toggle();
        $('.title > h3').toggle();
        $('.cf').toggle();
    });

    var d, today, days;
   
    d = new Date();
    today = d.getDay();
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    $('#day').append("<a href=\"#\">Happy " + days[today] + ".</a>");
});