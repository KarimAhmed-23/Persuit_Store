$(window).on("load", function(){



 $('.loading-style-2').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});


$(function(){


    
      $('.drop-list').click(function(){
        
    $('.droplist-content').slideToggle(500);
    $('.rotate').toggleClass('caret-down');

    });
    
    
        
  $('.massenger-chat-icon ').click(function(){
      
   $('.massenger-chat').fadeToggle(); 
  $('.massenger-chat-icon  div').css("display","none");  
      
      
  }); 
    
$('.close-chat').click(function(){
    
  $('.massenger-chat').fadeOut();
  $('.massenger-chat-icon  div').fadeOut();  

    
});
    
    
    
     
})



