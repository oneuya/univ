

$(function(){

  // 구글 : 제이쿼리 마우스휠 부드럽게 

  $(function() {

    $(this).impulse();
  
    $('body').impulse({effect: 'easeOutSine', fluid: false});
  });
  


    // 메인 첫 화면


    let main = gsap.timeline();

    main.from('.main-logo',{opacity:0,y:150},0.5)
    .from('.main-desc',{opacity:0, y:50})
    .addLabel('main')
    .from('.sticky-area .top-logo',{opacity:0},'main')
    .from('.fix-area',{opacity:0},'main')




    // 메인 인트로 섹션
    // 구글 : GSAP transform origin

    let intro = gsap.timeline({

      scrollTrigger: {
        trigger: '.header',
        scrub:1, 
        start: '0% 0%', 
        end: '80% 100%', 
        delay:5
    },
    });

    intro.from('.sc-intro .sticky-area',10,{ scaleY:0, scaleX:0, transformOrigin: 'right bottom', delay:2})
    .to('.header .sticky-area',6,{opacity:0})
    .from('.sc-intro .text-box',2,{opacity:0, y:50})





    // 이벤트 섹션 
    let event = gsap.timeline({

      scrollTrigger: {
        trigger: '.sc-event',
        scrub:3, 
        start: '-30% 0%', 
        end: '0% 100%', 
        stagger:0.5,
        
      },

    });
    event.addLabel('event')
    .from('.sc-event .title',{opacity:0, y:50, smooth: 10},'event')
    .from('.event-area',{opacity:0, y:50, smooth: 10},'event')



    // 멤버 섹션
    let membre = gsap.timeline({

      scrollTrigger: {
        trigger: '.sc-membre',
        scrub:3, 
        start: '-40% 0%', 
        end: '40% 100%', 
        stagger:1,
        
      },

    });

    membre.from('.sc-membre .title .fir',4,{opacity:0, y:150, smooth: 1})
    .from('.sc-membre .title .sec',4,{opacity:0, y:150, smooth: 1})
    .from('.sc-membre .title .change',4,{opacity:0, y:150, smooth: 1})
    .from('.sc-membre .title .thr',4,{opacity:0, y:150, smooth: 1})
    .addLabel('membre')
    .from('.sc-membre .membre-left',4,{opacity:0, y:50, smooth: 1},'membre')
    .from('.sc-membre .membre-right',4,{opacity:0, y:50, smooth: 1},'membre')


    //nouvelles 세션

    let nouvelles = gsap.timeline({

      scrollTrigger: {
        trigger: '.sc-nouvelles',
        scrub:3, 
        start: '-20% 0%', 
        end: '80% 100%', 
        stagger:10,
        
      },


    });

    nouvelles.addLabel('nouvelles')
    .from('.sc-nouvelles em',4,{opacity:0, smooth: 1},'nouvelles')
    .from('.sc-nouvelles .img-box',4,{opacity:0, smooth: 1},'nouvelles')
    .from('.sc-nouvelles .text-box .fir',4,{opacity:0, y:50, smooth: 1})
    .from('.sc-nouvelles .text-box .sec',4,{opacity:0, y:50, smooth: 1})
    .from('.sc-nouvelles .text-box .thr',4,{opacity:0, y:50, smooth: 1})
    .addLabel('nouvelles-last')
    .from('.sc-nouvelles .text-box .frd',4,{opacity:0, y:50, smooth: 1},'nouvelles-last')
    .from('.sc-nouvelles .text-box .link-box',4,{opacity:0, y:50, smooth: 1},'nouvelles-last')
    .addLabel('nouvelles-logo')
    .from('.sc-nouvelles .logo-box',4,{opacity:0, smooth: 2})
    .from('.sc-nouvelles .desc-box strong',8,{opacity:0, y:50, smooth: 1})
    .from('.sc-nouvelles .desc-box .desc',4,{opacity:0, smooth: 1})
    .from('.sc-nouvelles .desc-box .link-box',4,{opacity:0, smooth: 1})





    // GPT 제이쿼리 회전효과 구현

  /*   const logos = document.querySelectorAll('.logo-list');
  const centerX = window.innerWidth / 25;
  const centerY = window.innerHeight / 25;
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const radius = 100; // 원 운동의 반지름
    const speed = 0.01; // 로고가 회전하는 속도
  
    logos.forEach((logo, index) => {
      const angle = scrollY * speed + (index * (4 * Math.PI / logos.length));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
  
      logo.style.transform = `translate(${x}px, ${y}px)`;
    });
  }); */
/* 
  $(document).ready(function() {
    var images = $('.logo-item');
    var numImages = images.length;
    var containerWidth = $('.logo-list').width();
    var containerHeight = $('.logo-list').height();
    var radius = Math.min(containerWidth, containerHeight) / 2;

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var rotateAngle = scrollTop / 10;
      images.each(function(index) {
        var angle = rotateAngle + (index * 360 / numImages);
        var radian = angle * (Math.PI / 180);
        var translateX = radius * Math.cos(radian);
        var translateY = radius * Math.sin(radian);
        var translate = 'translate(-50%, -50%)';
        var rotate = 'rotate(' + angle + 'deg)';
        var transformValue = translate + ' ' + rotate + ' translate(' + translateX + 'px, ' + translateY + 'px)';
        $(this).css('transform', transformValue);
      });
    });

    // 초기 로드 시 회전 효과 적용
    var initialScrollTop = $(window).scrollTop();
    var rotateAngle = initialScrollTop / 10;
    images.each(function(index) {
      var angle = rotateAngle + (index * 360 / numImages);
      var radian = angle * (Math.PI / 180);
      var translateX = radius * Math.cos(radian);
      var translateY = radius * Math.sin(radian);
      var translate = 'translate(-50%, -50%)';
      var rotate = 'rotate(' + angle + 'deg)';
      var transformValue = translate + ' ' + rotate + ' translate(' + translateX + 'px, ' + translateY + 'px)';
      $(this).css('transform', transformValue);
    });
  });
 */

  //les 섹션
  
  let les = gsap.timeline({

    scrollTrigger: {
      trigger: '.sc-les',
      scrub:3, 
      start: '-50% 0%', 
      end: '40% 100%', 
      duration:1,
  
      
    },


  });

  les.from('.sc-les strong .fir',4,{opacity:0, y:50, smooth:2})
  .from('.sc-les strong .sec',4,{opacity:0, y:50, smooth:2})
  .from('.sc-les strong .thr',4,{opacity:0, y:50, smooth:2})
  .from('.sc-les span .fir',4,{opacity:0, y:50, smooth:2})
  .from('.sc-les span .sec',4,{opacity:0, y:50, smooth:2 })
  .from('.sc-les span .thr',4,{opacity:0, y:50, smooth:2})
  .from('.sc-les span .for',4,{opacity:0, y:50, smooth:2})

  

  // 991px footer 슬라이드메뉴
 
  $('.footer-bottom .list-mobile .title').click(function(){

    if ($(this).hasClass('on')) {
      $(this).removeClass('on').siblings('.footer-sub').slideUp()
    
      
    } else {
      $('.footer-bottom .list-mobile .title').removeClass('on').siblings('.footer-sub').slideUp()
      $(this).addClass('on').siblings('.footer-sub').slideDown()

    }

  })

     // 메인 사이드메뉴

  $('.fix-area .nav-menu').click(function(){

    let menu = gsap.timeline();
    menu.addLabel('side')
    .to(".sc-sticky .side-menu",{display:'block',opacity:1},'side')
    .to("body",{overflow: 'hidden'},'side')
    .from(".menu-area",{opacity:0,smooth: 10},'side')
    .from(".menu-right",1, {scaleY:0, scaleX:0, opacity:0, transformOrigin: 'right top'},'side')
    .from(".menu-left .logo", {opacity:0,delay:.5},'side')
    .from(".menu-left .title", {y:150, opacity:0,delay:.5},'side')
    .from(".menu-left .menu-list", {y:150, opacity:0,delay:.5},'side')

    })

    
    $('.menu-area .nav-menu').click(function(){

      let menu2 = gsap.timeline();
      menu2.addLabel('side')
      .to(".sc-sticky .side-menu",{display:'none',opacity:0},'side')
      .to("body",{overflow: 'auto'},'side')
      .fromTo(".menu-area",{opacity:0,smooth: 10},'side')
      .fromTo(".menu-right",1, {scaleY:0, scaleX:0, opacity:0, transformOrigin: 'right top'},'side')
      .fromTo(".menu-left .logo", {opacity:0,delay:.5},'side')
      .fromTo(".menu-left .title", {y:150, opacity:0,delay:.5},'side')
      .fromTo(".menu-left .menu-list", {y:0, opacity:0,delay:.5},'side')
      $('.side-menu').removeClass('on')
      $('body').removeClass('hidden')

    })


    //모바일 사이드메뉴 

    
  $('.fix-area-mobile .nav-menu').click(function(){

    let menu = gsap.timeline();
    menu.addLabel('side')
    .to(".sc-sticky .side-menu",{display:'block',opacity:1},'side')
    .to("body",{overflow: 'hidden'},'side')
    .from(".menu-area",{opacity:0,smooth: 10},'side')
    .from(".menu-right",1, {scaleY:0, scaleX:0, opacity:0, transformOrigin: 'right top'},'side')
    .from(".menu-left .logo", {opacity:0,delay:.5},'side')
    .from(".menu-left .title", {y:150, opacity:0,delay:.5},'side')
    .from(".menu-left .menu-list", {y:150, opacity:0,delay:.5},'side')

    })

    

    //모바일 사이드메뉴 서브 슬라이드

    
  $('.side-menu .menu-item a').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
      $(this).removeClass('on').siblings('.sub-list').removeClass('on')
    
      
    } else {
      $('.side-menu .menu-item a').removeClass('on').siblings('.sub-list').removeClass('on')
      $(this).addClass('on').siblings('.sub-list').addClass('on')

    }

  })



  // 모바일 스와이퍼  


    var swiper = new Swiper(".event-swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },

    });



})