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
    <form action="wallet.php" method="post">
        <h1 class="header">
            Buckeyes Football<br />
            Apple Pay
        </h1>
        <br />

        <h2>Game Info</h2>
        Opponent: <input type="text" name="opponent" value="Notre Dame" size="15" /><br />
        Date: <input type="datetime-local" name="date" value="2022-09-03T12:00" step="60" /><br />
        <br />

        <h2>Seat Info</h2>
        Section: <input type="text" name="section" value="35A" size="3" /><br />
        Row: <input type="text" name="row" value="30" size="2" /><br />
        Seat: <input type="text" name="seat" value="5" size="2" /><br />
        Gate: <input type="text" name="gate" value="ENTER GATE 35" size="15" /><br />
        <br />

        <input type="submit" name="submit" value="Generate!" />
    </form>
</body>
</html>