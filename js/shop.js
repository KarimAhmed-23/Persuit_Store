$(window).on("load", function(){



 $('.loading-style-2').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});


var navBar = document.querySelector('.nav-bar'),
   massengerChat = document.querySelector('.massenger-chat-icon');



window.addEventListener("scroll" , () =>{
    
    
    console.log(window.pageYOffset);
if(window.pageYOffset > 2500){
    
 massengerChat.classList.add("active");   
} else{
    
   massengerChat.classList.remove("active");   
  
} 
    
    
 navBar.classList.toggle("sticky" , window.scrollY > 500 );
    


    

})


 


    var cherIndex=0,innerWord,
    word = document.querySelector('.line-text'),
    innerWord = "Hot product";

function typing(){
    
    if(cherIndex<innerWord.length){
        word.innerHTML += innerWord.charAt(cherIndex);
        
     cherIndex++;
        setTimeout(typing,300)
    }
} 

typing();
    
/*
$(window).scroll(function(){
    if($(window).scrollTop() >= 500) {

$('.massenger-chat-icon').fadeIn(2000);
/*$('.massenger-chat-icon  div').fadeIn(4500);  */
/*
}/*else{
    
    
    $('.massenger-chat-icon').fadeOut(1000);


}*/
   /* });*/

/*
 var fliterBtns = document.getElementById("fliter-btns").children;

var items = document.querySelectorAll(".product");
console.log(items);
for(let i =0; i<fliterBtns.length ; i++){
    
    
    fliterBtns[i].addEventListener("click", function(){
        
        
  for(let x = 0 ;x<fliterBtns.length ; x++){
      
      fliterBtns[x].classList.remove('active');
  }
this.classList.add('active');
const target = this.getAttribute('data-target')

for(let y =0 ; y<items.length ; y++){
    items[y].style.display="none";
    
    if (target==items[y].getAttribute('data-id')){
        
        items[y].style.display= "block";
        
    }
    
    if (target=="all"){
        
        items[y].style.display= "block";
    }
}


    })
}

*/


var fliters = document.querySelectorAll(".products-bar-item li a");

console.log(fliters);


for(let i =0; i<fliters.length ; i++){
    
    
    fliters[i].addEventListener("click", function(){
        
        
  for(let x = 0 ; x < fliters.length ; x++){
      
      fliters[x].classList.remove('active');
  }
   this.classList.add('active')
        
    })
}
        



let ul = document.querySelector('.nav-ul');
var li_a = document.querySelectorAll('.nav-ul li a');

li_a.forEach(el => {

	el.addEventListener('click', function(){
        
    ul.querySelector('.active').classList.remove('active');
 			
el.classList.add('active');
			
 			})

		});




$(function(){
   /* 
    $('.heart-icon').click(function(){
        
       $(this).toggleClass('active');
        
    });*/
    
          
    $('.drop-list').click(function(){
        
    $('.droplist-content').slideToggle(500);
    $('.rotate').toggleClass('caret-down');

    });
    
    
    $('.toggle-menu').click(function(){
        
     $('.nav-bar-mobile').css("right","0px")  ; 
        
    });
    
    
    $('.close-nav').click(function(){
        
     $('.nav-bar-mobile').css("right","-300px")  ; 
        
    });
    
    
 
});

 


/*

$(function(){
    
  $('.massenger-chat-icon ').click(function(){
      
   $('.massenger-chat').fadeToggle(); 
  $('.massenger-chat-icon  div').css("display","none");  
      
      
  }); 
    
$('.close-chat').click(function(){
    
  $('.massenger-chat').fadeOut();
  $('.massenger-chat-icon  div').fadeOut();  

    
});*/
    
  /*
 $('.slidebar-fliter').click(function(){
   $('.fixed-slidebar').toggleClass('visable') ;
     if($('.fixed-slidebar').hasClass('visable')){
         
         
       $('.fixed-slidebar').animate({
           
           left:0
       },500)  ;
         


         
     }
     
 });
  
    
    $('.close-slidebar').click( function(){
        
        
     $('.fixed-slidebar').animate({
         
         left: -  $('.fixed-slidebar').innerWidth()
     },500) 
        
   
        
    });
    */

    
