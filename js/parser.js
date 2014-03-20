$(document).ready(function(){
var address = document.getElementById('qrText').value;
$.ajax({
        url: "http://explorer.cryptopoolmining.com/chain/DigiByte/q/getreceivedbyaddress/"+address+"?format=jsonp",
        dataType: "jsonp",
        jsonpCallback: 'jsonp',
        success: function(data) {
           $('#displayRight').html(data+ " Total Resived");
        }
    });
});
