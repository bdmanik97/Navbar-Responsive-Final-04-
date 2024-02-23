// Javasrcipt call function start here
$( document ).ready(function() {
    $(".toggle").click(function(){
     $(".navbar").slideToggle();
     $(".bar, .close").toggle();
    }); 

    $(".home-item").click(function(){
     $(".d-list").slideToggle();
    }); 

    $(".home-item2").click(function(){
     $(".d-list2").slideToggle();
    }); 

    $(".products-item").click(function(){
    $(".dwn-list").slideToggle();
    }); 

    $(".contact-item").click(function(){
    $(".dwn2-list").slideToggle();
     }); 
 });
 // Javasrcipt call function end here