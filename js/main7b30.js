function fullpageInitAndDestroy(watch){
    var mql = window.matchMedia('all and (min-width: 1367px)');
    var mql_h = window.matchMedia('all and (min-height: 797px)');
    if(!watch){
        if (mql.matches && mql_h.matches) {
          if($('#fullpage')){
            $('#fullpage').fullpage({
                licenseKey: '4E25228B-7C8B4585-A791A885-52CF92B7',
                autoScrolling: true,
                navigation: true,
				scrollHorizontally: false,
                navigationPosition: 'right',
                anchors: ['home', 'about-the-project', 'How-to-start-playing', 'news', 'footer'],
                menu: '#myMenu'
            });
          }
            var scene = document.getElementById('scene');
            if (scene){
                var parallaxInstance = new Parallax(scene);
            } 
			var scene2 = document.getElementById('scene2');
            if (scene2){
                var parallaxInstance = new Parallax(scene2);
            }
        }else{
          if($('#fullpage')){
            $('#fullpage').fullpage({
                licenseKey: '4E25228B-7C8B4585-A791A885-52CF92B7',
                autoScrolling: false,
				scrollHorizontally: false,
				loopHorizontal: false,
				continuousHorizontal: false,
				scrollOverflow: false,
                navigation: false,
                anchors: ['home', 'about-the-project', 'How-to-start-playing', 'news', 'footer'],
                menu: '#myMenu'
            });
          }
        }
    }else{
        if (mql.matches && mql_h.matches) {
            fullpage_api.reBuild();
        }else{
            fullpage_api.destroy('all');
        }
    }
}



	
$(function() {

    $(".js-controller").fastmark({controlledclass: 'active'});
    fullpageInitAndDestroy(false);

    $(window).scroll(function(){
      if($(window).scrollTop() > 50){
        $('.header').addClass('scrolled');
      }else{
        $('.header').removeClass('scrolled');
      }
    });

    $('.nav__link').click(function(){
      $('.header__links').removeClass('active');
    });
	
});