/*

 $('.add').click( function(){
        
        
     $('.addto-card').animate({
         
         right: 0
     },700).css("right","-300")
        
    
        
    });
        */
    
    
         
    
});
    



    var sliderbar = document.querySelector('.fixed-slidebar'),
        sliderbar_btn = document.querySelector('.slidebar-fliter'),
        close_slidebar = document.querySelector('.close-slidebar'),
        sliderbar_width = sliderbar.offsetWidth;
    
    
    sliderbar_btn.addEventListener("click", () =>{
        
     sliderbar.style.left ="0";
          
    })
    
    close_slidebar.addEventListener("click", () =>{
        
     sliderbar.style.left = -sliderbar_width + "px" ;
          
    })









$(".accordion__title").click(function() {
  const $accordion_wrapper = $(this).parent();
  const $accordion_content = $(this).parent().find(".CATEGORIES-content");
  const $accordion_open = "accordion--open";

  if ($accordion_wrapper.hasClass($accordion_open)) {
    $accordion_content.slideUp();                     
    $accordion_wrapper.removeClass($accordion_open); 
  }
 
  else {
    $accordion_content.slideDown();                 
    $accordion_wrapper.addClass($accordion_open);   
  }
});








$(function(){
    
 if(window.innerWidth >=992){
   $('.view-item-lg').css("opacity","1")  
     
 }
    
    else if(window.innerWidth >=768){
   $('.view-item-md').css("opacity","1")  
     
 }
    
else if(window.innerWidth >=250){
$('.view-item-sm').css("opacity","1")  
     
 } 
    
    
    $('.view-icon div').click(function(){
        
     alert('The dimensions of your phone are '+window.innerWidth+' x '+window.innerHeight+' Therefore, this format cannot be applied as the site automatically determines the format compatible with each device. Thank you for visiting our website and I hope you like it. ') ;  
        
        
    })
    
});





/*-------- header slider ------------------------------------------------------------------------------------*/

 var slides = document.querySelector('.slider-item').children,
     prev =document.querySelector('.prev'),
     next =document.querySelector('.next'),
     totalSlides = slides.length,
     duration =6000,
     index =0;

 console.log(slides);

prev.onclick = function(){
    
    slide("prev");
    reset()
}
next.onclick = function(){
    
    slide("next");
    reset()
}


function slide(direction) {
    
progress();
    
    if(direction =='next'){
        
        if(index== totalSlides-1){
            
            index=0;
        } else{
            
            index++;
        }
            
    }
    
    if(direction=='prev'){
        
        if(index == 0){
            
            index= totalSlides-1;
        } else{
            
            index--;
        }
            
    }
    
    
    for(let i= 0; i<slides.length;i++){
        
        
        slides[i].classList.remove('active')
    }
    
     slides[index].classList.add('active');
    slideInfo();

}







let width = 100/totalSlides;
console.log(width)
function slideInfo(){
    
    
    document.querySelector('.slide-info .number').innerHTML = (index+1) + "/" + totalSlides;
    document.querySelector(' .inner').style.width = (index+1)*width + "%";

}


function progress(){
    
        document.querySelector('.Progress-Bar').innerHTML ="";
        const div= document.createElement("div");
        document.querySelector('.Progress-Bar').appendChild(div);

        div.style.width ="0px";
        div.style.height ="5px";
        div.style.position ="absolute";
        div.style.left ="0px";
        div.style.bottom ="0px";
        div.style.backgroundColor ="var(--clr-17)";
        div.style.zIndex ="22";
        div.id ="progress";
        div.style.animation = "progressBar " + duration/1000 + "s linear";


    } 



  function reset(){
   
   	  clearInterval(timer);
   	  timer = setInterval (autoplay,duration);
   }


function autoplay(){
    
slide("next")

}

 

let timer = setInterval (autoplay,duration);

    
slideInfo();
progress();



/*-------- end  header slider ------------------------------------------------------------------------------------*/







