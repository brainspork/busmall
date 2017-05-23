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

var arrOne = [];

function choices(){
  var displayArr = [];

  for(var i = 0; i < 3; i++){
    var choice = Math.floor(Math.random() * proArr.length);
    displayArr.push(proArr[choice]);
    proArr[choice].shown++;
  }
  displayArr.push(arrOne);
  display();
}

function display(){
  for(var j = 0; j < arrOne.length; j++){
    var el = document.getElementById('product-' + [j]);
    console.log('product-' + [j]);
    var image = document.createElement('img');
    var displayName = document.createElement('h2');
    image.src = './img/' + arrOne[j].path;
    displayName.innerHTML = arrOne[j].name;
    el.appendChild(image);
    el.appendChild(displayName);
  }
}

choices();
