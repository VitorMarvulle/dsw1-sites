<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <h1>Operações Matemáticas -console.log</h1>
    <script>
        let n1, n2, soma, div, sub, mult

        n1 = parseInt(prompt("Digite o primeiro número: "));
        n2 = parseInt(prompt("Digite o segundo número: "));

        soma=n1+n2
        console.log("Soma           : " +n1+ " + " +n2+ " = " +soma);

        sub=n1-n2
        console.log("Subtração      : " +n1+ " - " +n2+ " = " +sub);

        div=n1/n2
        console.log("Divisão        : " +n1+ " ÷ " +n2+ " = " +div);

        mult=n1*n2
        console.log("Multiplicação  : " +n1+ " x " +n2+ " = " +mult);

    </script>
    
</body>
</html>