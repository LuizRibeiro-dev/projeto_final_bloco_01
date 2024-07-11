import { Produto } from "./Produto";

export class AguaComGas extends Produto{
    
    private _AguaC: string;

	constructor(id: number, nome: string, tipo: number, preco: number, AguaC: string) {
        super(id, nome, tipo, preco);
		this._AguaC = AguaC;
	}

	public get AguaC(): string {
		return this._AguaC;
	}

	public set AguaC(value: string) {
		this._AguaC = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nMarca da agua: ${this._AguaC}`);
    }
}