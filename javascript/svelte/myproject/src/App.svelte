<script>
	let firstName = 'Brad';
	let lastName = 'Traversy';
	let color = 'blue';

	$: name = firstName + ' ' + lastName

	const toggle = () => {
		color = color === 'blue' ? 'red' : 'blue'
	}
</script>

<main>
	<h1 style="color: {color}" >Hello {name}!</h1>
	<button on:click={toggle}>update color</button>
	<nav>
		<ul>
			<li>herman</li>
			<li>nelson</li>
			<li>mark</li>
			<li>apple</li>
		</ul>

	</nav>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
