console.log("content Scripts")

// content.js

// Create a div element
const customBox = document.createElement('div');

// Set the styles for the box
customBox.style.width = '300px';
customBox.style.height = '80px';
customBox.style.backgroundColor = '#ffffff';
customBox.style.borderRadius = '10px';
customBox.style.position = 'fixed';

// Set the position using x and y coordinates
const xCoordinate = 4; // replace with your desired x-coordinate
const yCoordinate = 840; // replace with your desired y-coordinate
customBox.style.left = `${xCoordinate}px`;
customBox.style.top = `${yCoordinate}px`;

customBox.style.padding = '10px';
customBox.style.zIndex = '9999';

// Add some data to the box
customBox.innerHTML = `
<div>Queue : </div>
<div>QIPH : </div>
<div id="timerDisplay"> Timer : </div>
<div>CPH : </div>

`;




// Append the box to the document body
document.body.appendChild(customBox);



// JavaScript Timer Function
function startTimer() {
    let seconds = 0;
    const timerDisplay = document.getElementById('timerDisplay');
  
    function updateTimerDisplay() {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timerDisplay.innerText = ` Timer :${minutes}m ${remainingSeconds}s`;
    }
  
    // Start the timer
    const timerInterval = setInterval(function () {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  
    // You can stop the timer by calling clearInterval(timerInterval)
    // For example, to stop after 5 seconds:
    // setTimeout(function() { clearInterval(timerInterval); }, 5000);
  }
  
  // Call the timer function when the page loads
  window.onload = function () {
    startTimer();
  };
  