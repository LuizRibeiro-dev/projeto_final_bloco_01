import { Produto } from "./Produto";

export class AguaSemGas extends Produto{
    
    private _AguaS: string;

	constructor(id: number, nome: string, tipo: number, preco: number, AguaS: string) {
        super(id, nome, tipo, preco);
		this._AguaS = AguaS;
	}

	public get AguaS(): string {
		return this._AguaS;
	}

	public set AguaS(value: string) {
		this._AguaS = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nMarca da agua: ${this._AguaS}`);
    }
}