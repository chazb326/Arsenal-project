<template >
    <div id="nav-bar">
        <img src="../assets/images/arsenal-logo.svg" alt="Arsenal Logo">
        <ul class="nav-list" ref="nav" v-show="!mobile">
            <router-link to="/" ><NavButton text="Home" /></router-link>
            <router-link to="/players"><NavButton text="Players" /></router-link>
            <router-link to="/form"><NavButton text="Form" /></router-link>
        </ul>
        <HamburgerButton v-show="mobile" @click="toggleMobileNav" :mobileNav="mobileNav"/>
        <transition name="mobile-nav">
            <ul class="nav-list active" v-show="mobileNav">
                <button id="clear-mobile-nav" @click="toggleMobileNav">X</button>
                <router-link to="/"><NavButton text="Home" @click="toggleMobileNav" /></router-link>
                <router-link to="/players"><NavButton text="Players" @click="toggleMobileNav" /></router-link>
                <router-link to="/form"><NavButton text="Form" @click="toggleMobileNav" /></router-link>
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
            windowWidth: null,
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
        box-shadow: rgba(6, 54, 114, 0.6) 0px 0px 8px 0px;
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
        top: 0px;
        border-left: 2px solid rgb(156, 130, 74);
        border-bottom: 2px solid rgb(156, 130, 74);
        border-right: 2px solid rgb(156, 130, 74);
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        width: 240px;
        background: white;
    }
    ul.nav-list.active li {
        margin: 5px auto;
    }
    ul.nav-list.active li > button {
        text-decoration: none;
        text-align: center;
        padding: 5px 40px;
        background-color: white;
        border: 3px solid white;
        font-size: 20px;
        color: black;
        border-radius: 2px;
        transition-duration: 0.2s;
    }

    ul.nav-list.active li > button:hover {
        background-color:rgb(240, 240, 240);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-top: 3px solid rgb(240, 240, 240);
        border-bottom: 3px solid rgb(240, 240, 240);
        border-radius: 4px;
        transition-duration: 0.2s;
    }

    ul.nav-list.active li > button:active {
        background-color: rgb(6, 54, 114);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-top: 3px solid rgb(6, 54, 114);
        border-bottom: 3px solid rgb(6, 54, 114);
    }
    button#clear-mobile-nav {
        position: absolute;
        right: 0;
        top: 2px;
    }
</style>