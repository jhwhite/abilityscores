//var val = 0;
var calculateAbilities = function(score)
{
	var scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
	var modArray = [-5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17];
	var pointArray = [0, 0, 0, 0, 0, 0, -4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17, 0, 0];
	var jody = parseInt(score);
	var i = scoreArray.indexOf(jody);
	return [modArray[i], pointArray[i]];
};

var remainingPoints = function(val)
{
	var total = 0;
	$('.points').each(function(){
		total = total + parseInt($(this).text());
	});
	total = val - (total);
	$('body div#app div#scores table tbody td#remaining').text(total);
};

var calculateRacials = function()
{
	var check = $('td#racials').html();
	if(check.length == 83)
	{
		var rstr = parseInt($('input#otherSTR').val());
		var rdex = parseInt($('input#otherDEX').val());
		var rcon = parseInt($('input#otherCON').val());
		var rint = parseInt($('input#otherINT').val());
		var rwis = parseInt($('input#otherWIS').val());
		var rcha = parseInt($('input#otherCHA').val());
	}

	else {
		/**************************************************************
		Gets the value of the racial modifier (Racial Trait)
		**************************************************************/
		//console.log($('td#racials').html());
		var rstr = parseInt($('span#racialStr').text());
		var rdex = parseInt($('span#racialDex').text());
		var rcon = parseInt($('span#racialCon').text());
		var rint = parseInt($('span#racialInt').text());
		var rwis = parseInt($('span#racialWis').text());
		var rcha = parseInt($('span#racialCha').text());
	}

	/*************************************************************
	Gets the value of the spinner (Points)
	*************************************************************/
	var strP = parseInt($('#spinnerSTR').spinner("value"));
	var dexP = parseInt($('#spinnerDEX').spinner("value"));
	var conP = parseInt($('#spinnerCON').spinner("value"));
	var int1P = parseInt($('#spinnerINT').spinner("value"));
	var wisP = parseInt($('#spinnerWIS').spinner("value"));
	var chaP = parseInt($('#spinnerCHA').spinner("value"));



	/*************************************************************
	Actual Points = Points + Racial Trait
	Then put that into the actual point column
	**************************************************************/

	var sPts = strP + (rstr);
	$('span#actualStrPts').text(sPts);
	var dPts = dexP + (rdex);
	$('span#actualDexPts').text(dPts);
	var cPts = conP + (rcon);
	$('span#actualConPts').text(cPts);
	var iPts = int1P + (rint);
	$('span#actualIntPts').text(iPts);
	var wPts = wisP + (rwis);
	$('span#actualWisPts').text(wPts);
	var chaPts = chaP + (rcha);
	$('span#actualChaPts').text(chaPts);

	/*****************************************************************************
	pass the actual points to calculate abilities and store in actual array
	get the first index in the array (the mod) and insert into the correct cell 
	******************************************************************************/
	var actualStr = calculateAbilities(sPts);
	$("#actualStrMod").html(actualStr[0]);
	var actualDex = calculateAbilities(dPts);
	$("#actualDexMod").html(actualDex[0]);
	var actualcon = calculateAbilities(cPts);
	$("#actualConMod").html(actualcon[0]);
	var actualInt = calculateAbilities(iPts);
	$("#actualIntMod").html(actualInt[0]);
	var actualWis = calculateAbilities(wPts);
	$("#actualWisMod").html(actualWis[0]);
	var actualCha = calculateAbilities(chaPts);
	$("#actualChaMod").html(actualCha[0]);

};

