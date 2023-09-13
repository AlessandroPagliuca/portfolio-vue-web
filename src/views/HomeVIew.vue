<template>
    <NavbarComp class="test-cont" />

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

    <div id="contact-me" class="container-box-bottom">
        <!-- Contenuto della sezione Contact Me -->contact
    </div>
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
</style>