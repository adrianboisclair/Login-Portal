<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>

        <script
                src="https://code.jquery.com/jquery-3.1.1.js"
                integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
                crossorigin="anonymous"></script>
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<!--<script>-->
<!--    // jQuery AJAX Call-->
<!--    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Los Angeles,US&APPID=0c45c8c08ae88f19023bf1f03db86488';-->
<!--    $.ajax({-->
<!--        url: url,-->
<!--        type: 'GET',-->
<!--        success: function(data) {-->
<!--        }-->
<!--    });-->
<!---->
<!--    // JavaScript AJAX / XMLHttpRequest-->
<!--    var xhr = new XMLHttpRequest();-->
<!--    xhr.onreadystatechange = function() {-->
<!--        if (this.readyState == 4 && this.status == 200) {-->
<!--            var data = JSON.parse(xhr.responseText);-->
<!--        }-->
<!--    };-->
<!--    xhr.open("GET", url, true);-->
<!--    xhr.send();-->
<!--</script>-->
<!--<script>-->
<!--    function Person(first, last, age, eyeColor) {-->
<!--        this.firstName = first;-->
<!--        this.lastName = last;-->
<!--        this.age = age;-->
<!--        this.eyeColor = eyeColor;-->
<!--    }-->
<!--    var myFather = new Person("John", "Doe", 50, "blue");-->
<!--    var myMother = new Person("Sally", "Rally", 48, "green");-->
<!--</script>-->
<!---->
<!--<script>-->
<!--    function Person(first, last, age, eyeColor) {-->
<!--        this.firstName = first;-->
<!--        this.lastName = last;-->
<!--        this.age = age;-->
<!--        this.eyeColor = eyeColor;-->
<!--    }-->
<!--    var myFather = new Person("John", "Doe", 50, "blue");-->
<!--    var myMother = new Person("Sally", "Rally", 48, "green");-->
<!---->
<!--    Person.prototype.sayName = function() {-->
<!--        return this.firstName;-->
<!--    };-->
<!---->
<!--</script>-->
    </body>
</html>
