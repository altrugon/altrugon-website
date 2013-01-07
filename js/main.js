(function($){
  /*
   * Flip content
   */
  var flip_content = function() {
    $("nav a").click(function(event){
      $("#languages").toggleClass('flipped');
      if ($(this).hasClass('spanish')) {
        $('span', this).text('English');
        $(this)
          .removeClass('spanish')
          .addClass('english');
      }
      else {
        $('span', this).text('Spanish');
        $(this)
          .removeClass('english')
          .addClass('spanish');
      }
      event.preventDefault();
    });
  }
  
  $(document).ready(function(){
    flip_content();
  });
  
})(jQuery);