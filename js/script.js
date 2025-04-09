// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: April 2025
// This file contains the JS functions for index.html
"use strict";
/**
 * This function calculates the area of the triangle
 */
function calculateArea() {
  // input
  let sideA = parseInt(document.getElementById('sideA-of-the-decagon').value);

  // process
  let area = (5*sideA ** 2)/2 * Math.sqrt(5+2 * Math.sqrt(5))

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}

function calculatePerimeter() {
  // input
  let sideA = parseInt(document.getElementById('sideAsecond-of-the-decagon').value);

  // process
  let perimeter = 10 * sideA

  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm²'
}