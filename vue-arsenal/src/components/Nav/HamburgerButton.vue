<template>
    <div class="hamburger-container">
        <div class="hamburger" ref="button" @click="handleClick">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive

            if(this.isActive) {
                this.$refs.button.classList.add('active')
                this.$emit('openMenu')
            } else {
                this.$refs.button.classList.remove('active')
                this.$emit('closeMenu')
            }
        }
    }
}
</script>

<style>
    .hamburger {
        display: inline-block;
        cursor: pointer;
    }

    .hamburger-container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 10px;
        height: 100px;
        top: 0;
        width: 50px;
    }

    .bar {
        display: block;
        width: 35px;
        height: 7px;
        margin: 6px auto;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.2s ease-in-out;
        background: white;
        border: 1px solid rgb(156, 130, 74);
        border-radius: 5px;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(15px) translateX(-7px) rotate(-90deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-15px) translateX(7px) rotate(-90deg);
    }
</style>