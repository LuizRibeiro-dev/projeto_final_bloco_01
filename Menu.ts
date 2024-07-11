import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";


export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log("          CRISTALINAS - AGUA QUE MATA SUA SEDE                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
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
                    "\n\nCriar Produto\n\n", colors.reset);


                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);
   
                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong,
                    "\n\nConsultar Produtos - por Id\n\n", colors.reset);


                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);
    

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

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
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();