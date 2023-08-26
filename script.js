function createCircle() {
  setTimeout(() => {
    const circle = document.createElement('div');
    const sizes = ['small', 'medium', 'large'];
    const colors = ['yellow', 'blue', 'teal', 'orange', 'pink', 'purple'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    circle.classList.add('circle', randomSize, randomColor);
    circle.style.left = Math.random() * window.innerWidth + 'px';
    circle.style.top = Math.random() * window.innerHeight + 'px';
    circle.style.opacity = Math.random() * 0.5 + 0.1; // Adjust opacity between 0.1 and 0.6

    document.getElementById('background').appendChild(circle);
  }, 0);
}

// Immediately create the first circle
createCircle();

// Set interval to create circles every 3 seconds
setInterval(createCircle, 3000); // Adjust the interval to control the speed of circle appearance (e.g., every 3 seconds)
