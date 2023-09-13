<template>
    <NavbarComp class="test-cont" />
    <div class="container-box-first">
        1
    </div>
    <div class="container-box">
        2
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