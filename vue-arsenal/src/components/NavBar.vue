<template >
    <div id="nav-bar">
        <img src="../assets/arsenal-logo.svg" alt="Arsenal Logo">
        <ul class="nav-list" ref="nav" v-show="!mobile">
            <NavButton text="Home" />
            <NavButton text="Matches" />
            <NavButton text="Players" />
            <NavButton text="Form" />
            <NavButton text="API" />
        </ul>
        <HamburgerButton v-show="mobile" @click="toggleMobileNav" />
        <transition name="mobile-nav">
            <ul class="nav-list active" v-show="mobileNav">
                <NavButton text="Home" />
                <NavButton text="Matches" />
                <NavButton text="Players" />
                <NavButton text="Form" />
                <NavButton text="API" />
            </ul>
        </transition>
    </div>
</template>

<script>
import NavButton from './Nav/NavButton.vue'
import HamburgerButton from './Nav/HamburgerButton.vue'

export default {
    props: [],
    data() {
        return {
            mobile: true,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },  
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 700) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    },
    components: { NavButton, HamburgerButton },
}
</script>

<style>
    #nav-bar {
        width: 100%;
        height: 100px;
        border-bottom: 5px solid rgb(156, 130, 74);
        background-color: rgb(219, 0, 7);
        display: inline-block;
        position: fixed;
        z-index: 10;
        top: 0;
    }

    #nav-bar img {
        height: 120%;
        width: auto;
        position: relative;
    }
    ul {
        margin: 0 20px;
        padding: 5px;
        height: max-content;
        padding: 0;
        display: inline-flex;
        align-items: center;
        position: relative;
        top: -60px;
    }
    
    ul.nav-list.active {
        position: fixed;
        margin-right: 0;
        right: 0;
        top: 100px;
        border-left: 2px solid rgb(156, 130, 74);
        border-bottom: 2px solid rgb(156, 130, 74);
        border-right: 2px solid rgb(156, 130, 74);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height: auto;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        width: 300px;
        background: white;
    }
    ul.nav-list.active li {
        margin: 10px auto;
    }
    ul.nav-list.active li > a {
        text-decoration: none;
        text-align: center;
        padding: 5px 8px;
        background-color: white;
        border: 3px solid white;
        font-size: 20px;
        color: black;
        border-radius: 2px;
        transition-duration: 0.2s;
    }

    ul.nav-list.active li > a:hover {
        background-color:rgb(240, 240, 240);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-radius: 4px;
        transition-duration: 0.2s;
    }

    ul.nav-list.active li > a:active {
        background-color: rgb(6, 54, 114);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
    }    
</style>