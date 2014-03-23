$(document).ready(function(){
var coinAddress = document.getElementById('qrText').value;
var coinName = document.getElementById('qrText').name;
var coinURL = "";

    switch (coinName) {
        case "DigiByte":
            coinURL = "http://explorer.cryptopoolmining.com/chain/DigiByte/q/getreceivedbyaddress/";
            break
        case "Bitcoin":
            alert('NOT DONE YET');
            break
        default:
            alert('Visit http://morecoins.org/ and we will create button for your coin');
    }

    $('#donatebutton').click(function () {
        document.getElementById('qrText').select();
        $('#qrcode').toggleClass('button-active-top');
        $('#addbot').toggleClass('button-active-bottom');
        if ($("#displayRight").css("visibility") === "visible") {
            $("#displayRight").css("visibility", "hidden");
            $("#displayLeft").css("visibility", "hidden")} else {
            $("#displayRight").css("visibility", "visible");
            $("#displayLeft").css("visibility", "visible")
        }
    });

$.ajax({
        url: coinURL+coinAddress+"?format=jsonp",
        dataType: "jsonp",
        jsonpCallback: 'jsonp',
        success: function(data) {
           $('#displayRight').html(data+ " Resived");
        }
    });

    $(function() {
        makeCode();
    });

    var makeCode = function() {
        var text = document.getElementById('qrText').value;
        var rst = "";

        var addPoint = function(t) {
            rst +=
                "<div class='" +
                    (t ? "qrTrue" : "qrFalse") +
                    "'> </div>";
        };

        var newLine = function() { rst += "<br/>"; }

        var code = qrencode.encodeString(text, 0,
            qrencode.QR_ECLEVEL_L,
            qrencode.QR_MODE_8, true);

        var i;
        var j;

        for ( i = 0; i < 2; i++ ) {
            for ( j = 0; j < code.length; j++ ) addPoint(false);
            newLine();
        }

        for ( j = 0; j < code.length; j++ ) {
            addPoint(false);
            addPoint(false);
            for ( i = 0; i < code.length; i++ )
                addPoint(code[i][j]);
            addPoint(false);
            addPoint(false);
            newLine();
        }
        for ( i = 0; i < 2; i++ ) {
            for ( j = 0; j < code.length; j++ ) addPoint(false);
            newLine();
        }
        $(".qrCode").html(rst);
    };
});
