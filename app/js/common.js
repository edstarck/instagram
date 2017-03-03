var controller  = new ScrollMagic.Controller(),
    firstScreen = document.querySelector('#first-screen'),
    advantages  = document.querySelector('#advantages'),
    offers      = document.querySelector('#offers'),
    callback    = document.querySelector('#callback'),
    buttonRow   = document.querySelector('.row_button'),
    menu        = document.querySelector('.menu');
    title       = document.querySelector('.title');

//First-screen
(function() {
  if (window.innerWidth >= 770) {
    //=========================
    //****** Screen scale *****
    //=========================
    var tween = new TimelineMax()
        .to('#first-screen .gradient', 20, {y: -(firstScreen.offsetHeight / 5)});

    new ScrollMagic.Scene({
      triggerElement: firstScreen,
      triggerHook: 0,
      offset: 80,
      duration: '45%'
    })
    .setTween(tween)
    .addTo(controller);

    //=========================
    //******* Menu Scroll *****
    //=========================
    var tweenMenu = new TimelineMax()
        .to(menu, 20, {y: -(firstScreen.offsetHeight / 5)});

    new ScrollMagic.Scene({
      triggerElement: firstScreen,
      triggerHook: 0,
      offset: 80,
      duration: '45%'
    })
    .setTween(tweenMenu)
    .addTo(controller);

    //=========================
    //***** Button Scroll *****
    //=========================
    var tweenButton = new TimelineMax()
        .to(buttonRow, 20, {y: -80});

    new ScrollMagic.Scene({
      triggerElement: firstScreen,
      triggerHook: 0,
      offset: 100,
      duration: 200
    })
    .setTween(tweenButton)
    .addTo(controller)

    //=========================
    //******* Menu Fixed ******
    //=========================
    var scene = new ScrollMagic.Scene({
      triggerElement: menu,
      triggerHook: 0.2
    })
    .setPin(menu)
    .setClassToggle(menu,'menu--fixed')
    .addTo(controller)
  }
})();

//Scroll to id
(function() {
  var linkArr = document.querySelectorAll('.menu_link--scroll[href^="#"]');

  for(var i = 0; i < linkArr.length; i++) {
    linkArr[i].onclick = function(e) {
      e.preventDefault();
      var id = this.getAttribute('data-url');
      if (id === '#callback') {
        TweenMax.to(window, 1.2, {scrollTo: {y: id}, ease:Power2.easeOut});
      } else {
        TweenMax.to(window, 1.2, {scrollTo: {y: id, offsetY: 80}, ease:Power2.easeOut})
      }
    }
  }

  var tween = new TimelineMax()
      .to('.line_scroll', .4, {autoAlpha: 1, scaleX: 1});
  new ScrollMagic.Scene({
    triggerElement: advantages,
    duration: 80
  })
  .setTween(tween)
  .addTo(controller);

  var tweenScroll = new TimelineMax()
      .to('.line_scroll', 5, {x: 165, delay: 1});
  new ScrollMagic.Scene({
    triggerElement: advantages,
    duration: advantages.offsetHeight - 50,
    offset: 150
  })
  .setTween(tweenScroll)
  .addTo(controller);

  var tweenScrollEnd = new TimelineMax()
      .to('.line_scroll', 1, {autoAlpha: 1, scaleX: 0, delay: 1});
  new ScrollMagic.Scene({
    triggerElement: offers,
    triggerHook: 0.2,
    duration: offers.offsetHeight - 150,
    offset: 150
  })
  .setTween(tweenScrollEnd)
  .addTo(controller);
})();

//Advantages block
(function() {
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
  var tween = new TimelineMax()
      .to('.gradient--menu', 10, {y: -80});
  new ScrollMagic.Scene({
    triggerElement: callback,
    triggerHook: 0,
    offset: -60,
    duration: 79,
  })
  .setTween(tween)
  .addTo(controller);
})();