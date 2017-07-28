$(document).ready(function() {

  let scene = document.getElementById('scene');
  let parallax = new Parallax(scene);

  if ($('.flakes').length) {
    $('.main-footer').addClass('main-footer--without-offset');
  }

});