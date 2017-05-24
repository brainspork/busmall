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
var usb = new Product('Solution to Censorship USB', 'usb.gif');
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

var displayArr = [];
var totalClicked = 0;

function displayChoice(){
  console.log('counter', bag.flagCounter);
  console.log('boolean', bag.flag);
  console.log(totalClicked);
  flagReset();
  displayArr = [];
  for(var i = 0; i < 3; i++){
    var choice = Math.floor(Math.random()*proArr.length);
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
    var image = document.createElement('img');
    var displayName = document.createElement('h2');
    image.src = './img/' + displayArr[j].path;
    displayName.innerHTML = displayArr[j].name;
    el.appendChild(image);
    el.appendChild(displayName);
  }
}

var itemOne = document.getElementById('product-0');
var itemTwo = document.getElementById('product-1');
var itemThree = document.getElementById('product-2');

function clear(){
  itemOne.innerHTML = '';
  itemTwo.innerHTML = '';
  itemThree.innerHTML = '';
}

itemOne.addEventListener('click', function (){
  displayArr[0].clicked++;
  totalClicked++;
  clear();
  clickCheck();
});

itemTwo.addEventListener('click', function (){
  displayArr[1].clicked++;
  totalClicked++;
  clear();
  clickCheck();
});

itemThree.addEventListener('click', function (){
  displayArr[2].clicked++;
  totalClicked++;
  clear();
  clickCheck();
});

function clickCheck(){
  if(totalClicked >= 25){
    classChange();
    createList();
  }else{
    return displayChoice();
  }
}

function classChange(){

}

function createList(){
  var list = document.getElementById('totals-list');
  var listArr = [];
  console.log(listArr);
  for(var i = 0; i < proArr.length; i++){
    var ratio = (proArr[i].clicked / proArr[i].shown)* 100;
    listArr.push('<li>' + proArr[i].name + '- Shown: '+ proArr[i].shown +'   Clicked: '+ proArr[i].clicked + '  Ratio: ' + ratio + '%</li>');
  }

  list.innerHTML = listArr.join('');
  console.log(listArr.join(''));
  createChart();
}

function createChart(){
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var tableName = [];
  var tableData = [];
  for(var i = 0; i < proArr.length; i++){
    tableData.push(proArr[i].clicked);
    tableName.push(proArr[i].name);
  }

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: tableName,
      datasets: [{
        label: 'Votes for Products',
        data: tableData
      }]
    },
    options: {}
  });
}

displayChoice();
