---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
    $('a.panel-button').click(function (e) {
        if ($('.content-wrapper').hasClass('showing')){
            $('.content-wrapper__inner').css('display', 'none')
            $('.content-wrapper').removeClass('animated slideInRight')
            $('.panel-cover').removeClass('panel-cover--collapsed')
            $('.panel-cover').css('max-width', '100%')
            $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
            $('.content-wrapper').removeClass('showing')
            $('.footer').css('display', 'none')
            window.location.hash = '';
            parent.location.hash = ''
            return;
        }
        $('.content-wrapper__inner').css('display', 'block')
        $('.footer').css('display', 'block')
        currentWidth = $('.panel-cover').width()
        if (currentWidth < 960) {
          $('.panel-cover').addClass('panel-cover--collapsed')
          $('.content-wrapper').addClass('animated slideInRight')
        } else {
          $('.panel-cover').css('max-width', currentWidth)
          $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
        }
        $('.content-wrapper').addClass('showing');
    })

    if (window.location.hash && window.location.hash == '#projects') {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('showing');
        $('.content-wrapper__inner').css('display', 'block')
    }

    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
        $('.panel-cover').addClass('panel-cover--collapsed')
    }

    $('.btn-mobile-menu').click(function () {
        $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
        $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .projects-button').click(function () {
        $('.navigation-wrapper').toggleClass('visible')
        $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

})
