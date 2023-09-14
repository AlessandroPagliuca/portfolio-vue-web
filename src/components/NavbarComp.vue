<template>
    <header class="d-flex align-items-center">
        <nav class="container navbar navbar-expand-lg">
            <a class="navbar-brand d-flex align-items-center" href="/#home">
                <img src="../../public/photo-profile.jpeg" alt="#" style="width: 80px;">
                <h2 class="ps-2">alepag<span>dev</span></h2>
            </a>
            <!-- Offcanvas -->
            <div :class="['offcanvas', 'offcanvas-end', { 'show': isNavbarOpen }]" id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel">
                <div class="offcanvas-header">
                    <h5>alepag<span>dev</span></h5>
                    <button type="button" class="btn text-reset offcanvas-title" id="offcanvasWithBackdropLabel"
                        @click="toggleNavbar" aria-label="Close">
                        <i class="fa-solid fa-x"></i>
                    </button>
                </div>
                <div class="offcanvas-body justify-content-end">
                    <!-- generare con route-link i link delle pagine -->
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="link in menu" :key="link.routeName">
                            <a :href="'#' + link.routeName" class="nav-link mx-2" active-class="active">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Button hamburger menu -->
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="fa-solid fa-bars"></span>
            </button>
            <!-- Aggiungi l'elemento per il backdrop -->
            <div class="offcanvas-backdrop" :class="{ 'show': isNavbarOpen }" @click="toggleNavbar"></div>

        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'NavbarComp',
    data() {
        return {
            isNavbarOpen: false, // Variabile di stato per il menu a tendina
            menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About me',
                    routeName: 'about-me'
                },
                {
                    label: 'Skills',
                    routeName: 'skills'
                },
                {
                    label: 'Portfolio',
                    routeName: 'portfolio'
                },
                {
                    label: 'Contact me',
                    routeName: 'contact-me'
                },
            ],
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
@use '../assets/partials/variables' as *;

header {
    width: 100%;
    height: 100px;
    padding: 10px;
    position: fixed;
    z-index: 1000;
    //background-color: $black;

    nav {
        a {
            img {
                width: 80px;
                border-radius: 50%;
                border: 3px solid $white;
            }

            h2 {
                color: $white !important;
                transition: ease-in-out 0.3s;
            }

            &:hover,
            &:hover img,
            &:hover h2,
            &:hover span {
                color: $grey !important;
                transition: ease-in-out 0.5s;

                span {
                    color: $green !important;
                    transition: ease-in-out 0.5s;
                }

                img {
                    border-color: $green !important;
                    transition: ease-in-out 0.5s;
                }
            }
        }

        ul {
            li {
                a {
                    color: $white !important;

                    &:hover {
                        color: $green !important;
                    }
                }
            }
        }
    }
}

.collapse:not(.show) {
    display: none;
    max-width: fit-content !important;
}

//classe active per gestire la visualizzazione del link attivo della pagina corrente
.active {
    //border-bottom: $green 3px inset;
    color: $green !important;


}

.fa-bars {
    font-size: 40px;
    color: $white !important;
    transition: ease-in-out 0.3s;

    &:hover {
        font-size: 42px;
        color: $green !important;
        transition: ease-in-out 0.5s;
    }
}

//Stile offcanvas
.offcanvas {
    background-color: $black !important;
    transition: ease-in-out 0.3s;

    h5 {
        color: $white !important;
        font-size: 28px;

        span {
            color: $green !important;
        }
    }

    button {
        .fa-x {
            color: $white !important;
            transition: ease-in-out 0.3s;
            font-size: 40px;

        }

        &:hover,
        &:hover .fa-x {
            font-size: 42px;
            transition: ease-in-out 0.5s;
            color: $green !important;
        }
    }

}

.offcanvas-header {
    height: 100px;
}

/* Stile del backdrop */
.offcanvas-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* Colore e opacità dello sfondo */
    z-index: 1040;
    /* L'indice Z deve essere superiore all'offcanvas */
    display: none;
}

.offcanvas-backdrop.show {
    display: block;
}
</style>
  