        $(function() {
            makeCode();
            $("#genButton").click(function() { makeCode(); });
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

