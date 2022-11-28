<script lang="ts">
    import Content from './components/Content.svelte';
    import Nav from './components/navbar/Nav.svelte';
</script>

<main>
	<div class="fixed">
		<Nav />
	</div>
	<div class="content">
		<Content />
	</div>
</main>

<style>
	
main {
	padding: 0;
	margin: 0;
	height: 100%;
	width: 100%;
	flex: content;
	flex-wrap: wrap;
}

.fixed {
	position: fixed;
	position: 0;
	top: 0;
	width: 100%;
}

.content {
	padding-top: 1em;
	height: 100%;
	width: 100%;
	flex: content;
	flex-wrap: wrap;
}

</style>