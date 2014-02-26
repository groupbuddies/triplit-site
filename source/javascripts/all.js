//= require jquery
//= require_tree .

(function($, window, undefined) {
  // First check to see if the platform is an iPhone or iPod
  if(/iP/.test(navigator.platform) && /Safari/i.test(navigator.userAgent)){
    $('.background-image').css('height', '600');
  }
}(jQuery, this));
