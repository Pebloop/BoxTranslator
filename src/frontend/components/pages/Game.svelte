<script>
    import {projectStore} from "../../stores/project_store";
    import Jackbox1MainPage from "./games/jackboxpartypacks/jackbox1/Jackbox1MainPage.svelte";
    import {Games} from "../../models/games";

    let game = undefined;
    projectStore.subscribe((project) => {
        if (project) {
            game = project.meta.game;
            console.log(game);
        }
    });
</script>

<main>
    {#if game === Games.TJPP1}
        <Jackbox1MainPage />
    {/if}
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
</style>