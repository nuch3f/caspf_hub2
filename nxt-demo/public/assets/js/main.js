$(function(){

	/*---------------
	 * COMMON
	 *---------------*/
	 if($('.l-header').length > 0){
			// header
			var $header = $('header'),
	      headerHeight  = $header.outerHeight(),
	      startPos = 0;

	    $(window).on('load scroll', function() {
		    var mv_height = $('.p-top_mv').height();
		    if ( $(window).scrollTop() > mv_height ) {
		    	$header.addClass("is-fixed");
		    } else {
		    	$header.removeClass("is-fixed");
		    }
		  });
		
			// sp menu
			$('.menu-btn').on('click', function(){
				$('.menu-btn, .l-header_spmenu').toggleClass("active");
			});
			$('.p-mh--header_spmenu-item').on('click', function(){
				$('.menu-btn, .l-header_spmenu').removeClass("active");
			});
		}




	/*---------------
	 * artwork
	 *---------------*/
	// lightcase
	if($('.p-artwork_item').length > 0){
		$('a[data-rel^=lightcase]').lightcase({
			maxHeight: 800,
		});
	}

	/*---------------
	 * itaco LP
	 *---------------*/
	 if($('.p-itc').length > 0){
	 	var scroll = new SmoothScroll('a[href*="#"]');
	 	//faq 
    $('.faq_title').on('click', function(){
    	$(this).toggleClass("open");
    	$(this).next().slideToggle();
    });
    // fadein
    $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
      });
      var topBtn = $('#btn_area');    
        if ($(window).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	 }
	
	/*---------------
	 * madhumui LP
	 *---------------*/

	if($('.p-mh').length > 0){
		// header
		var $header = $('header'),
      headerHeight  = $header.outerHeight(),
      startPos = 0;

    $(window).on('load scroll', function() {
	    var mv_height = $('.p-mh_mv').height();
	    if ( $(window).scrollTop() > mv_height ) {
	    	$header.addClass("is-fixed");
	    } else {
	    	$header.removeClass("is-fixed");
	    }
	  });
	
		// sp menu
		$('.p-mh_header--menubtn').on('click', function(){
			$('.menubtn_inner, .p-mh_header--menu').toggleClass("active");
		});
		$('.p-mh--header_spmenu-item, .p-mh_header--menu_list-item').on('click', function(){
			$('.menubtn_inner, .p-mh_header--menu').removeClass("active");
		});

		// character
		// $('.p-mh_chara--item').on('click', function(){
		// 	var datanum = $(this).data('no');
		// 	var monitor = $('.p-mh_chara--monitor_profile');
		// 	var imgpath = $('.p-mh_chara--monitor_img').children('img');
		// 	var imgsrc = imgpath.attr('src');
		// 	var chgpath = imgsrc.replace(/chara0\d/, "chara0"+datanum);
		// 	imgpath.attr('src', chgpath);
		// 	$('.p-mh_chara--item').removeClass("active");
		// 	monitor.removeClass("active");
		// 	$(this).addClass("active");
		// 	monitor.eq(datanum - 1).addClass("active");
		// });
		if($('.p-mh_chara--slider').length > 0){
			var subswiper = new Swiper(".p-mh_chara--thumb", {
	        slidesPerView: 8,
	        spaceBetween: 10,
	        // grid: {
	        //   rows: 2,
	        // },
	        breakpoints: {
				  // when window width is >= 320px
				  320: {
				    slidesPerView: 3.5,
				    spaceBetween: 10
				  },
				  // when window width is >= 480px
				  480: {
				    slidesPerView: 3.5,
				    spaceBetween: 10
				  },
				  // when window width is >= 640px
				  640: {
				    slidesPerView: 8,
				    spaceBetween: 10
				  }
				}
	    });
	    var mainswiper = new Swiper(".p-mh_chara--slider", {
	    	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	      thumbs: {
	        swiper: subswiper
	      }
	    });
	  }

    // Hero BG video
    if($('.p-mh_mv').length > 0){
	    $('.p-mh_mv').vide({
			  'mp4': '../../assets/img/games/madhumui/video/madhumui_pv3',
			  'poster': '../../assets/img/games/madhumui/video/hero'
			}, {
				loop: true,
			  autoplay: true,
			  position: '50% 50%',
			  resizing: true,
			});
	  }

	}



});