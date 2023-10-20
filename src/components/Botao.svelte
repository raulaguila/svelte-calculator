<script lang="ts">
	export let texto: string;
	export let duplo: boolean = false;
	export let operacao: boolean = false;
	export let destaque: boolean = false;
	export let disable: boolean = false;
	export let onClick: (valor: string) => void = () => {};
</script>

<button
	class="botao"
	on:click={() => onClick(texto)}
	disabled={disable}
	class:duplo
	class:operacao
	class:destaque
	class:disable
>
	{texto}
</button>

<style>
	.botao {
		height: 3rem;
		margin: 0;
		border: 1px solid var(--cor-fundo);
		flex-basis: 25%;
		font-size: 1.3rem;
	}

	.duplo {
		flex-basis: 50%;
	}

	.operacao {
		background-color: orange;
		color: white;
	}

	.destaque {
		background-color: red;
		color: white;
	}

	.disable {
		background-color: gray;
	}
</style>
