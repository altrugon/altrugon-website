(function($){
  /*
   * Flip content
   */
  var flip_content = function() {
    $("h1").click(function(event){
      $("#languages").toggleClass('flipped');
      event.preventDefault();
    });
  }
  
  $(document).ready(function(){
    flip_content();
  });
  
})(jQuery);