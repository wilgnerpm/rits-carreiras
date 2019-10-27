<html>
    <body>
        <p>Olá, Wilgner</p>
        <p></p>
        @foreach($carreiras as $c)
                   <p>{{$c->carreira}}: {{$c->count}} novo(s) candidato(s)</p>
                    @endforeach
        <p></p>
        <p>Att, <br>
    Auto Rits!</p>
    </body>
</html>