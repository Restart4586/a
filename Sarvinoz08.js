let header = document.querySelector('header')


window.onscroll = function() {
  if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    header.style.backgroundColor = 'white'
  }
  else {
    header.style.backgroundColor = 'transparent'
  }
}