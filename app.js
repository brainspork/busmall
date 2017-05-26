'use strict';

var itemOne = document.getElementById('product-0');
var itemTwo = document.getElementById('product-1');
var itemThree = document.getElementById('product-2');

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

if(localStorage.currentClick){
  displayArr = JSON.parse(localStorage.currentArr);

  proArr = JSON.parse(localStorage.currentProducts);
  console.log(proArr);
  totalClicked = localStorage.currentClick;
  if(totalClicked >= 24){
    classChange();
    createList();
  }
  render();
}else{
  var proArr = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
  var displayArr = [];
  var totalClicked = 0;
  displayChoice();
}

function flagReset(){
  for(var k = 0; k < proArr.length; k++){
    if(proArr[k].flag === true && proArr[k].flagCounter === 2){
      proArr[k].flag = false;
      proArr[k].flagCounter = 0;
    }else if(proArr[k].flag === true && proArr[k].flagCounter < 2){
      proArr[k].flagCounter++;
    }
  }
}

function displayChoice(){
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
  localStorage.currentArr = JSON.stringify(displayArr);
  render();
}

function render(){
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

function clear(){
  itemOne.innerHTML = '';
  itemTwo.innerHTML = '';
  itemThree.innerHTML = '';
}

itemOne.addEventListener('click', function (){
  displayArr[0].clicked++;
  localStorage.currentClick = totalClicked;
  clear();
  clickCheck();
});

itemTwo.addEventListener('click', function (){
  displayArr[1].clicked++;
  localStorage.currentClick = totalClicked;
  clear();
  clickCheck();
});

itemThree.addEventListener('click', function (){
  displayArr[2].clicked++;
  localStorage.currentClick = totalClicked;
  clear();
  clickCheck();
});

function clickCheck(){
  if(totalClicked >= 24){
    classChange();
    createList();
  }else{
    totalClicked++;
    localStorage.currentProducts = JSON.stringify(proArr);
    return displayChoice();
  }
}

function classChange(){
  itemOne.className = 'end';
  itemTwo.className = 'end';
  itemThree.className = 'end';
}

function createList(){
  var list = document.getElementById('totals-list');
  var listArr = [];
  for(var i = 0; i < proArr.length; i++){
    var ratio = (proArr[i].clicked / proArr[i].shown)* 100;
    listArr.push('<li>' + proArr[i].name + '- Shown: '+ proArr[i].shown +'   Clicked: '+ proArr[i].clicked + '  Ratio: ' + parseFloat(ratio).toFixed(2) + '%</li>');
  }

  list.innerHTML = listArr.join('');
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

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableName,
      datasets: [{
        label: 'Votes for Products',
        data: tableData,
        backgroundColor: ['#e5b8d9', '#3b2be1', '#f05671', '#15d4e4', '#e6c2a2', '#ca542b', '#b9146f', '#9b4449', '#af2ce2', '#0d97c8', '#2cc10f', '#98384d', '#f265e1', '#1325e7', '#dc30fc', '#9a32cb', '#f3266f', '#b56a89', '#68b662', '#670f5d']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            max:10,
          }
        }]
      }
    }
  });
}
