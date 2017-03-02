function debounce(func, wait, immediate = true) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};

//First-screen
(function() {
  var button      = document.querySelector('.row_button'),
      title       = document.querySelector('.title'),
      titleOffset = title.offsetTop - 50,
      firstScreen = document.querySelector('.first-screen');

  function translateY(elem, sign) {
    elem.style.webkitTransform = 'translateY(' + sign + 'px)';
    elem.style.MozTransform = 'translateY(' + sign + 'px)';
    elem.style.msTransform = 'translateY(' + sign + 'px)';
    elem.style.OTransform = 'translateY(' + sign + 'px)';
    elem.style.transform = 'translateY(' + sign + 'px)';
  }

  function translateBlocks() {
    var limit = 60,
        sign  = Math.round((window.scrollY - titleOffset) / 3.5);
    if(window.scrollY >= titleOffset) {
      if (sign >= limit) {
        translateY(button, -limit);
      } else {
        translateY(button, -sign);
      }
    }
  }

  window.addEventListener('scroll', debounce(translateBlocks));
})();

// Line scroll
(function() {
  var lineScroll    = document.querySelector('.line_scroll'),
      lineScrollTop = lineScroll.offsetTop;

  function scrollScale() {
    if(window.scrollY - lineScrollTop >= 500) {
      lineScroll.classList.add('scroller');
    } else {
      lineScroll.classList.remove('scroller');
    }
  }

  window.addEventListener('scroll', scrollScale, false);
})();

// Fixed panel
(function() {
  var controller = new ScrollMagic.Controller();
  var menu = document.querySelector('#menu');
  var lineScroll = document.querySelector('.line_scroll');

  var scene = new ScrollMagic.Scene({
    triggerElement: '.menu',
    triggerHook: 'onLeave'
  })
  .setPin(menu)
  .on('start', function () {
    window.addEventListener('scroll', function() {
      var x = Math.round((window.scrollY - menu.offsetTop) / 10);
      lineScroll.style.left = x + 'px';
      console.log(window.scrollY - menu.offsetTop);
    });
  })
  .setClassToggle(menu,'menu--fixed')
  .addTo(controller)
})();

//Advantages block
(function() {
  // init controller
  var controller = new ScrollMagic.Controller();
  var tween = new TimelineMax()
        .from('#advantages .section_title', .35, {autoAlpha: 0, scale: 1.1});

  // build scene title
  var scene = new ScrollMagic.Scene({
    triggerElement: "#advantages",
    triggerHook: .65
  })
  .setTween(tween)
  .addTo(controller);

  // build scene grid_item
  var tween_item  = new TimelineMax()
        .staggerFrom('.grid_item', .4, {autoAlpha: 0, scale: 1.1}, 0.2, 0.2);
  var scene_item = new ScrollMagic.Scene({
    triggerElement: ".grid",
    triggerHook: .85
  })
  .setTween(tween_item)
  .addTo(controller);
})();

//Offers block
(function() {
  // init controller
  var controller = new ScrollMagic.Controller();
  var tween = new TimelineMax()
      .from('#offers .section_title', .35, {autoAlpha: 0, scale: 1.1})


  // build scene title
  var scene = new ScrollMagic.Scene({
    triggerElement: "#offers",
    triggerHook: .65
  })
  .setTween(tween)
  .addTo(controller);

  // build scene grid_item
  var tween_offers  = new TimelineMax()
      .staggerFrom('.offers_item', .35, {autoAlpha: 0, scale: 1.1}, 0.2, 0.2);

  var scene_item = new ScrollMagic.Scene({
    triggerElement: ".offers_grid",
    triggerHook: .85,
    offset: '-110px'
  })
  .setTween(tween_offers)
  .addTo(controller);
})();

//Callback block
(function() {
  var controller = new ScrollMagic.Controller();
  var lineScroll = document.querySelector('.line_scroll');
  var callback = document.getElementById('callback');

  var tween = new TimelineMax()
    .to(window, .1, {scrollTo: callback, autoKill:false,
        onStart: function() {
           window.scrollBy(0, window.innerHeight);
           TweenMax.to('.menu', .1, {height: 0});
        },
        onComplete: function () {
          lineScroll.classList.remove('scroller');
        },
        onReverseComplete: function () {
          lineScroll.classList.add('scroller');
          TweenMax.to('.menu', .1, {height: '80px'});
        }
    });

  var scene = new ScrollMagic.Scene({
    triggerElement: callback,
    triggerHook: 0.2
  })
  .setTween(tween)
  .addTo(controller);
})();