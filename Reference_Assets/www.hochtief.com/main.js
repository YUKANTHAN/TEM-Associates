$(function() {
    // Accept cookies
    $('#tx_cookies_accept').submit(function(e) {
        e.preventDefault();

        // Set cookie
        const d = new Date();
        d.setTime(d.getTime() + ($(this).attr('data-expire')*24*60*60*1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = 'tx_cookies_accepted=1;' + expires + ';path=/;samesite=strict';
        document.cookie = 'tx_cookies_consent=1;' + expires + ';path=/;samesite=strict';
        document.cookie = 'tx_cookies_disabled=;Max-Age=-99999999;path=/;samesite=strict';

        // Close cookie hint or redirect
        const redirect = $(this).find('[name="tx_cookies_main[redirect]"]').val()
        if (redirect) {
            window.location.replace(redirect);
        } else {
            if ($('#tx_cookies_close').length) {
                $('#tx_cookies_close').click();
            } else {
                $('#tx_cookies_inner').hide();
            }
        }
    });
});
