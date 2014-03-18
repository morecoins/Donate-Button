$(document).ready(function(){
        $('#donatebutton').click(function () {
                $('#qrcode').toggleClass('button-active-top');
                $('#addbot').toggleClass('button-active-bottom');
		$("#displayLeft").css("visibility", "visible");
		if ($("#displayRight").css("visibility") === "visible") {
			$("#displayRight").css("visibility", "hidden"); 
			$("#displayLeft").css("visibility", "hidden")} else {
				$("#displayRight").css("visibility", "visible"); 
				$("#displayLeft").css("visibility", "visible")};
                });
        });
