// Flat Countdown
// Version 1.01  06/07/2015
// by Camilo Romero at http://github.com/kmorope

 
 function flatCountdown(dateTime, id)
    {
        var endDate = new Date(dateTime);
        var seconds = 1000;
        var minutes = seconds * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var timer;

        function calcRemainingDate() {
            var nowDate = new Date();
            var difference = endDate - nowDate;
            if (difference < 0) {
                clearInterval(timer);
                $('#'+id+' #day').text("00");
                $('#'+id+' #hour').text("00");
                $('#'+id+' #minute').text("00");
                $('#'+id+' #second').text("00"); 
                return;
            }

            var dd = Math.floor(difference / days);
            var hh = Math.floor((difference % days) / hours);
            var mm = Math.floor((difference % hours) / minutes);
            var ss = Math.floor((difference % minutes) / seconds);

            $('#'+id+' #day').text(dd);
            $('#'+id+' #hour').text(hh);
            $('#'+id+' #minute').text(mm);
            if (ss < 10)
                $('#'+id+' #second').text("0" + ss); 
            else
                $('#'+id+' #second').text(ss); 
        }

        timer = setInterval(calcRemainingDate, 1000);
    }