
let numSquares = 3;
const mode = 'Easy';
const colors = [];
let winner;

const colorDisplay = document.querySelector('#colorDisplay');
const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
//const h1 = document.getElementsByTagName('h1');
const reset = document.getElementById('reset');
const header = document.querySelector('.header');
const modeBtn = document.querySelectorAll('.mode');


console.log(modeBtn);

document.addEventListener('DOMContentLoaded',init);

document.addEventListener('click',play);

reset.addEventListener('click',init)

document.addEventListener('click',changeMode)



function init(){

	if(header.style.backgroundColor === winner){
		header.style.backgroundColor = 'steelblue';
	}

	showSquares(numSquares,'hidden');
	randColors(numSquares);
	paint();
	winner = winnerColor(numSquares);
	displayRGB(winner);

	message.textContent = '';
	reset.textContent = 'NEW COLORS';
}

function play(event){
	let targetClass = event.target.className;
	let bColor = event.target.style.backgroundColor;
	if (  targetClass === 'square' && bColor !== winner  ){
		message.textContent = 'Try Again..';
		event.target.style.visibility  = 'hidden';
	}else if (targetClass === 'square' && bColor === winner  ){
		message.textContent = 'You Win !!!!';
		header.style.backgroundColor = winner;
		reset.textContent = 'PLAY AGAIN!';

		for(let i = 0 ;i< numSquares ;i++){
			squares[i].style.visibility = 'visible';
			squares[i].style.backgroundColor = winner;
		}

	}
}


function showSquares(numSquares,hidden){
	
	for(let i = 0 ; i < squares.length;i++){
		squares[i].style.visibility = hidden;
	}
	for(let i = 0 ; i < numSquares;i++){
		squares[i].style.visibility = 'visible';
	}

}

function randColors(numSquares){
	for(let i = 0;i < numSquares; i++){
	let red = Math.floor(Math.random() * 256);
	let blue =  Math.floor(Math.random() * 256);
	let green =  Math.floor(Math.random() * 256);

	colors[i] = `rgb(${red}, ${blue}, ${green})`;

	/*
	let color = [red , blue, green];
	colors.push(color);
	*/
	}

}

function paint(){
	for(let i = 0 ; i < 6 ; i++){

		squares[i].style.backgroundColor = colors[i];
		//squares[i].style.backgroundColor = `rgb(${colors[i]})`;
	}
}

function winnerColor(numSquares,winner){
	let randNumber = Math.floor(Math.random() * numSquares)
	winner = colors[randNumber];
	//winner = `rgb(${winner})`;

	
	return winner;
}

function displayRGB(winner){
	colorDisplay.textContent = winner;
}


// AFTER FINISHING THE BASIC LOGIC
	
function changeMode(event){
	let target = event.target;
	if( target.className === 'mode' && target.textContent ==='Hard' && target.className !=='mode selected'){
		target.classList.add('selected');
		modeBtn[0].classList.remove('selected');
		numSquares = 6;
		init();
	}else if ( target.className === 'mode' && target.textContent ==='Easy' && target.className !=='mode selected'){
		target.classList.add('selected');
		modeBtn[1].classList.remove('selected');
		numSquares = 3;
		init();
	}
}




