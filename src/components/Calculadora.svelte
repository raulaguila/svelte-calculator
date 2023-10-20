<script lang="ts">
	import CalculadoraModel from '../model/CalculadoraModel';
	import Botao from './Botao.svelte';
	import Linha from './Linha.svelte';
	import Tela from './Tela.svelte';

	let calc = new CalculadoraModel();
	const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));
	const pontoDigitado = () => (calc = calc.pontoDigitado());
	const limpar = () => (calc = calc.limpar());
	const opracaoDigitada = (op: string) => (calc = calc.operacaoDigitada(op));
	const calcular = () => (calc = calc.calcular());
</script>

<div class="calculadora">
	<Tela valor={calc.valor} />
	<Linha>
		<Botao texto="AC" destaque onClick={limpar} />
		<Botao texto="+/-" disable />
		<Botao texto="%" disable />
		<Botao texto="/" operacao onClick={opracaoDigitada} />
	</Linha>
	<Linha>
		<Botao texto="7" onClick={numeroDigitado} />
		<Botao texto="8" onClick={numeroDigitado} />
		<Botao texto="9" onClick={numeroDigitado} />
		<Botao texto="*" operacao onClick={opracaoDigitada} />
	</Linha>
	<Linha>
		<Botao texto="4" onClick={numeroDigitado} />
		<Botao texto="5" onClick={numeroDigitado} />
		<Botao texto="6" onClick={numeroDigitado} />
		<Botao texto="+" operacao onClick={opracaoDigitada} />
	</Linha>
	<Linha>
		<Botao texto="1" onClick={numeroDigitado} />
		<Botao texto="2" onClick={numeroDigitado} />
		<Botao texto="3" onClick={numeroDigitado} />
		<Botao texto="-" operacao onClick={opracaoDigitada} />
	</Linha>
	<Linha>
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
