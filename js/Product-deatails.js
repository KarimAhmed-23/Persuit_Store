

var navBar = document.querySelector('.nav-bar'),
    massengerChat = document.querySelector('.massenger-chat-icon');



window.addEventListener("scroll" , () =>{
    
    
  if(window.pageYOffset > 600){
    
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





 var addCartBtn = document.querySelector('.add-cartbtn'),
     like_model = document.querySelector('.like-model'),
     iconLike = document.querySelector('.icon-like'),
     likeName = document.querySelector('.like-name');
/*
addCartBtn.addEventListener("click" ,function(){
    
  like_model.classList.add('active');
    likeName.classList.add('active')
    remove_Model();

    
})*/

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

addCartBtn.addEventListener("click",add_like);
document.querySelector('.Wishlist').addEventListener("click",add_like)



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





var prodImages = document.querySelector('.prod-images'),
    backgrounds = document.querySelectorAll('.background'),
    shoes = document.querySelectorAll('.shoe-image'),
    size = document.querySelectorAll('.size-num span'),
    colors = document.querySelectorAll('.color');



function cahngeSize(){
    size.forEach(sizes => sizes.classList.remove("active"));
    this.classList.add("active")
}

size.forEach(sizes => sizes.addEventListener('click', cahngeSize));


let prevColor = "blue";
let animationEnd = true;

function changeColor(){
    if(!animationEnd) return;
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe-image[color="${color}"]`);
    let background = document.querySelector(`.background[color="${color}"]`);
    let prevBackground = document.querySelector(`.background[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    
    shoes.forEach(s => s.classList.remove('active'));
    shoe.classList.add('active');

    backgrounds.forEach(g => g.classList.remove('first', 'second'));
    background.classList.add('first');
    prevBackground.classList.add('second');

    prevColor = color;
    animationEnd = false;

    background.addEventListener('animationend', () => {
        animationEnd = true;
    })
}
colors.forEach(c => c.addEventListener('click', changeColor));


var slides= Array.from (document.querySelectorAll('.shoe-image'));
   var index=0,
    indicators =  Array.from(document.querySelectorAll('.ul-dots li'));



function change(){
    
removeActivebullet();
slides[index].classList.add('active');
indicators[index].classList.add('active');

if(index<slides.length-1){
    index++
}else
    {index=0;}
    

}




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

    }
    
}
}
    
moveTheindicator();

change();



/*
 var qtyPlus = document.querySelector('.qty-plus'),
     qtyMius = document.querySelector('.qty-mius'),
     result = document.getElementById('qty').value;
console.log(result);



 qtyPlus.addEventListener("click" , function(){
     
     
     if( !isNaN( result ) && result > 1 ) result.value++;
     return false;  
     
     
 })   

/*
 qtyMius.addEventListener("click" , ()=>{
     
   let effect = document.getElementById('qty'),
       qty = effect.value;
     
     if( !isNaN( qty ) && qty > 1 ) effect.value--;
     return false;  
     
     
 })*/





var tab_btn = document.querySelectorAll(".nav-tab li a");

var tabs = document.querySelectorAll(".tap-pane");

console.log(tabs);
console.log(tab_btn);


tab_btn.forEach(function(tab , tab_index){
    
  tab.addEventListener("click" , function(){
      
    tab_btn.forEach(function(tab){
        
        tab.classList.remove('active');
    }) 
              tab.classList.add('active');

      
      tabs.forEach(function(content,content_index){
    
    if(content_index == tab_index){
        content.classList.add("active");
    }
          else{
              
            content.classList.remove("active");
   
          }
    
    
})
  }) 
    
    
})




var rel_prod_slider = document.querySelector('.rel-prod-slider'),
    rel_prod_slide = rel_prod_slider.children,
    relProd_slider_width = rel_prod_slider.offsetWidth,
    controlDots = document.querySelector(".rel-prod-dots").children,
    margin = 30;

let itemForSlide = 0,
    relProd_dots,
    currentSlideIndex =0,
    autoSlide =0;

    
    const responsive_2 =[
    
    {breakPoint:{width:0 , item:1}},
    {breakPoint:{width:380 , item:2}},
    {breakPoint:{width:991 , item:3}},
    {breakPoint:{width:1200 , item:4}}


     
]
    
  function arrange(){
    
    for(let i=0;i<responsive_2.length;i++){
        
        if(window.innerWidth > responsive_2[i].breakPoint.width){
        itemForSlide =responsive_2[i].breakPoint.item;    
            
            
        }

    }
    
    start_3();
}

function start_3(){
    
    var totalWidth =0;
    for(let i=0;i<rel_prod_slide.length;i++){
        
     rel_prod_slide[i].style.width = (relProd_slider_width / itemForSlide ) -margin + "px";
      rel_prod_slide[i].style.margin = (margin/2)+ "px";

        totalWidth+= (relProd_slider_width / itemForSlide );
        
        
    }
    rel_prod_slider.style.width = totalWidth +"px";
    
 relProd_dots = Math.ceil(rel_prod_slide.length/itemForSlide);
    
    for(let i =0 ; i<relProd_dots;i++){
      const dotsDiv = document.createElement('div');
      dotsDiv.id = i;
        dotsDiv.setAttribute("onclick","moveTO(this)");
        if(i==0){
            
            dotsDiv.classList.add("active")
        }
        
        document.querySelector('.rel-prod-dots').appendChild(dotsDiv);
        
        
    }
    
    
}
 


function moveTO(el){
        clearMove();

   autoSlide=el.id; 
currentSlideIndex= el.id;
    
changeProd(currentSlideIndex);
    
    
} 


function changeProd(currentSlideIndex){
for(let i = 0; i < controlDots.length ;i++){
    
controlDots[i].classList.remove('active')    
    
}
    
    controlDots[currentSlideIndex].classList.add('active');
    
    
    rel_prod_slider.style.marginLeft = -(relProd_slider_width * currentSlideIndex) + "px";
    
    
    clearMove();
}



 function clearMove(){
   	  clearInterval(timer_move);
   	  timer_move=setInterval(autoMove,4000);
   }
 

function autoMove(){
 if(autoSlide == relProd_dots-1){
       
    autoSlide=0;   
   }else{
       
       autoSlide++;
   }
   changeProd(autoSlide);
     
    
}

let timer_move = setInterval(autoMove,4000)


window.onload = arrange();





var scrollTop = document.querySelector('.scroll-to-top');


scrollTop.addEventListener("click" , () =>{
  
  window.scrollTo({
      
      top:0,
      behavior:"smooth"
  }) ; 

    
    
})






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
    
})









    


