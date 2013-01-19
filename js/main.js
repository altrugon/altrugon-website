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
        $('span', this).text('Español');
        $(this)
          .removeClass('english')
          .addClass('spanish');
      }
      event.preventDefault();
    });
  }
  
  /*
   * URL for links
   */
  var add_my_links = function() {
    $('a.twitter').attr('href', 'https://twitter.com/altrugon');
    $('a.google-plus').attr('href', 'https://plus.google.com/u/0/112226124763991192418');
    $('a.github').attr('href', 'https://github.com/altrugon');
    $('a.email').attr('href', 'mailto:altrugon@gmail.com');
  }
  
  $(document).ready(function(){
    $('.no-js').remove();
    flip_content();
    add_my_links();
  });
  
})(jQuery);