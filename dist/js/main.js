'use strict';

$(document).ready(function () {

  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

  if ($('.flakes').length) {
    $('.main-footer').addClass('main-footer--without-offset');
  }
});