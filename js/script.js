

var navBar = document.querySelector('.nav-bar'),
    massengerChat = document.querySelector('.massenger-chat-icon');



window.addEventListener("scroll" , () =>{
    
    
  if(window.pageYOffset > 1000){
    
 massengerChat.classList.add("active");   
}else{
    
   massengerChat.classList.remove("active");   
  
} 
    
    
 navBar.classList.toggle("sticky" , window.scrollY > 550 );
    

});


 document.querySelector('.toggle-menu').addEventListener("click",function(){
     
  document.querySelector('.nav-bar-mobile').style.right = "0px";   
     
     
 })



 document.querySelector('.close-nav').addEventListener("click",function(){
     
  document.querySelector('.nav-bar-mobile').style.right = -(this.offsetWidth) + "px" ;   
     
     
 })




var scrollTop = document.querySelector('.scroll-to-top');


scrollTop.addEventListener("click" , () =>{
  
  window.scrollTo({
      
      top:0,
      behavior:"smooth"
  }) ; 

    
    
})



/*

var search_model = document.querySelector('.search-model'),
     search_btn = document.getElementById('search-model'),
     input_search = document.querySelector('.input-search'),
     the_input = document.getElementById("search-input"),
     close_search = document.querySelector('.close-search');

function searchModel(){
   search_model.classList.add('active');
    input_search.classList.add('active');
    the_input.classList.add('active');
    close_search.classList.add("active");

}

search_btn.addEventListener("click",searchModel);
close_search.addEventListener("click",function(){
    
    search_model.classList.remove("active");
})*/


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






var thumbnail_Slider = document.querySelector('.thum-container'),
    thumbnailSlides = thumbnail_Slider.children,
    thumbnailWidth = thumbnail_Slider.offsetWidth,
    thumbnailSlidesWdith= document.querySelector(".thum-item").offsetWidth;
let  itemPerslide = 0;

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




    window.onload =load();




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
    
});
















var fliters = Array.from(document.querySelectorAll(".products-bar-item li a"));



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

		})





var heart_icon = document.querySelectorAll('.heart-icon');


heart_icon.forEach(h => h.addEventListener('click', function(){
    
        this.classList.toggle('active'); 
    
} ));





    var sliderbar = document.querySelector('.fixed-slidebar'),
        sliderbar_btn = document.querySelector('.slidebar-fliter'),
        close_slidebar = document.querySelector('.close-slidebar');
    
    
    sliderbar_btn.addEventListener("click", () =>{
        
     sliderbar.style.left ="0";
          
    })
    
    close_slidebar.addEventListener("click", () =>{
        
     sliderbar.style.left = -(sliderbar.offsetWidth) + "px" ;
          
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


view();
function view(){
      
 if(window.innerWidth >=992){
     
document.querySelector('.view-item-lg').style.opacity="1";
     
 }  
else if(window.innerWidth >=768){
     
document.querySelector('.view-item-md').style.opacity="1";
     
 } 
 else if(window.innerWidth >=250){
     
document.querySelector('.view-item-sm').style.opacity="1";
     
 }
    
var view_icons = document.querySelectorAll('.view-icon div');
    
    
  
view_icons.forEach(v => v.addEventListener('click', function(){
 
 alert('The dimensions of your phone are '+window.innerWidth+' x '+window.innerHeight+' Therefore, this format cannot be applied as the site automatically determines the format compatible with each device. Thank you for visiting our website and I hope you like it. ') ;  

} ));
  
    
}




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
    
clone.lastElementChild.innerHTML = "SHOES CODE (233) - 190 EGP<br>  BUY-NOW  ";


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





