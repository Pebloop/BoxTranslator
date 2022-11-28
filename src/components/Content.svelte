<script>
    import Startup from "./pages/startup.svelte";


</script>

<main>
    <Startup />
</main>

<style>
	

main {
		padding: 0;
		max-width: 240px;
		margin: 0;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>