var racialMod = function(race)
{
	if(race=="other")
	{
		$('td#racials').html('<input size="3" id="otherSTR" value="0" onchange="javascript: calculateRacials();" />');
		$('td#raciald').html('<input size="3" id="otherDEX" value="0" onchange="javascript: calculateRacials();" />');
		$('td#racialc').html('<input size="3" id="otherCON" value="0" onchange="javascript: calculateRacials();" />');
		$('td#raciali').html('<input size="3" id="otherINT" value="0" onchange="javascript: calculateRacials();" />');
		$('td#racialw').html('<input size="3" id="otherWIS" value="0" onchange="javascript: calculateRacials();" />');
		$('td#racialcha').html('<input size="3" id="otherCHA" value="0" onchange="javascript: calculateRacials();" />');

	}
	else if (race=="human" || race=="horc" || race=="helf") {
		$('td#racials').html('<input type="radio" name="plusTwo" value="s" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialStr"> 0</span>');
		$('td#raciald').html('<input type="radio" name="plusTwo" value="d" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialDex"> 0</span>');
		$('td#racialc').html('<input type="radio" name="plusTwo" value="c" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialCon"> 0</span>');
		$('td#raciali').html('<input type="radio" name="plusTwo" value="i" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialInt"> 0</span>');
		$('td#racialw').html('<input type="radio" name="plusTwo" value="w" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialWis"> 0</span>');
		$('td#racialcha').html('<input type="radio" name="plusTwo" value="ch" onclick="javascript: setSomeRacials(this.value);"></input> <span class="toChange" id="racialCha"> 0</span>');
		calculateRacials();
	}// end if statement
	else {
		switch(race)
		{
			case "choose":
				$('td#racials').html('<span class="toChange" id="racialStr"> 0</span>');
				$('td#raciald').html('<span class="toChange" id="racialDex"> 0</span>');
				$('td#racialc').html('<span class="toChange" id="racialCon"> 0</span>');
				$('td#raciali').html('<span class="toChange" id="racialInt"> 0</span>');
				$('td#racialw').html('<span class="toChange" id="racialWis"> 0</span>');
				$('td#racialcha').html('<span class="toChange" id="racialCha"> 0</span>');
				break;

			case "dwarf": //+2 Constitution, +2 Wisdom, –2 Charisma
				$('td#racials').html('<span class="toChange" id="racialStr"> 0</span>');
				$('td#raciald').html('<span class="toChange" id="racialDex"> 0</span>');
				$('td#racialc').html('<span class="toChange" id="racialCon"> 2</span>');
				$('td#raciali').html('<span class="toChange" id="racialInt"> 0</span>');
				$('td#racialw').html('<span class="toChange" id="racialWis"> 2</span>');
				$('td#racialcha').html('<span class="toChange" id="racialCha"> -2</span>');
				break;

			case("elf"): //+2 Dexterity, +2 Intelligence, –2 Constitution
				$('td#racials').html('<span class="toChange" id="racialStr"> 0</span>');
				$('td#raciald').html('<span class="toChange" id="racialDex"> 2</span>');
				$('td#racialc').html('<span class="toChange" id="racialCon"> -2</span>');
				$('td#raciali').html('<span class="toChange" id="racialInt"> 2</span>');
				$('td#racialw').html('<span class="toChange" id="racialWis"> 0</span>');
				$('td#racialcha').html('<span class="toChange" id="racialCha"> 0</span>');
				break;

			case("gnome"): //+2 Constitution, +2 Charisma, –2 Strength
				$('td#racials').html('<span class="toChange" id="racialStr"> -2</span>');
				$('td#raciald').html('<span class="toChange" id="racialDex"> 0</span>');
				$('td#racialc').html('<span class="toChange" id="racialCon"> 2</span>');
				$('td#raciali').html('<span class="toChange" id="racialInt"> 0</span>');
				$('td#racialw').html('<span class="toChange" id="racialWis"> 0</span>');
				$('td#racialcha').html('<span class="toChange" id="racialCha"> 2</span>');
				break;

			case("half"): //+2 Dexterity, +2 Charisma, –2 Strength
				$('td#racials').html('<span class="toChange" id="racialStr"> -2</span>');
				$('td#raciald').html('<span class="toChange" id="racialDex"> 2</span>');
				$('td#racialc').html('<span class="toChange" id="racialCon"> 0</span>');
				$('td#raciali').html('<span class="toChange" id="racialInt"> 0</span>');
				$('td#racialw').html('<span class="toChange" id="racialWis"> 0</span>');
				$('td#racialcha').html('<span class="toChange" id="racialCha"> 2</span>');
				break;
		}//end switch
		calculateRacials();
	}//end else
}; //end function

