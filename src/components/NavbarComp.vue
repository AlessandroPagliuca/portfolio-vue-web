<template>
    <header class="container-fluid test-cont">
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <a class="navbar-brand" href="#">alepagdev</a>
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="['collapse', 'navbar-collapse', { 'show': isNavbarOpen }]" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portofolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'NavbarComp',
    data() {
        return {
            isNavbarOpen: false, // Variabile di stato per il menu a tendina
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen; // Inverte lo stato del menu a tendina
        },
    },
};
</script>
  
<style lang="scss" scoped>
header {

    nav {
        max-height: 220px;
    }
}
</style>
  