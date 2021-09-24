//set current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
//checks for current hour of day
var currentHour = moment().format('H');
var input = $('textarea');
//function changes color of text area based off time
input.each(function(i){
    if(currentHour > i+8){$(this).addClass('past')}
    else if(currentHour == i+8){$(this).addClass('present')}
    else if(currentHour < i+8){$(this).addClass('future')}
});
// functions for each hour to save to local storage
$('#8am').on('click',function(){
    var textarea = $('#hr8').val();
    localStorage.setItem('hr8',textarea);
})
    
$('#9am').on('click',function(){
    var textarea = $('#hr9').val();
    localStorage.setItem('hr9',textarea);
})
$('#10am').on('click',function(){
    var textarea = $('#hr10').val();
    localStorage.setItem('hr10',textarea);
})
$('#11am').on('click',function(){
    var textarea = $('#hr11').val();
    localStorage.setItem('hr11',textarea);
})
$('#12pm').on('click',function(){
    var textarea = $('#hr12').val();
    localStorage.setItem('hr12',textarea);
})
$('#1pm').on('click',function(){
    var textarea = $('#hr13').val();
    localStorage.setItem('hr13',textarea);
})
$('#2pm').on('click',function(){
    var textarea = $('#hr14').val();
    localStorage.setItem('hr14',textarea);
})
$('#3pm').on('click',function(){
    var textarea = $('#hr15').val();
    localStorage.setItem('hr15',textarea);
})
$('#4pm').on('click',function(){
    var textarea = $('#hr16').val();
    localStorage.setItem('hr16',textarea);
    
})
$('5pm').on('click',function(){
    
   var textarea = $('#hr17').val();
   localStorage.setItem('hr17',textarea);
   
})
//function to run through arrays of saved data to keep it on the page after a refresh
function init(){
    savedInput();

    function savedInput(){
        var input = [];
        var saved = Object.keys(localStorage),
        i = saved.length;
        
        while(i--) {
            var reload = localStorage.getItem(saved[i])
            
            input.unshift(reload);
        }
        inputValues(input,saved);
        return input;
    }
    
    function inputValues(input,saved){
        for ( var i =0; i < saved.length; i++ ) {
            $('#'+saved[i]).val(input[i])
        }

    }
}

init()
