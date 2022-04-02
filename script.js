/*
  Name: Jeff Abbott
  Date: 3/23/2022
  Assignment: Week 3 lab
*/

function calculate() {
    let a = parseInt(document.getElementById("coefA").value);
    let b = parseInt(document.getElementById("coefB").value);
    let c = parseInt(document.getElementById("coefC").value);

    let answerA = (-(b) - Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
    let answerB = (-(b) + Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

    document.getElementById("answerA").innerHTML = answerA;
    document.getElementById("answerB").innerHTML = answerB;
}