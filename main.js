const button = document.getElementById('showWare');
let clickCount = 0;

button.addEventListener('click', function() {
  let iframe = document.getElementById('ware-iframe');

  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.width = '600';
    iframe.height = '400';
    iframe.id = 'ware-iframe';
    document.body.appendChild(iframe);
  }

  clickCount++;

  if (clickCount === 1) {
    iframe.src = 'https://www.ssense.com/en-us/women/product/ashley-williams/ssense-exclusive-white-bow-bonnet/16060511';
  } else if (clickCount === 2) {
    iframe.src = 'https://www.ssense.com/en-us/women/product/lemaire/khaki-wadded-vest/13949361';
  } else if (clickCount === 3) {
    iframe.src = 'https://www.ssense.com/en-us/men/product/jw-anderson/orange-long-sleeve-t-shirt/17711331';
  }
});