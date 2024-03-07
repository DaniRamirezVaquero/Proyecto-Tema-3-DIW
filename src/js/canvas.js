  var canvas = document.querySelector('.col2 canvas');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  var ctx = canvas.getContext('2d');
  
  var currentImage = 0;
  var images = [
    '../media/Imagen(1).png',
    '../media/Imagen(2).png',
    '../media/Imagen(3).png',
    '../media/Imagen(4).png',
    '../media/Imagen(5).png',
    '../media/Imagen(6).png',
    '../media/Imagen(7).png',
    '../media/Imagen(8).png'
  ];

  function drawImage() {
    var image = new Image();
    image.src = images[currentImage];
    
    image.onload = function() {
      var scale = Math.min(canvas.width / image.width, canvas.height / image.height) * 0.7;
      var x = (canvas.width - image.width * scale) / 2;
      var y = (canvas.height - image.height * scale) / 2;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.beginPath();
      roundRect(ctx, x, y - 20, image.width * scale, image.height * scale, 30);
      ctx.clip();
      ctx.drawImage(image, x, y - 20, image.width * scale, image.height * scale);
    };
  }
  
  // Función para dibujar un rectángulo redondeado
  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    updateIndicators();
  }

  function updateIndicators() {
    var indicators = document.getElementById('image-indicators');
    indicators.innerHTML = '';
    for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('span');
      indicator.classList.add('indicator');
      if (i === currentImage) {
        indicator.classList.add('active');
      }
      indicators.appendChild(indicator);
    }
  }

  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    updateIndicators();
    drawImage();
  }

  drawImage();
  setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos


window.onresize = function () {
  var canvas = document.querySelector('.col2 canvas');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};