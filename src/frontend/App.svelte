<script lang="ts">
    import Content from './components/pages/Content.svelte';
    import Nav from './components/navbar/Nav.svelte';
	import bind from './bindings/main.js';
	import {pageStore} from "./stores/page_store";

	bind.load_projects();
	pageStore.reset();
</script>

<main>
	<div class="fixed">
		<Nav />
	</div>
	<div class="content">
		<div class="empty"></div>
		<div class="fill">
			<Content />
		</div>
	</div>
</main>

<style>
	
.empty {
	height: 2em;
	width: 100%;
	padding: 0;
	margin: 0;
}

main {
	padding: 0;
	margin: 0;
	height: 100%;
	width: 100%;
	flex: content;
	flex-wrap: wrap;
	overflow: hidden;
}

.fixed {
	position: fixed;
	position: 0;
	top: 0;
	width: 100%;
	z-index: 10;
}

.content {
	margin: 0;
	padding: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.fill {
	flex: 1;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

</style>