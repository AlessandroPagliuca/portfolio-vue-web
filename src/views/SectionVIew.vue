<template>
    <!--Componente delle sezione header dove è contenuta la navbar e la funzionalità offcanvas-->
    <NavbarComp />
    <!--main per gestire in modo responsive le varie sezioni in essi presente con l'aggiunta della classe:smooth-scroll per la gestione di uno scroll più morbido-->
    <main class="container-fluid smooth-scroll">
        <!--Componente delle sezione Home-->
        <HomeComp />
        <!--Componente delle sezione About me-->
        <AboutmeComp />
        <!--Componente delle sezione Skills-->
        <SkillsComp />
        <!--Componente delle sezione Portfolio-->
        <PortfolioComp />
        <!--Componente delle sezione Contact me-->
        <ContactComp />
    </main>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue';
import HomeComp from '../components/HomeComp.vue';
import AboutmeComp from '../components/AboutmeComp.vue';
import SkillsComp from '../components/SkillsComp.vue';
import PortfolioComp from '../components/PortfolioComp.vue';
import ContactComp from '../components/ContactComp.vue';

export default {
    name: 'SectionView',
    components: {
        NavbarComp,
        HomeComp,
        AboutmeComp,
        SkillsComp,
        PortfolioComp,
        ContactComp,
    }
}
</script>

<style lang="scss" scoped>
main {
    width: 100%;
    height: calc(100vh - 100px);
    margin-top: 100px;
    overflow-y: auto;
}
</style>