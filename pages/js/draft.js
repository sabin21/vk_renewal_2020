
var acc = document.getElementsByClassName("detail-head");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("detail-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

  var burgerBtn = $('.burger-wrap');
  burgerBtn.on('click', function(){
    event.preventDefault();
    $('.burger-click-region').toggleClass(function(){
      return $('.burger-click-region').is('.active') ? 'closing' : 'active'
    });
  });
