// Sticky header
(function() {
  var panel       = document.querySelector('.menu'),
      panelOffset = panel.offsetTop,
      line_scroll = document.querySelector('.line_scroll');

  function debounce(func, wait, immediate) {
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

  var panelFixed = debounce(function() {
    if((panelOffset - window.scrollY) <= 67) {
      line_scroll.classList.add('scroller');
    } else {
      line_scroll.classList.remove('scroller');
    }
    if (window.scrollY >= panelOffset) {
      document.body.classList.add('fixed-panel');
    } else {
      document.body.classList.remove('fixed-panel');
    }
  });

  window.addEventListener('scroll', panelFixed, false);
})();

//Advantages block
(function() {
  // init controller
  var controller = new ScrollMagic.Controller(),
      tween      = new TimelineMax()
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
        .staggerFrom('.grid_item', .35, {autoAlpha: 0, scale: 1.1}, 0.2);
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
  var controller = new ScrollMagic.Controller(),
      tween      = new TimelineMax()
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
      .staggerFrom('.offers_item', .25, {autoAlpha: 0, scale: 1.1}, 0.2);

  var scene_item = new ScrollMagic.Scene({
    triggerElement: ".offers_grid",
    triggerHook: .85,
    offset: '-100px'
  })
  .setTween(tween_offers)
  .addTo(controller);
})();

// window.onscroll = function () {
//   var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
//   var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
//   var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//   if((documentHeight - clientHeight - 150) < scrollTop)
//   {
//     window.scrollBy(0, window.innerHeight);
//   }
// }
