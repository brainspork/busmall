'use strict';

function Product(name, path){
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  this.flag = false;
  this.flagCounter = 0;
}

var bag = new Product('R-2 Bag', 'bag.jpg');
var banana = new Product('Banana Slicer', 'banana.jpg');
var bathroom = new Product('Ipad T-P Roller', 'bathroom.jpg');
var boots = new Product('Breathable Rain Boots', 'boots.jpg');
var breakfast = new Product('All-in-One Breakfast', 'breakfast.jpg');
var bubblegum = new Product('Meatball Bubblegum', 'bubblegum.jpg');
var chair = new Product('Comfortable Chair', 'chair.jpg');
var cthulhu = new Product('Tickle-Me Cthulhu', 'cthulhu.jpg');
var dogDuck = new Product('Bark to Quack Converter', 'dog-duck.jpg');
var dragon = new Product('Misty Mountain Oysters', 'dragon.jpg');
var pen = new Product('Bachelor Pen Caps', 'pen.jpg');
var petSweep = new Product('Janatorial Pet Wear', 'pet-sweep.jpg');
var scissors = new Product('Standardless Pizza Scissors', 'scissors.jpg');
var shark = new Product('Eat Me Asleep Sleeping Bag', 'shark.jpg');
var sweep = new Product('Pull-Your-Weight Onesie', 'sweep.png');
var tauntaun = new Product('Smells Bad on the Inside', 'tauntaun.jpg');
var unicorn = new Product('Canned Child Dreams', 'unicorn.jpg');
var usb = new Product('Solution to Censorship', 'usb.gif');
var waterCan = new Product('The Human Condition Watering Can', 'water-can.jpg');
var wineGlass = new Product('Hollower-Than-Me Wine Glass', 'wine-glass.jpg');

var proArr = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function flagReset(){
  for(var k = 0; k < proArr.length; k++){
    if(proArr[k].flag === true && proArr[k].flagCounter === 3){
      proArr[k].flag = false;
      proArr[k].flagCounter = 0;
    }else if(proArr[k].flag === true && proArr[k].flagCounter < 3){
      proArr[k].flagCounter++;
    }
  }
}

function displayChoice(){
  console.log('counter', bag.flagCounter);
  console.log('boolean', bag.flag);
  flagReset();
  var displayArr = [];
  console.log(displayArr);
  for(var i = 0; i < 3; i++){
    console.log('i',i);
    var choice = Math.floor(Math.random()*proArr.length);
    console.log('choice', choice);
    if(proArr[choice].flag === false){
      displayArr.push(proArr[choice]);
      proArr[choice].shown++;
      proArr[choice].flag = true;
    }else{
      i--;
    }
  }

  for(var j = 0; j < displayArr.length; j++){
    var el = document.getElementById('product-' + [j]);
    console.log('product-' + [j]);
    var image = document.createElement('img');
    var displayName = document.createElement('h2');
    image.src = './img/' + displayArr[j].path;
    displayName.innerHTML = displayArr[j].name;
    el.appendChild(image);
    el.appendChild(displayName);
  }
  makeChoice();
}

function makeChoice(){
  var itemOne = document.getElementById('product-0');
  var itemTwo = document.getElementById('product-1');
  var itemThree = document.getElementById('product-2');
  console.log(itemOne);
  console.log(itemThree);

  function clear(){
    itemOne.innerHTML = '';
    itemTwo.innerHTML = '';
    itemThree.innerHTML = '';
  }

  itemOne.addEventListener('click', function(){
    clear();
    displayChoice();
  });

  itemTwo.addEventListener('click', function(){
    clear();
    displayChoice();
  });

  itemThree.addEventListener('click', function(){
    clear();
    displayChoice();

  });
}

displayChoice();
