
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

var filterWrap = document.querySelector('.filter-wrap');
var filterOpen = document.querySelector('.btn-filter');
var filterClose = document.querySelector('.filter-btn-close');
$('.btn-filter').on('click', function(){
  event.preventDefault();
  $('.filter-wrap').css('display', 'block');
});
$('.filter-btn-close').on('click', function(){
  event.preventDefault();
  $('.filter-wrap').css('top','-200px');
  setTimeout(function(){
    $('.filter-wrap').css('display', 'none');
  }, 300);
  
  
});
  

$(document).on('scroll', function(){
    if ($(document).scrollTop() > 80){
        $('.header-wrap').addClass('active');
    }else{
        $('.header-wrap').removeClass('active');
    }
    
});

