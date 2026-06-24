/* 
=========================================================
RELATÓRIO DE AUDITORIA DE BIG DATA (Paradigma Funcional)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Defina com suas palavras a diferença entre '.filter()' e '.map()'. O que o Array de saída tem de diferente do Array de entrada em cada caso?
R: O método .filter() serve para selecionar apenas os elementos que atendem a uma condição. O Array de saída possui menos elementos (ou a mesma quantidade), mas mantém os objetos originais. Já o método .map() transforma cada elemento do Array, gerando um novo Array com os valores modificados. O tamanho do Array permanece o mesmo, mas seu conteúdo pode ser diferente.

2. O que o método '.reduce()' faz? Por que ele precisa de um parâmetro extra (o "acumulador") que o map e filter não precisam?
R: O método .reduce() percorre todos os elementos do Array para gerar um único resultado final, como uma soma, média ou objeto consolidado. Ele utiliza um acumulador porque precisa armazenar e atualizar o resultado parcial a cada iteração até chegar ao valor final.

3. Por que o código usando "filter/map/reduce" (Declarativo) é considerado melhor no mercado de trabalho do que um monte de laços "for" (Imperativo)?
R: Porque o código fica mais limpo, legível e fácil de manter. Os métodos declarativos deixam clara a intenção da operação (filtrar, transformar ou reduzir dados), reduzindo a quantidade de linhas de código e diminuindo as chances de erros.
=========================================================
*/

class Voo {
    constructor(codigo, companhia, status, passageiros) {
        this.codigo = codigo;
        this.companhia = companhia;
        this.status = status;
        this.passageiros = passageiros;
    }
}


const frotaAtiva = [
    new Voo("G3-111", "Gol", "Confirmado", 150),
    new Voo("LA-222", "Latam", "Atrasado", 200),
    new Voo("AD-333", "Azul", "Atrasado", 120),
    new Voo("AF-444", "AirFrance", "No Solo", 300)
];

console.log("=== RELATÓRIO PROFISSIONAL ===");


const codigosAtrasados = frotaAtiva
    .filter(voo => voo.status === "Atrasado")
    .map(voo => voo.codigo);

console.log("Voos Atrasados:", codigosAtrasados);


const totalPassageiros = frotaAtiva
    .reduce((acumulador, voo) => acumulador + voo.passageiros, 0);

console.log("Total de Passageiros voando:", totalPassageiros);