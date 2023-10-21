<script lang="ts">
	export let vertical: boolean = false;
	export let horizontal: boolean = false;
</script>

<div class="linha" class:vertical class:horizontal>
	<slot />
</div>

<style>
	.linha {
		display: flex;
	}

	.vertical {
		flex-direction: column;
	}

	.horizontal {
		flex-direction: row;
	}
</style>
