function toggleClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
        this[j].classList.toggle(classes[i]);
      }
    }
  }
  return this;
}

console.log(toggleClass('swiper-slide'))