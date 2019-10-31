$(document).ready(function() {

	$('input[type=checkbox]').change(function(e){
	   if ($('input[type=checkbox]:checked').length > 4) {
	        $(this).prop('checked', false)
	        alert("Виберіть від 1 до 4 варіантів");
	   }
	})

	$('input[name="phone"]').mask('+38 (999) 999-99-99');
	$('.age').mask('99.99.9999');

	$('.step-slide__title').each(function(index, el) {
		$(el).prepend('<div class="step-slide__title-counter">' + (index + 1) + '</div>');
	});

	for (var i = 0; i < $('.step-slide').length - 1; i++) {
		$('.step__extender').append('<div class="step__extender-item"></div>');
	};

	var progress = {
		current: ( 100 / ($('.step-slide').length - 1) ),
		total: $('.step-slide').length,
		width: ( 100 / ($('.step-slide').length - 1) ),
		process: doProgress
	};


	function doProgress () {}

	var testSlider = $('.test-slider').bxSlider({
		mode: 'fade',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next"><span>на наступний крок</span></div>',
		onSliderLoad: function (currentIndex) {
			// первоначальные стили
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.main-progress__extender').css('width', progress.width + '%');
		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			// активация кнопок
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');

			// изменение полосы загрузки
			progress.current += progress.width;
			$('.main-progress__extender').css('width', progress.current + '%');

			// изменение шага
			$('.step__extender-item').eq(newIndex).addClass('step__extender-item_active');
			$('.step__text span').html(newIndex + 1);

			// изменение заголовка в полосе загрузки
			if ( $('.main-progress__text').eq(newIndex).length != 0 ) {
				$('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
				$('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
			};

			var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');

			$(toTopDoc).animate({scrollTop: 0}, 0);

		}
	});

	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');
	});

	$('.field').on('change', function(event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');
	});

	$(document).ready(function() {

		 $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

			 var step1 = "",
			  step2 = "",
			  step3 = "",
			  step4 = "",
			  step5 = "",
			  step6 = "";

			 $('.pick-item').click(function() {

			  if($(this).closest('.step-slide').hasClass('step-slide-1')) {
					step1 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-1').attr('value', step1);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-2')) {
					step2 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-2').attr('value', step2);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-3')) {
					step3 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-3').attr('value', step3);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-4')) {
					step4 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-4').attr('value', step4);
			  }

				if($(this).closest('.step-slide').hasClass('step-slide-5')) {
					step5 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-5').attr('value', step5);
			  }

			  	if($(this).closest('.step-slide').hasClass('step-slide-6')) {
					step6 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-6').attr('value', step6);
			  }

			});

			$('.mm-page-3 input[name="square"]').change(function() {
			  step3 = $(this).val();
				$('.input-step-3').attr('value', step3);
				console.log(step3);
			});
			$('.mm-page-3 input[name="size"]').change(function() {
			  step3_1 = $(this).val();
	      $('.input-step-3_1').attr('value', step3_1);
				console.log(step3_1);
			});

			$('.answer-group').click(function() {
				soc = $(this).find('label').text();
			});
		});




	$('form').each(function(index, el) {
		$(el).validate({
			rules:{
				"phone":{ required:true }
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function() {
						testSlider.goToSlide( $('.step-slide').length - 1 );
						$('.header-line').slideUp(300);
						$('.progress-line').slideUp(300);
						//gtag('event','submit',{'event_category':'submit','event_action':'quiz'});
						fbq('track', 'Lead');
						//window.open('http://mandryk.kiev.ua/', '_blank');
					}
				});
			}
		});
	});
});
