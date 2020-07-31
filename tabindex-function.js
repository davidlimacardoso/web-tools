$('.tabindex').keydown( function(event) {
  if ( (event.which === 13 || event.which === 9) && !event.shiftKey ) {
    var idx = $('.tabindex').index(this) + 1; //index atual
    var idx_total = $('.tabindex').length; // index do ultimo
    event.preventDefault();
    if (idx == idx_total) { // se for o ultimo volta pro primeiro
      $('.tabindex:eq(0)').focus();
    }
    else {
      $('.tabindex:eq('+idx+')').focus(); // senao focus no proximo
    }
  }
});

/*
<input class='tabindex' type='text'>
<input class='tabindex' type='text'>
<input class='tabindex' type='text'>
<input class='tabindex' type='text'>
*/
