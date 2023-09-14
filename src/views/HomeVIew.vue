<template>
    <NavbarComp />
    <main class="container-fluid smooth-scroll">
        <div id="home" class="container-box container test-cont">
            <!-- Contenuto della sezione Home -->home
        </div>

        <AboutmeComp />

        <SkillsComp />

        <PortfolioComp />

        <ContactComp />

    </main>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue';
import SkillsComp from '../components/SkillsComp.vue';
import AboutmeComp from '../components/AboutmeComp.vue';
import PortfolioComp from '../components/PortfolioComp.vue';
import ContactComp from '../components/ContactComp.vue';

export default {
    name: 'HomeView',
    components: {
        NavbarComp,
        SkillsComp,
        AboutmeComp,
        PortfolioComp,
        ContactComp,
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