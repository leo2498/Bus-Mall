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
