<script lang="ts">
	import CalculadoraModel from '../model/CalculadoraModel';
	import Botao from './Botao.svelte';
	import Linha from './Linha.svelte';
	import Tela from './Tela.svelte';

	let calc = new CalculadoraModel();
	const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));
	const operacaoDigitada = (op: string) => (calc = calc.operacaoDigitada(op));
	const pontoDigitado = () => (calc = calc.pontoDigitado());
	const limpar = () => (calc = calc.limpar());
	const calcular = () => (calc = calc.calcular());
	const inverterSinal = () => (calc = calc.inverterSinal());
	const porcentagem = () => (calc = calc.porcentagem());
</script>

<div class="calculadora">
	<Tela valor={calc.valor} />
	<Linha horizontal>
		<Botao texto="AC" destaque onClick={limpar} />
		<Botao texto="+/-" onClick={inverterSinal} />
		<Botao texto="%" onClick={porcentagem} />
		<Botao texto="/" operacao onClick={operacaoDigitada} />
	</Linha>
	<Linha horizontal>
		<Botao texto="7" onClick={numeroDigitado} />
		<Botao texto="8" onClick={numeroDigitado} />
		<Botao texto="9" onClick={numeroDigitado} />
		<Botao texto="*" operacao onClick={operacaoDigitada} />
	</Linha>
	<Linha horizontal>
		<Botao texto="4" onClick={numeroDigitado} />
		<Botao texto="5" onClick={numeroDigitado} />
		<Botao texto="6" onClick={numeroDigitado} />
		<Botao texto="+" operacao onClick={operacaoDigitada} />
	</Linha>
	<Linha horizontal>
		<Botao texto="1" onClick={numeroDigitado} />
		<Botao texto="2" onClick={numeroDigitado} />
		<Botao texto="3" onClick={numeroDigitado} />
		<Botao texto="-" operacao onClick={operacaoDigitada} />
	</Linha>
	<Linha horizontal>
		<Botao texto="0" duplo onClick={numeroDigitado} />
		<Botao texto="," onClick={pontoDigitado} />
		<Botao texto="=" destaque onClick={calcular} />
	</Linha>
</div>

<style>
	.calculadora {
		background-color: var(--cor-fundo);
		height: 350px;
		width: 250px;
		padding: 10px;
		border-radius: 10px;

		display: flex;
		flex-direction: column;
	}
</style>
