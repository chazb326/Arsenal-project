<template>
    <div class="player-card">
        <div class="number" id="number">
            <p>{{ player.number }}</p>
        </div>
        <div class="name">
            <p id="firstName">{{ player.firstName }}</p>
            <p id="lastName">{{ player.lastName }}</p>
        </div>
        <div class="nation">
            <img :src="createFlagImgURL" alt="player nation flag">
            <p>{{ player.nation }}</p>
        </div>
        <div class="player-image">
            <img :src="createPlayerImgURL" alt="player picture">
        </div>
    </div>
</template>

<script>
export default {
    props: ['player'],
    data() {
        return {}
    },
    methods: {},
    computed: {
        createPlayerImgURL() {
            if(this.player === null) {
                throw new Error('player object was null');
            }

            const fileName = `${this.player.firstName.toLowerCase()}-${this.player.lastName.toLowerCase()}`;
            return require(`../../assets/images/players/${fileName}.png`);
        },
        createFlagImgURL() {
            if(this.player === null) {
                throw new Error('player object was null');
            }
            
            let nation;
            if(this.player.nation.includes(' ')) {
                const arr = this.player.nation.split(' ');
                nation = arr.join('-').toLowerCase();
            } else {
                nation = this.player.nation.toLowerCase();
            }

            const fileName = `${nation}-flag`;
            return require(`../../assets/images/flags/${fileName}.png`);
        }
    }
}
</script>

<style scoped>
    div.player-card {
        margin: 10px auto;
        padding: 4px;
        width: fit-content;
        height: fit-content;
        color: white;
        background: white;
        border-radius: 6px;
        font-weight: 600;
        display: grid;
        grid-template-columns: 75px auto 100px;
        grid-template-rows: 225px 75px;
        box-shadow: rgba(6, 54, 114, 0.6) 0px 2px 8px 0px;
    }
    div.player-card:hover {
        cursor: pointer;
        box-shadow: rgba(6, 54, 114, 0.6) 0px 4px 16px 0px;
    }
    div.player-card:active {
        background: lightgray;
    }
    div.player-card:hover p#lastName {
        color: rgb(219, 0, 7);
    }
    div.number {
        display: flex;
        grid-column: 3 / span 1;
        grid-row: 2 / span 1;
        align-content: center;
        justify-content: end;
    }
    div.number p {
        font-size: 70px;
        color: lightgray;
        position: relative;
        bottom: 2px;
        right: 6px;
    }
    div.name {
        display: flex;
        flex-direction: column;
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
        align-content: center;
        align-items: baseline;
    }
    div.name p#firstName {
        font-size: 18px;
        position: relative;
        top: 10px;
        left: 5px;
        color: darkgray;
    }
    div.name p#lastName {
        font-size: 40px;
        font-weight: 600;
        position: relative;
        left: 5px;
        color: black;
    }
    div.nation {
        display: flex;
        flex-direction: column;
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
        align-content: center;
        align-items: baseline;
    }
    div.nation img {
        position: relative;
        width: 35px;
        height: auto;
        border: 1px solid darkgray;
        left: 5px;
        top: 15px;
    }
    div.nation p {
        position: relative;
        left: 5px;
        top: 5px;
        color: darkgray;
    }
    div.player-image {
        grid-column: 1 / span 3;
        grid-row: 1 / span 1;
        display: flex;
        align-content: center;
        align-items: center;
    }
    div.player-image img {
        width: auto;
        height: 100%;
        border-radius: 6px;
    }

    p {
        font-size: 12px;
        margin: auto 0;
    }
</style>