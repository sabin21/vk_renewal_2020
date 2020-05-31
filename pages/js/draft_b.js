
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

$(document).on('scroll', function(){
    if ($(document).scrollTop() > 80){
        $('.header-wrap').addClass('active');
    }else{
        $('.header-wrap').removeClass('active');
    }
});

