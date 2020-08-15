 const output=document.querySelector(".output")
	 const allSentences=document.querySelector(".sentences").children;
	 const banner=document.querySelector(".banner h1")
	  var sentenceIndex=0;
	  var characterIndex=0;
	  var txtArray;

     function start(){
     	const innerText=allSentences[sentenceIndex].innerHTML;
     	 txtArray=innerText.split("");
    
        banner.classList.remove("active")

     	 setTimeout(function(){
     	 typingText();	
     	},1000);
          
     }
     function typingText(){
  banner.classList.add("active")

     	if(characterIndex!=txtArray.length){
     		output.innerHTML+=txtArray[characterIndex];
     		characterIndex++;
     		setTimeout(typingText,200);
     	}
     	else{
     		  if(sentenceIndex==allSentences.length-1){
     		  	sentenceIndex=0
     		  }
     		  else{
     		  	sentenceIndex++;
     		  }
     		setTimeout(function(){
     			characterIndex=0;
     			output.innerHTML="";
     			start();
     		},4000);
     	}
     }

  window.onload=start();



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
    items[y].style.opacity="0.5";
    
    if (target==items[y].getAttribute('data-id')){
        
        items[y].style.opacity= "1";
        
    }
    
    if (target=="all"){
        
        items[y].style.opacity= "1";
    }
}


    })
}

*/




        