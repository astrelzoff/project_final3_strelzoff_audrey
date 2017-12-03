// Custom Javascript
// Set a global variable for the button and retrieve the figure with id of donate
var theButton = document.getElementById('donate');

// add an event listener for mouseover of the image and open a function
theButton.addEventListener('mouseover', function () {
    // console.log('entering');
    // Change the source of the image to the yellow button on mouseover
    this.src = 'img/button_yellow.png';
});

// Add an event listener to the image for mouseout and open a function
theButton.addEventListener('mouseout', function () {
    // console.log('leaving');
    // Change the source of the image back to the red button on mouseout
    this.src = 'img/button_red.png';
});

// Add an event listener to the image for click and open a function
theButton.addEventListener('mousedown', function () {
    // console.log('clicky');
    // Change the source of the image back to the blue button on mousedown
    this.src = 'img/button_blue.png';
});


$(document).ready(function () {
    // jQuery Navigation Plug-in
    $('#menu-container').responsiveMenu();

    // Custom jQuery to hide the Classes page Refund Policy
    $('#showpolicy').hide();

    // On click of the policy span, show the policy
    $('#policy').on('click', function () {
        $('#showpolicy').show();
    });

    $('#closepolicy').on('click', function () {
        $('#showpolicy').hide();
    });

});
