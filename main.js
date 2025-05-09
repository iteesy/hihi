const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png'
];

let currentImageIndex = 0;
const displayImage = document.getElementById('displayImage');
const showWareButton = document.getElementById('showWare');

function showNextImage() {
    // hide current pic
    displayImage.style.display = 'none';
    
    // update to next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // set new pic
    displayImage.src = images[currentImageIndex];
    displayImage.style.display = 'block';
}

showWareButton.addEventListener('click', showNextImage);