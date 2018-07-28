window.displayTime = function(time){
  var string = time.time + ' ' + time.suffix;
  $('clock').text(string);
}


$.get('http://nist.gov/api/time.json', displayTime)

$.ajax({
  url: 'http://nist.gov/api/time.json',
  type: 'GET',
  dataType: 'jsonp',
  success: 'displayTime',
})