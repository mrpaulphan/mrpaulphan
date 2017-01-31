var $ = require('jquery');

module.exports = (function() {
    return {
        init: function() {
            // Wrap title in div
            $('.form-wrapper .title').wrap('<div class="title-wrapper"></div>')
            // Add markup to the form title to create hr
            $('.form-wrapper .title').before('<span class="form-title-left"></span>').after('<span class="form-title-right"></span>');

            // Reposition input field so label is before it.
            var firstNameInput = $('.form-wrapper .first-name input');
            var lastNameInput = $('.form-wrapper .last-name input');
            var lastNameInput = $('.form-wrapper .last-name input');
            var address1Input = $('.form-wrapper .address1 input');
            var address2Input = $('.form-wrapper .address2 input');
            var cityInput = $('.form-wrapper .city input');
            var countryInput = $('.form-wrapper .country input');
            var zipInput = $('.form-wrapper .zip input');
            var stateInput = $('.form-wrapper .state-province input');
            firstNameInput.detach().appendTo('.form-wrapper .first-name');
            lastNameInput.detach().appendTo('.form-wrapper .last-name');
            address1Input.detach().appendTo('.form-wrapper .address1');
            address2Input.detach().appendTo('.form-wrapper .address2');
            cityInput.detach().appendTo('.form-wrapper .city');
            countryInput.detach().appendTo('.form-wrapper .country');
            zipInput.detach().appendTo('.form-wrapper .zip');
            stateInput.detach().appendTo('.form-wrapper .state-province');

            // Add address fields if "Receive more information in the mail" is checked off.
            $('input[value="Receive more information in the mail"]').on('click', function() {
              var addressSection = $('#address-yui_3_17_2_1_1478020171611_17803');

                addressSection.toggle();

            });
        },

    };
})();
