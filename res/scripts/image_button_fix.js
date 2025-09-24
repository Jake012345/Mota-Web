document.querySelectorAll('img.hover-effect').forEach(img => {
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');

   function updateCanvas() {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(img,0,0);
   }

   if(img.complete){
      updateCanvas();
   } else {
      img.addEventListener('load', updateCanvas);
   }

   img.addEventListener('mousemove', e => {
      const rect = img.getBoundingClientRect();
      const scaleX = img.naturalWidth / rect.width;
      const scaleY = img.naturalHeight / rect.height;

      let x = Math.floor((e.clientX - rect.left) * scaleX);
      let y = Math.floor((e.clientY - rect.top) * scaleY);

      x = Math.max(0, Math.min(x, img.naturalWidth - 1));
      y = Math.max(0, Math.min(y, img.naturalHeight - 1));

      const pixel = ctx.getImageData(x,y,1,1).data;
      if(pixel[3] > 10){ // alpha threshold
         img.classList.add('hover');
      } else {
         img.classList.remove('hover');
      }
   });

    img.addEventListener('mouseleave', () => img.classList.remove('hover'));
    if (img.classList.contains("arrow-down")) {
        img.addEventListener('click', () => header_expand())
    }
    else {
            if (img.classList.contains("arrow-up")) {
                img.addEventListener('click', () => header_collapse())
            }
    }
});