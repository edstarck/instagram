// Sticky header
(function() {
  var panel       = document.querySelector('.menu'),
      panelOffset = panel.offsetTop;

  function panelFix() {
    if (window.scrollY >= panelOffset) {
      document.body.classList.add('fixed-panel');
    } else {
      document.body.classList.remove('fixed-panel');
    }
  }

  document.addEventListener('scroll', panelFix, false);
})();

//Advantages block
(function() {
  // init controller
  var controller = new ScrollMagic.Controller(),
      tween      = new TimelineMax()
        .from('.section_title', .35, {autoAlpha: 0, scale: 1.1});

  // build scene title
  var scene = new ScrollMagic.Scene({
    triggerElement: ".section",
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
