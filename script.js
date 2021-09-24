//set current
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHour = moment().format('H');
var input = $('textarea');
var button = $('.saveBtn');

input.each(function(i){
    if(currentHour > i+8){$(this).addClass('past')}
    else if(currentHour == i+8){$(this).addClass('present')}
    else if(currentHour < i+8){$(this).addClass('future')}
});