/*-------------------------------------------- Start prodcts-carousel-1 -----------------------------------------*/

 let carouselSlides=document.querySelector(".carousel-1").children,
     prevbtn=document.querySelector(".prevbtn"),
     nextbtn=document.querySelector(".nextbtn"),
     indicator=document.querySelector(".indicator"),
     counter =0; 


   prevbtn.addEventListener("click",function(){
       prevSlide();
       updateCircleIndicator(); 
       resetauto();
   })

   nextbtn.addEventListener("click",function(){
      nextSlide(); 
      updateCircleIndicator();
      resetauto();      
   })

   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< carouselSlides.length; i++){
        	const div=document.createElement("div");
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                	div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();

    function indicateSlide(element){
         counter=element.id;
         changeSlide();
         updateCircleIndicator();
         resetauto();
    }
     
    function updateCircleIndicator(){
    	for(let i=0; i<indicator.children.length; i++){
    		indicator.children[i].classList.remove("active");
    	}
    	indicator.children[counter].classList.add("active");
    }

   function prevSlide(){
   	 if(counter==0){
   	 	counter=carouselSlides.length-1;
   	 }
   	 else{
   	 	counter--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(counter==carouselSlides.length-1){
      	counter=0;
      }
      else{
      	counter++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<carouselSlides.length; i++){
   	       	 carouselSlides[i].classList.remove("active");
             carouselSlides[i].style.zIndex="";

   	       }
       
if(counter>0){
           
carouselSlides[counter-1].style.zIndex="2";
           
}

       carouselSlides[counter].classList.add("active");
   }

   function resetauto(){
   
   	  clearInterval(timerMove);
   	  timerMove=setInterval(automove,4000);
   }
 
  
  function automove(){
      nextSlide();
      updateCircleIndicator();
  }

  let timerMove=setInterval(automove,4000);


 

/*-------------------------------------------- end prodcts-carousel-1 -----------------------------------------*/









/*-------------------------------------------- Start prodcts-carousel-2 -----------------------------------------*/



 let    carouselSlide =document.querySelector(".carousel-2").children,
        btnPrev=document.querySelector(".btn-prev"),
        btnNext=document.querySelector(".btn-next"),
        carouselIndicator=document.querySelector(".carousel-2-indicator"),
        slideIndex=0;


   btnPrev.addEventListener("click",function(){
       prevslid();
       updateIndicator(); 
       restart();
       })

   btnNext.addEventListener("click",function(){
      nextslid(); 
      updateIndicator();
      restart(); 
   })

    function createIndicator(){
        for(let i=0; i< carouselSlide.length; i++){
        	const div=document.createElement("div");
        	      div.innerHTML=i+1;
                div.setAttribute("onclick","indicateSlides(this)")
                div.id=i;
                if(i==0){
                	div.className="active";
                }
               carouselIndicator.appendChild(div);
        }
    }
    createIndicator();

    function indicateSlides(element){
         slideIndex=element.id;
         changeSlides();
         updateIndicator();
         restart();
    }
     
    function updateIndicator(){
    	for(let i=0; i<carouselIndicator.children.length; i++){
    		carouselIndicator.children[i].classList.remove("active");
    	}
    	carouselIndicator.children[slideIndex].classList.add("active");
    }

   function prevslid(){
   	 if(slideIndex==0){
   	 	slideIndex=carouselSlide.length-1;
   	 }
   	 else{
   	 	slideIndex--;
   	 }
   	 changeSlides();
   }

   function nextslid(){
      if(slideIndex==carouselSlide.length-1){
      	slideIndex=0;
      }
      else{
      	slideIndex++;
      }
      changeSlides();
   }

   function changeSlides(){
   	       for(let i=0; i<carouselSlide.length; i++){
   	       	 carouselSlide[i].classList.remove("active");
             carouselSlide[i].style.zIndex="";
       
               
   	       }
       
if(slideIndex>0){
           
carouselSlide[slideIndex-1].style.zIndex="2";
           
}       

       carouselSlide[slideIndex].classList.add("active");
   }

   function restart(){
   	  clearInterval(restTimer);
   	  restTimer=setInterval(carouselUpdate,7500);
   }
 
  
  function carouselUpdate(){
    nextslid();
      updateIndicator();
  }

  let restTimer=setInterval(carouselUpdate,7500);


 
/*-------------------------------------------- end prodcts-carousel-2 -----------------------------------------*/
var 
    model = document.querySelector('.addto-card'),
    imgModel = document.querySelector('.img-model'),
    captionModel = document.getElementById('addto-text'), 
    add_item = document.querySelectorAll('.add');

    console.log(add_item);


for (adds of add_item){
    
    adds.addEventListener("click", function(){
        modelShow();
  this.firstElementChild.innerHTML = "ADD TO CARD " + " <li class='fa'>&#xf00c</li>";

    
imgModel.src = this.parentElement.parentElement.parentElement.firstElementChild.getAttribute("src");
captionModel.innerHTML = this.parentElement.parentElement.previousElementSibling.getAttribute("alt") +
    " has been added to your cart. " ; 
        
            removeModel();
clearTimeout(removeModel);
        
    })
};

function modelShow(){

model.classList.add('active');
}

function removeModel(){
    
  setTimeout(function(){
    
    model.classList.remove('active');
  },3000);  
}



/************************************************************************************/




var noti = document.querySelector('.shopping-cart-cont'),
    select = document.querySelector('.select'),
    button = document.getElementsByClassName('add'),
    select_close = document.querySelector('.select-close');




select_close.addEventListener("click", function(){
    
  select.classList.remove("display")  
})

for(but of button){
    
but.addEventListener("click", (e)=> {
                     
var addtion = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', addtion + 1);
    noti.classList.add('zero');
    
    
    var parent = e.target.parentNode.parentNode.parentNode;
    console.log(parent);
    var  clone = parent.cloneNode(true);
select.appendChild(clone);
    
clone.lastElementChild.innerHTML = " SHOES CODE (233) - 190 EGP <br>  BUY-NOW  ";


if (clone) {
    noti.onclick = ()=>{
    select.classList.toggle('display');
    }
}


                     })  
    
}
var noti_2 = document.querySelector('.heart-cont'),

 add_Love = document.getElementsByClassName('heart-icon');

for(like of add_Love){
    
like.addEventListener("click", (e)=> {
                     
let addtion = Number(noti_2.getAttribute('data-counter') || 0);
    noti_2.setAttribute('data-counter', addtion + 1);
    noti_2.classList.add('zero');

    
       })  
    
}




	function makeTimer() {

		var endTime = new Date(" sep 7 2020 22:37:43 GMT+0200");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);






var testimonalsSlider = document.querySelector('.testimonals-slider'),
    testimonalsSlides = testimonalsSlider.children,
    testimonalsWidth = testimonalsSlider.offsetWidth;

console.log(testimonalsSlides);


/*
function load(){
    
    for(let i=0;i<responsive.length;i++){
        
        if(window.innerWidth > responsive[i].breakPoint.width){
        itemPerslide =responsive[i].breakPoint.item;    
            
            
        }
    }
    console.log(itemPerslide);
    
    start();
    
}*/

start();
function start(){
    var totalWidth=0;
    
    for(let i = 0 ; i<testimonalsSlides.length ;i++){
        
        testimonalsSlides[i].style.width = testimonalsWidth;
        totalWidth+=testimonalsWidth;
    }
    
   testimonalsSlider.style.width = totalWidth + "px";
    
const testimonalDots = Math.ceil(testimonalsSlides.length) ;
    
    
    for(let i =0;i<testimonalDots ;i++){
        
        const dotsDiv = document.createElement("div");
        dotsDiv.id=i;
        dotsDiv.setAttribute("onclick","controlSlides(this)")
        if(i==0){
            
          dotsDiv.classList.add("active");  
        }
        document.querySelector('.testimonal-dots').appendChild(dotsDiv);
    }

}
let currentIndex =0, 
    autoSlide =0;

 function controlSlides(el){
    currentIndex= el.id; 
  changeTestimonal();   
 }


var controldots = document.querySelector(".testimonal-dots").children;

function changeTestimonal(){
    
 for(let i =0 ;i<controldots.length;i++){
     
   controldots[i].classList.remove("active");  
 }   
      controldots[currentIndex].classList.add("active");
    testimonalsSlider.style.marginLeft = -(testimonalsWidth * currentIndex) + "px";
        clearTime(); 

}

 function clearTime(){
   	  clearInterval(testimonals_timer);
   	  testimonals_timer=setInterval(play_auto,4000);
   }
 

function play_auto(){
    
   if(currentIndex==testimonalsSlides.length-1){
       
    currentIndex=0;   
   }else{
       
       currentIndex++;
   }
   changeTestimonal();
  
}

let testimonals_timer = setInterval(play_auto,4000);

    
    
var thumbnail_Slider = document.querySelector('.thum-container'),
    thumbnailSlides = thumbnail_Slider.children,
    thumbnailWidth = thumbnail_Slider.offsetWidth,
    thumbnailSlidesWdith= document.querySelector(".thum-item").offsetWidth;
let  itemPerslide = 0;


console.log(thumbnailSlidesWdith);

    
    const responsive =[
    
    {breakPoint:{width:0 , item:3}},
    {breakPoint:{width:768 , item:4}},
    {breakPoint:{width:991 , item:5}},
    {breakPoint:{width:1280 , item:8}}

     
]
    
function load(){
    
    for(let i=0;i<responsive.length;i++){
        
        if(window.innerWidth > responsive[i].breakPoint.width){
        itemPerslide =responsive[i].breakPoint.item;    
            
            
        }

    }
    
    console.log(itemPerslide);
    start_2();
}
let current_slide =0;
function start_2(){
var totWidth=0;

    for(let i=0 ; i<thumbnailSlides.length;i++){
        
thumbnailSlides[i].style.width = (thumbnailWidth/itemPerslide) + "px";
    totWidth+=thumbnailWidth/itemPerslide;   
        
        
    }
    thumbnail_Slider.style.width = totWidth + "px";

    
} 
/*
function changeThumbnail(){
    
thumbnail_Slider.style.marginLeft = -(thumbnailSlidesWdith*current_slide) + "px";
  
}

function auto_move(){
    
   if(current_slide  == thumbnailSlides.length-1){

     current_slide=0;  
   }else{
       
       current_slide++;
   }
   changeThumbnail();
  
}
let thumbnail_timer = setInterval(auto_move,3000);*/


    window.onload =load();



var scrollTop = document.querySelector('.scroll-to-top');


scrollTop.addEventListener("click" , () =>{
  
  window.scrollTo({
      
      top:0,
      behavior:"smooth"
  }) ; 

    
    
})   /*

$('.scroll-to-top').click(function(e){

e.preventDefault(); 

$('html,body').animate({

    scrollTop:0},1200);
});*/






 var heartIcon = document.querySelectorAll('.heart-icon'),
     like_model = document.querySelector('.like-model'),
     iconLike = document.querySelector('.icon-like'),
     likeName = document.querySelector('.like-name'),
     likeName_p = document.querySelector('.likeName p');

function add_like(){
   like_model.classList.add('active');
    likeName.classList.add('open');
    remove_Model_1();
    remove_Model_2();

}

function remove_Model_1(){
    
  setTimeout(function(){
          likeName.classList.remove('open');


  },4300);  
}

function remove_Model_2(){
    
  setTimeout(function(){
  like_model.classList.remove('active');


  },5000);  
}

heartIcon.forEach(heart => heart.addEventListener('click', add_like));

heartIcon.forEach(heart => heart.addEventListener('click', function(){
    
this.classList.add("active");  
    
if(this.classList.contains("active")){
    this.removeEventListener("click",  add_like)
   }    
    
}));



/*
 var search_model = document.querySelector('.search-model'),
     search_btn = document.getElementById('search-model'),
     input_search = document.querySelector('.input-search'),
     the_input = document.getElementById("search-input");

function searchModel(){
   search_model.classList.add('active');
    input_search.classList.add('active');
    the_input.classList.add('active');

}

search_btn.addEventListener("click",searchModel);*/

var search_btn = document.getElementById('search-model'),
    search_model = document.querySelector('.search-model'),
    input_search = document.querySelector('.input-search'),
    close_search = document.querySelector('.close-search');




function searchModel(){
   search_model.classList.add('active');
    input_search.classList.add("active");
}
search_btn.addEventListener("click",searchModel);
close_search.addEventListener("click" ,function(){
    
   search_model.classList.remove('active');
    input_search.classList.remove("active"); 
})




var lightboxContainer = document.querySelector('.thum-container').children,
    lightbox = document.querySelector('.lightbox'),
    lightboxImg = document.querySelector('.lightbox-img'),
    fa = document.querySelectorAll('.thum-overlay span'),
    prevLightboxImg = document.querySelector('.lightbox-prev'),
    nextLightboxImg = document.querySelector('.lightbox-next'),
    close_lightbox = document.querySelector(".close-lightbox"),
    imgSrc,
    img_index;

console.log(prevLightboxImg);
console.log(nextLightboxImg);


for(let i=0;i<lightboxContainer.length ;i++){
    
lightboxContainer[i].querySelector('.thum-overlay').addEventListener("click" , function() {
        
        
        img_index=i;
        change_lightbox();
        lightbox.classList.toggle("active");
        
        
    })
}




 function change_lightbox(){
     
     imgSrc = lightboxContainer[img_index].querySelector("img").getAttribute("src");
     lightboxImg.src = imgSrc;
 }

function next_lightboxImg(){
    if(img_index==lightboxContainer.length-1){
        
        img_index=0
    }else{
        img_index++;
    }
   change_lightbox(); 
}

function prev_lightboxImg(){
    if(img_index==0){
        
        img_index=lightboxContainer.length-1
    }else{
        img_index--;
    }
   change_lightbox(); 
}

prevLightboxImg.addEventListener("click", prev_lightboxImg);
nextLightboxImg.addEventListener("click", next_lightboxImg);

close_lightbox.addEventListener("click",function(){   lightbox.classList.remove("active")  });


lightbox.addEventListener("click" , function(event){
    
  if(event.target!==lightboxImg && event.target!==prevLightboxImg && event.target!==nextLightboxImg  ) {
      
   lightbox.classList.remove("active")  ;
      
  }
    
})









