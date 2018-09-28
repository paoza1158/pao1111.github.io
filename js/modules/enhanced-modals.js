<<<<<<< HEAD
/*
    Enhanced Bootstrap Modals
    https://mdbootstrap.com
    office@mdbootstrap.com
*/

$('body').on('shown.bs.modal', '.modal', function() {
    if($('.modal-backdrop').length) {
    } else {

        $modal_dialog = $(this).children('.modal-dialog')

        if($modal_dialog.hasClass('modal-side')) {
            $(this).addClass('modal-scrolling');
            $('body').addClass('scrollable');
        }

        if($modal_dialog.hasClass('modal-frame')) {
            $(this).addClass('modal-content-clickable');
            $('body').addClass('scrollable');
        }
    }
});
$('body').on('hidden.bs.modal', '.modal', function() {
    $('body').removeClass('scrollable');
=======
/*
    Enhanced Bootstrap Modals
    https://mdbootstrap.com
    office@mdbootstrap.com
*/

$('body').on('shown.bs.modal', '.modal', function() {
    if($('.modal-backdrop').length) {
    } else {

        $modal_dialog = $(this).children('.modal-dialog')

        if($modal_dialog.hasClass('modal-side')) {
            $(this).addClass('modal-scrolling');
            $('body').addClass('scrollable');
        }

        if($modal_dialog.hasClass('modal-frame')) {
            $(this).addClass('modal-content-clickable');
            $('body').addClass('scrollable');
        }
    }
});
$('body').on('hidden.bs.modal', '.modal', function() {
    $('body').removeClass('scrollable');
>>>>>>> 6b1ab5b5b4f6fda79251b8bb65546c085a65aba2
});