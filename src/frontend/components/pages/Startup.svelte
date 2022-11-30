<script lang="ts">
    import Button, { Label, Icon } from '@smui/button';

    function create_project() {
        console.log("create project");
    }

    function open_project() {
        console.log("open project");
    }
  </script>

<main>
    <div class="title">
        <h1>BoxTranslator</h1>
        <p>You don't have any project yet. Create a new project or import a new one by clickling the buttons below.</p>
    </div>
    <div class="buttons">
        <div class="button">
            <Button on:click={create_project} variant="unelevated" class="button-shaped-round">
                <Icon class="material-icons">add</Icon>
                <Label>New Project</Label>
            </Button>
        </div>
        <div class="button">
            <Button on:click={open_project} variant="unelevated" class="button-shaped-round">
                <Icon class="material-icons">download</Icon>
                <Label>Open Project</Label>
            </Button>
        </div>
    </div>
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