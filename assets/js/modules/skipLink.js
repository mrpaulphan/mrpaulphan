var $ = require('jquery');


/*
 *   skipLink();
 *   -----------------------------------
 *   Used to prevent default behavior on
 *   any link with an attribute href="#"
 */
module.exports = {
    init: function() {
        $('a[href="#"]').click(function(event) {
            event.preventDefault();
        });
    }
};
