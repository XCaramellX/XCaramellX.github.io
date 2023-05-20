/*const images = [
    'images/pexels-josh-sorenson-1478524.jpg',
    'images/pexels-saul-graydon-5341778.jpg',
    'images/pexels-stanislav-kondratiev-2908983.jpg',
    'images/pexels-stanislav-kondratiev-2909077.jpg'
  ];

  let currentImageIndex = 0;

  const container = document.getElementById('slide');

let position = 0;

function scrollBackground() {
  position -= 1;
  container.style.backgroundPosition = position + 'px 0';
  
  if (-position >= container.offsetWidth) {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    container.style.backgroundImage = `url(${images[currentImageIndex]})`;
    position = 0;
  }
}
window.onload = function() {
setInterval(scrollBackground, 10);
}
*/

const images = [  'images/pexels-josh-sorenson-1478524.jpg',  'images/pexels-saul-graydon-5341778.jpg',  'images/pexels-stanislav-kondratiev-2908983.jpg',  'images/pexels-stanislav-kondratiev-2909077.jpg'];

let currentImageIndex = 0;
const container = document.getElementById('slide');
let position = 0;
let slideshowInterval;

function startSlideshow() {
  slideshowInterval = setTimeout(() => {
    position -= 1;
    container.style.backgroundPosition = position + 'px 0';

    if (-position >= container.offsetWidth) {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        clearInterval(slideshowInterval);
        return;
      }
      container.style.backgroundImage = `url(${images[currentImageIndex]})`;
      position = 0;
    }
    startSlideshow();
  }, 10);
}

window.onload = function() {
  startSlideshow();
}
