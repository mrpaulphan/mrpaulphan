var $ = require('jquery');

module.exports = (function() {
    return {
        init: function() {
            var trigger = $('[data-toggle-trigger]');
            var target = $('[data-toggle-target]');
            var settings = {
                duration: 200,
                easing: 'swing'
            };

            trigger.click(function() {
                var triggerId = $(this).attr('data-toggle-trigger');
                var thisTarget = $('[data-toggle-target*="' + triggerId + '"]');
                var el = $(this);

                switch (triggerId) {
                    case 'form':
                        thisTarget.toggle();
                        if ($('body').hasClass('no-scroll')) {
                          $('body').removeClass('no-scroll');
                          
                        } else {
                          $('body').addClass('no-scroll');
                        }
                        break;

                    default:
                        thisTarget.toggle();
                }

            });

        },
        grid: function() {
          var trigger = $('[data-grid-trigger]');
          var target = $('[data-grid-target]');
          var settings = {
              duration: 200,
              easing: 'swing'
          };

          trigger.click(function() {
              var triggerId = $(this).attr('data-grid-trigger');
              var thisTarget = $('[data-grid-target*="' + triggerId + '"]');
              var el = $(this);

              // Remove all active classes
              $('[data-grid-trigger]').each(function() {
                  $(this).removeClass('active');
              });

              // Add active class to curent trigger
              el.addClass('active');

              var id = $(this).attr('data-grid-trigger');
              target.each(function() {
                  var targetID = $(this).attr('data-grid-target');
                  var el = $(this);
                  if (targetID != id) {
                      $(this).removeClass('active');
                      $(this).addClass('hide');

                  } else {
                      $(this).removeClass('hide');

                      $(this).addClass('active');
                  }
              });
          });

        },
        story: function() {
            var trigger = $('[data-story-trigger]');
            var target = $('[data-story-target]');
            var settings = {
                duration: 200,
                easing: 'swing'
            };

            trigger.click(function(e) {
              e.stopPropagation;
                var triggerId = $(this).attr('data-story-trigger');
                var thisTarget = $('[data-story-target*="' + triggerId + '"]');
                var el = $(this);
                var currentText = $(this).html();
                if (currentText == 'Close') {

                    trigger.each(function() {
                        var el = $(this);

                        var matchingID = $(this).attr('data-story-trigger');
                        if (triggerId === matchingID) {
                            thisTarget.slideUp();
                            el.text('Read More');
                            el.removeClass('active')
                        }

                    });
                } else {
                    target.each(function() {
                        $(this).hide();
                        var el = $(this);
                        var matchingID = $(this).attr('data-story-trigger');
                        if (triggerId != matchingID) {}
                    });
                    trigger.each(function() {
                        var el = $(this);
                        var matchingID = $(this).attr('data-story-trigger');
                        if (triggerId === matchingID) {
                            el.html('Close');
                            el.addClass('active');
                            thisTarget.slideDown();
                        } else {
                            el.text('Read More');

                        }
                    });
                }
            });

        },
        successStories: function() {
            var trigger = $('[data-story-trigger]');
            var target = $('[data-story-target]');
            var settings = {
                duration: 200,
                easing: 'swing'
            };

            trigger.click(function() {
                var triggerId = $(this).attr('data-story-trigger');
                var thisTarget = $('[data-story-target*="' + triggerId + '"]');
                var el = $(this);

                // Remove all active classes
                $('[data-story-trigger]').each(function() {
                    $(this).removeClass('active');
                });

                // Add active class to curent trigger
                el.addClass('active');

                var id = $(this).attr('data-story-trigger');
                target.each(function() {
                    var targetID = $(this).attr('data-story-target');
                    var el = $(this);
                    if (targetID != id) {
                        $(this).removeClass('active');
                        $(this).addClass('hide');

                    } else {
                        $(this).removeClass('hide');

                        $(this).addClass('active');
                    }
                });
            });


        },

        map: function() {
          var trigger = $('[data-map-trigger]');
          var target = $('[data-map-target]');

            trigger.on('click', function() {
                var el = $(this);
                var triggerId = el.attr('data-map-trigger');

                // Remove all active classes
                $('[data-map-trigger]').removeClass('active');
                // Remove current open read more sections
                $('[data-story-target]').hide();

                // Add active class to curent trigger
                el.addClass('active');

                target.each(function() {
                    var target = $(this);
                    var targetID = target.attr('data-map-target');
                    if (targetID != triggerId) {
                        target.removeClass('active').addClass('hide');
                    } else {
                        target.removeClass('hide').addClass('active');
                    }
                });
            });


        },
        videoSwap: function() {

            // User clicks on play button
            $('[data-video-button]').on('click', function() {
                // Play buttons ID
                var id = $(this).attr('data-video-button');

                var video = '<div class="video-wrapper"><iframe src="https://player.vimeo.com/video/185717440?autoplay=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';

                $('[data-video-swap-container]').each(function() {
                    var parentContainer = $(this);
                    var parentContainerId = $(this).attr('data-video-swap-container');

                    if (id === parentContainerId) {
                        // Empty out div
                        parentContainer.before(video);

                        parentContainer.detach();
                    }
                })

            });
        }
    };
})();
