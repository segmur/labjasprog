let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    groceryAmount1 = parseFloat(document.getElementById('grocery1').value);
    groceryAmount2 = parseFloat(document.getElementById('grocery2').value);
    groceryAmount3 = parseFloat(document.getElementById('grocery3').value);

   let totalAmount = groceryAmount1 + groceryAmount2 + groceryAmount3;
    document.getElementById('groceryAmount').innerText = `The total amount is: ${totalAmount}`;
   }