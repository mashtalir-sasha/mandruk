$(document).ready(function() {

	// var timerId = 0;

	// $('#testModal').click(function(event) {
	// 	$('#iframeModal').arcticmodal({
	// 		container: {
	// 			tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i" style="width: 100%;max-width: 1170px;"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
	// 		},
	// 		beforeOpen: function (data, el) {
	// 			$('body').css('position', 'fixed');
	// 			$('#frameOpen').html('<iframe style="width: 100%;" src="index.html" scrolling="no" frameborder="0""></iframe>');

	// 			$('iframe').on('load', function(event) {
	// 				event.preventDefault();
	// 				frameHeight();
	// 			});

	// 			setTimeout(function() {
	// 				frameHeightRec();
	// 			}, 300);

	// 			$(window).on('resize', function() {
	// 				frameHeight();
	// 			});
	// 		},
	// 		afterClose: function () {
	// 			$('body').css('position', 'static');
	// 			$('#frameOpen').html('');
	// 			clearTimeout(timerId);
	// 			// console.log('clear');
	// 		}
	// 	});
	// });

	// function frameHeight () {
	// 	var height = $('iframe').contents().find('html').height();
	// 	$('iframe').height(height);
	// }

	// function frameHeightRec () {
	// 	var height = $('iframe').contents().find('html').height();
	// 	$('iframe').height(height);
	// 	timerId = setTimeout(function() {
	// 		frameHeightRec();
	// 	}, 100);
	// 	// console.log('call');
	// }

	$('input[name="phonee"]').mask('+7 (k99) 999-99-99');

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

	// console.log(progress);

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
		nextText: '<div class="btn-next"><span>на следующий шаг</span></div>',
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

			// console.log(toTopDoc);

			$(toTopDoc).animate({scrollTop: 0}, 0);

		}
	});

	// testSlider.goToSlide(4);

	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');
	});

	$(document).ready(function() {
			 var step1 = "",
			  step2 = "",
			  step3 = "",
			  step4 = "",
			  step5 = "",
			  step6 = "",
			  step7 = "";

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

				if($(this).closest('.step-slide').hasClass('step-slide-7')) {
					step7 = $(this).find('.pick-item__label').text();
	      	$('.hidden-input-7').attr('value', step7);
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
	      console.log(soc);
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
					}
				});
			}
		});
	});
});
