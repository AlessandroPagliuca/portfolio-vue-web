<template>
    <NavbarComp />
    <div class="container-wrap container-fluid d-flex justify-content-center align-items-center">
        <div class="box d-flex flex-column justify-content-start">
            <div class="row gap-0">
                <div class="col-12">
                    <p class="display-6">Welcome to my world</p>
                    <h1>I'm Alessandro a <span>Jr. Full Stack Web Developer</span></h1>
                </div>
                <div class="col-12">
                    <div class="d-flex justify-content-start">
                        <span class="pe-3 py-3">
                            <a href="#">
                                <i class="fa-brands fa-github"></i>
                                <span class="ps-2">Github</span>
                            </a>
                        </span>
                        <span class="py-3">
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                                <span class="ps-2">LinkedIn</span>
                            </a>
                        </span>

                    </div>
                </div>
            </div>

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
@use '../assets/partials/variables' as *;

h1 {
    span {
        color: $green;
    }
}

.container-wrap {
    width: 100%;
    height: calc(100vh - 110px);
}

.box {
    width: calc(100% / 2);
    height: 500px;
}

a {
    font-size: 25px;
    color: $white !important;
    transition: ease-in-out 0.3s;

    &:hover {
        color: $green !important;
        transition: ease-in-out 0.5s;
    }
}
</style>