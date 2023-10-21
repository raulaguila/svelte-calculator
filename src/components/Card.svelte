<script lang="ts">
</script>

<div class="card">
	<slot />
</div>

<style>
	.card {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;

		background-color: steelblue;
		padding: 20px;

		border: 5px solid var(--cor-fundo);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: 10px 10px 10px 10px;
	}
</style>
