<script>
    import Startup from "Startup.svelte";
	import CreateProjectPage from "./CreateProjectPage.svelte";
    import Jackbox1MainPage from "./games/jackboxpartypacks/jackbox1/Jackbox1MainPage.svelte";
    import {pageStore} from "../../stores/page_store";
    import Game from "./Game.svelte";

    let page = 'startup'
    pageStore.subscribe(p => page = p);


</script>

<main>
    {#if page === "startup"}
        <Startup />
    {:else if page === 'create-project'}
        <CreateProjectPage />
    {:else if page === 'game'}
        <Game />
    {/if}
</main>

<style>


main {
		padding: 0;
		max-width: 360px;
		margin: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
        width: 100%;
        height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>