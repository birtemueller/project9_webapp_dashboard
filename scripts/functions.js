//close button for the alert box
$('.close-button-alert' ).click(function() {
    $('.close-button-alert' ).parent().addClass('hidden');
});

//close button for the modal boxes
$('.alert-icon').click(function () {
    $('.modal-notification, .modal-content, .modal-box').removeClass('hidden');
    $('.alert-icon').removeClass('notification');
});

//close the modal wrapper when no modal box is left
$('.close-button-modal' ).click(function() {
    $(this).parentsUntil('.modal-content').addClass('hidden');
    if($('.modal-content').children(':visible').length === 0) {
        $('.modal').addClass('hidden');
    }
});

//close all modals if user clicks anywhere on the page
$('.modal').on('click', function(e) {
    if (e.target !== this)
        return;
    $('.modal').addClass('hidden');
});


//message form: check if any of the fields are empty
//display confirmation if message was sent
//clear all input fields after message has been sent
$('#send-message').submit(function (e) {
    if (!$('#user-search').val() || !$('#message').val() ){
        $('.modal-message-error').removeClass('hidden');
        e.preventDefault();
    } else {
        $('.modal-message').removeClass('hidden');
        $('#user-search').val('');
        $('#message').val('');
        e.preventDefault();
    }
});

//display confirmation that settings have been saved
$('#save-settings').submit(function (e) {
    $('.modal-settings').removeClass('hidden');
    e.preventDefault();
});




$('.period-switch').change(function () {
    $('.period-switch label').removeClass('period-selected');
    $('.line-charts canvas').css('display', 'none');

    if ($('input#hourly').is(':checked')) {
        $('#chart-traffic-hourly').css('display', 'block');
        $('label[for=hourly]').addClass('period-selected');
    } else if ($('input#daily').is(':checked')) {
        $('#chart-traffic-daily').css('display', 'block');
        $('label[for=daily]').addClass('period-selected');
    } else if ($('input#weekly').is(':checked')) {
        $('#chart-traffic-weekly').css('display', 'block');
        $('label[for=weekly]').addClass('period-selected');
    } else if ($('input#monthly').is(':checked')) {
        $('#chart-traffic-monthly').css('display', 'block');
        $('label[for=monthly]').addClass('period-selected');
    }

});

$('.period-select').change(function () {
    $('.line-charts canvas').css('display', 'none');

    if ($('option[value="hourly"]').is(':selected')) {
        $('#chart-traffic-hourly').css('display', 'block');
    } else if ($('option[value="daily"]').is(':selected')) {
        $('#chart-traffic-daily').css('display', 'block');
    } else if ($('option[value="weekly"]').is(':selected')) {
        $('#chart-traffic-weekly').css('display', 'block');
    } else if ($('option[value="monthly"]').is(':selected')) {
        $('#chart-traffic-monthly').css('display', 'block');
    }

});

//local storage

$(document).ready(function() {

    restoreContents();

//save settings
    function saveContents() {
        var emailNotifications = $('#email-switch').is(':checked');
        var publicProfile = $('#public-switch').is(':checked');
        var timezone = $('#timezone-switch option:selected').val();
        localStorage['emailNotifications'] = emailNotifications;
        localStorage['publicProfile'] = publicProfile;
        localStorage['timezone'] = timezone;
    }


//restore settings
    function restoreContents() {
        var emailNotifications = localStorage['emailNotifications'];
        var publicProfile = localStorage['publicProfile'];
        var timezone = localStorage['timezone'];

        if (emailNotifications === 'true') {
            $('#email-switch').prop('checked', true);
        } else {
            $('#email-switch').prop('checked', false);
        }

        if (publicProfile === 'true') {
            $('#public-switch').prop('checked', true);
        } else {
            $('#public-switch').prop('checked', false);
        }

        $('#timezone-switch').val(timezone);


    }

    $('#save-settings').click(function() {
        saveContents();
    });

});