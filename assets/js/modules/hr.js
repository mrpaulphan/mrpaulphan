var $ = require('jquery');

module.exports = (function() {
    return {
        init: function() {
          $('a[href="#hr"]').text('').addClass('hr');
          $('a[href="#hr"]').on('click', function(event) {
            event.preventDefault();
          });
        },
    };
})();
