let gallery = document.querySelector('#gallery');

gallery.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName === 'IMG') {
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.addEventListener('click', function () {
      if (overlay) {
        overlay.remove();
      }
    });
    let image = document.createElement('img');
    let source1 = target.src;
    let temp = source1.split('_');
    image.src = './img/img/' + temp[1];

    image.style.border = '3px solid white';
    overlay.appendChild(image);
    document.body.appendChild(overlay);
  }
});
