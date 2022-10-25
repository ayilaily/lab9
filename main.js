function popup() {
  alert("This is a popup");
  document.getElementById("demo").innerHTML = "My text";

    //Variables
  var x = 3 + 2; // x is 5
  let y = "hello"; // y stores 10
  const PI = 3.14;
  z = "Tom";
  var x = "stop";
  console.log(x, y, z, PI);

  // Arrays
  const A = ["Tom", 25, 30];
  x = A[0]; // x stores “Tom”
  A[1] = 20; // A = [”Tom”, 20, 3]
  let n = A.length;
  let k = A[n - 1];
  A.push("John");
  A[10] = 100;

  console.log(A, n, k);
}

// objects
const car = {
  name: "Fiat", // note ending comma
  color: "white",
};

//area of rectangle
function perRectangle() {
  const num1 = parseFloat(prompt("Enter height: "));
const num2 = parseFloat(prompt("Enter width: "));
    console.log(2 * (num1 + num2));//The perimeter of rectangle is: 2 * (w + h)
}


//area of circle
function areaCircle() {
  const PI = 3.14;
    const num1 = parseFloat(prompt("Enter the radius of the Circle: "));
    console.log(PI * num1 * num1);//The area of the circle is PI*radius*radius
}


// the greatest number among 3
// get input from the user
function largest(){

const num1 = parseFloat(prompt("Enter first number: "));

const num2 = parseFloat(prompt("Enter second number: "));

const num3 = parseFloat(prompt("Enter third number: "));

let largest;

// checking

if(num1 >= num2 && num1 >= num3) {

   largest = num1; } else if (num2 >= num1 && num2 >= num3) {

   largest = num2; } else {

   largest = num3; }

// display the result

console.log("The largest number is " + largest);
}