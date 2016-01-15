


setInterval(function(){
	var date1 = new Date();
	var date2 = new Date("12/31/2016");
	var timeDiff = Math.abs(date1.getTime() - date2.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	var diffHr = Math.ceil(timeDiff / (1000 * 3600 )); 
	var diffMin = Math.ceil(timeDiff / (1000*60)); 
	var diffSec = Math.ceil(timeDiff / (1000)); 
	document.getElementById("miliseconds").innerHTML= timeDiff;
	document.getElementById("seconds").innerHTML= diffSec;
	document.getElementById("minutes").innerHTML= diffMin;
	document.getElementById("hours").innerHTML= diffHr;
	document.getElementById("day").innerHTML= diffDays;
}, 1);