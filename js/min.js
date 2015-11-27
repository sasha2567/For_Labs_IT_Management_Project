var operanda, operandb;
var operation = 0;
var result;

function getData(){
	re = /^[\+\-\d]+$|^[\+\-\d]+\.[\d]+$/;
	if ($('#expr').val().match(re)) {
		if ($('#expr').val().match(re)[0]) {
			return parseFloat($('#expr').val());	
		}
	}
	return null;
}

function init () {
	$('#res').on('click', function () {
		if(operation < 5 && operation > 0){
			operandb = getData();

			switch(operation){
				case 1: result = operanda + operandb; break;
				case 2: result = operanda - operandb; break;
				case 3: result = operanda * operandb; break;
				case 4: result = operanda / operandb; break;
			}
			$('#expr').val(result);
		}
	});

	$('#nul').on('click', function () {		
		$('#expr').val("");
	});

	$('#point').on('click', function () {		
		$('#expr').val($('#expr').val() + '.');
	});

	$('#zero').on('click', function () {		
		$('#expr').val($('#expr').val() + '0');
	});

	$('#one').on('click', function () {		
		$('#expr').val($('#expr').val() + '1');
	});

	$('#two').on('click', function () {		
		$('#expr').val($('#expr').val() + '2');
	});

	$('#three').on('click', function () {		
		$('#expr').val($('#expr').val() + '3');
	});

	$('#four').on('click', function () {		
		$('#expr').val($('#expr').val() + '4');
	});

	$('#five').on('click', function () {		
		$('#expr').val($('#expr').val() + '5');
	});

	$('#six').on('click', function () {		
		$('#expr').val($('#expr').val() + '6');
	});

	$('#seven').on('click', function () {		
		$('#expr').val($('#expr').val() + '7');
	});

	$('#eight').on('click', function () {		
		$('#expr').val($('#expr').val() + '8');
	});

	$('#nine').on('click', function () {		
		$('#expr').val($('#expr').val() + '9');
	});

	$('#rev').on('click', function () {		
		temp = getData();
		if(temp != null)
		{
				temp = - temp;
		}
		$('#expr').val(temp);
	});

	$('#obr').on('click', function () {		
		tempObr = getData();
		if(tempObr != null)
		{
				tempObr = 1 / tempObr;
		}
		$('#expr').val(tempObr);
	});

	$('#sum').on('click', function () {
		operation = 1;
		operanda = getData();
		$('#expr').val("");
	});



	$('#sub').on('click', function () {
		operation = 2;
		operanda = getData();
		$('#expr').val("");
	});

	$('#mult').on('click', function () {
		operation = 3;
		operanda = getData();
		$('#expr').val("");
	});



	$('#div').on('click', function () {
		operation = 4;
		operanda = getData();
		$('#expr').val("");
	});


	$('#sqr').on('click', function () {
		operanda = getData();
		$('#expr').val(operanda * operanda);
	});


	$('#sqrt').on('click', function () {
		operanda = getData();
		$('#expr').val(Math.sqrt(operanda));
	});

	$('#sin').on('click', function () {
		operanda = getData();
		$('#expr').val(Math.sin(operanda));
	});


	$('#cos').on('click', function () {
		operanda = getData();
		$('#expr').val(Math.cos(operanda));
	});


	$('#tan').on('click', function () {
		operanda = getData();
		$('#expr').val(Math.tan(operanda));
	});
}