<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import Autocomplete from '@smui-extra/autocomplete';
    import CharacterCounter from '@smui/textfield/character-counter';
    import Button, { Label } from '@smui/button';
    import { projectStore } from '../../stores/project_store';

    let availableLanguages = ['FR', 'EN', 'ES', 'GR'];
   
    let projectName = '';
    let username = '';
    let projectLanguage = '';
    let projectDescription = '';
    let game = undefined;
    $: projectUid = username + '.' + projectName.split(' ').join('_').toLowerCase();
    $: gameDisplayName = game ? game.displayName : 'No game selected...';

    $: isProjectNameValid = projectName.length > 0;
    $: isUsernameValid = username.length > 0;
    $: isProjectLanguageValid = projectLanguage !== undefined && projectLanguage.length > 0;
    $: isGameValid = game !== undefined && game.length > 0;
    $: isProjectValid = () => {
        return isProjectNameValid && isUsernameValid && isProjectLanguageValid && isGameValid;
    }

    function createProject() {
        projectStore.set({
            meta: {
                uid: projectUid,
                name: projectName,
                language: projectLanguage,
                description: projectDescription,
                created: new Date(),
                updated: new Date(),
                author: username,
                game: game
            },
            data: {
                isCategory: true,
                data: {}
            }
        });
        alert('Project created!');
    }

    function chooseGame() {
        console.log('Choosing game');
    }
  </script>

<main>
    <h1>Create a new project</h1>

    <div class="form">
        <Textfield disabled bind:value={projectUid} label="uid" style="width: 100%;">
            <HelperText slot="helper">Your unique name, it must not collide with someone else project name. You cannot change it later.</HelperText>
        </Textfield>
        <Textfield bind:value={projectName} label="Display Name" style="width: 100%;">
            <HelperText slot="helper">A name for your project that will be displayed.</HelperText>
        </Textfield>
        <Textfield bind:value={username} label="username" style="width: 100%;">
            <HelperText slot="helper">Your username.</HelperText>
        </Textfield>
        <Autocomplete options={availableLanguages} bind:value={projectLanguage} label="Language" />
        <br/>
        <br/>
        <Textfield textarea input$maxlength={100} bind:value={projectDescription} label="Description" style="width: 100%;">
            <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
            <HelperText slot="helper">A short description of your translation package.</HelperText>
        </Textfield>
        <div class="game-explorer">
            <Button on:click={chooseGame} variant="unelevated">
                <Label>Choose a game</Label>
            </Button>
            <div class="mdc-typography--body1"><p>{gameDisplayName}</p></div>
        </div>
    </div>
    <Button on:click={createProject} variant="unelevated" disabled={!isProjectValid()}>
        <Label>Create Project</Label>
    </Button>
    
</main>

<style>
    main {
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .form {
        width: 35rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        
    }

    .game-explorer {
        width: 25rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex: 1;
    }

    .game-explorer p {
        padding-left: 20px;
    }

    @media (max-width: 640px) {

        .form {
            width: 15rem;
        }


    }
</style>