<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <h1>Operações Matemáticas - Média Aluno</h1>
    <script>
        var nome
        let n1, n2, media
        
        nome = prompt("Digite o nome do aluno: ");
       
        n1 = parseFloat(prompt("Digite a nota da prova: "));

        n2 = parseFloat(prompt("Digite a nota do trabalho: "));

        media=(n1+n2)/2;
        
        document.write("<br> Nome do aluno: " + nome);

        document.write("<br>Média do aluno: (" +n1+ " + " +n2+ ") ÷ 2 = " + media);

    </script>
    
</body>
</html>