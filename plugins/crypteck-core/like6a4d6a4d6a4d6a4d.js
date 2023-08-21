(function($) {
  "use strict";
  jQuery(document).ready(function($) {
    $('body').on('click', '.jws-love', function() {
      var $loveLink = $(this);
      var $icon = $(this).find('i');
      var $id = $(this).attr('id');
      var $that = $(this);
      if ($loveLink.hasClass('loved')) return false;
      if ($(this).hasClass('inactive')) return false;
      var $dataToPass = {
        action: 'jws-love',
        loves_id: $id
      }
      $.post(jwsLove.ajaxurl, $dataToPass, function(data) {
        $loveLink.find('.count').html(data);
        $loveLink.addClass('loved').attr('title', 'You already love this!');
        $icon.removeClass('icon-basic-heart').addClass('icon-heart');
      });
      $(this).addClass('inactive');
      return false;
    });
  });
})(jQuery);