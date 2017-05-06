/**
 * Created by reenakumari on 4/25/17.
 */

$(document).ready(function () {
    $('.collapse').on('shown.bs.collapse',function () {
       $(this).parent().find('.glyphicon-menu-down').removeClass('.glyphicon-menu-down').addClass('.glyphicon-menu-up');
    })

    $('#btnShowModal').click(function () {
        $('#loginModal') .modal('show');
    });

    $('#btnHideModal').click(function () {
        $('#loginModal') .modal('hide');
    });



})
