<script lang="ts">
    import Button, { Label, Icon } from '@smui/button';
    import {pageStore} from "../../stores/page_store";
    import {metaProjectsStore} from "../../stores/meta_projects_store";
    import type {MetaProject} from "../../models/meta_project";
    import bind from '../../bindings/main.js';

    function create_project() {
        pageStore.set("create-project");
    }

    function import_project() {
        console.log("import project");
    }

    function open_project(project: MetaProject) {
        bind.load_project(project);
        pageStore.set("game");
    }

    let metaProjects: MetaProject[] = [];
    metaProjectsStore.subscribe((metaProjects_) => {
        metaProjects = metaProjects_ as MetaProject[];
    });

    $: hasProjects = metaProjects.length > 0;
  </script>

<main>
    <div class="title">
        <h1>BoxTranslator</h1>
        {#if !hasProjects}
            <p>You don't have any project yet. Create a new project or import a new one by clickling the buttons below.</p>
        {/if}
    </div>
    {#if hasProjects}
    <div class="projects">
        {#each metaProjects as metaProject}
            <div class="project">
                <h2>{metaProject.name}</h2>
                <p>{metaProject.description}</p>
                <div class="actions">
                    <Button on:click={() => open_project(metaProject)}>
                        <Label>Edit</Label>
                    </Button>
                    <Button on:click={() => pageStore.set("game")}>
                        <Label>Delete</Label>
                    </Button>
                </div>
            </div>
        {/each}
    </div>
    {:else}
        <div class="buttons">
            <div class="button">
                <Button on:click={create_project} variant="unelevated" class="button-shaped-round">
                    <Icon class="material-icons">add</Icon>
                    <Label>New Project</Label>
                </Button>
            </div>
            <div class="button">
                <Button on:click={import_project} variant="unelevated" class="button-shaped-round">
                    <Icon class="material-icons">download</Icon>
                    <Label>Import Project</Label>
                </Button>
            </div>
        </div>
    {/if}
</main>

<style>

main {
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
}

.buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    padding: 2%;
    width: 80%;
}

.button {
    margin-top: 0;
    margin-left: 3%;
    margin-right: 3%;
}

</style>