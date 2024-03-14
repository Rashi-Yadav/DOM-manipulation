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