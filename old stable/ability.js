var val = 0;
var calculateAbilities = function(score)
{
	var scoreArray = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	var modArray = [-2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4];
	var pointArray = [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17];
	var jody = parseInt(score);
	var i = scoreArray.indexOf(jody);
	return [modArray[i], pointArray[i]];
};

var addThis = function()
{
	var str = parseInt($('body div#app div#scores table tr td span#strPts').text());
	var dex = parseInt($('body div#app div#scores table tr td span#dexPts').text());
	var con = parseInt($('body div#app div#scores table tr td span#conPts').text());
	var int1 = parseInt($('body div#app div#scores table tr td span#intPts').text());
	var wis = parseInt($('body div#app div#scores table tr td span#wisPts').text());
	var cha = parseInt($('body div#app div#scores table tr td span#chaPts').text());
	var total = val - (str + dex + con + int1 + wis + cha);
	$('body div#app div#scores table tbody td#remaining').text(total);
};

var racialMod = function(race)
{
	switch(race)
	{
		case "choose":
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(0);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(0);
			break;

		case "dwarf": //+2 Constitution, +2 Wisdom, –2 Charisma
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(2);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(2);
			$('body div#app div#scores table tr td span#racialCha').text(-2);
			break;

		case("elf"): //+2 Dexterity, +2 Intelligence, –2 Constitution
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(2);
			$('body div#app div#scores table tr td span#racialCon').text(-2);
			$('body div#app div#scores table tr td span#racialInt').text(2);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(0);
			break;

		case("gnome"): //+2 Constitution, +2 Charisma, –2 Strength
			$('body div#app div#scores table tr td span#racialStr').text(-2);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(2);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(2);
			break;

		case("helf"):
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(0);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(0);
			break;

		case("horc"):
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(0);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(0);
			break;

		case("half"): //+2 Dexterity, +2 Charisma, –2 Strength
			$('body div#app div#scores table tr td span#racialStr').text(-2);
			$('body div#app div#scores table tr td span#racialDex').text(2);
			$('body div#app div#scores table tr td span#racialCon').text(0);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(2);
			break;

		case("human"):
			$('body div#app div#scores table tr td span#racialStr').text(0);
			$('body div#app div#scores table tr td span#racialDex').text(0);
			$('body div#app div#scores table tr td span#racialCon').text(0);
			$('body div#app div#scores table tr td span#racialInt').text(0);
			$('body div#app div#scores table tr td span#racialWis').text(0);
			$('body div#app div#scores table tr td span#racialCha').text(0);
			break;
	}
	/*
	var strP = parseInt($('#spinnerSTR').value());
	var dexP = parseInt($('#spinnerDEX').value());
	alert(dexP);
	var conP = parseInt($('body div#app div#scores table tr td span#conPts').text());
	var int1P = parseInt($('body div#app div#scores table tr td span#intPts').text());
	var wisP = parseInt($('body div#app div#scores table tr td span#wisPts').text());
	var chaP = parseInt($('body div#app div#scores table tr td span#chaPts').text());

	var rstr = parseInt($('body div#app div#scores table tr td span#racialStr').text());
	var rdex = parseInt($('body div#app div#scores table tr td span#racialDex').text());
	var rcon = parseInt($('body div#app div#scores table tr td span#racialCon').text());
	var rint = parseInt($('body div#app div#scores table tr td span#racialInt').text());
	var rwis = parseInt($('body div#app div#scores table tr td span#racialWis').text());
	var rcha = parseInt($('body div#app div#scores table tr td span#racialCha').text());

	var sPts = strP + (rstr);
	$('body div#app div#scores table tr td span#actualStrPts').text(sPts);
	var dPts = dexP + (rdex);
	alert(dPts);
	$('body div#app div#scores table tr td span#actualDexPts').text(dPts);
	*/
};

var resetApp = function()
{
	$('.thisSpinner').spinner("value", 10);
	var strength = calculateAbilities(10);
	$('span.toChange').html(strength[0]);
	$('td#remaining').text(val);	
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
	  	$('div#scores').slideDown('slow');
	  	resetApp();
	});

	/*
	$('.thisSpinner').spinner({ max: 18, min: 7});
	$('.thisSpinner').bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#strMod").html(strength[0]);
 		$("#strPts").html(strength[1]);
 		addThis();
	});
	 */

 	$("#spinnerSTR").spinner({ max: 18, min: 7});
 	$("#spinnerSTR").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#strMod").html(strength[0]);
 		$("#strPts").html(strength[1]);
 		addThis();
 	});

 	$( "#spinnerDEX" ).spinner({ max: 18, min: 7});
 	$("#spinnerDEX").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#dexMod").html(strength[0]);
 		$("#dexPts").html(strength[1]);
 		addThis();
 	}); 

 	$( "#spinnerCON" ).spinner({ max: 18, min: 7});
 	$("#spinnerCON").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#conMod").html(strength[0]);
 		$("#conPts").html(strength[1]);
 		addThis();
 	});

 	$( "#spinnerINT" ).spinner({ max: 18, min: 7});
  	$("#spinnerINT").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#intMod").html(strength[0]);
 		$("#intPts").html(strength[1]);
 		addThis();
 	});

 	$( "#spinnerWIS" ).spinner({ max: 18, min: 7});
   	$("#spinnerWIS").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#wisMod").html(strength[0]);
 		$("#wisPts").html(strength[1]);
 		addThis();
 	});

 	$( "#spinnerCHA" ).spinner({ max: 18, min: 7});
    	$("#spinnerCHA").bind("spinstop", function(){
		var strength = calculateAbilities(this.value);
 		$("#chaMod").html(strength[0]);
 		$("#chaPts").html(strength[1]);
 		addThis();
 	});

 });
