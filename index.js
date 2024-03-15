//getElementById method 
function elementById(){
const heading = document.getElementById('main-heading');
heading.textContent = 'Fruit World';
heading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange';

const h2 = document.getElementById('basket-heading');
h2.style.color = 'green';

var thanksElement = document.getElementById('thanks');
thanksElement.innerHTML = '<p>Please visit us again</p>';
}

//getElementsByClassName method
function elementsByClassName(){
const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow'
for(let i = 0;i<fruit.length;i++){
  fruit[i].style.fontWeight = 'bold'
 }
}

// getElementsByTagName method
function ElementsByTagName(){
  const items = document.getElementsByTagName('li');
  items[3].style.color = 'blue';
  for(let i = 0; i < items.length; i++){
    items[i].style.fontStyle = 'italic';
  }
}

// Using querySelector with 'id' 'class' attribute
function querySelect(){
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const Heading = document.querySelector('#basket-heading');
Heading.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyle = 'none';

// Using querySelectorAll
const fruitItem = document.querySelectorAll('.fruit');
for(let i = 0;i<fruitItem.length;i++){
  fruitItem[i].style.backgroundColor = 'white';
fruitItem[i].style.padding = '10px';
fruitItem[i].style.margin = '10px';
fruitItem[i].style.borderRadius = '5px';  
}
const evenfruitItem = document.querySelectorAll('.fruit:nth-child(even)');
for(let i = 0;i<evenfruitItem.length;i++){
evenfruitItem[i].style.backgroundColor = 'brown';
evenfruitItem[i].style.color = 'white';
 }
}

//Creating Elements & DOM Relations
function insertElements(){
  // Create element, ex : h3
  const sub = document.createElement('h3');
  // Create textNode
  const h3Text = document.createTextNode('Buy high quality organic fruits online');
  // Append the textNode into <h3> element
  sub.appendChild(h3Text);
  sub.style.fontStyle = 'italic'; 
  const divs = document.getElementsByTagName('div');
  const firstDiv = divs[0]; 
  const mainHeading = firstDiv.querySelector('h1'); 
  firstDiv.insertBefore(sub, mainHeading.nextSibling); 

  // Create element, ex : p
  const sub2 = document.createElement('p');
  sub2.id = 'fruits-total';
  const paraText = document.createTextNode('Total fruits: 4');
  sub2.appendChild(paraText);
  // Select the element where want to insert
  const secondDiv = divs[1]; 
  const unorderedList = secondDiv.querySelector('ul'); 
  //insertBefore() method inserts the element at specified space
  secondDiv.insertBefore(sub2, unorderedList);
}