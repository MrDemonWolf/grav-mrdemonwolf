// // Fixs the menu so when link is clicked it would close the menu.
// $(function () {

//     $('#menu')
//         .on('shown.bs.collapse', function () {
//             $('#navbar-hamburger').addClass('hidden');
//             $('#navbar-close').removeClass('hidden');
//         })
//         .on('hidden.bs.collapse', function () {
//             $('#navbar-hamburger').removeClass('hidden');
//             $('#navbar-close').addClass('hidden');
//         });

// });

// $(document).on('click', '.navbar-collapse.in', function (e) {
//     if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
//         $(this).collapse('hide');
//     }
// });
// $(function () {
//     $(document).click(function (event) {
//         $('.navbar-collapse').collapse('hide');T
//     });
// });.
// Contact us effect for when clicked into the form.
$(document).ready(function () {
  $('.js-input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });
  // Fancy Box loading.
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });
  $('button').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  // Enable tooltips
  $('[data-toggle="tooltip"]').tooltip()

  function setTooltip(message) {
    $('button').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }

  function hideTooltip() {
    setTimeout(function () {
      $('button').tooltip('hide');
    }, 1000);
  }

  var clipboard = new ClipboardJS('.btn-clipboard');

  clipboard.on('success', function (e) {
    setTooltip('Copied!');
    hideTooltip();
    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    setTooltip('Failed!');
    hideTooltip();
  });
});

$(function () {
  //caches a jQuery object containing the header element
  var header = $("#cookies-eu-banner");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      header.addClass("scroll");
    } else {
      header.removeClass("scroll");
    }
  });
});
