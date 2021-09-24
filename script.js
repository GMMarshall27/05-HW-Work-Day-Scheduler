//set current
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHour = moment().format('H');
var input = $('textarea');

input.each(function(i){
    if(currentHour > i+8){$(this).addClass('past')}
    else if(currentHour == i+8){$(this).addClass('present')}
    else if(currentHour < i+8){$(this).addClass('future')}
});

$('#save').on('click',function(){
    //debugger
    var textarea = $('#hr8').val();
    localStorage.setItem('hr8',textarea);
})
    
$('#save2').on('click',function(){
    var textarea = $('#hr9').val();
    localStorage.setItem('hr9',textarea);
})
$('#save3').on('click',function(){
    var textarea = $('#hr10').val();
    localStorage.setItem('hr10',textarea);
})
$('#save4').on('click',function(){
    var textarea = $('#hr11').val();
    localStorage.setItem('hr11',textarea);
})
$('#save5').on('click',function(){
    var textarea = $('#hr12').val();
    localStorage.setItem('hr12',textarea);
})
$('#save6').on('click',function(){
    var textarea = $('#hr13').val();
    localStorage.setItem('hr13',textarea);
})
$('#save7').on('click',function(){
    var textarea = $('#hr14').val();
    localStorage.setItem('hr14',textarea);
})
$('#save8').on('click',function(){
    var textarea = $('#hr15').val();
    localStorage.setItem('hr15',textarea);
})
$('#save9').on('click',function(){
    var textarea = $('#hr16').val();
    localStorage.setItem('hr16',textarea);
})
$('#save10').on('click',function(){
    var textarea = $('#hr17').val();
    localStorage.setItem('hr17',textarea);
})