function fixedNav() {
  var fixedElement = $('[data-nav]');
  if (fixedElement.length) {

    // Duplicating Oringinal Element
    fixedElement.addClass('original').clone().insertAfter(fixedElement).addClass('duplicate').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

    // Scroll Interval ID
    scrollIntervalID = setInterval(stickIt, 10);

    function stickIt() {
      var orgElementPos = $('.original').offset();
      orgElementTop = orgElementPos.top;

      if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the duplicate, sticky element.
        // Duplicate element should always have same left position and width as original element.
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.duplicate').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
      } else {
        // not scrolled past the menu; only show the original menu.
        $('.duplicate').hide();
        $('.original').css('visibility', 'visible');
      }
    }
  }
}
