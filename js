/*
 * Create a list that holds all of your cards
 */
const cards = document.querySelectorAll(".card");
//console.log(cards);
let openedcard = [];// that will use to arrange opened card bcos we want 2 to compare them 
let cardlist = []; //to use shuffle array put the elements in array
//hide the cards 
let matchedcardcounter=[];//hold matched pic until they become 16
//let moves counter=0; //caculate the numbers of moves
//const Elementmoves =document.querySelector(".moves");
//Elementmoves = "1; "
let timerhandler;
let second =0;//for caculate the time 
let minute=0; //for calculate the time





cards.forEach(card =>{
	//used these instruction to hide all cards
	card.classList.remove("open");
	card.classList.remove("show");
    card.classList.remove("match");
	let child = card.children[0];
   // console.log(child.className);
   cardlist.push(child.className); //store class name inside the array
  //card.className="card  open show "; //className is not function for shuflling cards
	//cardlist.push(child,ClassName);
	
//add event listener for all cards
    card.addEventListener('click',cardclicked);

	});
	


//need to call to shuffle cards
function shufflingcards(){
	
     cardlist=shuffle(cardlist);
      //console.log(cardlist);
      let i=0;
      cards.forEach(card =>{
	
	   let child = card.children[0];
	   child.className= cardlist[i];
	   i++;
	
}); };

//add event listener
const Elementmoves =document.querySelector(".moves");
let movescounter = 0;
const star = document.querySelector('.stars');
let starsCounter = 3; 


function cardclicked(){	
	if(openedcard.length<2){
		this.classList.toggle("open"); //flip card using calss open and show 
		this.classList.toggle("show");
		openedcard.push(this);//add opened card to the list 
	
		if(openedcard.length==2){
			movescounter+=1; 
			// call function to change the move 
				
				if (movescounter < 13){
					changeStars(3)
					Elementmoves.innerText = movescounter;
				} else if (movescounter < 22){
					changeStars(2)
					Elementmoves.innerText = movescounter;
				} else{
					changeStars(1)
					Elementmoves.innerText = movescounter;
				}
			
			//compare between cards when they are 2  
			setTimeout(function(){
				matchcards(); 
			}, 2000);
		
		}
	}

	//console.log(this);//show the html elemnt of the card  
}

function changeStars(starsCounter){
	star.innerHTML =''; 
	for(let i =0 ; i<starsCounter; i++){
		let myStar ="<li> <i class='fa fa-star'></i> </li>";
		star.innerHTML += myStar; 
	}
}

function startTime(){

	timerhandler = setInterval(function(){
		second +=1;
		if(second>59){
			second=0;
			minute+=1;
		}
		document.getElementById("timer").innerText=`${minute}:${second}`; 
		 //var getTime =alert(minute+second) 
		
} ,1000); 
}
window.onload = startTime() ;
	


function stoptime(){
	clearInterval(timerhandler);
	
};





 function matchcards(){
	 
	 let Fcard = openedcard[0];
	 let Scard = openedcard[1];
	 
	 
		 
	 if(openedcard.length==2){
		 
	
	     
	let Fchildclass=Fcard.children[0].className;	 
    let Schildclass=Scard.children[0].className;
	
	if(Fchildclass==Schildclass){
		
		Fcard.classList.add("match");
		Scard.classList.add("match");
		matchedcardcounter.push(Fcard,Scard);
		if(matchedcardcounter.length==16){
		windoalog();
		stoptime();} 
		
		openedcard = []; //clear array 
	}else{ 
	Fcard.className="card";
	Scard.className="card";
	openedcard= [];} 
	//numberofmoves+=1;

	 }	// create this to see the number of moves on the board of game 
	//flip them back if they didnot match 
	//Fcard.classList.remove("open");
	//Scard.classList.remove("open");
	//Fcard.classList.remove("show");
	//Scard.classList.remove("show");
	
	
	
	  // Fcard.className = "card" ;
	  // Scard.className = "card" ;
     
	   // openedcard = []; //clear array
	
	 // 
	 
	//console.log(Fchildclass,"=====",Schildclass); make sure this function doing well
 };
 


function windoalog(){
	 
	alert("congrations you win and the number of your moves is "+movescounter+"  and time "+`${minute}:${second}`);
	
};




document.querySelector('.restart').addEventListener('click',restartgame);
function restartgame(){
	cards.forEach(card =>{	
	card.classList.remove("open");
	card.classList.remove("show");
	card.classList.remove("match"); });

	const Elementmoves2 =document.querySelector(".moves");
	Elementmoves2.innerText = " ";
	 second = 0 ;
	 minute = 0 ; 
     movescounter = 0;
	 shufflingcards();
}



	  //document.getElementByClassName("card").click();

//add event listener **/



















// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

 
 
 
 
 
 
 
 
 
