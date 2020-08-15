

$(window).on("load", function(){



 $('.loading-style').delay(2000).fadeOut(1500, function(){
     
     $(this).parent().fadeOut(1000);
     
     
 });

    
});










var slides= Array.from (document.querySelectorAll('.slider-img'));
   var index=0,
    indicators =  Array.from(document.querySelectorAll('.ul-bullets li'))  ;

function change(){
    
    
    
removeActivebullet();

   /* for(let i=0 ; i<slides.length-1;i++){
        
        slides[i].classList.remove('active')  
    }*/

    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    
    

    
    if(index<slides.length-1){
index++
    
    }else
    {index=0; }
    
 
    
/*setTimeout("autochange()",3000);*/


    


}


/*function playindicator () {for(let x=0; x<inducator.length-1;x++){
    
inducator[x].onclick= function(){
    
    
    index=parseInt(this.getAttribute('data-index'));
    
    

    
}    
         autochange();

} 
}*/



function removeActivebullet(){
    
    slides.forEach(function(img){
        
    img.classList.remove('active')    
        
        
    });
    
  indicators.forEach(function(bull){
      
      bull.classList.remove('active')

      
  });
    


      
  
    
}
         

 function moveTheindicator (){

 for(var i=0;i<indicators.length;i++){
    
    
    indicators[i].onclick= function(){
        
        
        index= parseInt(this.getAttribute('data-index'));
        
        
        change();
        resetTimer();

    }
    
}
}
    
    

moveTheindicator();

change();


 function resetTimer(){

   	  clearInterval(timer);
   	  timer=setInterval(autoplay,6000);
   }


function autoplay() {
    change();
}

let timer = setInterval(autoplay,6000);





$(function() {
    $('.navbar-toggle').click(function(){
        
        
     $('.nav-list').slideToggle(500);
        
    });
    
    
 /*   
$('.dropdown').click(function(){
    
        $('.dropdown-content').slideToggle(500);

});*/

        
    $('.dropdown').click(function(){
        
    $('.dropdown-content').slideToggle(500);
    $('.rotate').toggleClass('caret-down');

    });
    
  $(".notification").delay(9000).show(1000);
    
    
    
    
    
    $(".rearch").click(function(){
        
        
        $(".search-input").slideToggle();
        
    });
    
    
    
    
 

    
    
});



