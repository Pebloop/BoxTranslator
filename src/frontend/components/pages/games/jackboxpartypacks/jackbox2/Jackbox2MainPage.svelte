<script lang="ts">
    import Drawer, { AppContent, Content } from '@smui/drawer';
    import List, { Item, Text } from '@smui/list';
    import TJPP1General from "./TJPP1General.svelte";

    let clicked = 'nothing yet';
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <h1 class="mdc-typography--headline1">My project</h1>
                <h2 class="mdc-typography--caption">Jackbox Party Pack</h2>
                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'General')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1.png" alt="" />
                            <p>General</p>
                        </div>
                    </Text>
                </Item>

                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'YDKJ2015')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1/YDKJ.png" alt="" />
                            <p>You Don't Know Jack</p>
                        </div>
                    </Text>
                </Item>

                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'Drawful')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1/Drawful.png" alt="" />
                            <p>Drawful</p>
                        </div>
                    </Text>
                </Item>

                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'WordSpud')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1/Wordspud.png" alt="" />
                            <p>Word Spud</p>
                        </div>
                    </Text>
                </Item>

                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'Lie Swatter')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1/Lie_swatter.png" alt="" />
                            <p>Lie Swatter</p>
                        </div>
                    </Text>
                </Item>

                <Item
                        href="javascript:void(0)"
                        on:click={() => (clicked = 'Fibbage XL')}
                >
                    <Text>
                        <div class="item">
                            <img src="res/games/tjpp1/Fibbage_xl.png" alt="" />
                            <p>Fibbage XL</p>
                        </div>
                    </Text>
                </Item>

            </List>
        </Content>
    </Drawer>

    <AppContent class="app-content">
        <main class="main-content">
            {#if clicked === 'General'}
                <TJPP1General />
            {/if}
        </main>
    </AppContent>
</div>

<style>
    .drawer-container {
        position: relative;
        display: flex;
        /*var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));*/
        overflow: hidden;
        z-index: 0;
        width: 100%;
        height: 100%;
        align-self: center;
        justify-self: center;
    }

    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }

    .main-content {
        overflow: auto;
        padding: 16px;
        height: 100%;
        box-sizing: border-box;
    }

    .item {
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    img {
        width: 32px;
        height: 32px;
        margin: 0 16px 0 0;
    }
</style>