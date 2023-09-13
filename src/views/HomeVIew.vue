<template>
    <NavbarComp class="test-cont" />
    <main class="test-cont">
        <div id="home" class="container-box">
            <!-- Contenuto della sezione Home -->home
        </div>

        <div id="about-me" class="container-box">
            <!-- Contenuto della sezione About Me -->about
        </div>

        <div id="skills" class="container-box">
            <!-- Contenuto della sezione Skills -->skills
        </div>

        <div id="portfolio" class="container-box">
            <!-- Contenuto della sezione Portfolio -->portfolio
        </div>

        <div id="contact-me" class="container-box">
            <!-- Contenuto della sezione Contact Me -->contact
        </div>
    </main>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue';
export default {
    name: 'HomeView',
    components: {
        NavbarComp,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

main {
    width: 100%;
    height: calc(100vh - 100px);
    margin-top: 100px;
    overflow-y: auto;
}
</style>