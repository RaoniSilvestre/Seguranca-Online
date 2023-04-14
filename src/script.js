
$(function () {
    $("#button").on('click',function () {
        
        //Limpando ocorrências anteriores
        $("#output").text('')
        // Base de dados das palavras erradas
        const palavrasErradas = ['aborto', 'anal', 'ânus', 'bunda', 'ass-filho da puta', 'asses', 'idiota', 'idiotas', 'saco de bola', 'bolas', 'desgraçado', 'bellend', 'bestial', 'bestialidade', 'cadela', 'cadelas', 'putaria', 'sangrento', 'boquete', 'bollok', 'peitos', 'buceta', 'vagabundo', 'comedor de tapetes', 'fenda', 'cipa', 'clitóris', 'galo', 'otário', 'galos', 'coon', 'porcaria', 'porra', 'gozada', 'cunillingus', 'boceta', 'droga', 'pinto', 'dildo', 'dildos', 'dink', 'dog-filho da puta', 'duche', 'sapatona', 'ejacular', 'ejaculado', 'ejacula', 'ejaculação', 'bicha', 'fagging', 'bichas', 'fanny', 'felching', 'felação', 'mesa', 'fodido', 'puta', 'merdas', 'fode', 'empacotador de fudge', 'maldito', 'inferno', 'hore', 'com tesão', 'bate uma', 'kock', 'lábios', 'luxúria', 'cobiçoso', 'masoquista', 'masturbar', 'filho da puta', 'nazista', 'negro', 'niggers', 'orgasim', 'orgasmo', 'orgasmos', 'pau', 'pênis', 'xixi', 'puto', 'pisser', 'mijar', 'mijando', 'não me chateies', 'cocô', 'pornô', 'porno', 'pornografia', 'pica', 'picadas', 'pube', 'bichanos', 'bichano', 'estupro',
        'estuprador', 'reto', 'retardar', 'rimming', 'sádico', 'aparafusar', 'escroto', 'sêmen', 'sexo', 'trepada', 'transando', 'transsexual', 'merda', 'shite', 'calçado', 'cagando', 'skank', 'vagabunda', 'vadias', 'smegma', 'sujeira', 'arrebatar', 'spac', 'coragem', 'testículo', 'peituda', 'tetas', 'titt', 'vagina', 'viagra', 'vulva', 'wang', 'punheta', 'prostituta']

        // Base de dados das palavras impróprias;
        const palavrasImproprias = palavrasErradas
        console.log(palavrasImproprias)
        // Input de texto;
        const textoCru = $('#textoInput').val()
        console.log(textoCru)

        // Separando as palavras em um array;
        const textoSeparado = textoCru.split(' ');
        console.log(textoSeparado)

        // Variáveis para verificar a quantidade de palavras impróprias e quais são elas;
        var quantidadePalavrasImproprias = 0
        var elementosImpropriosEncontrados = []

        // Verificando cada palavra do meu texto de input e comparando com a base de dados;
        textoSeparado.forEach(elementoInput => {
            palavrasImproprias.forEach(elementoImproprio => {
                if (elementoInput == elementoImproprio) {
                    quantidadePalavrasImproprias += 1
                    elementosImpropriosEncontrados.push(elementoInput)
                }
            });
        });

        // Organizando os elementos impróprios em forma de string separadas por virgula e espaço;
        elementosImpropriosEncontrados = elementosImpropriosEncontrados.join(', ')

        //Variáveis de output
        var conclusão = ''
        var estilo = ''

        // Verificação de palavras impróprias 
        if (quantidadePalavrasImproprias == 0) {
            conclusão = ('Não há palavras impróprias no texto.')
            estilo = 'p-1 mt-2 rounded'
        } else {
            conclusão = ('Existem ' + quantidadePalavrasImproprias + ' palavras impróprias no texto, sendo elas: ' + elementosImpropriosEncontrados + '.')
            estilo = ' p-1 mt-2 rounded'
        }

        //output
        $("#output").append(conclusão);
        $("#output").addClass(estilo);

    });
});


