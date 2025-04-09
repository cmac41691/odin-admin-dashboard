
/**
 * Adapted from: https://github.com/AntonHarbers/Demo-Admin-Dashboard/blob/main/script.js
 * Original author: AntonHarbers
 * Purpose: Adds animated effects to the logo area using random-sized elements
 */

// Adding just a little script for the image effect
const imageContainer = document.querySelector('#logo');

// Only run if the logo container exists
if (imageContainer) {

  // Function to create a visual element with random size
  function createSet() {
    const set = document.createElement('div');

    // Random size between 20px and 50px
    const size = 20 + Math.random() * 30; 

    set.classList.add('spark'); // Give it a class so we can style it
    set.style.width = `${size}px`;
    set.style.height = `${size}px`;

    // Optional: position randomly inside the logo container
    set.style.position = 'absolute';
    set.style.top = `${Math.random() * 100}%`;
    set.style.left = `${Math.random() * 100}%`;
    set.style.background = '#4f46e5'; // Purple-ish sparkle
    set.style.borderRadius = '50%';

    imageContainer.appendChild(set);

    // Remove after a short time
    setTimeout(() => {
      set.remove();
    }, 1100);
  }

  // Create a new sparkle every 200-500ms
  setInterval(createSet, 200 + Math.random() * 300);
}




