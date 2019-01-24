'use strict';

Product.allProducts = [];
Product.activeSet = [];
Product.lastDisplayed = [];
Product.totalVotes = 25;

var votes = [];
var names = [];

Product.section = document.getElementById('productsSection');
Product.resultsList = document.getElementById('resultsList');

var productOne = document.getElementById('productOne');
var productTwo = document.getElementById('productTwo');
var productThree = document.getElementById('productThree');

function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.votes = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

new Product('Luggage', 'img/bag.jpg','Bag');
new Product('Banana Slicer', 'img/banana.jpg','Banana Slicer');
new Product('Bathroom Buddy', 'img/bathroom.jpg','Bathroom');
new Product('Fashion Wellies', 'img/boots.jpg','Boots');
new Product('Breakfast Machine', 'img/breakfast.jpg','Breakfast');
new Product('Meatball Bubblegum', 'img/bubblegum.jpg', 'Bubblegum');
new Product('Chair', 'img/chair.jpg', 'Chair');
new Product('Cthulhu', 'img/cthulhu.jpg', 'Cthulhu');
new Product('Duck Muzzle', 'img/dog-duck.jpg', 'Dog Duck');
new Product('Dragon Meat', 'img/dragon.jpg', 'Dragon Meat');
new Product('Practical Cutlery', 'img/pen.jpg', 'Pen');
new Product('Pet Broom', 'img/pet-sweep.jpg', 'Pet Broom');
new Product('Pizza Scissors', 'img/scissors.jpg', 'Scissors');
new Product('Shark Attack', 'img/shark.jpg', 'Shark');
new Product('Baby Broom', 'img/sweep.png', 'Sweep');
new Product('Tauntaun', 'img/tauntaun.jpg', 'Tauntaun');
new Product('Unicorn Meat', 'img/unicorn.jpg', 'Unicorn Meat');
new Product('Tentacle USB', 'img/usb.gif', 'Tentacle USB');
new Product('Watering Can', 'img/water-can.jpg', 'Watering Can');
new Product('Wine Glass', 'img/wine-glass.jpg', 'Wine Glass');

if (localStorage.getItem('storedProducts') !== null) {
  console.log('Data found');
  Product.allProducts = JSON.parse(localStorage.getItem('storedProducts'));
} else {
  console.log('Not found');
  localStorage.setItem('storedProducts', JSON.stringify(Product.allProducts));
}

function randomProduct(){
  var randomOne = Math.floor(Math.random() * Product.allProducts.length);
  var randomTwo = Math.floor(Math.random() * Product.allProducts.length);
  var randomThree = Math.floor(Math.random() * Product.allProducts.length);
  while(Product.lastDisplayed.includes(randomOne) || Product.lastDisplayed.includes(randomTwo) || Product.lastDisplayed.includes(randomThree) || randomOne === randomTwo || randomTwo == randomThree || randomThree == randomOne) {
    randomOne = Math.floor(Math.random() * Product.allProducts.length);
    randomTwo = Math.floor(Math.random() * Product.allProducts.length);
    randomThree = Math.floor(Math.random() * Product.allProducts.length);
  }
  productOne.src = Product.allProducts[randomOne].filepath;
  productTwo.src = Product.allProducts[randomTwo].filepath;
  productThree.src = Product.allProducts[randomThree].filepath;
  productOne.altText = Product.allProducts[randomOne].altText;
  productTwo.altText = Product.allProducts[randomTwo].altText;
  productThree.altText = Product.allProducts[randomThree].altText;

  Product.allProducts[randomOne].views++;
  Product.allProducts[randomTwo].views++;
  Product.allProducts[randomThree].views++;

  Product.lastDisplayed[0] = randomOne;
  Product.lastDisplayed[1] = randomTwo;
  Product.lastDisplayed[2] = randomThree;


function newSet (event) {

  if (event.target.id === 'productsSection') {
    return alert('Please click on an image.');
  }
}
  Product.totalVotes--;

  for(var i = 0; i < Product.allProducts.length; i++) {
    if(event.target.altText === Product.allProducts[i].altText) {
      Product.allProducts[i].votes++;
      updateChartArrays();
    }
  }

  if (Product.totalVotes < 1) {
    Product.section.removeEventListener('click', newSet);
    productsSection.innerHTML = '';
    localStorage.setItem('storedProducts', JSON.stringify(Product.allProducts));
    drawChart();
  }
  randomProduct();
}

function updateChartArrays() {
  for (var i = 0; i < Product.allProducts.length; i++) {
    names[i] = Product.allProducts[i].name;
    votes[i] = Product.allProducts[i].votes;
  }
}
var data = {
  labels: names,
  datasets: [
    {
      label: 'Votes per Product',
      data: votes,
      backgroundColor: [
        'rgb(255,18,0)',
        'rgb(232,62,0)',
        'rgb(255,117,0)',
        'rgb(232,146,0)',
        'rgb(255,195,0)',
        'rgb(255,205,0)',
        'rgb(232,218,0)',
        'rgb(192,255,0)',
        'rgb(68,232,0)',
        'rgb(0,255,35)',
        'rgb(0,255,112)',
        'rgb(0,232,189)',
        'rgb(0,210,255)',
        'rgb(0,111,232)',
        'rgb(0,33,255)',
        'rgb(0,80,255)',
        'rgb(131,0,232)',
        'rgb(206,0,255)',
        'rgb(232,0,195)',
        'rgb(255,0,83)'
      ],

      hoverBackgroundColor: [
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon',
        'lemonchiffon'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('productStats').getContext('2d');
  new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 20,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
}