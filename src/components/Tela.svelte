<script lang="ts">
	export let valor: string;

	$: tamanhoFonte = valor.length > 26 ? 'pequena' : `s-${valor.length}`;
</script>

<div class={`tela ${tamanhoFonte}`}>
	<span>
		{valor}
	</span>
</div>

<style>
	.tela {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
		padding: 0px 5px;
		font-size: 1.7rem;
		background-color: aliceblue;
		overflow: hidden;
		margin: 2px 1px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}

	.s-16 {
		font-size: 1.5rem;
	}
	.s-17 {
		font-size: 1.45rem;
	}
	.s-18 {
		font-size: 1.4rem;
	}
	.s-19 {
		font-size: 1.35rem;
	}
	.s-20 {
		font-size: 1.3rem;
	}
	.s-21 {
		font-size: 1.25rem;
	}
	.s-22 {
		font-size: 1.18rem;
	}
	.s-23 {
		font-size: 1.13rem;
	}
	.s-24 {
		font-size: 1.07rem;
	}
	.s-25 {
		font-size: 1.01rem;
	}
	.s-26 {
		font-size: 0.95rem;
	}
	.pequena {
		font-size: 0.7rem;
	}
</style>
