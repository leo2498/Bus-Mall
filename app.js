'use strict'

BusMall.sectionEl = document.getElementById('BusMall-section');

BusMall.allBusMall = [];
BusMall.displayed = [];

  function BusMall(filepath, altText){
    this.filepath = filepath;
    this.altText = altText;
    this.timesClicked = 0;
    this.timesDisplayed = 0;
    BusMall.allBusMall.push(this);
  }

new BusMall('img/bag.jpg', 'R2D2 bag' );
new BusMall('img/banana.jpg', 'Banana slicer');
new BusMall('img/bathroom.jpg', 'Never bored on the toilet again');
new BusMall('img/boots.jpg', 'Rainboots to keep your feet wet');
new BusMall('img/breakfast.jpg', 'Breakfast ready to go');
new BusMall('img/bubblegum.jpg', 'For Meaty breath');
new BusMall('img/chair.jpg', 'Worlds most comfortable chair');
new BusMall('img/cthulhu.jpg', 'Man in some serious trouble');
new BusMall('img/dog-duck.jpg', 'Woof, I mean quack');
new BusMall('img/dragon.jpg', 'Why dragons are no longer around');
new BusMall('img/pen.jpg', 'For student lunches');
new BusMall('img/pet-sweep.jpg', 'Making pets useful');
new BusMall('img/scissors.jpg', 'Cutting pizza');
new BusMall('img/shark.jpg', 'Man eating shark');
new BusMall('img/sweep.png', 'Baby chores');
new BusMall('img/tauntaun.jpg', 'Cozy sleeping');
new BusMall('img/unicorn.jpg', 'Reason why there\'s no more unicorns');
new BusMall('img/usb.gif', 'Somebody come look at this');
new BusMall('img/water-can.jpg', 'who made this water can?');
new BusMall('img/wine-glass.jpg', 'Mom has had enough wine');

BusMall.random = function(){
  return Math.floor( Math.random() * BusMall.allBusMall.length );
};

BusMall.renderImages = function() {
  var randomIndex = BusMall.random();

  while(BusMall.displayed.length < 19 && !BusMall.displayed.includes(randomIndex)) {
    BusMall.displayed.unshift(randomIndex);
  }

  BusMall.displayed.unshift(randomIndex); 

};

BusMall.sectionEl.addEventListener('click', BusMall.handleClick);
