$(document).ready(function() {
    // Unslider.js slider
    var slider = $('.my-slider').unslider({
        animation: 'horizontal',
        animateHeight: true,
        arrows: {
            prev: '<i class="fa fa-arrow-circle-left fa-3x unslider-arrow prev" aria-hidden="true"></i>',
            next: '<i class="fa fa-arrow-circle-right fa-3x unslider-arrow next aria-hidden="true"></i>'
        },
       
        // infinite: true
       
    });
    // Tracks the number of <audio> elements inside the play/pause button.
    // Should only be one at all times
    var numAudio = 0;

    //  Listen to slide changes
    slider.on('unslider.change', function(event, index, slide) {
        // remove all <audio> elements on slide change
        $('.audio-element').remove();
        var audioController = $('.audio-controller');
          audioController.removeClass('fa-pause-circle').addClass('fa-play-circle');
        // used to create a new <audio> tag when user clicks on $('.audio-controller')
        numAudio = 0;

    });

    $('.audio-controller').on('click', function() {
        // var activeSlide = $('li').not('.unslider-active');
        // var activeSlide = $('li:not([class])');
        var audioController = $(this);
        var audioElement;
        if (numAudio === 0) {
            // Only create on instance of the <audio> element
            audioElement = document.createElement('audio');
            if (audioController.hasClass('twist-and-shout')) {
                audioElement.setAttribute('src', 'audio/twist-and-shout.mp3');
            } else if (audioController.hasClass('hard-days-night')) {
                audioElement.setAttribute('src', 'audio/hard-days-night.mp3');
            } else if (audioController.hasClass('in-my-life')) {
                audioElement.setAttribute('src','audio/in-my-life.mp3');
            } else if (audioController.hasClass('revolver')) {
                audioElement.setAttribute('src', 'audio/tomorrow.mp3');
            } else if (audioController.hasClass('white-album')) {
                audioElement.setAttribute('src','audio/happiness.mp3');
            }
            audioElement.className += 'audio-element';
            audioElement.setAttribute('autoplay', 'autoplay');
            $(this).append(audioElement);
            numAudio++;

        }
        console.log(audioElement);
        if (audioElement === undefined) {
            // An <audio> element already exists
            audioElement = $('.audio-element')[0];
        }
        if (audioElement.paused) {
            audioController.removeClass('fa-play-circle').addClass('fa-pause-circle');
            audioElement.play();
        } else {
            audioController.removeClass('fa-pause-circle').addClass('fa-play-circle');
            audioElement.pause();
            audioElement.currentTime = 0;
        }
       
    });

    
   
});
