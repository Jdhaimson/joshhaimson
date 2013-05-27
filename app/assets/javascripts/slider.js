function sliderInit() {
  $.slider = new Object();
  $.slider.panel = 1;
  $.slider.last = 7;
  $.slider.speed = 500;
  sliderUpdate();

  $(window).scroll(sliderUpdate);
  $('#up').click(sliderPrev);
  $('#down').click(sliderNext);

  $(document).keyup(function(e){
    if (e.keyCode == 38) { 
      e.preventDefault();
      sliderPrev();
    }
    else if (e.keyCode == 40) {
      e.preventDefault();
      sliderNext();
    }
  });

  $(document).keydown(function(e){
    if (e.keyCode == 38 || e.keyCode == 40) { 
      e.preventDefault();
    }
  });


}

function sliderNext() {
  if ($.slider.panel < $.slider.last) {
    $('body').animate({ scrollTop: $('#panel' + ($.slider.panel + 1)).offset().top }, $.slider.speed);
    $.slider.panel += 1;
    return true;
  }
  else {
    return false;
  }
}

function sliderPrev() {
  if ($.slider.panel > 1) {
    $('body').animate({ scrollTop: $('#panel' + ($.slider.panel - 1)).offset().top }, $.slider.speed);
    $.slider.panel -= 1;
    return true;
  }
  else {
    return false;
  }
}

function sliderUpdate() {
  var pos = $('body').scrollTop();
  var curPanel = 1;
  for (i=1; i<=$.slider.last; i++) {
    if (pos+200 > $('#panel' + i).offset().top) {
      curPanel = i;
    }
  }
  $.slider.panel = curPanel;
  
  if (curPanel == 1) {
    $('#up').fadeOut();
  }
  else {
    $('#up').fadeIn();
  }

  if (curPanel == $.slider.last) {
    $('#down').fadeOut();
  }
  else {
    $('#down').fadeIn();
  }
}
