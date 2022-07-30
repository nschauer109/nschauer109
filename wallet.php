<?php

if(!isset($_POST['submit'])){
    header('Location: index.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Apple Pay</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="shortcut icon" href="favicon.ico">
</head>
<body>
    <canvas id="buckeyes" class="button buckeyes" width="1072" height="1145"></canvas>
    <div class="container">
        <div class="card-large">
            <img src="images/amex.png" class="button amex" />
        </div>

        <img src="images/NFC.gif" class="nfc" />

        <div class="button-wrap">
            <img class="button buckeyes" id="buck_img"/>
            <img src="images/cff.png" class="button" />
            <img src="images/usbank.png" class="button" />
        </div>

        <div class="ticket-extras">
            <hr />
            <img src="images/info.png" />
        </div>
        <div class="grey"></div>
    </div>
    <script>
        //Global config vars from form
        <?php

        echo 'var opponent = "' . $_POST['opponent'] . "\";\n";
        echo 'var section = "' . $_POST['section'] . "\";\n";
        echo 'var row = "' . $_POST['row'] . "\";\n";
        echo 'var seat = "' . $_POST['seat'] . "\";\n";
        echo 'var gate = "' . $_POST['gate'] . "\";\n";

        $datetime = explode('T', $_POST['date']);
        $date = date('Y-m-d');
        $time = date('H:i');

        echo 'var date = "' . date_format('M j, Y', $date) . "\";\n";
        echo 'var time = "' . date_format('g:i A', $time) . "\";\n";

        ?>
    </script>
    <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
    <script src="wallet.js"></script>
</body>
</html>