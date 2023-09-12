<template>
    <NavbarComp />
    <div class="container test-cont d-flex justify-content-center align-items-center">
        <div class="box">
            <h3>Welcome to my world</h3>
            <p class="">I'm Alessandro a Jr. Full Stack Web Developer from Italy</p>
        </div>
        <div class="box d-flex justify-content-center">right</div>
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
.container-wrap {
    width: 100%;
    height: 100vh;
}

.box {
    width: calc(100% / 2);
    height: 500px;
}
</style>