function getCurrentDayOfWeek() {
	var todaysDate = new Date();
	var dayOfWeek = todaysDate.getDay();
	switch(dayOfWeek) {
		case 0:
			dayOfWeek = "Sunday";
			break;
		case 1:
			dayOfWeek = "Monday";
			break;
		case 2:
			dayOfWeek = "Tuesday";
			break;
		case 3:
			dayOfWeek = "Wednesay";
			break;
		case 4:
			dayOfWeek = "Thursday";
			break;
		case 5:
			dayOfWeek = "Friday";
			break;
		case 6:
			dayOfWeek = "Saturday";
			break;
		default:
			dayOfWeek = "";
			break;
	}
	return dayOfWeek;
}

function getCurrentDate() {
	var todaysDate = new Date();
	return todaysDate.getDate();
}

function getCurrentMonthName() {
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var todaysDate = new Date();
	return months[todaysDate.getMonth()];
}

function getCurrentYear() {
	var todaysDate = new Date();
	return todaysDate.getFullYear();
}

function getDayOfWeekOfDate(inMonth,inDay,inYear) {
	var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var workingDate = new Date(inYear, inMonth-1, inDay);
	return daysOfWeek[workingDate.getDay()];
}

function getDateOfDate(inMonth,inDay,inYear) {
	var workingDate = new Date(inYear, inMonth-1, inDay);
	return workingDate.getDate();
}

function getMonthOfDate(inMonth,inDay,inYear) {
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var workingDate = new Date(inYear, inMonth-1, inDay);
	return months[workingDate.getMonth()];
}

function getYearOfDate(inMonth,inDay,inYear) {
	var workingDate = new Date(inYear, inMonth-1, inDay);
	return workingDate.getFullYear();
}

function getDayOfWeek() {
	return getCurrentDayOfWeek();
}

function getMonthName() {
	return getCurrentMonthName();
}

function getDayNumber() {
	return getCurrentDate();
}

function getYear() {
	return getCurrentYear();
}
