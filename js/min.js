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
	$('#nul').on('click', function () {		
		$('#expr').val("");
	});

	
	$('#rev').on('click', function () {		
		temp = getData();
		if(temp != null)
		{
				temp = - temp;
		}
		$('#expr').val(temp);
	});


	$('#sum').on('click', function () {
		operation = 1;
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
}