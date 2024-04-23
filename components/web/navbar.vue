<template>
	<nav class="navbar bg-dark navbar-expand-lg py-3 border-body" data-bs-theme="dark">
		<div class="container">
			<div class="col">
				<a class="navbar-brand" href="#"><IconsMoneyflapLogo/></a>
				<ul class="navbar-nav d-inline-block">
					<li class="nav-item dropdown">
						<a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							English
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">French</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<button @click="toggleMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Menu">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }">
				<ul class="navbar-nav text-center">
					<li class="nav-item">
						<a class="nav-link text-white" aria-current="page" href="#">About Us</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#">Security</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#">Pricing</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#">Help Center</a>
					</li>
				</ul>
				<form class="ms-lg-auto d-block d-lg-none text-center">
				<button class="btn btn-primary btn-lg mt-3 mt-lg-0 ms-3" type="submit">Get Started</button>
				</form>
			</div>
			<form class="ms-lg-auto d-none d-lg-flex">
				<button class="btn btn-primary btn-lg ms-3" type="submit">Get Started</button>
			</form>
		</div>
	</nav>
</template>
  
<script>
export default {
	data() {
		return {
			isMenuOpen: false
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
};
</script>
  