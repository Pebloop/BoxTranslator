<script>
    import Startup from "Startup.svelte";
	import CreateProjectPage from "./CreateProjectPage.svelte";


</script>

<main>
    <!-- <Startup /> -->
	<CreateProjectPage />
</main>

<style>


main {
		padding: 0;
		max-width: 360px;
		margin: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>