var setSomeRacials = function(value)
{
	switch(value)
	{
		case("s"):
			$('span#racialStr').text(2);
			$('span#racialDex').text(0);
			$('span#racialCon').text(0);
			$('span#racialInt').text(0);
			$('span#racialWis').text(0);
			$('span#racialCha').text(0);
			break;

		case("d"):
			$('span#racialStr').text(0);
			$('span#racialDex').text(2);
			$('span#racialCon').text(0);
			$('span#racialInt').text(0);
			$('span#racialWis').text(0);
			$('span#racialCha').text(0);
			break;

		case("c"):
			$('span#racialStr').text(0);
			$('span#racialDex').text(0);
			$('span#racialCon').text(2);
			$('span#racialInt').text(0);
			$('span#racialWis').text(0);
			$('span#racialCha').text(0);
			break;

		case("i"):
			$('span#racialStr').text(0);
			$('span#racialDex').text(0);
			$('span#racialCon').text(0);
			$('span#racialInt').text(2);
			$('span#racialWis').text(0);
			$('span#racialCha').text(0);
			break;

		case("w"):
			$('span#racialStr').text(0);
			$('span#racialDex').text(0);
			$('span#racialCon').text(0);
			$('span#racialInt').text(0);
			$('span#racialWis').text(2);
			$('span#racialCha').text(0);
			break;

		case("ch"):
			$('span#racialStr').text(0);
			$('span#racialDex').text(0);
			$('span#racialCon').text(0);
			$('span#racialInt').text(0);
			$('span#racialWis').text(0);
			$('span#racialCha').text(2);
			break;
	}
	calculateRacials();

};

var resetApp = function()
{
	$('.thisSpinner').spinner("value", 10);
	var strength = calculateAbilities(10);
	$('span.toChange').html(strength[0]);
	$('td#remaining').text(val);
	$('span.change').html('10');
	$('#race').val("choose");
	racialMod("choose");
};

 $(document).ready(function() {

 	$( "#radio" ).buttonset();
 	//$("button").button();

 	$('#reset').click(function(){
 		resetApp();
 	});

  	$('div#scores').hide();

	$('input:radio[name=radio]').click(function() {
	  	val = $('input:radio[name=radio]:checked').val();
	  	if (val=="other") {
	  		val = prompt("Number of points?");
	  	};
	  	$('div#scores').slideDown('slow');
	  	//resetApp();
	  	remainingPoints(val);
	});

	/*
	$('.thisSpinner').spinner({ max: 18, min: 7});
	$('.thisSpinner').bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#strMod").html(strength[0]);
 		$("#strPts").html(strength[1]);
 		remainingPoints();
	});
	 */


 	$("#spinnerSTR").spinner({ max: 18, min: 7}).val(10);
 	$("#spinnerSTR").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#strMod").html(strength[0]);
 		$("#strPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	});

 	$( "#spinnerDEX" ).spinner({ max: 18, min: 7}).val(10);
 	$("#spinnerDEX").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#dexMod").html(strength[0]);
 		$("#dexPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	}); 

 	$( "#spinnerCON" ).spinner({ max: 18, min: 7}).val(10);
 	$("#spinnerCON").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#conMod").html(strength[0]);
 		$("#conPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	});

 	$( "#spinnerINT" ).spinner({ max: 18, min: 7}).val(10);
  	$("#spinnerINT").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#intMod").html(strength[0]);
 		$("#intPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	});

 	$( "#spinnerWIS" ).spinner({ max: 18, min: 7}).val(10);
   	$("#spinnerWIS").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#wisMod").html(strength[0]);
 		$("#wisPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	});

 	$( "#spinnerCHA" ).spinner({ max: 18, min: 7}).val(10);
    	$("#spinnerCHA").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#chaMod").html(strength[0]);
 		$("#chaPts").html(strength[1]);
 		remainingPoints(val);
 		calculateRacials();
 	});

 });
