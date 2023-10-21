const NAO_LIMPAR_TELA = false;
const LIMPAR_TELA = true;
const CALCULO_FEITO = true;
const CALCULO_NAO_FEITO = false;

export default class CalculadoraModel {
	#valor: string | null;
	#acumulador: number | null;
	#limparTela: boolean;
	#calculado: boolean;
	#operacao: string | null;

	constructor(
		valor: string | null = null,
		acumulador: number | null = null,
		limparTela: boolean = false,
		calculado: boolean = false,
		operacao: string | null = null
	) {
		this.#valor = valor;
		this.#acumulador = acumulador;
		this.#limparTela = limparTela;
		this.#calculado = calculado;
		this.#operacao = operacao;
	}

	get valor() {
		return this.#valor?.replace('.', ',') ?? '0';
	}

	numeroDigitado(novoValor: string) {
		let novoVal: string = this.#valor == '0' ? novoValor : this.#valor + novoValor;

		return new CalculadoraModel(
			this.#limparTela || !this.#valor || (this.#calculado && !this.#operacao)
				? novoValor
				: novoVal,
			this.#acumulador,
			NAO_LIMPAR_TELA,
			CALCULO_NAO_FEITO,
			this.#operacao
		);
	}

	pontoDigitado() {
		let novoValor: string = !this.#valor ? '0.' : this.#valor + '.';

		return new CalculadoraModel(
			this.#valor?.includes('.') ? this.#valor : novoValor,
			this.#acumulador,
			NAO_LIMPAR_TELA,
			CALCULO_NAO_FEITO,
			this.#operacao
		);
	}

	limpar() {
		return new CalculadoraModel();
	}

	operacaoDigitada(proximaOperacao: string) {
		return this.calcular(proximaOperacao);
	}

	calcular(proximaOperacao: string | null = null) {
		const aux = this.#acumulador ? this.#acumulador : 0;
		
		const acumulador = !this.#operacao
			? parseFloat(this.#valor!)
			: eval(`${aux} ${this.#operacao} ${this.#valor}`);

		const valor = !this.#operacao ? this.#valor : `${acumulador}`;

		return new CalculadoraModel(
			valor,
			acumulador,
			proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA,
			CALCULO_FEITO,
			proximaOperacao
		);
	}

	inverterSinal() {
		const valor: string | null = !this.#valor ? this.#valor : `${parseFloat(this.#valor) * -1}`;

		return new CalculadoraModel(
			valor,
			this.#acumulador,
			NAO_LIMPAR_TELA,
			CALCULO_NAO_FEITO,
			this.#operacao
		);
	}

	porcentagem() {
		let novoValor = !this.#acumulador
			? `${parseFloat(this.#valor!) / 100}`
			: `${(parseFloat(this.#valor!) / 100) * this.#acumulador}`;

		let valor: string | null = !this.#valor ? this.#valor : novoValor;

		return new CalculadoraModel(
			valor,
			this.#acumulador,
			NAO_LIMPAR_TELA,
			CALCULO_NAO_FEITO,
			this.#operacao
		);
	}
}
