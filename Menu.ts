import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { AguaComGas } from "./src/model/AguaComGas";
import { AguaSemGas } from "./src/model/AguaSemGas";
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, categoria, marca: string; 

    const tipoProduto = ['Agua c/ gas', 'Agua s/ gas']

    const produtos: ProdutoController = new ProdutoController()

    // Produto.cadastrarProduto(new AguaComGas(Produto.gerarId(),'Agua da Nestle', 1 , 5.00, 'Nestle'))
    // Produto.cadastrarProduto(new AguaComGas(Produto.gerarId(),'Agua da Danone', 1 , 4.50, 'Danone'))
    
    // Produto.cadastrarProduto(new AguaSemGas(Produto.gerarId(), 'Agua da Bonafont', 2, 4.00, 'Bonafont'));
    // Produto.cadastrarProduto(new AguaSemGas(Produto.gerarId(), 'Agua da Frescca', 2, 5.00, 'Frescca'));

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log("          CRISTALINAS - AGUA QUE MATA SUA SEDE                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Produto                        ");
        console.log("            2 - Listar todos os Produto             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            );
            console.log(colors.bg.blue, colors.fg.white , "Entre com a opção desejada: ",colors.bg.black, colors.fg.bluestrong);
            opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.bluestrong,
                "\nCRISTALINAS - AGUA QUE MATA SUA SEDE!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong,
                    "\n\nAdicionar Produto\n\n", colors.reset)
                    console.log("Digite o Nome do Produto: ")
                    nome = readlinesync.question("")
    
                    console.log("Digite o Tipo do Produto: ")
                    tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel: false}) + 1 
    
                    console.log("Digite o Preço do Produto: ")
                    preco = readlinesync.questionFloat("")
    
                    switch(tipo){
                        case 1:
                            console.log("Digite a marca: ")
                            categoria = readlinesync.question("")
    
                            produtos.cadastrarProduto(new AguaComGas(produtos.gerarId(), nome, tipo, preco, categoria)) 
    
                            break
                        case 2:
                            console.log("Digite a marca: ")
                            marca = readlinesync.question("")
    
                            produtos.cadastrarProduto( new AguaSemGas(produtos.gerarId(), nome, tipo, preco, marca))
    
                            break
    
                    }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.bluestrong,
                    "\n\nListar todos os Produto\n\n", colors.reset);
                    produtos.listarProdutos()
                keyPress()
                break;

            case 3:
                console.log(colors.fg.bluestrong,
                    "\n\nConsultar Produto - por Id\n\n", colors.reset);
                
                console.log("Digite o ID: ")
                id = readlinesync.questionInt("")
                produtos.consultarPorId(id)

                keyPress()
                break;

            case 4:
                console.log(colors.fg.bluestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);
     console.log("Digite o ID do Produto: ")
                id = readlinesync.questionInt("")

                let produto = produtos.buscarArray(id);

                if(produto !== null){
                    console.log("Digite o Nome do Produto: ")
                    nome = readlinesync.question("")
                    
                    tipo = produto.tipo;
    
                    console.log("Digite o Preço do Produto: ")
                    preco = readlinesync.questionFloat("")

                    switch(tipo){
                        case 1:
                            console.log("Digite a categoria: ")
                            categoria = readlinesync.question("")
    
                            produtos.atualizarProduto(new AguaComGas(id, nome, tipo, preco, categoria)) 
    
                            break
                        case 2:
                            console.log("Digite a marca: ")
                            marca = readlinesync.question("")
    
                            produtos.atualizarProduto( new AguaSemGas(id, nome, tipo, preco, marca))
    
                            break
    
                    }
                } else{
                    console.log(colors.fg.redstrong)
                    console.log("\n O produto não foi encontrado")
                    console.log(colors.reset)
                }


                keyPress()
                break;

            case 5:
                console.log(colors.fg.bluestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);
                console.log("Digite o ID do Produto que será deletado: ")
                id = readlinesync.questionInt("")

                produtos.deletarProduto(id)
                keyPress()
                break;

            default:
                console.log(colors.fg.bluestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Luiz Ribeiro - github.com/LuizRibeiro-dev");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();