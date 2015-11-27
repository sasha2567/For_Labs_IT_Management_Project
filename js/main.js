function init () {
	// Добавление нового числа
	$('#add').on('click', function () {
		re = /^[\-]{0,1}[\d]+$|^[\-]{0,1}[\d]+\.[\d]+$/;

		if ($('#expr').val().match(re)) {
			if ($('#expr').val().match(re)[0]) {
				$('body').append("<p class='number'>" + $('#expr').val() + '</p>');

				$('.number').each(function () {
					$(this).off('click');

					$(this).on('click', function () {
						if ($(this).hasClass('selected')) {
							$(this).removeClass('selected').css('background-color', 'white');
						} else {
							$(this).addClass('selected').css('background-color', 'gray');

						}
					});
				}
				);
				// Автоматическое выделение
				if ($('#select_auto').prop('checked')) {
					$('.number').last().click();
				}

			}
		}

	});

	$('#min').on('click', function () {
		min = parseFloat($('.selected').first().text());

		$('.selected').each(function () {
      
			if ($(this).text() <= min) {
				min = parseFloat($(this).text());
			}
		});

		$('#expr').val(min);
	});

	$('#average').on('click', function () {
		sum = 0;

		$('.selected').each(function () {
			sum += parseFloat($(this).text());
		});

		$('#expr').val(sum / $('.selected').length);
	});

	$('#delete').on('click', function () {
		$('.selected').remove();
	});

	$('#max').on('click', function () {
		max = parseFloat($('.selected').first().text());

		$('.selected').each(function () {
			if ($(this).text() >= max) {
				max = parseFloat($(this).text());
			}
		});

		$('#expr').val(max);
	});
	
	$('#zero').on('click', function () {
		text = "до нуля: ";
		var flag = 1;
		$('.selected').each(function () {
			if(flag == 1){
				if (parseFloat($(this).text()) != 0) {
					text += parseFloat($(this).text()) + "; ";
				}
				if (parseFloat($(this).text()) == 0) {
					flag = 2;
					return;
				}
			}
		});
		$('#expr').val(text);
	});
}