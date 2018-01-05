window.onload = init
function init () {
  var x = document.querySelectorAll('.grid-element')
  var j = document.querySelectorAll('.flipper')
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function () {
      if (j[i].classList.contains('flipped')) {
        j[i].classList.remove('flipped')
      } else {
        j[i].classList.add('flipped')
      }
    })
  }
}
